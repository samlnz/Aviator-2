
const express = require('express');
const path = require('path');
const app = express();

const port = process.env.PORT || 8080;

// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Always return index.html for any request to handle client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Production server running on port ${port}`);
});
