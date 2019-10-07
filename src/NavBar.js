import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import { useAuth0 } from './react-auth0-wrapper';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E20 90%)',
    flexGrow: 3
  },
  secondaryBar: {
    zIndex: 0
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    color: 'black'
  },
  hide: {
    display: 'none'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'lightcyan',
    color: 'black'
  },
  drawerHeader: {
    display: 'flex',

    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  }
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  function toggleDrawer(booleanValue) {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: 'lightgreen', color: 'black' }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h3"
            align="center"
            className={classes.title}
            style={{ color: 'black' }}
          >
            TV Show Rater
          </Typography>
          {!isAuthenticated && (
            <Button onClick={() => loginWithRedirect({})}>Log in</Button>
          )}
          {isAuthenticated && <Button onClick={() => logout()}>Log out</Button>}
        </Toolbar>
      </AppBar>
      <hr />
      <AppBar
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
        style={{ backgroundColor: 'lightgreen', color: 'white' }}
      >
        <Toolbar className={classes.title}>
          {isAuthenticated && (
            <>
              <Link className={classes.title} to="/">
                Home
              </Link>
              <Link className={classes.title} to="/about">
                {' '}
                About Page
              </Link>
              <Link className={classes.title} to="/datahome">
                {' '}
                TV Data Menu
              </Link>
              <Link className={classes.title} to="/ratingshome">
                {' '}
                Rating Menu
              </Link>
              <Link className={classes.title} to="/showsearch">
                {' '}
                Show Search
              </Link>
            </>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        style={{ color: `black` }}
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
        <List>
          <ListItem>
            <Link className="Link" to="/">
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link className="Link" to="/about">
              {' '}
              About Page
            </Link>
          </ListItem>
          <ListItem>
            <Link className="Link" to="/datahome">
              {' '}
              TV Data Menu
            </Link>
          </ListItem>
          <ListItem>
            <Link className="Link" to="/ratingshome">
              {' '}
              Rating Menu
            </Link>
          </ListItem>

          <ListItem>
            <Link className="Link" to="/showsearch">
              {' '}
              Show Search
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
