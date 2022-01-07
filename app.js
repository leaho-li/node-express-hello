const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  console.log(`Received request at: Date.now()`)
  res.send('Hello World! ' + new Date().toDateString())
  
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
