import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    margin: '0 2px',
    fontSize: 40,
    transform: 'scale(0.8)',
    minWidth: 100,
    backgroundColor: 'lightblue'
  }
});

export default () => {
  const classes = useStyles();
  return (
    <div className="App">
      <Card className={classes.bullet}>
        <Link className="Link" to="/">
          {' '}
          Home Menu
        </Link>
        <hr />

        <Link className="Link" to="/show/1/Bob Newhart Show">
          {' '}
          Bob Newhart Show Ratings
        </Link>
        <hr />

        <Link className="Link" to="/show/2/Newhart Show">
          {' '}
          Newhart Show Ratings
        </Link>
        <hr />
      </Card>
    </div>
  );
};
