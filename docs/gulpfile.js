var gulp = require('gulp');
var replace = require('gulp-replace');
var rename = require("gulp-rename");
var gap = require('gulp-append-prepend');
 
gulp.task('readme', function(){
  gulp.src(['sidebar.txt'])
    .pipe(replace('(:', '(https://github.com/jenstornell/kirby-secrets/wiki/'))
    .pipe(rename("_Sidebar.md"))
    .pipe(gulp.dest('./'))
    .pipe(gap.prependFile('../kirby-secrets/header.md'))
    .pipe(rename("readme.md"))
    .pipe(gulp.dest('../kirby-secrets'))
    ;
});

// Default
gulp.task('default',function() {
	gulp.watch('sidebar.txt',['readme']);
});