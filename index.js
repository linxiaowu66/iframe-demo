const express = require('express')
const http = require('http')
const path = require('path')

const app = express()


app.use(express.static(path.join('./public'), { maxAge: 86400000 }))

app.use('/', (req, res) => res.sendFile(path.join(__dirname, './index.html')))


const server = http.createServer(app)
server.listen(3000, function listening() {
  console.log('Listening on %d', server.address().port)
})
