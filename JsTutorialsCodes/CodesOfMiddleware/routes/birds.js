const express = require('express')
const router = express.Router()

// middleware that is specific to this router
const timeLog = (req, res, next) => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-indexed, so add 1
    const year = date.getFullYear();

    console.log(`Date: ${year}-${month}-${day}, Time: ${hours}:${minutes}:${seconds} gives the req of ${req.method}`);
    next()
}
router.use(timeLog)

// define the home page route
router.get('/', (req, res) => {
    res.send('Birds home page')
})
// define the about route
router.get('/about', (req, res) => {
    res.send('About birds')
})

module.exports = router