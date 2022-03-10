'use strict';

const express = require('express');
const path = require('path');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
//   res.send('Hello World');
    res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
