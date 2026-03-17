import React from 'react';

const Country = ({country}) => {
    return (
        
        <div>
            <h2>Country Name: {country.name.common}</h2>
        </div>
    );
};

export default Country;