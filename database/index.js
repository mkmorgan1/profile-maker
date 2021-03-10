import mongoose from 'mongoose';
import { Profile } from './schema.js';

try {
  mongoose.connect('mongodb://localhost/profiles', {useNewUrlParser: true, useUnifiedTopology: true});
} catch(error) {
  console.error(error);
}

/* DB CONNECTION */
export const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to Mongodb');
});

/* CREATE NEW LOGIN */
export const createNewProfile = async (userInfo) => {
  await Profile.create({
    name: userInfo.name,
    email: userInfo.email,
    password: userInfo.password
  });
}
/* EMAIL */
export const getByEmail = (email, done) => {
  Profile.findOne({email: email}, (err, res) => {
    if (err) {
      done(err);
    } else {
      done(null, res);
    }
  })
}

/* ID */
export const getById = (id, done) => {
  Profile.findById(id, (err, res) => {
    if (err) {
      done(err);
    } else {
      done(null, res);
    }
  });
}

export const updateProfile = (id, updated, done) => {
  const query = {_id: id}
  const toUpdate = {name: updated.name, bio: updated.bio}
  Profile.updateOne(query, toUpdate, (err, res) => {
    if (err) {
      done(err);
    } else {
      done(null, res);
    }
  });
}