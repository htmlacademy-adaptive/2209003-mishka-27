import gulp from 'gulp';
import less from 'gulp-less';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import rename from 'gulp-rename';
import settings from '../../settings.js';

const optimizeStyles = () => {
  return gulp.src(`${settings.src}/less/style.less`)
    .pipe(less())
    .pipe(postcss([
      autoprefixer(),
      cssnano(),
    ]))
    .pipe(rename((path) => {
      path.extname = '.min.css';
    }))
    .pipe(gulp.dest(`${settings.dest}/css`));
};

export default optimizeStyles;
