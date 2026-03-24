import React, { use, useState } from 'react';
import Country from './country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    const [visitedCountries, setVisitedCountries] = useState([]);
    const handleVisitedCountries = (country) => {
        console.log('Visited Countries Clicked', country);
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)
    }

    const [visitedFlags, setVisitedFlags] = useState([]);
    const handlerVisitedFlags = (flags) => {
        const newFlags = [...visitedFlags, flags];
        setVisitedFlags(newFlags)

    }

    // console.log(countries);
    return (
        <div className=''>
            <h1>Total Countries: {countries.length}</h1>
            <h2>Total Visited Countries: {visitedCountries.length}</h2>
            <h2>Total Visited Flags: {visitedFlags.length}</h2>
            {
                <ol>
                    {
                        visitedCountries.map(country =>  <li
                        key={country.cca3.cca3}> 
                            
                            {country.name.common}</li>)
                    }
                </ol>
            }
            <div className="flags-container">

                {
                    visitedFlags.map((flag,i) => <img key={i} src={flag}></img>)
                }
            </div>
            <div className="countries">
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handlerVisitedFlags={handlerVisitedFlags}
                    ></Country>)

                }
            </div>
        </div>
    );
};

export default Countries;