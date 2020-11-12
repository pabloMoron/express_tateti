const express = require('express')
const app = express()
var bodyParser = require('body-parser')
const port=3000;

app.use(bodyParser.json());
app.all('/', (req, res) => {
    res.json({val:"HELLO!!"})
})

app.listen(port, () => console.log(`Server started at port http://localhost:${port}`))