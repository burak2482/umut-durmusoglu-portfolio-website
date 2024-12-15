import PortfolyoModel from "../utils/models/portfolyoModel.js";

export const getKitapKapagi = async (req, res) => {
  try {

    const portfolyo = await PortfolyoModel.find({turler: "Kitap Kapağı"});

    res.status(200).json(portfolyo);
  } catch (error) {
    res.status(500).json({error: 'Veritabanından portfolyo alınırken bir hata oluştu.'});
  }
}

export const getPoster = async (req, res) => {
  try {

    const portfolyo = await PortfolyoModel.find({turler: "Poster"});

    res.status(200).json(portfolyo);
  } catch (error) {
    res.status(500).json({error: 'Veritabanından portfolyo alınırken bir hata oluştu.'});
  }
}

export const getAfis = async (req, res) => {
  try {

    const portfolyo = await PortfolyoModel.find({turler: "Afis"});

    res.status(200).json(portfolyo);
  } catch (error) {
    res.status(500).json({error: 'Veritabanından portfolyo alınırken bir hata oluştu.'});
  }
}

export const getLogo = async (req, res) => {
  try {

    const portfolyo = await PortfolyoModel.find({turler: "Logo"});

    res.status(200).json(portfolyo);
  } catch (error) {
    res.status(500).json({error: 'Veritabanından portfolyo alınırken bir hata oluştu.'});
  }
}

export const getIllustrasyon = async (req, res) => {
  try {

    const portfolyo = await PortfolyoModel.find({turler: "İllüstrasyon"});

    res.status(200).json(portfolyo);
  } catch (error) {
    res.status(500).json({error: 'Veritabanından portfolyo alınırken bir hata oluştu.'});
  }
}

export const getOdul = async (req, res) => {
  try {

    const portfolyo = await PortfolyoModel.find({turler: "Ödül"});

    res.status(200).json(portfolyo);
  } catch (error) {
    res.status(500).json({error: 'Veritabanından portfolyo alınırken bir hata oluştu.'});
  }
}

