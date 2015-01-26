module.exports = {

  main: {
    files: [
      {expand: true, cwd: '<%= src_dir %>/css', src: '**', dest: '<%= build_dir %>/css/'},

      {expand: true, cwd: '<%= src_dir %>/resources', src: '**', dest: '<%= build_dir %>/resources/'},

      {expand: true, cwd: '<%= src_dir %>/vendor/phaser/build', src: 'phaser.js', dest: '<%= build_dir %>/vendor/'},

    ],
  }

};
