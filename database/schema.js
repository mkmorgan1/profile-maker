import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  bio: String,
});
const messageSchema = new mongoose.Schema({
  name: String,
  message: String,
  date: String,
});

export const Profile = mongoose.model('login', profileSchema);
export const Message = mongoose.model('messages', messageSchema);