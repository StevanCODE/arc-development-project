import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core';
import logo from "../../assets/logo.svg";
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/styles';
import TabsComponent from './TabsComponent';
import SwipeableTemporaryDrawer from '../SwipeableTemporaryDrawer';

const useStyles = makeStyles(theme => {
  return {
    toolBarRoot:{
      [theme.breakpoints.down('md')]:{
        justifyContent:"space-between"
      }
    },
    toolBarMargin:{
      ...theme.mixins.toolbar,
      marginBottom:'0.5rem',
      [theme.breakpoints.up('sm')]:{
        marginBottom:'1.5rem'
      },
      [theme.breakpoints.up('md')]:{
        minHeight:'64px',
        marginBottom:'3rem'
      }
    },
    logo: {
      height:'3.7rem',
      [theme.breakpoints.up('sm')]:{
        height:"5rem"
      },
      [theme.breakpoints.up('md')]:{
        height:'7rem'
      }
    },
    logoContainer:{
      padding:0,
      cursor:'pointer',
      '&:hover':{
        backgroundColor:'transparent'
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

const Header = () => {
  const classes = useStyles()
  const theme = useTheme()
  const [value, setValue] = useState(0);
  const matches = useMediaQuery(theme.breakpoints.up('md')) 

  return (
    <>
    <ElevationScroll>
      {/* po defaultu je position fixed i color primary */}
      <AppBar position='fixed' color='primary'>
        <Toolbar disableGutters={true} classes={{root:classes.toolBarRoot}}>
          <Button disableRipple component={Link} to='/' onClick={() => setValue(0)} className={classes.logoContainer}>
            <img className={classes.logo} src={logo} alt='logo'></img>
          </Button>
          {matches ? <TabsComponent value={value} setValue={setValue}/> : <SwipeableTemporaryDrawer/>}
        </Toolbar>
      </AppBar>
    </ElevationScroll>
    <div className={classes.toolBarMargin}/>
    </>
  )
}

export default Header