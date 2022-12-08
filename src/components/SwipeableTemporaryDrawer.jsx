import React from 'react';
import { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  drawerContainer:{
    paddingRight:'1rem'
  }
});

const tabs = [{label:'Home',link:'/'},{label:'Services',link:'/services'},{label:'The Revolution',link:'/revolution'},{label:'About Us',link:'/about'},{label:'Contact Us',link:'/contact'}]
const menuItems = [{label:'Services',link:'/services'},{label:'Custom Software Development',link:'/customsoftware'},{label:'Mobile App Development',link:'/mobileapps'},{label:'Web App Development',link:'/website'}]

const SwipeableTemporaryDrawer = ({listItems}) => {
  const classes = useStyles();
  const [state,  setState ] = useState(false)

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState((prev) => !prev);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {tabs.map((data) => (
          <ListItem component={Link} to={data.link} button key={data.label}>
            <ListItemText primary={data.label} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {menuItems.map(data => (
          <ListItem component={Link} to={data.link} button key={data.label}>
            <ListItemText primary={data.label} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.drawerContainer}>
        <>
          <Button onClick={toggleDrawer('top', true)}>Menu</Button>
          <SwipeableDrawer
            anchor={'top'}
            open={state}
            onClose={toggleDrawer('top', false)}
            onOpen={toggleDrawer('top', true)}
          >
            {list('top')}
          </SwipeableDrawer>
        </>
    </div>
  );
}

export default SwipeableTemporaryDrawer