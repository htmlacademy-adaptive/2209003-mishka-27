import gulp from 'gulp';
import jsonmin from 'gulp-json-minify'
import settings from '../../settings.js';

const optimizeWebManifest = () => {
  return gulp.src(`${settings.src}/manifest.webmanifest`)
    .pipe(jsonmin())
    .pipe(gulp.dest(settings.dest));
};

export default optimizeWebManifest;
