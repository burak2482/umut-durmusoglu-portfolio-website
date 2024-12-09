import express from 'express';
import { portfolyoAdd, uploadPortfolyoPhoto, resizePortfolyoPhoto } from '../../controllers/portfolyoAddController.js';
import { portfolyoGet } from '../../controllers/portfolyoGetController.js';
import { portfolyoDelete } from '../../controllers/portfolyoDeleteController.js';

const router = express.Router();



// Portfolio Ekleme Route'u
router.post(
  '/add',
  uploadPortfolyoPhoto,
  resizePortfolyoPhoto,
  portfolyoAdd
);

router.get('/get',portfolyoGet)

router.delete('/delete/:id', portfolyoDelete)

export default router;
