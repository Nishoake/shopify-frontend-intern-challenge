const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

require('dotenv').config()

app = express()

// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('build'))

// Intialize port
const port = process.env.PORT || 3006
app.listen(port, () => {
  console.log(`The Shoppies app is currently listening at ${port}`)
})

// Routes
// app.get('/', async (request, response) => {
//   console.log(`The client is requesting an update on the Heroku App`)

//   response.json('The Heroku App is working 👨🏾‍🍳')
// })

app.get('/search/:query', async (request, response) => {
  console.log(`The client is querying the OMDB API`)

  const body = await request.params.query
  console.log(`Request = ${JSON.stringify(body)}`)
  
  const endpoint = `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${body}`

  const result = await axios.get(endpoint)
  // console.log(`Result = ${JSON.stringify(result.data.Search)}`)


  response.send(result.data.Search)
})