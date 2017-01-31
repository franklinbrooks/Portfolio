var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Franklin Brooks'
  });
});

router.get('/about', function(req, res, next) {
  res.render('about', {
    title: 'About'
  });
});

router.get('/education', function(req, res, next) {
  res.render('education', {
    title: 'Education'
  });
});

router.get('/employment', function(req, res, next) {
  res.render('employment', {
    title: 'Employment'
  });
});

router.get('/skills', function(req, res, next) {
  res.render('skills', {
    title: 'Skills'
  });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {
    title: 'Contact'
  });
});

module.exports = router;
