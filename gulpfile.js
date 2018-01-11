var gulp = require('gulp');
var uglify = require('gulp-uglify');


//js pipe and minify
gulp.task('scripts', function () {
  return gulp.src(['src/assets/js/*.js'])
  .pipe(uglify())
  .pipe(gulp.dest('public/assets/js'))
});


//Default
gulp.task('default', ['scripts']);
