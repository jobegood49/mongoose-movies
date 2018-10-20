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

/* Render the new view */
router.get('/new', (req, res, next) => {
    res.render('movies/new');
});

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

/* Add a movie. */

router.post('/', function (req, res, next) {
    // let {body} = req.body
    // console.log(body)
    let showtimes = []
    if (req.body.afternoonTime) showtimes.push(req.body.afternoonTime)
    if (req.body.morningTime) showtimes.push(req.body.morningTime)

    let stars = []
    if (req.body.femaleActor) stars.push(req.body.femaleActor)
    if (req.body.maleActor) stars.push(req.body.maleActor)

    // let showtimes = [req.body.afternoonTime]
    const obj = {
        stars: stars,
        showtimes: showtimes,
        title: req.body.title,
        director: req.body.director,
        image: req.body.image,
        description: req.body.description
    }
    
    Movie.create(obj)
        .then(movie => {
            res.redirect('/movies');
        })
        .catch(err => {
            console.error('An error occured', err);
            res.redirect('/movies/new');
        });
});

/* Remove a specific movie */

router.post('/:id/delete', function (req, res, next) {
    const id = req.params.id;
    Movie.findByIdAndRemove(id)
        .then(result => {
            res.redirect('/movies');
        })
        .catch(error => {
            next(error);
        });
});

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

