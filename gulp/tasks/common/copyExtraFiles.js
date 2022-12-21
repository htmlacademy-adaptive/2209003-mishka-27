import gulp from 'gulp';
import settings from './../../settings.js';

const extraFilesPaths = settings.extraFiles;

const copyExtraFiles = (done) => {
  extraFilesPaths.forEach((file) => {
    gulp.src(`${settings.src}/${file}`)
      .pipe(gulp.dest(`${settings.dest}`));
  });

  done();
};

export default copyExtraFiles;
