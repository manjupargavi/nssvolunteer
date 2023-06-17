const mongoose = require('mongoose');

// Get the MongoDB URI from the environment variable or use a default value
const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/nss";

// Connect to MongoDB using the provided URI
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Start your application or perform further operations
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error);
    // Handle the error appropriately
  });
