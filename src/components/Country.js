import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Country = () => {
  const [country, setCountry] = useState([])
  const {name} = useParams()

  useEffect(() => {
    const fetchCountryData = async () => {
      const response = await fetch(`https:restcountries.eu/rest/v2/name/${name}`);
      const country = await response.json();
      setCountry(country);
      console.log(country);
    }
    fetchCountryData();
  }, [])


  return (
    <div>
      <Link to="/" className="btn btn-light">
        <i className="fas fa-arrow-left"></i>Back Home
      </Link>
      <section className="country">
        {country.map((country) => {
        {/*destructuring info from each country*/}
          const {numericCode, flag, name, nativeName, population, region, subregion, capital, topLevelDomain, currencies, languages, borders} = country;
        })}
      </section>
    </div>

  )
}

export default Country;
