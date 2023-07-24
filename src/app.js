// app.js
const express = require('express');
const barRoutes = require('./routes/bar/barRoutes');
const registerRoutes = require('./routes/login/registerRoute');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());
const port = 3000;

app.get('/', function (req, res, error) {
  res.end('Menu inicial');
});

// Rutas de bares
app.use('/bar', barRoutes);

//ruta de registro 
app.use('/login', registerRoutes);



app.listen(port, () => {
  console.log(`App Listening on port ${port}`);
});
