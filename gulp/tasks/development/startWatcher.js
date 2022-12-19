import gulp from 'gulp';
import settings from '../../settings.js';
import createStyles from './createStyles.js';
import browser from 'browser-sync';

const startWatcher = () => {
  gulp.watch(`${settings.src}/less/**/*.less`, gulp.series(createStyles));
  gulp.watch(`${settings.src}/*.html`).on('change', browser.reload);
  gulp.watch(`${settings.src}/**/*.svg`).on('change', browser.reload);
}

export default startWatcher;
