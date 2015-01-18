module.exports = {

  main: {
    files: [
      // includes files within path
      {expand: true, cwd: '<%= src_dir %>', src: 'index.html', dest: '<%= build_dir %>/'},

      {expand: true, cwd: '<%= src_dir %>/css', src: '**', dest: '<%= build_dir %>/css/'},

      {expand: true, cwd: '<%= src_dir %>/vendor/phaser/build', src: 'phaser.js', dest: '<%= build_dir %>/vendor/'},

    ],
  }

};
