import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import settings from '../../settings.js';

const optimizeHtml = () => {
  return gulp.src(`${settings.src}/**/*.html`)
    .pipe(htmlmin({
      collapseWhitespace: true,
      collapseInlineTagWhitespace: true,
    }))
    .pipe(gulp.dest(`${settings.dest}`));
};

export default optimizeHtml;
