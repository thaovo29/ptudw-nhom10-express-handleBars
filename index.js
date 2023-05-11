const express = require("express")
const app = express()
const port = process.env.PORT || 3000
const expresHandlebars = require('express-handlebars')

app.use(express.static(__dirname + '/html'))

app.engine('hbs', expresHandlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    defaultLayout : 'layout',
    extname : 'hbs'
}))
app.set('view engine','hbs')



app.get('/', (req, res) =>{
    res.render('index');
})

app.use('/task1.htm', require('./routes/task1Route'))

app.use('/task2.htm', require('./routes/task2Route'))

app.use('/task3.htm', require('./routes/task3Route'))

app.use('/task4.htm', require('./routes/task4Route'))

app.use('/task4-details.htm', require('./routes/task4DetailRoute'))

app.listen(port, ()=>{
    console.log(`Thao beu ${port}`)
})
