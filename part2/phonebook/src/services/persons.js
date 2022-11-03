import axios from 'axios'

const baseURL = 'http://localhost:3001/persons'

const getPersons = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}

const createPerson = person => {
    const request = axios.post(baseURL, person)
    return request.then(response => response.data)
}

const updatePerson = (id, person) => {
    const request = axios.put(`${baseURL}/${id}`, person)
    return request.then(response => response.data)
}

export default {getPersons, createPerson, updatePerson}