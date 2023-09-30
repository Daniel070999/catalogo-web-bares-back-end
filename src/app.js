const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser");

const barRoutes = require('./routes/bar/barRoutes');
const menuRoutes = require('./routes/menu/menuRoutes');
const sessionRoutes = require('./routes/session/sessionRoute');
const userRoutes = require('./routes/user/userRoutes');
const rolRoutes = require('./routes/rol/rolRoute');
const registerRoutes = require('./routes/register/registerRoute');
const files = require('./routes/files/files');
const security = require('./routes/security/securityRoute');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res, error) {
  res.end('Menu inicial');
});

// Rutas de bares
app.use('/bar', barRoutes);//ok

//ruta de session
app.use('/session', sessionRoutes);//ok

//ruta de menu
app.use('/menu', menuRoutes)//ok

//verificaSession
app.use('/check', security);//ok

//ruta de usuarios
app.use('/user', userRoutes);//ok

//ruta de roles
app.use('/rol', rolRoutes);//ok

//ruta de registros
app.use('/register', registerRoutes);

//ver archivos
app.use('/files', files);//ok

app.listen(port, () => {
  console.log(`App Listening on port ${port}`);
});