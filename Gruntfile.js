module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    var configs = require('load-grunt-config')(grunt, {
        configPath: __dirname + '/grunt',
        config: {
            build_dir: 'build',
            src_dir: 'src'
        }
    });

    grunt.initConfig(configs);

    grunt.registerTask('default', ['build']);

    grunt.registerTask('build', ['clean', 'copy', '6to5']);

};
