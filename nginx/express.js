const express = require('express');
const app = express();
const PORT = 3001;

app.get('/*', (req, res) => {
    const token = req.headers['x-token'];
    const originalUri = req.headers['x-original-uri'];

    console.log(token,originalUri);

    // Validate the token
    if (isValidToken(token)) {
        // If valid, set X-Accel-Redirect header and send 200 status
        res.set('X-Accel-Redirect', `/play-serve/${originalUri}`);
        res.sendStatus(200);
    } else {
        // If invalid, return 403 status
        res.sendStatus(403);
    }
});

function isValidToken(token) {
    // Implement your token validation logic here
    return token === 'token-1234fre4r'; // Example validation
}

app.listen(PORT, () => {
    console.log(`Authentication server running on port ${PORT}`);
});
