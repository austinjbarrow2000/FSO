import React, { useEffect, useState } from 'react'
import Filter from './Components/Filter.js'
import PersonForm from './Components/PersonForm.js'
import Persons from './Components/Persons.js'
import personsService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([]) 
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
      personsService
        .createPerson({name: newName, number: newNumber, id: persons.length + 1})
        .then(returnedPerson => {
          console.log(returnedPerson)
          setPersons(persons.concat(returnedPerson))
        })
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
    personsService
      .getPersons()
      .then(persons => {
        setPersons(persons)
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