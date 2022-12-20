import gulp from 'gulp';
import settings from '../../settings.js';

const copyHtml = () => {
  return gulp.src(`${settings.src}/*.html`)
    .pipe(gulp.dest(`${settings.dest}`));
};

export default copyHtml;
