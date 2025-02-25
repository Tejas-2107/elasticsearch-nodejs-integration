const express = require("express");
const router = express.Router();
const { Client } = require('@elastic/elasticsearch-serverless');
const dotenv = require("dotenv");
dotenv.config();

const client = new Client({
    node: process.env.NODE,
    auth: {
        apiKey: process.env.ELASTIC_API_KEY
    }
});

const indexName = 'practice';

// Insert Single Document
router.post('/add', async (req, res) => {
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

//fetch data 
router.get('/search', async (req, res) => {
    try {
        const result = await client.search({
            index: indexName,
            query: {
                bool: {
                    must: [
                        { match_phrase: { "branch": "IT" } },
                    ]
                }
            },
            size: 10
        });
        res.json(result.hits.hits);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

module.exports = router;