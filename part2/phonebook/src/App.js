import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas',
      phoneNumber: '040-1234567'
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newPhoneNumber, setPhoneNumber] = useState('')


  const addPerson = (event) => {
    event.preventDefault()
    if(persons.filter(person => person.name === newName).length === 0) {
      setPersons(persons.concat({name: newName, phoneNumber: newPhoneNumber}))
      setNewName('')
    } else {
      alert(`${newName} is already in the phonebook`)
    }
    
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit = {addPerson}>
        <div>
          name: 
          <input 
            value = {newName}
            onChange = {handleNameChange}
          />
        </div>
        <div>
          number:
          <input 
            value = {newPhoneNumber}
            onChange = {handlePhoneNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
      {persons.map(person =>
        <p key = {person.name}>{person.name} {person.phoneNumber}</p>
      )}
    </div>
  )
}

export default App