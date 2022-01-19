const express = require('express');
const cors = require('cors')
const app = express();

const port = process.env.PORT || 8080

app.use(express.json());
app.use(cors());



app.listen(8080, function() {
    console.log("Connected to server at port 8080")
})