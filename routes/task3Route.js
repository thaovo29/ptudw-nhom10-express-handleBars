const express = require("express")
const route = express.Router()
const {categories, products} = require('../data');
route.get('/', (req,res) =>{
    // truyen vao cau lenh render vao view
    let category = req.query.category;
    res.locals.categories = categories;
    res.locals.products = products;
    if (category) {
        res.locals.products = products.filter(item => item.category == category);
    }
    res.render('task3')
})

module.exports = route;