const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./route/routes');
const mongoose = require('mongoose');
const {userr} = require('./src/user/userModel')

const DB_URI = 'mongodb://localhost:27017/user'


mongoose.connect(DB_URI,
  {
    UseNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true
},).then(() => console.log('******CONEXION ESTABLECIDA******')).catch((err) => { console.error(err);});

/*const crearUsuario = () => {
  userr.create(
    {
      DNI: '12345678111', // Cambia esto por un valor válido y único de DNI
      NDNI: '412629891111',
      Clave: '123451'
    }
  )};
  crearUsuario();*/
const user = [
  {
    firstname: "John",
    lastname: "Doe",
    email: "johndoe@example.com",
    password: "mypassword"
  }
];


const usser = async() => {

  const resultado = await userr.aggregate (
    [ { 

        $lookup:
        {
            from:"login",
            localField:"author",
            foreignField:"_DNI",
            as: "usuarioAuthor"
        }
      }
    ] 
    )
}

app.use(cors({
  origin: "http://localhost:4200"
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('¡Hola desde la ruta raíz!');
});

app.get('/user/create', (req, res) => {
    res.send(user);
  });

app.post('/user/create', (req, res) => {
  console.log(req.body);
  user.push(req.body);
  res.send(user);
});


app.post('/user/login', (req, res) => {
  const { DNI, NDNI, Clave } = req.body;

  const userFound = user.find(user => user.DNI === DNI && user.NDNI === NDNI && user.Clave === Clave);

  if (userFound) {
    res.send({ status: 'success' });
  } else {
    res.status(401).send({ status: 'error', message: 'Credenciales inválidas' });
  }
});



app.use(routes);

const port = 3000;
app.listen(port, (error) => {
  if (error) {
    console.log('Error al iniciar el servidor:', error);
  } else {
    console.log('Servidor iniciado en el puerto', port);
  }
});
