module.exports = function(grunt) {

	grunt.initConfig({
		meta: {
			package: grunt.file.readJSON('package.json'),
			source: {
				scripts: 'js/app',
				tests: 'js/tests'
			},
			reports: {
				coverage: 'coverage'
			}
		},
		watch: {
			configFiles: {
				files: ['Gruntfile.js'],
				options: {
					reload: true
				}
			},
			tests: {
				files: ['<%= meta.source.scripts %>/**/*.js', '<%= meta.source.tests %>/**/*.js'],
				tasks: ['jasmine:coverage']
			}
		},
		jasmine: {
			coverage: {
				src: '<%= meta.source.scripts %>/**/*.js',
				options: {
					specs: '<%= meta.source.tests %>/**/*.js',
					template: require('grunt-template-jasmine-istanbul'),
					templateOptions: {
						coverage: '<%= meta.reports.coverage %>/coverage.json',
						report: [{
							type: 'html',
							options: {
								dir: '<%= meta.reports.coverage %>/html'
							}
						}, {
							type: 'text-summary'
						}]
					}
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jasmine');

	grunt.registerTask('default', ['jasmine', 'watch']);

};