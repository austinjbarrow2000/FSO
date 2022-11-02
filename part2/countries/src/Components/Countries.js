import React from 'react'

const Countries = ({countriesToShow, setCountries}) => {
    if(countriesToShow.length === 1) {
        const selectedCountry = countriesToShow[0]
        return (
            <div>
                <h2>{selectedCountry.name.common}</h2>
                <p>capital {selectedCountry.capital}</p>
                <p>area {selectedCountry.area}</p>
                <h2>Spoken Languages</h2>
                Languages:
                <ul>
                    {Object.values(selectedCountry.languages).map(language => <li key = {language}>{language}</li>)}
                </ul>
                <img src={selectedCountry.flags.png} alt = "Country Flag"></img>

            </div>
        )
    }

    if( countriesToShow.length > 10 ) {
        return (
            <div>
                Too many matches, specify another filter
            </div>
        )
    }
    
    return (
        <ul>
            {countriesToShow.map(country => 
                <li>
                    <p key = {country.name.common}>{country.name.common} 
                        <button onClick = {() => setCountries([country])}>Show Me</button>
                    </p>
                </li>
            )}
        </ul>  
    )
}

export default Countries