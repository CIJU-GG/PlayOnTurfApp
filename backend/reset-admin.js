// reset-admin.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const User = require('./src/models/User');

const resetAdmins = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(' MongoDB Connected');

    // Remove existing admin users
    const result = await User.deleteMany({ role: 'admin' });
    console.log("Removed  admin users");

    console.log('Now run node seed.mjs to create a new admin user');
    process.exit();
  } catch (error) {
    console.error(' Error:', error);
    process.exit(1);
  }
};

resetAdmins();
