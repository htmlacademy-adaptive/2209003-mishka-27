import gulp from 'gulp';
import plumber from 'gulp-plumber';
import less from 'gulp-less';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import browser from 'browser-sync';
import rename from 'gulp-rename';
import settings from '../../settings.js';

const createStyles = () => {
  return gulp.src(`${settings.src}/less/style.less`, { sourcemaps: true })
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(rename((path) => {
      path.extname = '.min.css';
    }))
    .pipe(gulp.dest(`${settings.dest}/css`, { sourcemaps: '.' }))
    .pipe(browser.stream());
}

export default createStyles;
