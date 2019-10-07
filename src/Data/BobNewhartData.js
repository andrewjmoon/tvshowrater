import React, { useState, useEffect } from 'react';
import Pagination from 'react-hooks-paginator';
//import { Link } from 'react-router-dom';
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

function App(props) {
  const pageLimit = 20;
  const classes = useStyles();
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const [currentData, setCurrentData] = useState([]);

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows/5734/episodes')
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    setCurrentData(data.slice(offset, offset + pageLimit));
  }, [offset, data]);

  return (
    <div className="App">
      <h1>{props.match.params.name}</h1>
      <>
        {currentData.map(data => (
          <Card className={classes.bullet} key={data.id}>
            <CardContent className={classes.title}>
              <b>Episode Name: {data.name}</b>
              <p>Season: {data.season}</p>

              <p>Episode Number: {data.number}</p>
              <p>Episode Airdate: {data.airdate}</p>
            </CardContent>
          </Card>
        ))}
      </>
      <Pagination
        totalRecords={data.length}
        pageLimit={pageLimit}
        pageNeighbours={2}
        setOffset={setOffset}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
