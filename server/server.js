const express = require('express');
const app = express();
const path = require('path');
const port = 3005;
const axios = require('axios');

app.use(express.static(path.join(__dirname, '../public/')));

app.get('/api/images/:id', (req, res) => {
  axios.get(`http://localhost:3001/api/images/${req.params.id}`)
      .then((response) => {
        res.send(response.data)
      }).catch((err) => {
        console.log('image')
          res.send(err)
      })
})

app.listen(port, () => console.log(`Proxy server: ----- http://localhost:${port}`))