import React from 'react';
import Newhart from './Shows/NewhartRatings';
import BobNewhart from './Shows/BobNewhartRatings';
//import DataFetch from "./DataFetch";
//import DataFetch2 from './DataFetch2';
//import DataFetch3 from "./DataFetch3";
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import ShowSearch from './Shows/ShowSearch';
import About from './About';
import NewhartData from './Data/NewhartData';
import BobNewhartData from './Data/BobNewhartData';
import DataHome from './Data/DataHome';
import RatingsHome from './Shows/RatingsMenu';
import { useAuth0 } from './react-auth0-wrapper';
import PrivateRoute from './PrivateRoute';

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute path="/about" component={About} />
          <PrivateRoute path="/datahome" component={DataHome} />
          <PrivateRoute path="/newhart_data" component={NewhartData} />
          <PrivateRoute path="/bobnewhart_data" component={BobNewhartData} />
          <PrivateRoute path="/showsearch" component={ShowSearch} />
          <PrivateRoute path="/ratingshome" component={RatingsHome} />
          <PrivateRoute path="/show/1/:name" component={BobNewhart} />
          <PrivateRoute path="/show/2/:name" component={Newhart} />
        </Switch>
      </Router>
    </div>
  );
};
//<DataFetch />
export default App;

//<DataFetch2 />
//<Airtable />
