const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`database connected : ${conn.connection.host}`);
  } catch (error) {
    console.log(`${error} not connected `);
  }
};

module.exports = connectDB;
