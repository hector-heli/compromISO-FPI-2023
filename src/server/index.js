/* eslint-disable no-console */
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const { mongoose } = require('./database.js');

const app = express();

// Settings
app.set('port', process.env.PORT || 3001);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api/tasks', require('./routes/tasks.routes'));

// Public files
app.use(express.static(path.join(__dirname, '../../public')));

// Starting the server

app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${app.get('port')}`);
});
