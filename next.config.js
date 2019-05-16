const path = require('path')
const dotenv = require('dotenv');

const config = dotenv.config();

module.exports = require( path.resolve(__dirname, process.env.CONFIG_DIR, 'next.config') );