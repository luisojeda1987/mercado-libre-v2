const express = require('express');
const router = express.Router(); //traigo el metodo Router

const {detalle} = require('../controllers/productosController'); //Maximo me enseñó destructuring nivel dios

router.get('/detalles/:id/:category',detalle);


module.exports = router; 