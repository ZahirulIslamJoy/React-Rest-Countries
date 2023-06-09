import React, { useEffect, useState } from 'react';
import Country from '../country/Country';
import "./Countries.css"

const Countries = () => {
   const [countries,setCountries]=useState([]);
   useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => setCountries(data));
   }, []);

    return (
        <div className="country-container">
            {
                countries.map( country => <Country 
                country={country}
                key={country.cca3} 
                ></Country>)
            }
        </div>
    );
};

export default Countries;