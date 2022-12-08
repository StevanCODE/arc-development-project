import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


const tabs = [{label:'Home',link:'/'},{label:'Services',link:'/services'},{label:'The Revolution',link:'/revolution'},{label:'About Us',link:'/about'},{label:'Contact Us',link:'/contact'}]
const menuItems = [{label:'Services',link:'/services'},{label:'Custom Software Development',link:'/customsoftware'},{label:'Mobile App Development',link:'/mobileapps'},{label:'Web App Development',link:'/website'}]

const useStyles = makeStyles(theme => {
  return {
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
    menuItemStyle:{
      ...theme.typography.tab,
      opacity:0.7,
      '&:hover':{
        opacity:1
      }
    },
    menuClasses: {
      backgroundColor:theme.palette.common.arcBlue,
      marginLeft:'-0.3rem',
      color:'white',
    },
    menuItemSelected:{
      opacity:1,
      //ovako mozemo da menjamo bilo koju klasu
      // '&.Mui-selected': {
      //   opacity:1,
      //   backgroundColor:theme.palette.common.arcOrange,
      // }
    }
  }
})

const TabsComponent = ({value,setValue}) => {
  const classes = useStyles()
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0)


  useEffect(() => {
    switch(window.location.pathname){
      case '/':
        setValue(0)
        break
      case '/services':
        setValue(1)
        setSelectedIndex(0)
        break
      case '/customsoftware':
        setValue(1)
        setSelectedIndex(1)
        break
      case '/mobileapps':
        setValue(1)
        setSelectedIndex(2)
        break
      case '/website':
        setValue(1)
        setSelectedIndex(3)
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
  },[value,setValue])
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index)
    setAnchorEl(null);
  }

  return (
    <>
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
      <Menu 
      id="simple-menu" 
      anchorEl={anchorEl} 
      keepMounted 
      open={Boolean(anchorEl)} 
      onClick={() => setValue(1)} 
      onClose={handleClose} 
      MenuListProps={{onMouseLeave:handleClose}} 
      classes={{paper: classes.menuClasses}} 
      elevation={0}> 
        {menuItems.map((item,index) => {
          return <MenuItem 
          key={item.label} 
          onClick={(event) => handleMenuItemClick(event, index)} 
          component={Link}
          to={item.link} 
          selected={index === selectedIndex && value === 1} 
          classes={{root:classes.menuItemStyle, selected:classes.menuItemSelected}}>{item.label}
          </MenuItem>})}
      </Menu>
    </>
  )
}

export default TabsComponent