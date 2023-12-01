const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet'); // Import the helmet middleware

app.use(express.json());
app.use(cors());

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        fontSrc: ["'self'", 'http://localhost:3000'], // Allow fonts from the same server
      },
    },
  })
);

const port = 3000;
const appel = require('./route/route');
app.use('/', appel);

mongoose.connect('mongodb://127.0.0.1:27017/salih', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erreur de connexion à la base de données:'));
db.once('open', function () {
  console.log('Connecté à la base de données MongoDB');
});

app.listen(port, () => {
  console.log(`L'application est en écoute sur le port ${port}`);
});
