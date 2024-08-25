const express = require('express');
const bodyParser = require('body-parser');
const bfhlRoutes = require('./routes/bfhlRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/bfhl', bfhlRoutes);

// Error handling for unsupported routes
app.use((req, res, next) => {
    res.status(404).json({ is_success: false, message: "Route not found" });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
