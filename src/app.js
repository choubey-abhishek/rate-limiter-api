const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// Load env variables
dotenv.config();

const app = express();
app.use(express.json());

// Routes will come here later

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
