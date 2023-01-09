import gulp from 'gulp';
import browser from 'browser-sync';
import settings from '../../settings.js';

// tasks
import copyHtml from './copyHtml.js';
import createStyles from './createStyles.js';
import copySvg from './copySvg.js';
import copyScripts from './copyScripts.js';

const startWatcher = () => {
  gulp.watch(`${settings.src}/less/**/*.less`, gulp.series(createStyles));
  gulp.watch(`${settings.src}/*.html`).on('change', () => {
    copyHtml();
    browser.reload();
  });
  gulp.watch(`${settings.src}/**/*.svg`).on('change', () => {
    copySvg();
    browser.reload();
  });
  gulp.watch(`${settings.src}/**/*.js`).on('change', () => {
    copyScripts();
    browser.reload();
  });
}

export default startWatcher;
