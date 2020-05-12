const express = require('express');
const app = express();
const path = require('path');
const port = 3005;
const axios = require('axios');

app.use(express.static(path.join(__dirname, '../public/')));

// Gallery Component
app.get('/api/images/:id', (req, res) => {
  axios.get(`http://localhost:3001/api/images/${req.params.id}`)
      .then((response) => {
        res.send(response.data)
      }).catch((err) => {
        console.log('image')
          res.send(err)
      })
})





// Product Component

app.get('/product/:id', (req, res) => {
  axios.get(`http://localhost:3000/product/${req.params.id}`)
  .then((response) => {
    res.send(response.data)
  }).catch((err) => {
    console.log('product')
      res.send(err)
  })
});


app.get('/product/:id/find-store', (req, res) => {
  axios.get(`http://localhost:3000/product/${req.params.id}/${req.query.q}`)
  .then((response) => {
    res.send(response.data)
  }).catch((err) => {
    console.log('find-stores')
      res.send(err);
  })
});


app.listen(port, () => console.log(`Proxy server: ----- http://localhost:${port}`))