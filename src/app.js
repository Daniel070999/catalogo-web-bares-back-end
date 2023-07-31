// app.js
const express = require('express');
const barRoutes = require('./routes/bar/barRoutes');
const registerRoutes = require('./routes/login/registerRoute');
const verifySession = require('./helper/security/verifySession');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = 3000;

app.get('/', function (req, res, error) {
  res.end('Menu inicial');
});

// Rutas de bares
app.use('/bar', barRoutes);

//ruta de registro 
app.use('/login', registerRoutes);

//verificaSession
app.use('/check', verifySession);


app.listen(port, () => {
  console.log(`App Listening on port ${port}`);
});
