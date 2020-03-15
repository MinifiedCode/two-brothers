const express = require('express')
const app = express()
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Hi9@#04Piif',
  database: 'twobrothers'
})

connection.connect()

function getLawnImages(res) {
  connection.query('SELECT * FROM lawnImages', function (err, results) {
    res.send(results)
  })
}

app.get('/api/getLawnImages', (req, res) => {
  getLawnImages(res)
})

app.listen(3001, () => {console.log('Listening on port 3001')})