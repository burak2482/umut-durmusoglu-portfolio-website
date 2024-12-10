import jwt from 'jsonwebtoken'
import User from '../utils/models/userModel.js'
import dotenv from 'dotenv';

dotenv.config();


const requireAuth = async (req,res,next) => {

  const {authorization} = req.headers

  if(!authorization) {
    return res.status(401).json({error: 'Authorization token required'})
  }

  const token = authorization.split(' ')[1]
  try {
    const{_id} = jwt.verify(token, process.env.SECRET)

    req.user = await User.findOne({_id}).select('_id')
    next()
  } catch (error) {
      console.error('Error:', err.response?.data || err.message);
      setError('An error occurred during login');
  }
}

export default requireAuth;