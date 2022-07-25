const express = require('express')
const RestClient = require('rest-client')

const config = {
  "discordID": "999172936936210432",
  "discordSecret": "vby1LHEoK5J2vU5Y9lyI4fwTFZelswjt",
  "githubID": "f80dbb68c7a1e00f4f9d",
  "githubSecret": "4c0c70438961f7e3ce6a406eddfd7465d928ee4c",
  "port": 3000
}

const app = express()

// setup static + middleware
app.use(express.static('dist'))

app.get('/personal', (req, res) => {
  return res.sendFile('dist/index.html', { root: '.' })
})

app.listen(config.port, () => {
  console.log('server is listening on port 3000')
})