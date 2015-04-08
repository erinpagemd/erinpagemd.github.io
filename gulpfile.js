var gulp = require('gulp');
var jade = require('gulp-jade');
var copy = require('gulp-copy');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');

//////////WATCH////////////////////////////////////
gulp.task('watch', function () {
  livereload.listen();
  watch('./app/**/*', function() {
    gulp.start('build');
  });
});
//////////SASS////////////////////////////////////
gulp.task('sass', function () {
  gulp.src('./app/**/*.scss')
    .pipe(sass())
    .on('error', console.error.bind(console))
    .pipe(gulp.dest('./public/'))
    .pipe(livereload());
});
//////////COPY////////////////////////////////////
gulp.task('copy', function () {
  gulp.src(['./app/**/*.js', './app/**/*.jpg', './app/**/*.jpeg', './app/**/*.png', './app/**/*.gif', './app/**/*.mp4', './app/**/*.json', './app/**/*.ico', './app/**/*.svg'])
  .pipe(copy('./public/', {prefix:1}))
});
//////////JADE////////////////////////////////////
gulp.task('jade', function() {
  gulp.src('./app/**/*.jade')
    .pipe(jade({pretty: true, doctype: 'html'}))
    .on('error', console.error.bind(console))
    .pipe(gulp.dest('./public/'))
    .pipe(livereload({start: true}));

});
//////////DEFAULT////////////////////////////////////
gulp.task('build', ['copy', 'jade', 'sass']);
gulp.task('default', ['build', 'watch']);
