const celebrities = [
    {
      name: 'Tom Cruise',
      occupation: 'actor',
      catchPhrase: 'Show me the money!'
    },
    {
      name: 'Beyonce',
      occupation: 'singer and actress',
      catchPhrase: 'Pray You Catch Me!'
    },
    {
      name: 'Daffy Duck',
      occupation: 'cartoon',
      catchPhrase: 'You´r despicable!'
    },
    {
      name: 'Britney Spears',
      occupation: 'singer',
      catchPhrase: 'It´s Britney, b*tch!'
    },
    {
      name: 'Taylor Swift',
      occupation: 'singer',
      catchPhrase: 'Look what you made me do!'
    }
  ];
  
  const mongoose = require('mongoose');
  const celebritySchema = require('../models/Celebrity.js');
  const Celebrity = mongoose.model('Celebrity', celebritySchema);
  
//   mongoose.connect('mongodb://localhost/celebritiesApp')
//   .then(() => {
//     console.log('Connected to Mongo!');
  
//     Celebrity.create(celebrities)
//     .then(res => {
//       console.log('Los datos se han introducido correctamente.', res);
//     })
//     .catch(err => {
//       console.error('Se ha producido un error', err)
//     });
  
//   })
//   .catch(err => {
//     console.error('Error connecting to mongo', err);
//   });

mongoose.connect('mongodb://localhost/celebritiesApp')

Celebrity.create(celebrities, (err) => {
    if (err) {
        throw (err)
    }
    console.log(`Created ${celebrities.length} movies`)
    mongoose.connection.close()
})