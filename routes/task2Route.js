const express = require("express")
const { emotions } = require("../data")
const route = express.Router()

route.get('/', (req,res) =>{
    console.log("ga")
    
    
    res.render('task2')

})

module.exports = route;