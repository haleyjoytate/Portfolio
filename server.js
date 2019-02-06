const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

const app = express();

function listenCB () {
    console.log("We are running on " + port);
}

app.use(express.static(path.join(__dirname, 'public')))

app.listen(port, listenCB);
 
