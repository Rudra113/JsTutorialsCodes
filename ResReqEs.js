const express = require('express')
const blog = require('./routes/blog')
const app = express()
const port = 3000

app.use(express.static('public2'))
app.use('/blog', blog)

app.get('/', (req, res) => {
    res.send("Hello world!!! I am Rudra ")
}
)
app.post('/', (req, res) => {
    console.log("Hey it is a post req")
    res.send("Hello world!!! I am post ")
}
)
app.put('/', (req, res) => {
    console.log("Hey it is a put req")
    res.send("Hello world!!! I am put ")
}
)
app.delete('/', (req, res) => {
    console.log("Hey it is a delete req")
    res.send("Hello world!!! I am delete ")
}
)

app.get('/about', (req, res) => {
    console.log("Hey it is about page")
    res.sendFile('templates/about.html', { root: __dirname })
}
)
app.get('/api', (req, res) => {
    res.json({ a: 1, b: 2, c: 85, namr: ["rudra", "sahil"] })
}
)

app.listen(port, () => {
    console.log(`Exapmle app is listening on port ${port}`)
}
)
