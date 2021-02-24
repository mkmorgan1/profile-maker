/* DATABASE */
import { createNewProfile } from '../database/index.js';

/* Express Server and Port */
import express from 'express';
const app = express();
const PORT = 8080;

/* ENCRYPTION AND SESSIONS */
import bcrypt from 'bcrypt';
import passport from 'passport';
import flash from 'express-flash';
import session from 'express-session';
import initializePassport from './passportConfig.js';

initializePassport(
  passport,
  async email => await {},
  async id => {}
);

app.use(flash());
app.use(session({
  resave: false,
  saveUninitialized: false
}));

app.set('view-engin', 'ejs');
app.use(express.urlencoded({ extended: false }));


/* HOME */
app.get('/', (req, res) => {
  res.render('index.ejs');
});

/* LOGIN */
app.get('/login', (req, res ) => {
  res.render('login.ejs');
});
app.post('/login', (req, res ) => {
  console.log(req.body)
  res.redirect('/');
});

/* REGISTER */
app.get('/register', (req, res ) => {
  res.render('register.ejs');
});
app.post('/register', async (req, res ) => {
  try {
    const password = await bcrypt.hash(req.body.password, 10);
    const user = {
      name: req.body.name,
      email: req.body.email,
      password: password
    }
    await createNewProfile(user);
    res.redirect('/login');
  } catch {
    res.redirect('/register');
  }
});

/* LOGOUT */

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});