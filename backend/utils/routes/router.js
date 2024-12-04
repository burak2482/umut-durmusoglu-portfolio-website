import express from 'express';
import PortfolyoModel from '../models/portfolyoModel';
import {
  portfolyoAdd,
  uploadPortfolyoPhoto,
  resizePortfolyoPhoto,
} from '../../controllers/portfolyoAddController';
import portfolyoGetController from '../../controllers/portfolyoGetController';
import portfolyoDeleteController from '../../controllers/portfolyoDeleteController';

const router = express.Router();

// Portfolio Ekleme Route'u
router.post(
  '/add',
  portfolyoAdd,
  uploadPortfolyoPhoto,
  resizePortfolyoPhoto
);

router.get('/get', portfolyoGetController.portfolyoGet)

router.delete('/delete/:id', portfolyoDeleteController.portfolyoDelete)

export default router;
