import React, { useState, useEffect } from 'react'
import newQuery from './services/newQuery'
import './styles.css'


function App() {
  // State Variables
  const [query, setQuery] = useState('')

  // Fetch movie results with useEffect hook
  useEffect(() => {
    async function fetchData() {
      const response = await newQuery.searchQuery(query)

      console.log(`Proxy API response = ${JSON.stringify(response)}`)
    }

    if(query !== ''){
      fetchData()
    }

  }, [query])

  // Event Handler for search
  const search = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div className="flex">
      <h1>
        The Shoppies
      </h1>

      <div className="card">
        <p>Movie Title</p>
        <form>
          <input type="text" value={query} onChange = {search}></input>
        </form>
      </div>
      
    </div>
  );
}

export default App