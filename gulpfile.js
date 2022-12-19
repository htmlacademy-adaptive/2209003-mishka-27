import gulp from 'gulp';

// commons
import deleteDest from './gulp/tasks/common/deleteDest.js';
import copyExtraFiles from './gulp/tasks/common/copyExtraFiles.js';
import copyFonts from './gulp/tasks/common/copyFonts.js';
import createNewImage from './gulp/tasks/common/createNewImages.js';

// delelopment
import copyHtml from './gulp/tasks/development/copyHtml.js';
import createStyles from './gulp/tasks/development/createStyles.js';
import startServer from './gulp/tasks/development/startServer.js';
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
