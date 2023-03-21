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

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Routes
app.use('/api/tasks', require('./routes/tasks.routes'));
app.use('/api/programs', require('./routes/programs.routes'));


// Public files
app.use(express.static(path.join(__dirname, '../../public')));

// Starting the server

app.listen(app.get('port'), () => {
    // eslint-disable-next-line no-console
    console.log(`Server listening on port ${app.get('port')}`);
});
