const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('My name is Yao Assignon. DevOps Engineering is my passion'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
