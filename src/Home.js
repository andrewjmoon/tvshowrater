import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from './react-auth0-wrapper';

export default () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <Link className="Link" to="/">
        Home
      </Link>
      <br />
      <Link className="Link" to="/about">
        {' '}
        About Page
      </Link>
      <br />
      <Link className="Link" to="/datahome">
        {' '}
        Data Menu{' '}
      </Link>
      <br />
      <Link className="Link" to="/ratingshome">
        {' '}
        Ratings Menu{' '}
      </Link>
      <br />

      <Link className="Link" to="/showsearch">
        {' '}
        Show Search
      </Link>
    </div>
  );
};
