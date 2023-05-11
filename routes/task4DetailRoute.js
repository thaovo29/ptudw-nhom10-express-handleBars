const express = require("express")
const route = express.Router()
const {zodiacs} = require('../data')

route.get('/', (req, res) => {
    let zodiac = req.query.zodiac;
    if (zodiac){
        res.locals.zodiac = zodiacs.filter(item => item.name == zodiac);

    }
    res.render('task4-details')
})

module.exports = route;