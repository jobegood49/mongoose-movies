const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const movieSchema = require('../models/Movie');
const Movie = mongoose.model('Movie', movieSchema);

/* GET movies page. */
router.get('/', function (req, res, next) {
    Movie.find()
        .then(movies => {
            res.render('movies/index', { movies });
        })
        .catch(err => {
            console.error('An error occured', err);
            next(err);
        });

});

// /* Render the new view */
// router.get('/new', (req, res, next) => {
//     res.render('celebrities/new');
// });

/* GET a Movie page. */

router.get('/:id', function (req, res, next) {
    const id = req.params.id;
    Movie.findById(id)
        .then(movie => {
            res.render('movies/show', { movie });
        })
        .catch(err => {
            console.error('An error occured', err);
            next(err);
        });

});

// /* GET a Celebrity page. */

// router.post('/', function (req, res, next) {
//     const obj = {
//         name: req.body.name,
//         occupation: req.body.occupation,
//         catchPhrase: req.body.catchPhrase
//     }
//     Celebrity.create(obj)
//         .then(celebrity => {
//             res.redirect('/celebrities');
//         })
//         .catch(err => {
//             console.error('An error occured', err);
//             res.redirect('/celebrities/new');
//         });
// });

// /* Remove a specific id */

// router.post('/:id/delete', function (req, res, next) {
//     const id = req.params.id;
//     Celebrity.findByIdAndRemove(id)
//         .then(result => {
//             res.redirect('/celebrities');
//         })
//         .catch(error => {
//             next(error);
//         });
// });

// /* Edit get specific id */

// router.get('/:id/edit', function (req, res, next) {
//     const id = req.params.id;
//     Celebrity.findById(id)
//         .then(celebrity => {
//             res.render('celebrities/edit', {celebrity});
//         })
//         .catch(error => {
//             next(error);
//         });
// });

// /* Edit a specific id */

// router.post('/:id', function (req, res, next) {
//     const obj = req.body;
//     const id = req.params.id;
//     console.log(obj)
//     Celebrity.findByIdAndUpdate(id, obj)
//     .then(celebrity => {
//         res.redirect('/celebrities');
//     })
//     .catch(err => {
//         console.error('An error occured', err);
//         res.redirect('/celebrities/<%= id %>/edit');
//     });
// });




module.exports = router;

