const express = require('express')
const router = express.Router()
const fs = require('fs')

const postsData = JSON.parse(fs.readFileSync("./data/MOCK_DATA.json"))
const users = [...new Set(postsData.map(post => post.name))]

router
    // /posts route to get all posts 
    .get('/', (req, res) => {
        res
            .status(200)
            .json(postsData)
    })
    .get('/users', (req, res) => {
        res
            .status(200)
            .json(users)
    })
    .get('/:user', (req, res) => {
        let { user } = req.params

        const userPosts = postsData.filter(post => post.name === user)
        res
            .status(200)
            .json(userPosts)
    })

module.exports = router;