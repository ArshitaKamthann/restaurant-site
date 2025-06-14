const express = require('express');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static('public'));

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on http://0.0.0.0:3000');
});




