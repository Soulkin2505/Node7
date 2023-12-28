// app.js
const express = require('express');
const app = express();
const Movie = require('./models');

app.use(express.json());

// Ruta para ingresar datos
app.post('/agregar-pelicula', async (req, res) => {
  try {
    const { title, director, year } = req.body;
    const movie = new Movie({ title, director, year });
    await movie.save();
    res.json(movie);
  } catch (error) {
    res.status(500).json({ error: 'No se pudo agregar la película' });
  }
});

// Ruta para mostrar datos
app.get('/peliculas', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: 'No se pudieron obtener las películas' });
  }
});

app.listen(3000, () => {
  console.log('Servidor en ejecución en http://localhost:3000');
});
