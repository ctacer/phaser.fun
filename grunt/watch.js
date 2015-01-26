module.exports = {

  configFiles: {
    files: [ 'Gruntfile.js', 'grunt/*.js' ],
    options: {
      reload: true
    }
  },

  es6: {
    files: '<%= src_dir %>/**',
    tasks: ['clean:es6', '6to5']
  },

  index: {
    files: '<%= src_dir %>/index.html',
    tasks: ['clean:index', 'index']
  }


};