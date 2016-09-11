let webpackConfig = require('./webpack.config.js').default;

module.exports = (config) => {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon'],
    files: [
      './test.config.js'
    ],
    preprocessors: {
      './test.config.js': ['webpack', 'sourcemap']
    },
    // let karma auto load plugins
    // plugins: []
    webpack: {
      cache: true,
      devtool: 'inline-source-map',
      resolve: webpackConfig.resolve,
      module: {
        loaders: webpackConfig.module.loaders,
        postLoaders: [{
          test: /.*\.(j|t)sx?$/,
          exclude: /(node_modules|test)/,
          loader: 'istanbul-instrumenter'
        }]
      },
      ts: {
        configFileName: '../tsconfig.json'
      }
    },
    webpackServer: {
      noInfo: true
    },
    reporters: ['mocha', 'coverage'],
    coverageReporter: {
      dir: '../coverage',
      reporters: [{
        type: 'html',
        subdir: '.'
      },
      {
        type: 'lcov',
        subdir: 'report-lcov'
      },
      {
        type: 'cobertura',
        subdir: 'report-cobertura',
        file: 'cobertura.txt'
      }]
    },
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
