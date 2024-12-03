import mongoose from 'mongoose'

const types = ['Kitap Kapağı', 'Afiş', 'Logo', 'Ödül', 'Poster', 'İlüstrasyon'];

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: types,
  },
});

const PortfolyoModel = mongoose.Model('portfolyo', Schema);

export default PortfolyoModel;