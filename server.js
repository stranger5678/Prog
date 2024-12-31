const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

// Mock database
let likesData = {
    1: 10, // Example: Card ID 1 has 10 likes
    2: 15, // Example: Card ID 2 has 15 likes
};

// Route to get likes for all cards
app.get('/api/likes', (req, res) => {
    res.json(likesData);
});

// Route to get likes for a specific card
app.get('/api/likes/:id', (req, res) => {
    const cardId = req.params.id;
    const likes = likesData[cardId] || 0;
    res.json({ cardId, likes });
});

// Route to add a like to a specific card
app.post('/api/likes/:id', (req, res) => {
    const cardId = req.params.id;

    // Increment the likes for the card
    likesData[cardId] = (likesData[cardId] || 0) + 1;

    res.json({
        message: 'Like added successfully!',
        cardId,
        totalLikes: likesData[cardId],
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
