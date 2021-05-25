import React from 'react';
import { Link } from 'react-router-dom';

const Country = () => {
  return (
    <div>
      <Link to="/" className="btn btn-light">
        <i className="fas fa-arrow-left"></i>Back Home
      </Link>
      <h1>Country Data</h1>
    </div>

  )
}

export default Country;
