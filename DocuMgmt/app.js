const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const routes = require('./routes');
app.use(express.static(__dirname));

app.use(cors());
app.use(bodyParser.json());

app.use('/api', routes);

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post('/api/upload', upload.single('document'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, error: 'No file uploaded' });
    }

    const { originalname, buffer } = req.file;

    // You can perform any processing you need here without saving the file
    // For example, you can analyze the file content using AI, extract information, or perform other operations

    // Respond with a success message (no storage of the file)
    res.json({ success: true, message: 'File uploaded successfully' });
});

app.post('/api/tag', (req, res) => {
    const { documentName, tags } = req.body;

    // Placeholder for tagging logic
    // For example, update a database entry with the provided tags

    // Respond with a success message
    res.json({ success: true, message: 'Tags added successfully' });
});

app.get('/api/getDocuments', (req, res) => {
    // Implement logic to get a list of documents with their names and tags
    // For example, you can query a database here

    // Sample document list
    const documentList = [
        { name: 'Document 1.pdf', tags: ['Tag1', 'Tag2', 'Tag3'] },
        { name: 'Document 2.docx', tags: ['Tag4', 'Tag5'] }
    ];

    res.json({ success: true, documents: documentList });
});

app.get('/api/search', (req, res) => {
    const { term } = req.query;

    // Implement logic to search for documents based on tags containing the search term
    // For example, you can query a database here

    // Placeholder for search results
    const results = [];

    res.json({ success: true, results });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});