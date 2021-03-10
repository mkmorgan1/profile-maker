
/* FOR SECRET */
import dotenv from 'dotenv';
dotenv.config();

/* DATABASE */
import { createNewProfile, getByEmail, getById } from '../database/index.js';

/* EXPRESS PATH AND PORT */
import express from 'express';
import path from 'path';
const app = express();
const PORT = 8080;

/* ENCRYPTION AND SESSIONS */
import bcrypt from 'bcrypt';
import passport from 'passport';
import flash from 'express-flash';
import session from 'express-session';
import initializePassport from './passportConfig.js';
import methodOverride from 'method-override';

initializePassport(passport);

/* VIEWS FOR HTML AND EJS */
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('view engine','html');

app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../views')));
app.use(flash());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

/* HOME */
app.get('/', /* checkAuthenticated,*/ (req, res) => {
  // res.render('app.html', { user: req.user.name });
  res.render('app.html', { user: 'req.user.name' });
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
  if (req.body.password !== req.body.confirmPassword) {
    req.flash('match', 'Passwords do not match');
    res.redirect('/register');
  } else {
    try {
      const password = await bcrypt.hash(req.body.password, 10);
      const user = {
        name: req.body.name,
        email: req.body.email,
        password: password,
        bio: '',
        icon: 'far fa-grin-squint'
      }
      await createNewProfile(user);
      res.redirect('/login');
    } catch {
      res.redirect('/register');
    }
  }

});

/* LOGOUT */
app.delete('/logout', (req,res) => {
  req.logOut();
  res.redirect('/login');
});

/* PROFILE */
app.get('/profile', (req, res) => {
  const user = {
    name: 'req.body.name',
    email: 'req.body.email',
    bio: '',
    icon: 'far fa-grin-squint'
  }
  res.send(user);
  //res.send(req.user);
});

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