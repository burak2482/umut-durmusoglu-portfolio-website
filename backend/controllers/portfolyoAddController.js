import multer from 'multer';
import sharp from 'sharp';
import PortfolyoModel from '../utils/models/portfolyoModel.js';
import path from 'path'

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "../frontend/public/portfolyophotos");
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1]
    cb(null, `user-${req.user.id}-${Date.now()}.${ext}`);
  }
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new Error('Not an image, please upload images.'), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

export const uploadPortfolyoPhoto = upload.single('photo');

export const resizePortfolyoPhoto = async (req, res, next) => {
  if (!req.file) return next();

  req.file.name = `user-${Date.now()}.jpeg`;

  const newPhotoName = `user-${Date.now()}.jpeg`;

  try {
    await sharp(req.file.path)
      .resize(900, 700)
      .toFormat('jpeg')
      .toFile(`../frontend/public/portfolyophotos/${req.file.name}`);
    next();
  } catch (error) {
    res
      .status(500)
      .json({ error: 'Fotoğraf işlenirken bir hata oluştu', details: error.message });
  }
};


export const portfolyoAdd = async (req, res) => {
  const { turler, name } = req.body;

  if (!turler || !req.file || !name) {
    console.log('Eksik alanlar:', { turler, file: req.file, name });
    return res.status(400).json({ error: 'Lütfen tüm alanları doldurun' });
  }

  try {
    const Portfolyo = await PortfolyoModel.create({
      turler,
      name,
      photo: req.file.name,
    });
    res.status(201).json(Portfolyo);
  } catch (err) {
    res
      .status(400)
      .json({ message: 'Error happened while creating Portfolyo', error: err });
  }
};