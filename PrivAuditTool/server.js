const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the root directory
app.use(express.static(__dirname));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});