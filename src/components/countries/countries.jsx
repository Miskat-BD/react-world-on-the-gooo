import React, { use } from 'react';
import Country from './country';

const Countries = ({countriesPromise}) => {

    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;
    console.log(countries);

    return (
        <div>
            {
                countries.map(country => <Country country={country}></Country>)
            }
            
        </div>
    );
};

export default Countries;