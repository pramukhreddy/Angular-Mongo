const express = require('express');
const router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://karlap:mavrick123@ds235065.mlab.com:35065/products-demo', ['test']);


// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
//router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
 // axios.get(`${API}/posts`)
    //.then(posts => {
    //  res.status(200).json(posts.data);
    //})
    //.catch(error => {
    //  res.status(500).send(error)
    //});
//});

/* GET All Todos */
router.get('/posts', function (req, res, next) {
  db.test.find(function (err, test) {
    if (err) {
      res.send(err);
    } else {
      res.json(test);
    }
  });
});


module.exports = router;
