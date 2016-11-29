const webpackConfig = require('./webpack.config');

const isCI = process.env.SAUCE_USERNAME && process.env.BUILD_NUMBER;

const customLaunchers = {
  sl_firefox47_win7: {
    base: 'SauceLabs',
    browserName: 'firefox',
    platform: 'Windows 7',
    version: '47'
  },
	/*"sl_ie11_win10": {
		base: 'SauceLabs',
		browserName: 'internet explorer',
		platform: 'Windows 10',
		version: '11'
	},
	"sl_ie10_win7": {
		base: 'SauceLabs',
		browserName: 'internet explorer',
		platform: 'Windows 7',
		version: '10'
	},
	"sl_edge13_win10": {
		base: 'SauceLabs',
		browserName: 'MicrosoftEdge',
		platform: 'Windows 10',
		version: '13'
	},
	"sl_safari9_mac10.11": {
		base: 'SauceLabs',
		browserName: 'safari',
		platform: 'OS X 10.11',
		version: '9.0'
	}*/
};


webpackConfig.externals = {
  'react/addons': true,
  'react/lib/ExecutionEnvironment': true,
  'react/lib/ReactContext': true,
};


webpackConfig.plugins = webpackConfig.plugins.filter(plugin => plugin.definitions);
webpackConfig.devtool = 'eval';
webpackConfig.resolve = { extensions: ['', '.js', '.jsx', '.json'] };
webpackConfig.module.loaders[2].loader = 'style-loader!css-loader?-minimize&-import!postcss-loader!sass-loader';
webpackConfig.postcss = undefined;


module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha'],

    files: [
      './src/client/js/**/__tests__/*-spec.js',
    ],
    exclude: [
      'node_modules/**.*.js',
    ],
    preprocessors: {
      './src/client/js/**/__tests__/*-spec.js': ['webpack'],
    },
    webpack: webpackConfig,

    webpackMiddleware: {
      quiet: true,
      noInfo: true,
    },

    reporters: isCI ? ['progress', 'mocha', 'coverage'] : ['notify', 'mocha', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: isCI,
    //browsers: isCI ? Object.keys(customLaunchers) : ['Chrome'],
    browsers: isCI ? ['Firefox'] : ['Chrome'],
    singleRun: false,

    sauceLabs: {
      testName: 'csrTools',
      /*parentTunnel: process.env.SAUCE_PARENT_TUNNEL,*/
      /*tunnelIdentifier: process.env.SAUCE_TUNNEL_IDENTIFIER*/
    },

    customLaunchers,

    // to avoid DISCONNECTED messages for Sauce Labs
    browserDisconnectTimeout: 10000, // default 2000
    browserDisconnectTolerance: 1, // default 0
    browserNoActivityTimeout: 4 * 60 * 1000, //default 10000
    captureTimeout: 4 * 60 * 1000, //default 60000

    // to avoid DISCONNECTED messages for Sauce Labs
    client: {
      mocha: {
        timeout: 20000 // 20 seconds
      }
    },

    mochaReporter: {
      output: 'autowatch',
    },

    coverageReporter: {
      dir: '/tmp/coverage/',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'text', subdir: '.', file: 'report.txt' },
        { type: 'text-summary' },
      ],
    },

    plugins: [
      'karma-coverage',
      'karma-mocha',
      'karma-webpack',
      'karma-babel-preprocessor',
      'karma-chrome-launcher',
      'karma-mocha-reporter',
      'karma-notify-reporter',
      'karma-sauce-launcher',
      'karma-firefox-launcher',
      'karma-safari-launcher',
    ],
  });
};
