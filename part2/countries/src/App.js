import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Countries from './Components/Countries.js'
import Filter from './Components/Filter.js'

function App() {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])

  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(filter.toLowerCase()))

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
  },[]);
  
  return (
    <div>
      <Filter filterValue = {filter} filterChange = {handleFilterChange} />
      <Countries countriesToShow = {countriesToShow} />
    </div>
  );
}

export default App;
