import PortfolyoModel from "../utils/models/portfolyoModel.js";

export const portfolyoGet = async (req, res) => {
  try {
    const portfolyo = await PortfolyoModel.find();

    res.status(200).json(portfolyo);
  } catch (err) {
    res.status(500).json({ error: 'Veritabanından portfolyo alınırken bir hata oluştu.' });
  }
};