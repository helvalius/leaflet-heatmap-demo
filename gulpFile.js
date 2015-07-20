(function(){
  var gulp  = require('gulp');
  var $     = require('gulp-load-plugins')({lazy:false});
  var wiredep = require('wiredep').stream;

$.livereload();
$.livereload.listen();

var paths = {
  index: './client/index.html',
  root: './client',
  html: './client/**/*.html',
  scripts: './client/app/**/*.js',
  styles: './client/app/**/*.css'
}

gulp.task('default', $.sequence('bower', 'server', 'watch'));
gulp.task('server', startServer);
gulp.task('watch', startWatch);


function startServer(){
  require('./server');
}

function startWatch(){
  gulp.watch('./client/app/**/*.css', $.livereload.changed);
  gulp.watch('./client/app/**/*.js', $.livereload.changed);
  gulp.watch('./client/**/*.html', $.livereload.changed);
}


gulp.task('bower', function () {
  gulp.src( paths.index )
      .pipe(wiredep())
      .pipe(gulp.dest(paths.root));
});

})();
