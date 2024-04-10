const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set up static files directory
app.use(express.static( 'public'));

// Route for the home page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});