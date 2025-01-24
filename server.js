const express = require('express');
const app = express();
const PORT = 3000;


///////////////////////
///////Middleware//////
///////////////////////

app.use((req, res, next) => {
    console.log('This middleware is running for all routes');
    next();
})










//MAIN SERVER ROUTES
// Establish a connection to the database
app.get('/', (req, res) => {
    res.send('This is the base route');
});

app.get('/home', (req, res) => {
    res.send('<h2>Home Page</h2>');
})

/////////////////////////
///////Express Routers/////
/////////////////////////

const regionRouter = require('./Routes/regions');
const trainerRouter = require('./Routes/trainers');
const teamRouter = require('./Routes/teams');

app.use('/regions', regionRouter);
app.use('/trainers', trainerRouter);
app.use('/teams', teamRouter);





///////////Error Handler///////////
app.use((err, req, res, next) => {
    console.log(err);
    res.status(400).send(error.message + 'This is a problem');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});