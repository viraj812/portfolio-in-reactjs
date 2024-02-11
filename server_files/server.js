const express = require('express');
const path = require('path');

const app = new express();
app.use(express.json());

app.use(express.static('client/build'));

app.get('*', (req, res) => {
    if (req.header('user-agent').indexOf('Mobile') != -1) {
        return res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    }
    else {
        return res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    }
})


app.listen(4048, () => {
    console.clear();
    console.log('Server Running.....')
})