// app.js
const express = require('express');
const barRoutes = require('./routes/bar/barRoutes');
const loginRoutes = require('./routes/login/registerRoute');
const registerRoutes = require('./routes/register/registerMenuRoute');
const find = require('./routes/find/findById');
const update = require('./routes/update/updates');
const files = require('./routes/files/files');
const security = require('./helper/security/security');
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
app.use('/check', security);

//busquedas por Id
app.use('/find', find);

//actualizaciones
app.use('/update', update);

//ver archivos
app.use('/files', files);




app.listen(port, () => {
  console.log(`App Listening on port ${port}`);
});
