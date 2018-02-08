module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			options: {
			 	includePaths: ['bower_components/foundation/scss']
			},
			production: {
				options: {
					outputStyle: 'expanded',
                    debugInfo: true,
					sourceMap: true
				},
				files: {
					'style.css': 'assets/scss/style.scss'
				}
			}
		},

		bless: {
		    css: {
		      options: {
		      		imports: true,
                  	outputStyle: 'expanded',
                  	debugInfo: true,
                  	sourceMap: true
		      },
		      files: {
		        'style_ie.css': 'style.css'
		      }
		    }
		},		

		uglify: {
			options: {
				mangle: {
					except: ['$', 'jQuery', 'Foundation', 'fdatepicker', 'poll_vote', 'poll_id', 'poll_answer_id',
					'is_being_voted', 'poll_process', 'poll_result', 'poll_booth', 'poll_process_success', 'set_is_being_voted']
				}
			},
			production: {
				files: {
					'assets/scripts/min/jquery.min.js' : ['bower_components/jquery/dist/jquery.js'],
					'assets/scripts/min/vendor.min.js' : [
						'bower_components/modernizr/modernizr.js',
						'bower_components/modernizr/custom_modernizr.js',
						'bower_components/jquery.cookie/jquery.cookie.js',
						'bower_components/jquery-placeholder/jquery.placeholder.js',
						'bower_components/fastclick/lib/fastclick.js',
						'bower_components/foundation/js/foundation/foundation.js',
						'bower_components/foundation/js/foundation/foundation.abide.js',
						'bower_components/foundation/js/foundation/foundation.offcanvas.js',
						'bower_components/foundation/js/foundation/foundation.core.js',
						'bower_components/foundation/js/foundation/foundation.equalizer.js',
						'bower_components/foundation/js/foundation/foundation.reveal.js',
						'bower_components/foundation/js/foundation/foundation.accordion.js',
						'bower_components/foundation-datepicker/js/foundation-datepicker.js',
						'bower_components/foundation/js/foundation/foundation.tab.js',
						'bower_components/slick-carousel/slick/slick.js',
						'bower_components/tablesaw/dist/tablesaw.js',
						'../../plugins/wp-polls/polls-js.dev.js',
						'../../plugins/text-hover/assets/jquery.qtip.min.js',
						'../../plugins/text-hover/assets/text-hover.js',
						'../../plugins/responsive-lightbox-lite/assets/nivo-lightbox/nivo-lightbox.min.js',
						'../../plugins/responsive-lightbox-lite/assets/inc/script.js',
						'bower_components/moment/moment.js',
					],
					'assets/scripts/min/app.min.js' : ['assets/scripts/app.js']
				}
			}
		}, 

		watch: {

            options: {
                livereload: true
            },

			grunt: {
				files: ['Gruntfile.js'],
				tasks: ['sass', 'uglify', 'bless']
			},

			sass: {
				files: 'assets/scss/**/*.scss',
				tasks: ['sass', 'bless']
			},

			uglify: {
				files: 'assets/scripts/*.js',
				tasks: ['uglify']
			}
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-bless');

	grunt.registerTask('build', ['sass', 'bless', 'uglify']);
	grunt.registerTask('default', ['build','watch']);

};