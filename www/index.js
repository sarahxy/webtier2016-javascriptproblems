/* ==========================================================================
 * ./www/index.js
 *
 * Start Server
 * ========================================================================== */
'use strict'; // eslint-disable-line strict

const path = require('path');
require(path.resolve(__dirname, '..', 'src/server')).start();

