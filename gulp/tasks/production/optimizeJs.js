import gulp from 'gulp';
import minify from 'gulp-minify';
import settings from '../../settings.js';

const optimizeJs = () => {
  return gulp.src(`${settings.src}/js/**/*.js`)
    .pipe(minify({
      noSource: true,
      ext: {
        min: '.min.js',
      }
    }))
    .pipe(gulp.dest(`${settings.dest}/js`));
};

export default optimizeJs;
