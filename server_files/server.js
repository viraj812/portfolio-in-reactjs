const express = require('express');
const path = require('path');

const app = new express();
app.use(express.json());

app.use(express.static('/client'));

app.get('*', (req, res) => {
    if (req.header('user-agent').indexOf('Mobile') != -1) {
        return res.sendFile('/client/desktop-build');
    }
    else {
        return res.sendFile('/client/mobile-build');
    }
})


app.listen(4048, () => {
    console.clear();
    console.log('Server Running.....')
})