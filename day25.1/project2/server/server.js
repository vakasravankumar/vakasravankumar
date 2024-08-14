const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/merncrud');

// Item Schema and Model
const itemSchema = new mongoose.Schema({
  empid: { 
    type: Number,
    required: true,
    unique: true 
  },
  username: { 
    type: String,
    required: true,
  },
  age: { 
    type: Number,
    required: true,
  },
  email: { 
    type: String,
    required: true,
    unique: true, // Assuming email should be unique
  },
  address: { 
    type: String,
    required: true,
  },
  salary: { 
    type: Number,
    required: true,
  }
});

const Item = mongoose.model('Item', itemSchema);

// Routes
// Get all items
app.get('/items', async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific item by ID
app.get('/items/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new item
app.post('/items', async (req, res) => {
  const item = new Item({
    empid: req.body.empid,
    username: req.body.username,
    age: req.body.age,
    email: req.body.email,
    address: req.body.address,
    salary: req.body.salary
  });

  try {
    const newItem = await item.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update an existing item
app.put('/items/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (item) {
      res.json(item);
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete an item
app.delete('/items/:id', async (req, res) => {
  try {
    const item = await Item.findByIdAndDelete(req.params.id);
    if (item) {
      res.json({ message: 'Item deleted' });
    } else {
      res.status(404).json({ message: 'Item not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Start server
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});