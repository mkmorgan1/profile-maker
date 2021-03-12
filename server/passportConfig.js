import * as Local from 'passport-local';
const LocalStrategy = Local.Strategy;
import bcrypt from 'bcrypt';
import { getByEmail, getById } from '../database/index.js';

const initializePassport = (passport) => {
  /* AUTHENTICATES THE LOGIN */
  const authenticateUser = async (email, password, done) => {
    const user = await new Promise((resolve, reject) => {
      getByEmail(email, (err, res) => {
        err ? reject(err) : resolve(res);
      })
    }).then(result => result).catch(err => err);

    /* IF USER DOES NOT EXIST */
    if (user == null) {
      return done(null, false, {message: 'Invalid email or password'});
    }

    /* CHECK PASSWORD */
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
  passport.serializeUser((user, done) => done(null, user.id));
  passport.deserializeUser((id, done) => getById(id, done));
}

export default initializePassport;