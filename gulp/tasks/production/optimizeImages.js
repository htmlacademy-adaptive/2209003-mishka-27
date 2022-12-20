import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import settings from './../../settings.js';

const optimizeImages = () => {
  return gulp.src([`${settings.src}/img/**/*.{jpg,jpeg,png,svg,gif}`, `!${settings.spriteFiles}`])
    .pipe(imagemin())
    .pipe(gulp.dest(`${settings.dest}/img`));
};

export default optimizeImages;
