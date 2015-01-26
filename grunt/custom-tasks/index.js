module.exports = function (grunt) {
  
  grunt.registerMultiTask('index', 'Task fulfills index.html file for deployed app', function () {

    var jsFiles = this.filesSrc.filter(function (file) {
      return file.match(/\.js$/);
    });
    var cssFiles = this.filesSrc.filter(function (file) {
      return file.match(/\.css$/);
    });

    grunt.file.copy(grunt.config('src_dir') + '/index.html', grunt.config('build_dir') + '/index.html', {
      process: function (contents, path) {
        return grunt.template.process(contents, {
          data: {
            scripts: jsFiles,
            styles: cssFiles,
            title: "p.fun"
          }
        });
      }
    });
  });

};