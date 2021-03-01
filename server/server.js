
/* FOR SECRET */
import dotenv from 'dotenv';
dotenv.config();

/* DATABASE */
import { createNewProfile, getByEmail, getById } from '../database/index.js';

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

initializePassport(passport);

app.set('view-engin', 'ejs');
app.use(express.urlencoded({ extended: false }));

app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

/* HOME */
app.get('/', checkAuthenticated, (req, res) => {
  res.render('index.ejs');
});

/* LOGIN */
app.get('/login', checkNotAuthenticated, (req, res ) => {
  res.render('login.ejs');
});
app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login',
  failureFlash: true,
}));

/* REGISTER */
app.get('/register', checkNotAuthenticated, (req, res ) => {
  res.render('register.ejs');
});
app.post('/register', checkNotAuthenticated, async (req, res ) => {
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

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/login')
  }
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  } else {
    next();
  }
}

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});