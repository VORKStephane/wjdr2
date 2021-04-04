var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', processLess(cb));
gulp.task('default', processDefault(cb));

function processLess(cb) {
    gulp.src("styles/wjdr2.less")
        .pipe(less())
        .pipe(gulp.dest(""));
    cb();
}

function processDefault(cb) {
    gulp.watch('styles/*.less', gulp.series('less'));
    cb();
}