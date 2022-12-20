import gulp from 'gulp';
import settings from './../../settings.js';

const copySvg = () => {
  return gulp.src([`${settings.src}/img/**/*.svg`, `!${settings.spriteFiles}`])
    .pipe(gulp.dest(`${settings.dest}/img`));
};

export default copySvg;
