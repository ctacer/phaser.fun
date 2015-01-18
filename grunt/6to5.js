module.exports = {

  options: {
    sourceMap: true
  },
  dist: {
    files: {
      "<%= build_dir %>/js/core.js": "<%= src_dir %>/js/core.js"
    }
  }

};
