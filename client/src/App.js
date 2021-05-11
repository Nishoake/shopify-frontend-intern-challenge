import React, { useState } from 'react'
import newQuery from './services/newQuery'
import './styles.css'


function App() {
  // State Variables
  const [query, setQuery] = useState('')

  // Event Handler for search
  const search = async (e) => {
    setQuery(e.target.value)
    console.log(e.target.value)

    // shoot a GET request to a proxy server
    console.log(`query = ${query}`)
    const response = await newQuery.searchQuery(e.target.value)
    console.log(`Proxy API response = ${JSON.stringify(response)}`)
  }

  return (
    <div className="flex">
      <h1>
        The Shoppies
      </h1>

      <div className="card">
        <p>Movie Title</p>
        <form>
          <input type="text" id="search" onChange = {search}></input>
        </form>
      </div>
      
    </div>
  );
}

export default App