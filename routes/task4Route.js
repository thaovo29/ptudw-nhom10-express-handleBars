const express = require("express")
const route = express.Router()
const app = express()

const {zodiacs} = require('../data')
route.get('/', (req,res) =>{ 
    res.locals.zodiacs = zodiacs;
    res.render('task4');
})

module.exports = route;