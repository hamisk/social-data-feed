const express = require('express')
const router = express.Router()
const fs = require('fs')

const convertToDate = (ddmmyyyy) => {
    //  Convert a "dd/mm/yyyy" string into a Date object
    let dateArray = ddmmyyyy.split("/");
    let dateObj = new Date(dateArray[2] + '/' + dateArray[1] + '/' + dateArray[0]);
    return dateObj;     
}

const postsData = JSON.parse(fs.readFileSync("./data/MOCK_DATA.json"))
postsData.sort((a, b) => convertToDate(b.date_posted) - convertToDate(a.date_posted))
const users = [...new Set(postsData.map(post => post.name))]

const postsWithinNDays = (N) => {
    // Get current date
    let t = new Date();
    // Create UTC date for 30 days ago
    let d = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate() - N));
    // Filter data
    return postsData.filter(post => convertToDate(post.date_posted) >= d)
}

router
    // /posts route to get all posts 
    .get('/', (req, res) => {
        res
            .status(200)
            .json(postsData)
    })
    // get a list of all users
    .get('/users', (req, res) => {
        res
            .status(200)
            .json(users)
    })
    // get all posts by an individual user
    .get('/:user', (req, res) => {
        let { user } = req.params

        const userPosts = postsData.filter(post => post.name === user)
        res
            .status(200)
            .json(userPosts)
    })
    .get('/lastNdays/:NoOfDays', (req, res) => {
        let { NoOfDays } = req.params
        res
            .status(200)
            .json(postsWithinNDays(NoOfDays))
    })

module.exports = router;