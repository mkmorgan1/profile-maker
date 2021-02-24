import mongoose from 'mongoose';
import { Profile } from './schema.js';

try {
  mongoose.connect('mongodb://localhost/profiles', {useNewUrlParser: true, useUnifiedTopology: true});
} catch(error) {
  handleError(error);
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