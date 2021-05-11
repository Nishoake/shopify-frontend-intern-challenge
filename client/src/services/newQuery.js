import axios from 'axios'
const baseUrl = '/search'

const searchQuery = async info => {

  const response = await axios.get(`${baseUrl}/${info}`)

  return response.data
}

export default { searchQuery }