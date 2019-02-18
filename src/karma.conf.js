// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
		dir: require('path').join(__dirname, '../coverage/Angular-course-list'),
		reports: ['html', 'lcovonly', 'text-summary'],
		combineBrowserReports: true,
		fixWebpackSourcePaths: true,
		thresholds: {
			global: {
				statements: 80,
				lines: 80,
				branches: 80,
				functions: 80
			},
			each: {
				statements: 70,
				lines: 70,
				branches: 70,
				functions: 70,
			}
		},
		'report-config': {
			// all options available at: https://github.com/istanbuljs/istanbuljs/blob/aae256fb8b9a3d19414dcf069c592e88712c32c6/packages/istanbul-reports/lib/html/index.js#L135-L137
			html: {
				// outputs the report in ./coverage/html
				subdir: 'html'
			}
		},
	},

	reporters: [
		'coverage-istanbul',
		'progress',
		'kjhtml'
	],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
