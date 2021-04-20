var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('sass', function() {
 return gulp.src('app/scss/**/*.scss')
   .pipe(sass())
   .pipe(gulp.dest('app/css'))
   .pipe(browserSync.reload({
    stream: true
  }))
})

gulp.task('browserSync', function() {
 browserSync.init({
  server: {
   baseDir: './'
  },
 })
})

gulp.task('watch', gulp.parallel('browserSync', function(){
 gulp.watch('app/scss/**/*.scss', gulp.series('sass'));
 gulp.watch('index.html').on('change', browserSync.reload);
}))
