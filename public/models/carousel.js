angular
.module('ErinApp')
.service('CarouselService', function (){
  var projects = [

    {
      name: "Music City Jams",
      stack: "Ruby, Rails, Bootstrap, Heroku, Postres, Rspec",
      brief: "NSS Back-End Rails Capstone",
      website: "http://musiccityjams.erinpagemd.com",
      repo: "https://github.com/erinpagemd/MusicCityJams",
      description: "RAILS CRUD app with one authentication state and two authoriztion states via Sorcery and CanCanCan. Image file loads with AWS S3 Buckets, carrierwave, and fog. Use of foreign key associations, Active Record objects. Created RESTful URI's with Rails, and user friendly URI's with friendly_id. Testing with Rspec, Faker, Fabricator. Model and integration tests. Creation of 'Gigs' by bands. Creation of 'Comments' by bands and fans. Postgresql database.",
      level: "This is the RAILS project for the Back-End portion of the NSS curriculum. We had been working on Rails for about a month when I started this project.",
      image: "assets/musiccityjams.png"
    },

    {
      name: "Cohort 8 Website",
      stack: "AngularJS, Gulp, Jade, Bootstrap, Git, Sass, Bootstrap Modals",
      brief: "Class Website for Nashville Software School Graduation",
      website: "http://cohort8.nashvillesoftwareschool.com",
      repo: "https://github.com/NSS-Cohort-8/nss-cohort-8.github.io",
      description: "I was project manager and primary developer for this website. We wanted something that would reflect our class and the experience we had at Nashville Software School. This was made with a template that I use for my Angular, Bootstap apps. Includes a contact form via simple-form, pictures taken by students of the class, professional headshots, color scheme to match Nashville Software School.",
      level: "This website was made just before we started our final projects for Nashville Software School.",
      image: "assets/cohort8.png"
    },


    {
      name: "Human or Robot",
      stack: "AngularJS, Gulp, Jade, Bootstrap, Git, Sass, Atom, Gitter, lodash",
      brief: "Hack Tennessee 7",
      website: "https://hacktennessee7.github.io/HumanOrRobot",
      repo: "https://github.com/HackTennessee7/HumanOrRobot",
      description: "Made over a weekend at Hack Tennessee 7. Team members: John Liu and Dan Burger. Each game is a sample of 5 questions from the factory. Player chooses 'human' or 'robot' by clicking on a button. A modal pops open that tells the correct answer and some additional information about the picture. Eventually would like to be saving the choices people make.",
      level: "This hack happened while I was doing command line Ruby. I had finished the Front-End course, and it was a good refresher on technologies I had laid down for a few weeks. Responsible for front-end design and development.",
      video: "assets/videos/hackTN.mp4"
    },

    {
      name: "Appchiever",
      stack: "AngularJS, AngularFire, lodash, Gulp, Jade, Bootstrap, Git, Sass, Atom, Firebase",
      brief: "NSS Front End Capstone",
      website: "https://appchiever.firebaseapp.com/#/",
      repo: "https://github.com/erinpagemd/ng-appchiever",
      description: "App for high school students to collect and store their achievements for college applications. Looped a video on the homepage. OAuth with Google. Login with AngularFire Auth Object. CRUD app using AngularFire arrays and objects. Bootstrap for styling and modals. Routing in anguarjs with Angular UI-Router. ",
      level: "Capstone project for Front-End course at Nashville Software School.",
      image: "assets/appchiever.png"
    },

    {
      name: "Chismosas",
      stack: "Firebase, Bootstrap, jQuery, Javascript, JSON, HTML, CSS",
      brief: "Chat App",
      website: "http://erinpagemd.github.io/chismosas",
      repo: "https://github.com/erinpagemd/chismosas",
      description: "Messaging app with Firebase live reload. Bootstrap for minimal styling.",
      level: "Chat App assignment during NSS Front-End Course",
      image: "assets/chismosas.png"
    },

    {
      name: "NerdTree",
      stack: "Firebase, Bootstrap, Javascript, lodash, jQuery, JSON, HTML, CSS",
      brief: "Dating App",
      website: "http://erinpagemd.github.io/nerd-tree",
      repo: "https://github.com/erinpagemd/nerd-tree",
      description: "Basic CRUD app with login. Firebase login, create new account, and logout. Using Firebase requests used for retrieving, posting, deleting, and modifying data. Bootstrap for minimal styling.",
      level: "Dating app assignment at NSS Front-End Course",
      image: "assets/nerdTree.png"
    },

    {
      name: "Nashville Recycle Centers",
      stack: "jQuery, Javascript, Socrata API, npm, Grunt, lodash, HTML, CSS, Jade",
      brief: "Opensource Project",
      website: "http://erinpagemd.github.io/nash-recycle-centers/",
      repo: "https://github.com/erinpagemd/nash-recycle-centers",
      description: "Use of the Nashville Open Data Portal. Writing an ajax call and appending to the DOM. Practice for using jQuery to dynamically create content from an API.",
      level: "Personal project during the beginning of Front-End NSS course.",
      image: "assets/nash-recycle.png"

    },

    {
      name: "Little Black Book",
      stack: "Firebase, Foundation, Javascript, jQuery, JSON, HTML, CSS, Mocha, Chai, Unit-Testing",
      brief: "Address Book App",
      website: "http://erinpagemd.github.io/little-black-book",
      repo: "https://github.com/erinpagemd/little-black-book",
      description: "Basic CRUD app with login. Firebase login, create new account, and logout. GET, POST, DELETE http requests. Foundation for minimal styling. First crack at logins and user flows. Light test suite with mocha and chai.",
      level: "Address Book assignment during NSS Front-End Course",
      image: "assets/littleBlackBook.png"
    },

    {
      name: "Game Won",
      stack: "Firebase, Bootstrap, Javascript, jQuery, JSON, HTML, CSS",
      brief: "2 Player Tic Tac Toe Game",
      website: "https://game-won.firebaseapp.com/",
      repo: "https://github.com/brayhoward/game1",
      description: "Tic-Tac-Toe game using a game object that communicates back and forth with firebase. Paired programming exercise with Brandon Howard for Front End Dev session. Used ScreenHero for off-site collaboration.",
      level: "Group Assignment for multiplayer tic-tac-toe game during NSS Front-End Course",
      image: "assets/game-won.png"
    },

    {
      name: "Honey Dew",
      stack: "Bootsrap, Firebase, Unit Testing, jQuery, Javascript, JSON, HTML, CSS, Mocha, Chai, Unit-Testing",
      brief: "To-Do App",
      website: "http://erinpagemd.github.io/to-do/",
      repo: "https://github.com/erinpagemd/to-do",
      description: "Basic CRUD app with login. Firebase login, create new account, and logout. GET, POST, DELETE http requests. Bootstrap for minimal styling. Build script and more advanced config settings. Test suite with mocha, chai, and karma.",
      level: "Personal Project during Front-End NSS Course",
      image: "assets/honey-dew.png"
    },

    {
      name: "Push Product",
      stack: "Pure CSS Framework, Javascript, jQuery, HTML",
      brief: "Exercises in Javascript",
      website: "http://erinpagemd.github.io/PushProduct/",
      repo: "https://github.com/erinpagemd/PushProduct",
      description: "Pushing items into an empty array in javascript. Use of PureCSS framework, HTML-Form",
      level: "Personal project before NSS to practice javascript methods.Refactored CSS when learning about CSS Frameworks at Nashville Software School.",
      image: "assets/push-product.png"
    }
  ]

  return projects
})
