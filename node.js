const express = require('express');
const multer = require('multer');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// File upload config
const upload = multer({
  dest: 'uploads/',
  limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// Route to handle form submission
app.post('/submit', upload.single('product_image_1'), (req, res) => {
  const formData = req.body;
  const file = req.file;

  const logData = {
    timestamp: new Date().toISOString(),
    formData,
    file: file ? file.originalname : null
  };

  // Save to a JSON file (or connect to a DB here)
  fs.appendFile(
    path.join(__dirname, 'submissions.log'),
    JSON.stringify(logData) + '\n',
    err => {
      if (err) return res.status(500).json({ error: 'Failed to save submission.' });
      return res.status(200).json({ message: 'Submission received successfully.' });
    }
  );
});

// Health check
app.get('/', (req, res) => {
  res.send('B2Pinoy backend is running.');
});