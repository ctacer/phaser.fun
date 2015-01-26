module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    var configs = require('load-grunt-config')(grunt, {
        configPath: __dirname + '/grunt',
        config: {
            build_dir: 'build',
            src_dir: 'src',
            vendor_dir: 'vendor',
            grunt_dir: 'grunt',
            css_dir: 'css',
        }
    });

    grunt.initConfig(configs);

    grunt.registerTask('default', ['build']);
    grunt.registerTask('serve', ['http-server:dev']);

    grunt.registerTask('build', ['clean', 'copy', '6to5', 'watch']);
    grunt.registerTask('gen', ['clean', 'copy', '6to5', 'index']);


    //loads custom tasks

    [
        "./grunt/custom-tasks/6to5-gen.js",
        "./grunt/custom-tasks/index.js"
    
    ].forEach(function (taskSrc) {
        require(taskSrc) (grunt);
    });

};
