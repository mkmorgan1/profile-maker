import mongoose from 'mongoose';
import { Profile } from './schema.js';

try {
  mongoose.connect('mongodb://localhost/profiles', {useNewUrlParser: true, useUnifiedTopology: true});
} catch(error) {
  console.error(error);
}

export const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to Mongodb');
});

export const createNewProfile = async (userInfo) => {
  await Profile.create({
    name: userInfo.name,
    email: userInfo.email,
    password: userInfo.password
  });
}

export const getByEmail = (email, done) => {
  Profile.findOne({email: email}, (err, res) => {
    if (err) {
      done(err);
    } else {
      done(null, res);
    }
  })
}

export const getById = (id, done) => {
  Profile.findById(id, (err, res) => {
    if (err) {
      done(err);
    } else {
      done(null, res);
    }
  });
}