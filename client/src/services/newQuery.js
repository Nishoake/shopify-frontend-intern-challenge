import axios from 'axios'
const baseUrl = '/search'

const searchQuery = async info => {
  try{
    const response = await axios.get(`${baseUrl}/${info}`)

    if (response.data.Response) {
      return response.data.Search
    }

    return null

  } catch(error) {
    console.log(`WARNING: ${error}`)
  }
  
}

export default { searchQuery }