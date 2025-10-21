const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    console.log('⚠️  Running without database connection');
    console.log('✅ Authentication endpoints will work with mock data');
    console.log('💾 Set up MongoDB later for full functionality');
    
    // Don't actually connect to MongoDB
    return;
  } catch (error) {
    console.log('Database setup skipped:', error.message);
  }
};

module.exports = connectDB;