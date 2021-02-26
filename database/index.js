import mongoose from 'mongoose';
import { Profile } from './schema.js';

try {
  mongoose.connect('mongodb://localhost/profiles', {useNewUrlParser: true, useUnifiedTopology: true});
} catch(error) {
  console.error(error);
}

const db = mongoose.connection;
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

export const getByEmail = (email) => {
  return new Promise ((resolve, reject) => {
    Profile.findOne({email: email}, (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    })
      .then(result => result)
      .catch(err => err);
  });
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

/* tests */
(async () => {
  const user = await getByEmail('mkmorgan1994@gail.com');
  console.log("user email: ", user);
})();
