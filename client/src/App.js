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

  }, [query, nominationList])

  // Event Handler for search
  const search = (e) => {
    setQuery(e.target.value)
  }

  // Event Handler for Nominate button
  const nominateMovie = (nominee) => {
    const shortList = [...nominationList]
    shortList.push(nominee)
    setNominationList(shortList)
  }

  // Event Handler for Nominate button
  const removeMovie = (nominee) => {
    const shortList = nominationList.filter(movie => movie.imdbID !== nominee.imdbID)
    setNominationList(shortList)
  }

  // Event Handler for rendering disabled button
  const disableButton = (movie) => {
    const result = nominationList.some(nominee => nominee.imdbID === movie.imdbID)
    return result

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
                <button 
                  type="button" 
                  // disabled={false}
                  disabled={disableButton(r)}
                  onClick={() => nominateMovie(r)}
                >
                  Nominate
                </button>
              </li>
            )}
          </ul>
        </div>

        <div className="card">
          <p>Nominees List"</p>
          <ul>
            {nominationList.map(n =>
              <li key={n.imdbID}>
                {n.Title} ({n.Year}) 
                <button
                  type="button"
                  onClick={() => removeMovie(n)}
                >
                  Remove
                </button>
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