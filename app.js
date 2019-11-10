// Dependencies
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 8080;

// Mongo DB Connection
mongoose.connect('mongodb://root:admin@mongo:27017/admin',
                    {
                        useNewUrlParser: true,
                        useUnifiedTopology: true
                    }
                ).then(() => console.log('Successfully connected to the mongodb')
                ).catch(error => {
                            console.log('Cannot connect to mongodb', error);
                            process.exit();
                });

// App Initialization
const app = express();

// Custom CORS options
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
};

// Middleware
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// App API Lists
require('./src/api/index')(app);

// App port
app.listen(port, () => {
   console.log('Node JS is running on port ', port);
});

module.exports = app;
