const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

require('dotenv').config()

app = express()

// Middleware
app.use(bodyParser.json())

// Intialize port
const port = process.env.PORT || 3006
app.listen(port, () => {
  console.log(`Gym Share app is currently listening at ${port}`)
})

// Routes
app.get('/', async (request, response) => {
  console.log(`The client is requesting an update on the Heroku App`)

  response.json('The Heroku App is working 👨🏾‍🍳')
})

app.get('/search', async (request, response) => {
  console.log(`The client is querying the OMDB API`)
  const body = await request.body.string
  console.log(`String = ${request.body.string}`)
  const endpoint = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${body}`

  const result = await axios.get(endpoint)
  // console.log(`Result = ${JSON.stringify(result.data.Search)}`)


  response.send(result.data.Search)
})