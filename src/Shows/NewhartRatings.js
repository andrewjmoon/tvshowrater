import React, { Component } from 'react';
import Airtable from 'airtable';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Pagination from 'react-js-pagination';
//import "../App.css";
//import { Link } from "react-router-dom";
//import { ColumnChart, LineChart } from "react-chartkick";

const base = new Airtable({ apiKey: process.env.REACT_APP_KEY }).base(
  process.env.REACT_APP_BASE
);
const styles = theme => ({
  bullet: {
    margin: '0 2px',

    transform: 'scale(0.8)',
    minWidth: 800,
    backgroundColor: 'lightblue',
    textAlign: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },
  title: {
    fontSize: 40
  },
  items: {
    fontSize: 25
  }
});

//apiKey and base is read-only and data cannot be edited
class NewhartRatings extends Component {
  state = {
    items: [],
    isLoading: false,
    activePage: 1,
    itemsCountPerPage: 5,
    totalItemsCount: 1
  };

  componentDidMount() {
    base('Newhart')
      .select({ view: 'Grid view' })
      .eachPage((items, fetchNextPage) => {
        this.setState({
          items
        });
        console.log(items);
        fetchNextPage();
      });
  }
  handlePageChange = pageNumber => {
    this.setState({ activePage: pageNumber });
  };

  render() {
    const { classes } = this.props;
    const { items } = this.state;

    return (
      <div className="App">
        <h1>Episodes</h1>

        {items
          .slice(
            (this.state.activePage - 1) * this.state.itemsCountPerPage,
            this.state.activePage * this.state.itemsCountPerPage
          )
          .map(record => {
            return (
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
              >
                <Grid item xs={10}>
                  <Card className={classes.bullet}>
                    <CardContent className={classes.title}>
                      <b>{record.fields['Show']}</b>
                    </CardContent>
                    <CardContent className={classes.items}>
                      {' '}
                      Season: {record.fields['Season']}
                    </CardContent>
                    <CardContent className={classes.items}>
                      {' '}
                      EpisodeNumber: {record.fields['Number']}
                    </CardContent>
                    <CardContent className={classes.items}>
                      {' '}
                      EpisodeName: {record.fields['EpisodeName']}
                    </CardContent>

                    <CardContent className={classes.items}>
                      {' '}
                      Rating: {record.fields['Rating']}
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            );
          })}
        <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.itemsCountPerPage}
          totalItemsCount={450}
          pageRangeDisplayed={5}
          onChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default withStyles(styles)(NewhartRatings);

/*
<hr />
        <h2>Batting Average</h2>
        <ColumnChart
          data={items.map(record => {
            return [`${record.fields["Player"]}`, record.fields["AVG"]];
          })}
        />
        <h2>RBIs</h2>
        <ColumnChart
          data={items.map(record => {
            return [`${record.fields["Player"]}`, record.fields["RBI"]];
          })}
        />
        <h2>Hits</h2>
        <LineChart
          data={items.map(record => {
            return [`${record.fields["Player"]}`, record.fields["Hits"]];
          })}
        />
        <h2>HR</h2>
        <LineChart
          data={items.map(record => {
            return [`${record.fields["Player"]}`, record.fields["HR"]];
          })}
        />
        <Link className="App" to="/menu">
          Menu
        </Link>
  */
//process.env.REACT_APP_AIRTABLE
