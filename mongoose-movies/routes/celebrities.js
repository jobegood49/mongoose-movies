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

/* Render the new view */
router.get('/new', (req, res, next) => {
    res.render('celebrities/new');
});

/* GET a Celebrity page. */

router.get('/:id', function (req, res, next) {
    const id = req.params.id;
    Celebrity.findById(id)
        .then(celebrity => {
            res.render('celebrities/show', { celebrity });
        })
        .catch(err => {
            console.error('An error occured', err);
            next(err);
        });

});

/* GET a Celebrity page. */

router.post('/', function (req, res, next) {
    const obj = {
        name: req.body.name,
        occupation: req.body.occupation,
        catchPhrase: req.body.catchPhrase
    }
    Celebrity.create(obj)
        .then(celebrity => {
            res.redirect('/celebrities');
        })
        .catch(err => {
            console.error('An error occured', err);
            res.redirect('/celebrities/new');
        });
});

/* Remove a specific id */

router.post('/:id/delete', function (req, res, next) {
    const id = req.params.id;
    Celebrity.findByIdAndRemove(id)
        .then(result => {
            res.redirect('/celebrities');
        })
        .catch(error => {
            next(error);
        });
});



module.exports = router;

