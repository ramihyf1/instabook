'use strict';

// Import our webserver library
const webserver = require('./src/webserver/webserver');
const userTable = require('./src/database/tables/user-table');
const postTable = require('./src/database/tables/post-table');

// If the CTRL + C keys are pressed, exit
process.on('SIGINT', () => process.exit(128));

(async () => {
  // Create the user table
  await userTable.createTable();
  // Create the post table
  await postTable.createTable();
})();
