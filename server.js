//  DEPENDENCIES
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

//GLOBALS
const PORT = process.env.PORT || 3000;
const MONGOURL = process.env.MONGODB_URI || 'mongodb://localhost:27017/dadjokes';
const whitelist = [
    'http://localhost:3001',
    'https://quirky-knuth-bf45cb.netlify.app'
];
const corsOptions = {
    origin: function (origin, callback) {
        console.log(origin)
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};


//DB CONNECTION
mongoose.connection.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));
mongoose.connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => console.log('connected to mongoose...'));

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// CONTROLLERS/ROUTES
const dadJokesController = require('./controllers/dadjokes.js');
app.use('/dadjokes', dadJokesController);

// app.get('/', (req, res)=>{
//     res.send('What happened when the cannibal came home late for dinner?...<br/>His wife gave him the cold shoulder') 
// })






app.listen(PORT, ()=>{
    console.log(`Listening to Dad Jokes on port: ${PORT}`)
})