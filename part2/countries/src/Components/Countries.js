import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Weather from './Weather.js';

const Countries = ({countriesToShow, setCountries}) => {

    if(countriesToShow.length === 1) {
        const selectedCountry = countriesToShow[0]


        return (
            <div>
                <h1>{selectedCountry.name.common}</h1>
                <p>capital {selectedCountry.capital}</p>
                <p>area {selectedCountry.area}</p>
                <h3>Spoken Languages</h3>
                Languages:
                <ul>
                    {Object.values(selectedCountry.languages).map(language => <li key = {language}>{language}</li>)}
                </ul>
                <img src={selectedCountry.flags.png} alt = "Country Flag"></img>
                <Weather selectedCountry = {selectedCountry}/>
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
            {countriesToShow.map((country, i) => 
                <li key = {i}>
                    <p key = {country.name.common}>{country.name.common} 
                        <button onClick = {() => setCountries([country])}>Show Me</button>
                    </p>
                </li>
            )}
        </ul>  
    )
}

export default Countries