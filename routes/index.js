var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'A Zappa Dappa Dat' 
  });
});

router.get('/about', (req, res, next)=> {
  res.render('about', { 
    title: 'A Zappa Dappa Dat' 
  })
})
router.get('/listen', (req, res, next)=> {
  res.render('listen', { 
    title: 'A Zappa Dappa Dat' 
  })
})
router.get('/contact', (req, res, next)=> {
  res.render('contact', { 
    title: 'A Zappa Dappa Dat' 
  })
})
router.get('/paul', (req, res, next)=> {
  res.render('paul', { 
    title: 'A Zappa Dappa Dat' 
  })
})
router.get('/joyce', (req, res, next)=> {
  res.render('joyce', { 
    title: 'A Zappa Dappa Dat' 
  })
})
router.get('/william', (req, res, next)=> {
  res.render('william', { 
    title: 'A Zappa Dappa Dat' 
  })
})

module.exports = router;
