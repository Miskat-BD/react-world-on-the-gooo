import React, { useState } from 'react';
import './Country.css'
const Country = ({country, handleVisitedCountries, handlerVisitedFlags}) => {
    // console.log(handleVisitedCountries);
    // console.log(country);

    const [visited, setVisited] = useState(false)
    const handler = ()=>{
        // console.log("Btn Clicked");
        // setVisited(true)
        // setVisited(visited ? false : true)
        setVisited(!visited)
        handleVisitedCountries(country)
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <h3>Name: {country.name.common}</h3> 
            <h4>Capital: {country.capital.capital}</h4>
            <h4>Region: {country.region.region}</h4>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area.area > 300000 ? "Big Country" : "Small Country"}</p>
            <button onClick={handler}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
            <button onClick={()=>{handlerVisitedFlags(country.flags.flags.png)}}>Add Flag</button>
        </div>
    );
};

export default Country;