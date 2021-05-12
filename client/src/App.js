import React, { useState, useEffect } from 'react'
import newQuery from './services/newQuery'
import './styles.css'


function App() {
  // State Variables
  const [query, setQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [nominationList, setNominationList] = useState([])

  // Fetch movie results with useEffect hook
  useEffect(() => {
    async function fetchData() {
      const response = await newQuery.searchQuery(query)
      setSearchResults(response)
    }

    if(query !== ''){
      fetchData()
    }

  }, [query])

  // Event Handler for search
  const search = (e) => {
    setQuery(e.target.value)
  }

  // Event Handler for Nominate button
  const nominate = () => {
    // do something
    // pass the movie object as a parameter into the function
    // then push the movie into the nominationList array
    // render this array
    // how to toggle the disabled attribute
    // disabled={INSERT result of state function}
    // the function should return true or false
    // we need to check the search array against the nomination array
    // array.includes returns a boolean value could possibly use this
  }

  // Conditionally render when search results are available
  if (searchResults){
    return (
      <div className="flex">
        <h1>
          The Shoppies
        </h1>

        <div className="card">
          <p>Movie Title</p>
          <form>
            <input type="text" value={query} onChange={search}></input>
          </form>
        </div>

        <div className="card">
          <p>Results for "{query}"</p>
          <ul>
            {searchResults.map(r =>
              <li key={r.imdbID}>
                {r.Title} ({r.Year}) 
                <button type="button">Nominate</button>
              </li>
            )}
          </ul>
        </div>

      </div>
    )
  } else {
    return (
      <div className="flex">
        <h1>
          The Shoppies
      </h1>

        <div className="card">
          <p>Movie Title</p>
          <form>
            <input type="text" value={query} onChange={search}></input>
          </form>
        </div>

        <div className="card">
          <p>Results for "{query}"</p>
        </div>

      </div>
    )
  }
  
}

export default App