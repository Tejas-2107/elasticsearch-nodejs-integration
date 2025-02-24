const { Client } = require('@elastic/elasticsearch-serverless');
const client = new Client({
    node: 'https://my-elasticsearch-project-e815b3.es.us-east-1.aws.elastic.cloud:443',
    auth: {
        apiKey: process.env.ELASTIC_API_KEY
    }
});

module.exports = client;