import mongoose from "mongoose";

const dbConnect = async () => {
  if(mongoose.connection.readyState >= 1) return;

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected')
  } catch (err) {
    console.log('MongoDB connection error:' err);
    process.exit(1);
  }
}

export default dbConnect;