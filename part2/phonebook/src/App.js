import React, { useEffect, useState } from 'react'
import Filter from './Components/Filter.js'
import Notification from './Components/Notification.js'
import PersonForm from './Components/PersonForm.js'
import Persons from './Components/Persons.js'
import personsService from './services/persons'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

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
      // alert(`${newName} is already in the phonebook.`)
      if( window.confirm(`${newName} is already in the phonebook, replace the phone number with the new one?`)) {
        updateNumber({...persons.find(person => person.name === newName), number: newNumber})
      }
    }

    console.log(filter)
    
  }

  const updateNumber = (updatingPerson) => {
    personsService
      .updatePerson(updatingPerson.id, updatingPerson)
      .then(updatedPerson => {
        setPersons(persons.map(person => person.id !== updatingPerson.id ? person : updatedPerson))
      })
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

  const deletePerson = (id) => {

    console.log(`delete ${id}person`)
    if(window.confirm(`Are your sure you want to delete ${persons.find(person => person.id === id).name}`)) {
      personsService
      .deletePerson(id)
      .then(deletedPerson => {
        setPersons(persons.filter(person => person.id !== id))
      })
    } 
  }

  return (
    <div>
      <Notification message = {errorMessage}/>
      <h2>Phonebook</h2>
      <Filter filterValue = {filter} filterChange = {handleFilterChange} />
      <h3>Add a New</h3>
      <PersonForm onSubmit={addPerson} nameValue = {newName} nameChange={handleNameChange} 
        numberValue = {newNumber} numberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      <Persons personsToShow = {personsToShow} deletePerson = {deletePerson}/>
    </div>
  )
}

export default App