const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const html = fs.readFileSync('./1.html')
  res.end(html)
})

server.listen(8989)