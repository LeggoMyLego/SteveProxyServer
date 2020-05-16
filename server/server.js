const express = require('express');

const app = express();
const path = require('path');

const port = 3005;
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());

app.use(express.static(path.join(__dirname, '../public/')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/images/:id', (req, res) => {
  axios
    .get(`http://gallerycontainer/api/images/${req.params.id}`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/product/:id', (req, res) => {
  axios
    .get(`http://localhost:3002/product/${req.params.id}`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/product/:id/:find-store', (req, res) => {
  axios
    .get(
      `http://localhost:3002/product/${req.params.id}/find-store/?q=${req.query.q}`,
    )
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/api/products/:product_id/reviews', (req, res) => {
  axios
    .get(`http://localhost:8080/api/products/${req.params.product_id}/reviews`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.get('/api/products/:product_id/reviews/:review_id', (req, res) => {
  axios
    .get(
      `http://localhost:8080/api/products/${req.params.product_id}/reviews/${req.params.review_id}`,
    )
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.put('/api/products/:product_id/reviews/:review_id', (req, res) => {
  axios({
    method: 'PUT',
    url: `http://localhost:8080/api/products/${req.params.product_id}/reviews/${req.params.review_id}`,
    data: req.body,
  })
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.listen(port, () => console.log(`Proxy server: ----- http://localhost:${port}`));
