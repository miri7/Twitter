require('dotenv').config();

const config = {
    port: process.env.PORT,
}

console.log(process.env.NODE_ENV)
module.exports = config;