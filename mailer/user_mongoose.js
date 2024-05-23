const mongoose = require('mongoose');

// Connect to MongoDB using the connection string
mongoose.connect('mongodb+srv://meanstack:meanstack1234@cluster.aaqvhyo.mongodb.net/portfolio_client_detail?retryWrites=true&w=majority', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // useCreateIndex: true // Adding this option to avoid deprecation warning
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Define the user schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    index: {
      unique: true,
    },
    match: /[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

  },
  message: {
    type: String,
    required: true
  },
  
  date: {
    type: Date,
    default: Date.now
  }
});

// Create the User model
const UserModel = mongoose.model('User', userSchema);

// Export the User model
module.exports = UserModel;
