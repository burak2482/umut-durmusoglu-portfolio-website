import express, { query } from 'express';
import { portfolyoAdd, uploadPortfolyoPhoto, resizePortfolyoPhoto} from '../../controllers/portfolyoAddController.js';
import { portfolyoGet } from '../../controllers/portfolyoGetController.js';
import { portfolyoDelete } from '../../controllers/portfolyoDeleteController.js';
import { getAfis, getIllustrasyon, getKitapKapagi, getPoster, getOdul, getLogo } from '../../controllers/portfolyoParamsGetController.js';
import requireAuth from '../../middleware/requireAuth.js'

const router = express.Router();

router.get('/get',portfolyoGet)

router.get('/kitap-kapagi',getKitapKapagi)
router.get('/odul',getOdul)
router.get('/logo',getLogo)
router.get('/poster',getPoster)
router.get('/afis',getAfis)
router.get('/illustrasyon',getIllustrasyon)


router.use(requireAuth)

// Portfolio Ekleme Route'u
router.post(
  '/add',
  uploadPortfolyoPhoto,
  resizePortfolyoPhoto,
  portfolyoAdd
);

router.delete('/delete/:id', portfolyoDelete)

export default router;
