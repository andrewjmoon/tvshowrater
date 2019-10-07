import React, { useState, useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
  loading: true,
  error: '',
  post: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        error: ''
      };
    case 'FETCH_ERROR':
      return {
        loading: false,
        post: {},
        error: 'Something went wrong!"'
      };
    default:
      return state;
  }
};

export default () => {
  const [query, setQuery] = useState('newhart');
  const [search, setSearch] = useState('newhart');
  const [state, dispatch] = useReducer(reducer, initialState);
  useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(`https://api.tvmaze.com/search/shows?q=${query}`)
      .then(response => {
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_ERROR' });
      });
  }, [search]);

  return (
    <div className="App">
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button type="button" onClick={() => setSearch(query)}>
        Search
      </button>
      {state.error ? state.error : null}
      {state.loading ? (
        <div>"Loading"</div>
      ) : (
        <>
          {state.post.map(post => (
            <ul key={post.id}>
              <li>{post.show.name}</li>
              <img src={post.show.image.original} alt="" />
            </ul>
          ))}
        </>
      )}
    </div>
  );
};
