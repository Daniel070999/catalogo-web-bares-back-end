// app.js
const express = require('express');
const barRoutes = require('./routes/barRoutes');
const registerRoutes = require('./routes/login/registerRoute');

const app = express();
app.use(express.json());

app.get('/', function (req, res, error) {
  res.end('Menu inicial');
});

// Rutas de bares
app.use('/bar', barRoutes);

//ruta de registro 
app.use('/register', registerRoutes);



app.listen(3000, () => {
  console.log('App Listening on port 3000');
});
