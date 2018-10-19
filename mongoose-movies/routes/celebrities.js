const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const celebritySchema = require('../models/Celebrity');
const Celebrity = mongoose.model('Celebrity', celebritySchema);

/* GET celebrities page. */
router.get('/', function (req, res, next) {
    Celebrity.find()
        .then(result => {
            console.log('toto', result)
            //res.send(result)
            res.render('celebrities/index', { result });
        })
        .catch(err => {
            console.error('An error occured', err);
            next(err);
        });

});

module.exports = router;

