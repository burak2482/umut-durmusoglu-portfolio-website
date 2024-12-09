import mongoose from 'mongoose'

const turlerNeler = ['Kitap Kapağı', 'Afiş', 'Logo', 'Ödül', 'Poster', 'İlüstrasyon'];

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  photo: {
    type: Buffer,
    required: true,
  },
  turler: {
    type: String,
    required: true,
    enum: turlerNeler,
  },
});

const PortfolyoModel = mongoose.model('portfolyo', Schema);

export default PortfolyoModel;