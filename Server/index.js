const express = require('express');
const app = express();
const mongoose = require('mongoose');
const kitchens = require('./routes/kitchens');

app.use('/api/kitchens', kitchens);

mongoose.connect('mongodb://localhost/kitchendb')
    .then(() => console.log('You are now conected to MongoDB!'))
    .catch((err) => console.error('Something went wrong', err));

app.get('/', (req, res) => {
    res.send('Default Route');
});

const port = 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));

