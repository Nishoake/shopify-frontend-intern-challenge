import axios from 'axios'
const baseUrl = '/search'

// Performing GET request on the proxy server
const searchQuery = async info => {
  try{
    const response = await axios.get(`${baseUrl}/${info}`)
    return response.data

  } catch(error) {
    console.log(`WARNING: ${error}`)
  }
  
}

export default { searchQuery }