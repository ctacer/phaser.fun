module.exports = {

  index: {
    cwd: "<%= src_dir %>",
    src: "js/**.js",
    options: {
      dest: "<%= grunt_dir %>/6to5.js"
    }
  }

};