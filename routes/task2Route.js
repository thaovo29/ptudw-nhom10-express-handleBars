const express = require("express")
const route = express.Router()
const bodyParser = require('body-parser')

route.use(bodyParser.json());
route.use(bodyParser.urlencoded({ extended: false }));
// route.use(express.urlencoded());

route.get('/', (req,res) =>{
    res.render('task2')
})

route.post('/', (req, res) =>{

    let salary = JSON.stringify(req.body.salary);
    salary = parseFloat(salary.replace('"',""));
    var salary10 = salary*0.1.toFixed(2);
    var salary55 = salary*0.55.toFixed(2);
    var salary5 = salary*0.05.toFixed(2);

    // console.log(salary10)
    res.render('task2',{salary10, salary55, salary5})
    
})


module.exports = route;
