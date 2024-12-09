import PortfolyoModel from "../utils/models/portfolyoModel.js";

export const portfolyoGet = async (req, res) => {
  try {
    const portfolyo = await PortfolyoModel.find();

    // Fotoğrafı base64'e dönüştürme
    const updatedPortfolyo = portfolyo.map((item) => {
      if (item.photo) {
        // Veritabanındaki binary fotoğrafı base64 formatına çevir
        item.photo = `data:image/jpeg;base64,${item.photo.toString('base64')}`;
      }
      return item;
    });

    res.status(200).json(updatedPortfolyo); // Fotoğrafı base64 formatında gönder
  } catch (err) {
    res.status(500).json({ error: 'Veritabanından portfolyo alınırken bir hata oluştu.' });
  }
};