const express = require('express')
const router = express.Router()
const fs = require('fs')

const postsData = JSON.parse(fs.readFileSync("./data/MOCK_DATA.json"))

router
    // /posts route to get all posts 
    .get('/', (req, res) => {
        res
            .status(200)
            .json(postsData)
    })

module.exports = router;