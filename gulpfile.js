const gulp = require('gulp');
const minify = require('gulp-minify');

gulp.task('minify', (cb) =>{
  gulp.src(['./src/**/*.js'])
    .pipe(minify({ ext: { min: '.js'}, noSource: true} ))
    .pipe(gulp.dest('./dist/src/'));
  gulp.src(['index.js'])
    .pipe(minify({ ext: { min: '.js'}, noSource: true} ))
    .pipe(gulp.dest('./dist/'));
  cb();
});

module.exports = gulp.series('minify');