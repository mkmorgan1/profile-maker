/*  */

/* Express Server and Port */
import express from 'express';
const app = express();
const PORT = 8080;

/* HOME */
app.get('/', (req, res) => {

});

/* LOGIN */
app.get('/login', (req, res ) => {

});
app.post('/login', (req, res ) => {

});

/* REGISTER */
app.get('/register', (req, res ) => {

});
app.post('/register', (req, res ) => {

});


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
});