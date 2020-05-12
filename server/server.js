const express = require('express');
const app = express();
const path = require('path');
const port = 3002;


app.use(express.static(path.join(__dirname, '../public/')));

app.listen(port, () => console.log(`Proxy server: ----- http://localhost:${port}`))