// app.js
const express = require('express');
const barRoutes = require('./routes/barRoutes');

const app = express();


app.get('/', function (req, res, error) {
  res.end('Menu inicial');
});

// Rutas de bares
app.use('/bar', barRoutes);



app.listen(3000, () => {
  console.log('App Listening on port 3000');
});
