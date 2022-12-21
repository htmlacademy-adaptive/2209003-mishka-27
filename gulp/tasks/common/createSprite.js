import gulp from 'gulp';
import imagemin from 'gulp-imagemin';
import svgStore from 'gulp-svgstore'
import settings from '../../settings.js';
import rename from 'gulp-rename';

const createSprite = () => {
  return gulp.src(`${settings.spriteFiles}`)
    .pipe(imagemin())
    .pipe(svgStore({
      inlineSvg: true,
    }))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest(`${settings.dest}/img`));
};

export default createSprite;
