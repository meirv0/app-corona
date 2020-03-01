import mongoose from 'mongoose';


const MONGO_URI = process.env.MONGODB_URI;

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});