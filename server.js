const express = require('express');

const movie = require('./routes/api/movie');
const actor = require('./routes/api/actor');
const grossing = require('./routes/api/grossing');

const app = express();

app.get('/', (req, res) => res.send('Test'));

// Use Routes
app.use('/api/movie', movie);
app.use('/api/actor', actor);
app.use('/api/grossing', grossing);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
