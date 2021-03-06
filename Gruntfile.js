module.exports = function (grunt) {
  grunt.initConfig({
    copy: {
      html: {
        src: './index.html',
        dest: './dist/index.html'
      }
    },
    concat: {
      js: {
        src: ['js/*.js'],
        dest: 'dist/js/bundle.js'
      },
      css: {
        src: ['css/*.css'],
        dest: 'dist/css/bundle.css'
      }
    },
    uglify: {
      'dist/js/bundle.min.js': 'js/bundle.js'
    },
    cssmin: {
      'dist/css/bundle.min.css': 'css/bundle.css'
    },
    useminPrepare: {
      html: 'index.html',
      options: {
        dest: 'dist'
      }
    },
    usemin: {
      html: ['dist/index.html']
    }
    // clean: ['dist', 'package-lock.json', '.tmp']
  });
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  // grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.registerTask('default', ['copy:html', 'useminPrepare', 'concat', 'uglify', 'cssmin', 'usemin']);
  // grunt.registerTask('clean-all', ['clean']);
};