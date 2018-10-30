import React from 'react';

const CountryDetail = (props) => {
  if (!props.country)
    return null;

  return (
    <div>
    <h3>
      Name: {props.country.name}
    </h3>
    <h4>
      Capital: {props.country.capital}
    </h4>
    <h4>Region: {props.country.region}
    </h4>
    <h5>Population: {props.country.population}
    </h5>
    <h5>
      Currency: {props.country.currencies[0].name}
    </h5>
    
  </div>
  )
}

export default CountryDetail;
