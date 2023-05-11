const express = require('express');
const app = express();

/** Decode Form URL Encoded data */
app.use(express.urlencoded());

/** Show page with a form */
app.get('/', (req, res, next) => {
  res.send(`<form method="POST" action="/">
  <input type="text" name="username" placeholder="username">
  <input type="submit">
</form>`);
});

/** Process POST request */
app.post('/', function (req, res, next) {
    let resp = JSON.stringify(req.body);
    let a = "50.0"
    // a = parseFloat(a)
    // console.log("a",a);
    console.log(resp);
    res.send(JSON.stringify(req.body));
});

/** Run the app */
app.listen(3000);