const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const celebritySchema = require('../models/celebrity');
const Celebrity = mongoose.model('Celebrity', celebritySchema);

/* GET celebrities page. */
router.get('/', function (req, res, next) {
    console.log('in celebrities route')
    Celebrity.find({})
        .then(result => {
            console.log('toto', result)
            res.send(result)
            //res.render('celebrities/index', { result });
        })
        .catch(err => {
            console.error('An error occured', err);
            next(err);
        });

});

module.exports = router;

