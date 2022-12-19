import gulp from 'gulp';
import webp from 'gulp-webp';
import settings from './../../settings.js';

const createNewImage = () => {
  return gulp.src(`${settings.src}/img/**/*.{jpg,png}`)
    .pipe(webp())
    .pipe(gulp.dest(`${settings.dest}/img`));
};

export default createNewImage;
