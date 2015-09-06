var gulp = require('gulp');
var sass = require('gulp-sass');


var requireDir = require('require-dir');
requireDir('./gulp/tasks', { recurse: true });


gulp.task('default', function() {
 	gulp.watch('styles/sass/**/*.scss',['styles']);
});
