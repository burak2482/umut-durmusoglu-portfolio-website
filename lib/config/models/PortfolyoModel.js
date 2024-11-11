import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now()
  },
});

const PortfolyoModel = mongoose.models.portfolyo || mongoose.model("portfolyo", Schema);

export default PortfolyoModel;
