const mongoose = require('mongoose');

const openDBConnection = async () => {
  await mongoose.connect(process.env.MONGODB_URL);
};

module.exports = openDBConnection;
