require('dotenv').config(); 
const sequelize = require('./config/database');
const chatRoutes = require('./routes/chatRoutes');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Hotel Booking Chatbot API using openAI');
});

// Use chat routes
app.use('/chat', chatRoutes);

// Sync database and start server
sequelize.sync().then(() => {
  console.log('Database synced');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to sync database:', err);
});
