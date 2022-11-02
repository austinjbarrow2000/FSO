import { useState } from 'react'

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
    } else{
      alert(`${newName} is already in the phonebook.`)
    }
    
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with 
        <input
          value = {filter}
          onChange = {handleFilterChange}
        />
      </div>
      <h2>Add a New</h2>
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
            value = {newNumber}
            onChange = {handlePhoneNumberChange}
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      
      {personsToShow.map(person =>
        <p key = {person.name}>{person.id}. {person.name} {person.number}</p>
      )}
    </div>
  )
}

export default App