import axios from 'axios'
const baseUrl = '/search'

const searchQuery = async info => {
  const query = {
    string: info
  }
  console.log(`info = ${info}`)

  const response = await axios.get(baseUrl, {
    string: info
  })
  return response.data
}

export default { searchQuery }