import { createMuiTheme } from '@material-ui/core/styles';


const arcBlue = "#0B72B9"
const arcOrange = "#FFB860"

const theme = createMuiTheme({
  palette:{
    common:{
      arcBlue,
      arcOrange
    },
    primary:{
      main:arcBlue
    },
    secondary:{
      main:arcOrange
    }
  },
  typography:{
    h3:{
      fontWeight:300
    },
    tab:{
      fontFamily:'Raleway',
      textTransform:'none',
      fontWeight:'700',
      fontSize:'1rem',
    }
  }
});

console.log(theme)

export default theme