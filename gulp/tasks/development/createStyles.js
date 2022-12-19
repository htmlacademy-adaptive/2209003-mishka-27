import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import settings from '../../settings.js';
import browser from 'browser-sync';

const createStyles = () => {
  return gulp.src(`${settings.src}/less/style.less`, { sourcemaps: true })
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest(`${settings.dest}/css`, { sourcemaps: '.' }))
    .pipe(browser.stream());
}

export default createStyles;
