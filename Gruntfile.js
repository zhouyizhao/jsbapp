module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin:{
      options:{
        removeComments: true,
        collapseWhitespace:true
      },
      files:{
        src:'./index.html',
        dest:'dest/index.html'
      }
    },
    cssmin:{
      'dest/layout.css':'layout.css',
	  'dest/demo/list/layout.css':'demo/list/layout.css',
	  'dest/demo/menubar/layout.css':'demo/menubar/layout.css',
	  'dest/demo/setfont/layout.css':'demo/setfont/layout.css',
	  'dest/demo/write/layout.css':'demo/write/layout.css'
    },
    uglify:{
      'dest/main.js':'main.js',
	  'dest/demo/list/main.js':'demo/list/main.js',
	  'dest/demo/menubar/main.js':'demo/menubar/main.js',
	  'dest/demo/menubar/data.js':'demo/menubar/data.js',
	  'dest/demo/setfont/main.js':'demo/setfont/main.js',
	  'dest/demo/write/main.js':'demo/write/main.js'
    }
  });

  grunt.loadNpmTasks('grunt-contrib-htmlmin'); 
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('lint', ['cssmin','htmlmin','uglify']);
};

