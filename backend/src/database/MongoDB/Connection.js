const mongoose = require('mongoose');

const connectToDatabase = () => mongoose.connect('mongodb://localhost:27017/PersonDB');

export default connectToDatabase;