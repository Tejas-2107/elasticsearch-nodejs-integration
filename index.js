const express = require("express");
const client = require('./elasticSearch');
const dotenv = require("dotenv");
const app = express();
app.use(express.json());

dotenv.config();

const indexName = 'practice';

// Insert Single Document
app.post('/add', async (req, res) => {
    try {
        const { name, branch, cgpa, roll_num } = req.body;
        const response = await client.index({
            index: indexName,
            body: { name, branch, cgpa, roll_num },
        });
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(5000, () => {
    console.log("Server Started on the port 5000");
});