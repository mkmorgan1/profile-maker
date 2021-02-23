/*  */

/* Express Server and Port */
import express from 'express';
const app = express();
const PORT = 8080;

/* ENCRYPTION AND SESSIONS */
import bcrypt from 'bcrypt';


/* HOME */
app.get('/', (req, res) => {

});

/* LOGIN */
app.get('/login', (req, res ) => {
  res.render('login.ejs')
});
app.post('/login', (req, res ) => {

});

/* REGISTER */
app.get('/register', (req, res ) => {
  res.render('register.ejs')
});
app.post('/register', (req, res ) => {

});


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
});