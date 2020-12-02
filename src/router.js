var express = require('express');
var router = express.Router();
const cursosControler = require('./controller/cursosController')

/* GET home page. */
router.get('/', cursosControler.index);
router.get('/courses/:id', cursosControler.show);



module.exports = router;