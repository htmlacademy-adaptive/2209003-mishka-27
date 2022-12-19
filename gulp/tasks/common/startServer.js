import browser from 'browser-sync';
import settings from '../../settings.js';

const startServer = (done) => {
  browser.init({
    server: {
      baseDir: settings.dest,
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};

export default startServer;
