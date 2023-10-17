const express = require("express");
const app = express();
require('dotenv').confiq
const gamerouterRouter = require('./route/gamerouter')





app.listen(process.env.PORT, ()=> {
    console.log('server is running on port, process.env.PORT')
})