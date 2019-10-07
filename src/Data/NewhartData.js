import React, { useReducer, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    margin: '0 2px',

    transform: 'scale(0.8)',
    minWidth: 100,
    backgroundColor: 'lightblue'
  },
  title: {
    fontSize: 30
  },
  pos: {
    marginBottom: 12
  }
});

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
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get('https://api.tvmaze.com/shows/1488/episodes')
      .then(response => {
        dispatch({ type: 'FETCH_SUCCESS', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'FETCH_ERROR' });
      });
  }, []);

  return (
    <div className="App">
      {state.error ? state.error : null}
      {state.loading ? (
        <div>"Loading"</div>
      ) : (
        <div>
          {state.post.map(post => (
            <Card className={classes.bullet} key={post.id}>
              <CardContent className={classes.title}>
                <b>Episode Name: {post.name}</b>
                <p>Season: {post.season}</p>

                <p>Episode Number: {post.number}</p>
                <p>Episode Summary: {post.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
/*
<img
                  src={post.image.original}
                  height="300px"
                  width="300px"
                  alt=""
                />
*/
