import express from 'express'
import PortfolyoModel from '../models/portolyoModel';

const router = express.Router();


router.post('/add', async (req, res)) => {
  const {type, photo, name} = req.body;

  if(!type || !photo || !name) {
    return res.status(400).json({error: 'Lütfen tüm alanları doldurun'});
  }

  try {
    const Portfolyo = PortfolyoModel.create({type, photo, name})
    res.status(201).json(Portfolyo)
  } catch (err) {
    res.status(400).json({message: 'Error happened while creating Portfolyo', error: err})
  }
}

router.get('/get' async (req,res)) => {
  try {
    const portfolyolar = await Portfolyo.find();
    res.json(portfolyolar)
  } catch (err) {
    res.status(500).json({message: 'Error fetching Porfolyolar', error: err})
  }

}

router.delete('/delete' async (req,res)) => {
  const {id} = req.params

  try {
    await Pokemon.findByIdAndDelete(id)
  } catch (err) {
    console.log(err)
  }
}

export default router;