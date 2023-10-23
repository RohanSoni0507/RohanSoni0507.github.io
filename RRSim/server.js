const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, '')));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});