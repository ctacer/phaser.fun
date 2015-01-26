module.exports = {
  
  all: {
    cwd: "<%= build_dir %>",
    src: [
      "<%= vendor_dir %>/**.js",
      "js/**.js",
      "<%= css_dir %>/**.css"
    ]
  }

};