import * as Local from 'passport-local';
const LocalStrategy = Local.Strategy;
import bcrypt from 'bcrypt';
import { getByEmail, getById } from '../database/index.js';

const initializePassport = (passport) => {
  const authenticateUser = async (email, password, done) => {
    const user = await getByEmail(email);
    console.log('USER', user);

    if (user == null) {
      return done(null, false, {message: 'Invalid email or password'});
    }

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user);
      } else {
        return done(null, false, {message: 'Password incorrect'});
      }
    } catch(e) {
      return done(e);
    }
  }

  passport.use(new LocalStrategy( {usernameField: 'email'}, authenticateUser ));
  passport.serializeUser((user, done) => done(null, user._id));
  passport.deserializeUser((id, done) => done(null, getById(id)));
}

export default initializePassport;