import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core';
import logo from "../../assets/logo.svg";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(theme => {
  return {
    toolBarMargin:{
      ...theme.mixins.toolbar,
      marginBottom:'3rem'
    },
    logo: {
      height:'7rem'
    },
    tabs:{
      marginLeft:'auto',
      paddingRight:'35px'
    },
    tab:{
      ...theme.typography.tab,
      minWidth:'auto',
      padding:"10px",
      marginLeft:'15px',
      marginRight:'15px',
      borderRadius:'40px',
      '& .MuiTouchRipple-root': {
        display:'none'
      }
    }
  }
})


function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const tabs = [{label:'Home',link:'/home'},{label:'Services',link:'/services'},{label:'The Revolution',link:'/revolution'},{label:'About Us',link:'/about'},{label:'Contact Us',link:'/contact'}]

const Header = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
    <ElevationScroll>
      {/* po defaultu je position fixed i color primary */}
      <AppBar position='fixed' color='primary'>
        <Toolbar disableGutters={true}>
          <img className={classes.logo} src={logo} alt='logo'></img>
          <Tabs className={classes.tabs} value={value} onChange={handleChange} indicatorColor='secondary'>
            {tabs.map(data => <Tab key={data.label} label={data.label} className={classes.tab}/>)}
          </Tabs>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
    <div className={classes.toolBarMargin}/>
    </>
  )
}

export default Header