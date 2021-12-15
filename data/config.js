const fs = require('fs');
const path = require('path');
require('dotenv').config()


const PRIVATE_KEY = fs.readFileSync(path.resolve(__dirname, './key/private.key'));
const PUBLIC_KEY = fs.readFileSync(path.resolve(__dirname, './key/public.key'));

module.exports = {
  APP_HOST: process.env.APP_HOST,
  APP_PORT: process.env.APP_PORT,
  MYSQL_HOST: process.env.MYSQL_HOST,
  MYSQL_PORT: process.env.MYSQL_PORT,
  MYSQL_DATABASE: process.env.MYSQL_DATABASE,
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD
} 

module.exports.PRIVATE_KEY = PRIVATE_KEY;
module.exports.PUBLIC_KEY = PUBLIC_KEY;