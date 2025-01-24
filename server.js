const express = require('express');
const app = express();
const PORT = 3000;

// Establish a connection to the database
app.get('/', (req, res) => {
    res.send('This is the base route');
});

app.get('/home', (req, res) => {
    res.send('<h2>Home Page</h2>');
})




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});