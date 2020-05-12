const express = require('express');
const app = express();
const path = require('path');
const port = 3005;
const axios = require('axios');
const cors = require('cors');

app.use(express.static(path.join(__dirname, '../public/')));
app.use(cors());
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

// review
app.get('/product/:id/find-store', (req, res) => {
  axios.get(`http://localhost:3000/product/${req.params.id}/${req.query.q}`)
  .then((response) => {
    res.send(response.data)
  }).catch((err) => {
    console.log('find-stores')
      res.send(err);
  })
});



// reviews
app.get('/api/products/:product_id/reviews', (req, res) => {
  axios.get(`http://localhost:8080/api/products/${req.params.productId}/reviews`)
  .then((response) => {
    res.send(response.data)
  }).catch((err) => {
    console.log('find-stores')
      res.send(err);
  })
})

app.get('/api/products/:product_id/reviews/:review_id', (req, res) => {
  axios.get(`http://localhost:8080/api/products/${req.params.productId}/reviews/${req.params.reviewId}`)
  .then((response) => {
    res.send(response.data)
  }).catch((err) => {
    console.log('find-stores')
      res.send(err);
  })
})

app.listen(port, () => console.log(`Proxy server: ----- http://localhost:${port}`))