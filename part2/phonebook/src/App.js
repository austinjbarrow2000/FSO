import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Filter from './Components/Filter.js'
import PersonForm from './Components/PersonForm.js'
import Persons from './Components/Persons.js'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))


  const addPerson = (event) => {
    event.preventDefault()
    if(!(newName.length > 0 && newNumber.length > 0)) {
      alert('Please enter a name and number.');
      return;
    }

    if(persons.filter(person => person.name === newName).length === 0) {
      setPersons(persons.concat({name: newName, number: newNumber, id: persons.length}))
      setNewName('')
      setNewNumber('')
    } else{
      alert(`${newName} is already in the phonebook.`)
    }

    console.log(filter)
    
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  },[]);


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterValue = {filter} filterChange = {handleFilterChange} />
      <h3>Add a New</h3>
      <PersonForm onSubmit={addPerson} nameValue = {newName} nameChange={handleNameChange} 
        numberValue = {newNumber} numberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      <Persons personsToShow = {personsToShow} />
    </div>
  )
}

export default App