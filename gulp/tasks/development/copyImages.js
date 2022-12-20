import gulp from 'gulp';
import settings from './../../settings.js';

const copyImages = () => {
  return gulp.src(`${settings.src}/img/**/*.{jpg,png,avif,webp}`)
    .pipe(gulp.dest(`${settings.dest}/img`));
};

export default copyImages;
