const express = require("express")
const { emotions } = require("../data")
const route = express.Router()

route.get('/', (req, res)=>{
    let quotePath = '/task1/default.jpg'
    res.render('task1', {emotions, quotePath})
})

route.get('/:emotion', (req, res)=>{
    let emotion  = req.params.emotion;
    let selectedEmotion = emotions.filter(item=>
        item.title == emotion
    );
    let quotePath = '/task1/default.jpg';
    if (selectedEmotion.length){
        quotePath = selectedEmotion[0].quotePath;
    }
    res.render('task1',{emotions, quotePath});
});


module.exports = route;