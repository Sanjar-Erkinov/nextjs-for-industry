import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: 'user'
    },
    root: {
      type: Boolean,
      default: false
    },
    avatar: {
      type: String,
      default: 'https://res.cloudinary.com/dh6p5edpv/image/upload/v1620120653/Avater/stefan-stefancik-QXevDflbl8A-unsplash_rrv7mf.jpg'
    }
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('User', userSchema)

export default User