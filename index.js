const express = require('express')
const app = express()
const port = 3000

app.get('/hiepdz123', (req, res) => {
    var a = 1;
    var b = 2;
    var c = a+b;
  res.send('Hello World!')
})
app.get('/hiepdz', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})