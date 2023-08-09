// app.js
const express = require('express');
const barRoutes = require('./routes/bar/barRoutes');
const loginRoutes = require('./routes/login/registerRoute');
const registerRoutes = require('./routes/register/registerMenuRoute');
const findById = require('./routes/findById');
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

//ruta de login
app.use('/login', loginRoutes);

//rutas de registros
app.use('/register', registerRoutes);

//verificaSession
app.use('/check', verifySession);

//busquedas por Id
app.use('/find', findById);


app.listen(port, () => {
  console.log(`App Listening on port ${port}`);
});
