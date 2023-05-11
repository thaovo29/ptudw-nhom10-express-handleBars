const express = require("express")
const route = express.Router()

route.get('/', (req,res) =>{
    res.render('task2')
})


module.exports = route;