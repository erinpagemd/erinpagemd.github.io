#!/bin/bash
set -e

# Add any ENV params that need to be passed to docker
envParameters="-e BUILD_NUMBER=${GO_PIPELINE_LABEL} \
  -e PERFORM_BUILD=${PERFORM_BUILD} \
  -e GIT_COMMIT=${GO_REVISION} \
  -e SAUCE_PARENT_TUNNEL=${SAUCE_PARENT_TUNNEL} \
  -e SAUCE_TUNNEL_IDENTIFIER=${SAUCE_TUNNEL_IDENTIFIER} \
  -e SAUCE_USERNAME=${SAUCE_USERNAME} \
  -e SAUCE_ACCESS_KEY=${SAUCE_ACCESS_KEY} \
  -e AWS_ACCESS_KEY_ID_BINARIES=${AWS_ACCESS_KEY_ID_BINARIES} \
  -e AWS_SECRET_ACCESS_KEY_BINARIES=${AWS_SECRET_ACCESS_KEY_BINARIES} \
  -e UID=$(id -u) \
  -e GID=$(id -g)"

IMAGE_NAME="csrt/csrt-frontend-build"  # Image name should be unique for your app
DOCKERFILE_NAME="Dockerfile-build"  # The dockerfile name in your repo for building your app

############################
# The lines below should not need to change, unless you are mounting something else into the container or
# have docker build file params (rare).
#
# NOTE: the dockerCommand below has a few volume mounts that may or may not apply to your app.
# we commonly mount in repo caches (ivy, sbt, maven, npm, etc) so that your build doesn't have to download the world again
# Depending on the type of your build, you may need to modify these mounts. Additionally, in order to run the make script
# locally, you will need to make sure your docker for mac client has exposed these volumes.
# Wherever they mount to, it's a good idea to make a soft link from that spot back to your personal dev cache, for example:
# `sudo ln -s ~/.sbt /opt/.sbt` will make a symbolic link from /opt/.sbt into your personal ~/.sbt folder allowing you to
# share the same cached downloads with docker that your dev env has already downloaded in the past.
#
# ***** NOTE: this one is customized for an Node build  *****
#
############################
function clean_up {
  trap - SIGINT SIGTERM EXIT
  echo "Cleaning up...";
  docker ps -a | grep ${IMAGE_NAME} | awk '{print $1}' | xargs docker kill || true;
  docker ps -a -f status=exited | grep ${IMAGE_NAME} | awk '{print $1}' | xargs docker rm || true;
  docker images -q --filter "dangling=true" | xargs docker rmi || true;
}
trap clean_up SIGINT SIGTERM EXIT

echo "Building Docker container for the build job ..."
NODE_VERSION=`cat .node-version`
docker build --build-arg NODE_VERSION=${NODE_VERSION} -f ${DOCKERFILE_NAME} -t ${IMAGE_NAME} .

BASEDIR=$(pwd)
dockerCommand="docker run -t \
 -v ${BASEDIR}/export:/opt/export \
 $envParameters \
 $IMAGE_NAME \
 /bin/bash pipeline.sh"

echo $dockerCommand     # Show the generated command to the user
eval $dockerCommand
clean_up
