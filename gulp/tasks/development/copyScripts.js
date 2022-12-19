import gulp from 'gulp';
import settings from './../../settings.js';

const copyScripts = () => {
  return gulp.src(`${settings.src}/js/**/*.js`)
    .pipe(gulp.dest(`${settings.dest}/js`));
};

export default copyScripts;
