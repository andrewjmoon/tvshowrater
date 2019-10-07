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

export default function DataHome() {
  const classes = useStyles();
  return (
    <div className="App">
      <Card className={classes.bullet}>
        <Link className="Link" to="/">
          {' '}
          Home Menu
        </Link>
        <hr />
        <Link className="Link" to="/bobnewhart_data">
          {' '}
          Bob Newhart Show Data
        </Link>
        <hr />
        <Link className="Link" to="/newhart_data">
          {' '}
          Newhart Show Data
        </Link>
        <hr />
      </Card>
    </div>
  );
}
