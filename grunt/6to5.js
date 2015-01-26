module.exports = {

  options: {
    sourceMap: "inline"
  },
  dist: {
    files: {"<%= build_dir %>/js/core.js":"<%= src_dir %>/js/core.js","<%= build_dir %>/js/ship.js":"<%= src_dir %>/js/ship.js"}
  }

};
