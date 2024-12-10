import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import validator from 'validator'

const Schema = mongoose.Schema;

const userSchema = new Schema({

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  }

})

userSchema.statics.signup = async function (email, password) {
  if(!email || !password) {
    throw new Error('Tüm gereken alanlar doldurulmalı')
  }

  if(!validator.isEmail(email)) {
    throw new Error('Email geçerli değil')
  }

  if(!validator.isStrongPassword(password)) {
    throw new Error('Şifre yeterince güçlü değil')
  }

  const exists = await this.findOne({email})

  if(exists) {
    throw new Error('Email kullanılmakta')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({email, password: hash});

  return user;
}

userSchema.statics.login = async function (email , password) {
  if(!email || !password) {
    throw new Error('Tüm gereken alanlar doldurulmalı')
  }

  const user = await this.findOne({email})

  if(!user) {
    throw new Error('Yanlış e-mail')
  }

  const match = await bcrypt.compare(password, user.password)

  if (!match) {
    throw new Error('Yanlış şifre')
  }
  
  return user;
}

const User = mongoose.model('user', userSchema);

export default User;