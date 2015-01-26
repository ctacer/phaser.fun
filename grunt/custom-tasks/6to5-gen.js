module.exports = function (grunt) {

    var buildDestFile = function (sourceFile, newFiles) {
        var regExp = /(files: )(\{[^\}]*\})/;
        var index = sourceFile.search(regExp);
        var matchResult = sourceFile.match(regExp);
        if (index == -1) {
            return sourceFile;
        }

        index += matchResult[1].length;
        return sourceFile.substring(0, index) + newFiles + sourceFile.substring(index + matchResult[2].length);
    };

    grunt.task.registerMultiTask('6to5-gen', 'Generates source files for 6to5 task', function() {
        var options = this.options();
        var files = {};
        this.filesSrc.forEach(function(file) {
            files["<%= build_dir %>/" + file] = "<%= src_dir %>/" + file;
        });
        var taskFile = grunt.file.read(options.dest);
        grunt.file.write(options.dest, buildDestFile(taskFile, JSON.stringify(files)) );
    });
    
};