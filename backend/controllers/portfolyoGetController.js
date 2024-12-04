import PortfolyoModel from "../utils/models/portfolyoModel.js";

export const portfolyoGet =  async (req, res) => {
  try {
    const portfolyolar = await PortfolyoModel.find();
    res.json(portfolyolar);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching Portfolyolar', error: err });
  }
};