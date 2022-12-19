import gulp from 'gulp';
import settings from '../../settings.js';

const copyFonts = () => {
  return gulp.src(`${settings.src}/fonts/**/*.*`)
    .pipe(gulp.dest(`${settings.dest}/fonts`));
};

export default copyFonts;
