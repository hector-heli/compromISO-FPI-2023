/* eslint-disable no-console */
const mongoose = require('mongoose');

const URI = 'mongodb+srv://hectorheli:student@cluster0.cgsri.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(URI)
  .then((db) => console.log(`db ${db} is connected`))
  .catch((err) => console.error(err));

module.exports = mongoose;
