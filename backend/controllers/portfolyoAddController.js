import multer from 'multer';
import sharp from 'sharp';
import PortfolyoModel from '../utils/models/portfolyoModel.js';

// Multer Storage ve Filter
const multerStorage = multer.memoryStorage();

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

  req.file.name = `user-${req.user.id}-${Date.now()}.jpeg`;

  try {
    await sharp(req.file.buffer)
      .resize(500, 500)
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
  const { type, photo, name } = req.body;

  if (!type || !photo || !name) {
    return res.status(400).json({ error: 'Lütfen tüm alanları doldurun' });
  }

  try {
    const Portfolyo = await PortfolyoModel.create({ type, photo, name });
    res.status(201).json(Portfolyo);
  } catch (err) {
    res
      .status(400)
      .json({ message: 'Error happened while creating Portfolyo', error: err });
  }
};
