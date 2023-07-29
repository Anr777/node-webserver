const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;


// Handlebars

app.set('view engine', 'hbs');

hbs.registerPartials( __dirname + '/views/partials', ( err ) => {
  console.log(err)
});

// Servir contenido estatico

app.use( express.static('public') );

app.get('/', ( req, res ) => {
  res.render('home', {
    nombre: 'Anibal Mancilla',
    titulo: 'Curso de node',
  });
});

app.get('/generic', ( req, res ) => {
  res.render('generic', {
    nombre: 'Anibal Mancilla',
    titulo: 'Curso de node',
  });
});

app.get('/elements', ( req, res ) => {
  res.render('elements', {
    nombre: 'Anibal Mancilla',
    titulo: 'Curso de node',
  });
});

// app.get('/', ( req, res ) => {
//   res.send('Home page');
// });

// app.get('/hola-mundo', ( req, res ) => {
//   res.send('Hola mundo en su respectiva ruta');
// });


app.get('/generic', ( req, res ) => {
  res.sendFile(__dirname + '/public/generic.html');
});
app.get('/elements', ( req, res ) => {
  res.sendFile(__dirname + '/public/elements.html');
});

app.get('*', ( req, res ) => {
  res.sendFile(__dirname + '/public/404.html');
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${ port }`);
});