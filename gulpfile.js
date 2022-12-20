import gulp from 'gulp';

// commons
import deleteDest from './gulp/tasks/common/deleteDest.js';
import copyExtraFiles from './gulp/tasks/common/copyExtraFiles.js';
import copyFonts from './gulp/tasks/common/copyFonts.js';
import createSprite from './gulp/tasks/common/createSprite.js';
import createNewImage from './gulp/tasks/common/createNewImages.js';
import startServer from './gulp/tasks/common/startServer.js';
import optimizeWebManifest from './gulp/tasks/common/optimizeWebManifest.js';

// delelopment
import copyHtml from './gulp/tasks/development/copyHtml.js';
import copyImages from './gulp/tasks/development/copyImages.js';
import copySvg from './gulp/tasks/development/copySvg.js';
import copyScripts from './gulp/tasks/development/copyScripts.js';
import createStyles from './gulp/tasks/development/createStyles.js';
import startWatcher from './gulp/tasks/development/startWatcher.js';

export default gulp.series(
  deleteDest,
  gulp.parallel(
    createNewImage,
    createStyles,
    createSprite,
    copyHtml,
    copyImages,
    copySvg,
    copyScripts,
    copyExtraFiles,
    copyFonts,
    optimizeWebManifest,
  ),
  startServer,
  startWatcher,
);

// production
import optimizeHtml from './gulp/tasks/production/optimizeHtml.js';
import optimizeStyles from './gulp/tasks/production/optimizeStyles.js';
import optimizeImages from './gulp/tasks/production/optimizeImages.js';
import optimizeJs from './gulp/tasks/production/optimizeJs.js';

export const build = gulp.series(
  deleteDest,
  gulp.parallel(
    optimizeHtml,
    optimizeStyles,
    optimizeJs,
    optimizeImages,
    createSprite,
    createNewImage,
    copyExtraFiles,
    copyFonts,
    optimizeWebManifest,
  ),
  startServer,
);
