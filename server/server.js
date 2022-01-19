const express = require('express');
const cors = require('cors')
const app = express();

const port = process.env.PORT || 8080
const postsRoutes = require('./routes/posts')

// app.use(express.json());
app.use(cors());

app.use('/api/posts', postsRoutes)

app.listen(port, function() {
    console.log(`Connected to server at port ${port}`)
})