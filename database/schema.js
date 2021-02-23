import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

export const Profile = mongoose.model('login', profileSchema);