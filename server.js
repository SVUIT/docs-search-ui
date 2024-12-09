const fs = require('fs');
const path = require('path');
const express = require('express');
const app = express();


const directory = path.join(__dirname, 'APIS');
app.use(express.static(directory));

app.get('/api/files', (req, res) => {
  const search = req.query.search || '';
  fs.readdir(directory, (err, files) => {
    if (err) {
      return res.status(404).json({ error: 'Directory not found' });
    }

    const result = files.filter(file => file.includes(search) && file !== 'index.html' && file !== 'script.js');
    res.json(result);
  });
});


app.listen(4000, () => {
    console.log('Server running on http://localhost:4000');
});
  