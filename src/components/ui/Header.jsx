import React, { useEffect, useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core';
import logo from "../../assets/logo.svg";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


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
    },
    button:{
      ...theme.typography.estimate,
      borderRadius:'3rem',
      maxHeight:"3rem",
      marginRight:'2rem',
    },
    logoContainer:{
      padding:0,
      cursor:'pointer',
      '&:hover':{
        backgroundColor:'transparent'
      }
    },
    menuItemStyle:{
      textDecoration:'none'
    },
    menuClasses: {
      marginTop:'0.4rem'
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

const tabs = [{label:'Home',link:'/'},{label:'Services',link:'/services'},{label:'The Revolution',link:'/revolution'},{label:'About Us',link:'/about'},{label:'Contact Us',link:'/contact'}]

const Header = () => {
  const classes = useStyles()
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false)

  useEffect(() => {
    switch(window.location.pathname){
      case '/':
        setValue(0)
        break
      case '/services':
        setValue(1)
        break
      case '/website':
        setValue(1)
        break
      case '/mobileapps':
        setValue(1)
        break
      case '/customsoftware':
        setValue(1)
        break
      case '/revolution':
        setValue(2)
        break
      case '/about':
        setValue(3)
        break
      case '/contact':
        setValue(4)
        break
      default:
        setValue(false)
    }
  },[value])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setOpen(true)
  }
  const handleClose = () => {
    setAnchorEl(null);
    setOpen(false)
  };
  return (
    <>
    <ElevationScroll>
      {/* po defaultu je position fixed i color primary */}
      <AppBar position='fixed' color='primary'>
        <Toolbar disableGutters={true}>
          <Button disableRipple component={Link} to='/' onClick={() => setValue(0)} className={classes.logoContainer}>
            <img className={classes.logo} src={logo} alt='logo'></img>
          </Button>
          <Tabs className={classes.tabs} value={value} onChange={handleChange} indicatorColor='secondary'>
            {tabs.map(data => {
              if(data.label === 'Services'){
                return <Tab aria-owns={anchorEl ? 'simple-menu': undefined} aria-haspopup={anchorEl ? true : false} onMouseOver={(event) => handleMenuOpen(event)} component={Link} to={data.link} disableRipple key={data.label} label={data.label} className={classes.tab}/>
              }
              else {
                return <Tab component={Link} to={data.link} disableRipple key={data.label} label={data.label} className={classes.tab}/>
              }
            })}
          </Tabs>
          <Button onClick={() => setValue(false)} component={Link} to="estimate" variant="contained" color="secondary" className={classes.button}>Free Estimate</Button>
          <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClick={() => setValue(1)} onClose={handleClose} MenuListProps={{onMouseLeave:handleClose}} className={classes.menuClasses}> 
            <MenuItem onClick={handleClose} component={Link} to='/services' className={classes.menuItemStyle}>Services</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to='/customsoftware' className={classes.menuItemStyle}>Custom Software Development</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to='/mobileapps' className={classes.menuItemStyle}>Mobile App Development</MenuItem>
            <MenuItem onClick={handleClose} component={Link} to='/website' className={classes.menuItemStyle}>Web App Development</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
    <div className={classes.toolBarMargin}/>
    </>
  )
}

export default Header