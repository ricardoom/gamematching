/**
 * Require Browsersync
 */
let browserSync = require('browser-sync');
/**
 * Run Browsersync with server config
 */
browserSync({
  server: 'app',
  files: ['app/*.html', 'app/css/*.css', 'app/*.js', 'app/modules/*.js', 'app/assets/*.*'],
  cors: true,
});
