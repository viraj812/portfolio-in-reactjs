const express = require('express');
const path = require('path');

const app = new express();
const { static } = require('express');
// app.use(express.json());

app.use(static('client/desktop-build'));
app.use(static('client/mobile-build'));

console.clear();

app.get('/', (req, res) => {
    if (req.header('user-agent').indexOf('Mobile') != -1) {
        res.sendFile('client/mobile-build/mobile.html', {root: __dirname})
    }
    else {
        res.sendFile('client/desktop-build/desktop.html', {root: __dirname})
    }

})



app.listen(4048, () => {
    console.clear();
    console.log('Server Running.....')
})