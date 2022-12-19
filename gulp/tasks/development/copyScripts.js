import gulp from 'gulp';
import rename from 'gulp-rename';
import settings from './../../settings.js';

const copyScripts = () => {
  return gulp.src(`${settings.src}/js/**/*.js`)
    .pipe(rename((path) => {
      path.extname = '.min.js';
    }))
    .pipe(gulp.dest(`${settings.dest}/js`));
};

export default copyScripts;
