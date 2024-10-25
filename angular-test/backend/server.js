const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Create an instance of express
const app = express();
const PORT = 3000; // You can use any port you like

// Middleware to parse JSON and enable CORS
app.use(bodyParser.json());
app.use(cors());

// GET: Fetch deadline data
app.get('/api/deadline', (req, res) => {
    res.json({ secondsLeft: 7 });
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
