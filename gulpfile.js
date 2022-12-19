import gulp from 'gulp';

// commons
import deleteDest from './gulp/tasks/common/deleteDest.js';
import copyExtraFiles from './gulp/tasks/common/copyExtraFiles.js';
import copyFonts from './gulp/tasks/common/copyFonts.js';
import createNewImage from './gulp/tasks/common/createNewImages.js';
import startServer from './gulp/tasks/common/startServer.js';

// delelopment
import copyHtml from './gulp/tasks/development/copyHtml.js';
import createStyles from './gulp/tasks/development/createStyles.js';
import startWatcher from './gulp/tasks/development/startWatcher.js';
import copyImages from './gulp/tasks/development/copyImages.js';
import copySvg from './gulp/tasks/development/copySvg.js';
import copyScripts from './gulp/tasks/development/copyScripts.js';

export default gulp.series(
  deleteDest,
  gulp.parallel(
    createNewImage,
    copyHtml,
    createStyles,
    copyImages,
    copySvg,
    copyScripts,
    copyExtraFiles,
    copyFonts,
  ),
  startServer,
  startWatcher,
);

// production
import optimizeHtml from './gulp/tasks/production/optimizeHtml.js';
import optimizeStyles from './gulp/tasks/production/optimizeStyles.js';

export const build = gulp.series(
  deleteDest,
  gulp.parallel(
    optimizeHtml,
    optimizeStyles,
  ),
  startServer,
);
