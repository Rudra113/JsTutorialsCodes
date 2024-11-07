const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send("Hello world!!! I am Rudra")
}
)
app.get('/about', (req, res) => {
    res.send("About me")
}
)
app.get('/contact', (req, res) => {
    res.send("Hello Contact me")
}
)
app.get('/blog', (req, res) => {
    res.send("Hello this is my blog")
}
)
app.get('/blog/:slug', (req, res) => {
    // for url http://127.0.0.1:3000/blog/JavaScript%20tutorials/mode=dark&region=in
    console.log(req.params) // { slug: 'JavaScript tutorials' }
    console.log(req.query) //{ mode: 'dark', region: 'in' }
    res.send(`Hello this is my blog and welcome to ${req.params.slug}`)
}
)
// app.get('/blog/introtojs', (req, res) => {
//     res.send("Hello this is my blog and welcome to introtojs")
// }
// )
// app.get('/blog/introtoexpress', (req, res) => {
//     res.send("Hello this is my blog and welcome to introtoexpress")
// }
// )

app.listen(port, () => {
    console.log(`Exapmle app is listening on port ${port}`)
}
)