const express = require('express')
const app = express()
const birds = require('./routes/birds')
const port = 3000
const fs = require("fs")


app.use('/birds', birds)
// app.use(express.static("public"))

// middleware 1
app.use((req, res, next) => {

    console.log(req.headers)
    req.harry = "I am Harry"
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const day = date.getDate();
    const month = date.getMonth() + 1; // Months are zero-indexed, so add 1
    const year = date.getFullYear();

    console.log(`Date: ${year}-${month}-${day}, Time: ${hours}:${minutes}:${seconds} gives the req of ${req.method}`);
    fs.appendFileSync("logs.txt", `Date: ${year}-${month}-${day}, Time: ${hours}:${minutes}:${seconds} gives the req of ${req.method}\n`)
    // res.send("Req send ...")
    next()
})
// middleware 2
app.use((req, res, next) => {
    console.log('m2')
    req.harry = "I am Rohan"
    next()
})

app.get('/', (req, res) => {
    res.send("Hello world..." + req.harry)
}
)
app.get('/about', (req, res) => {
    res.send("Hello about...")
}
)
app.listen(port, () => {
    console.log(`Hey there ! This is a middliware tut listening on ${port}`);

}
)