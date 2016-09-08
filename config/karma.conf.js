let webpackConfig = require('./webpack.config.js').default;

module.exports = (config) => {
  config.set({
    basePath: '../test',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      '**/*.ts'
    ],
    preprocessors: {
      '**/*.ts': ['webpack', 'sourcemap']
    },
    webpack: {
      module: webpackConfig.module,
      resolve: webpackConfig.resolve
    },
    webpackServer: {
      noInfo: true
    },
    // plugins: [
    //   'karma-mocha',
    //   'karma-mocha-reporter',
    //   'karma-chai',
    //   'karma-sinon',
    //   'karma-webpack',
    //   'karma-sourcemap-loader',
    //   'karma-chrome-launcher',
    //   'karma-phantomjs-launcher'
    // ],
    reporters: ['mocha'],
    port: 9876,
    colors: true,
    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    autoWatch: true,
    // browsers: ['Chrome'],
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  });
};
