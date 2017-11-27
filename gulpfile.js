var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
cssvars = require('postcss-simple-vars'),
autoprefixer = require('autoprefixer');

gulp.task('default', function() {
  console.log('Horray!  We have a default gulp task.');
});

gulp.task('html', function() {
  console.log('Imagine something fun being done to your HTML here.');
});

gulp.task('styles', function() {
  return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssvars, autoprefixer]))
    .pipe(gulp.dest('./app/temp/styles'));
});

gulp.task('watch', function() {

  watch('./app/index.html', function() {
    gulp.start('html');
  });

  watch('./app/assets/styles/**.css', function() {
    gulp.start('styles');
  });

});
