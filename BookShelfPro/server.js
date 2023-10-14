const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
app.use(express.static(__dirname));
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});