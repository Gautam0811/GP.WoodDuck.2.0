import { createTheme } from '@mui/material/styles';
import { red, deepOrange, blue, grey, pink, purple } from '@mui/material/colors';
import '../styles/WD_StyleMain.css';

const lightTheme = createTheme({
  palette: {
    text: {
      primary: grey[900],
      secondary: grey[800],
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "7px !important",
          fontSize: "11px !important",
          textAlign: "center !important",
        },
      },
    },
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          fontSize: "10px",
        },
      },
    },
    MuiFormControlLabel :{
      styleOverrides :{
        root: {
          color: '#005FA8',
        }
      }
    },
    MuiTypography: {
        root: {
          color: '#005FA8',
        },
    },
  },
});

const blueTheme = createTheme({
  primary: blue,
  palette: {
    background: {
      default: deepOrange[900],
      paper: blue[300],
    },
    text: {
      primary: blue[800],
      secondary: grey[500],
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "7px !important",
          fontSize: "11px !important",
          textAlign: "center !important",
        },
      },
    },
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          fontSize: "10px",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color: blue[800],
        },
      },
    },
    MuiTypography: {
      root: {
        color: blue[800],
      },
    },
  },
});

const pinkTheme = createTheme({
  palette: {
    primary: pink,
    background: {
      default: deepOrange[300],
      paper: pink[200],
    },
    text: {
      primary: pink[800],
      secondary: grey[500],
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "7px !important",
          fontSize: "11px !important",
          textAlign: "center !important",
        },
      },
    },
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          fontSize: "10px",
        },
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color: pink[800],
        },
      },
    },
    MuiTypography: {
      root: {
        color: pink[800],
      },
    },
  },
});

const purpleTheme = createTheme({
  palette: {
    primary: purple,
    background: {
      default: deepOrange[300],
      paper: purple[300],
    },
    text: {
      primary: purple[800],
      secondary: grey[500],
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "7px !important",
          fontSize: "11px !important",
          textAlign: "center !important",
        },
      },
    },
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          fontSize: "10px",
        },
      },
    },
    MuiFormControlLabel: {
      root: {
        color: purple[800],
      },
    },
    MuiTypography: {
      root: {
        color: purple[800],
      },
    },
  },
});

const darkTheme = createTheme({
  palette: {
    primary: grey,
    background: {
      primary: deepOrange[300],
      paper: grey[900],
    },
    text: {
      primary: grey[500],
      secondary: grey[600],
    },
  },
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: "7px !important",
          fontSize: "11px !important",
          textAlign: "center !important",
        },
      },
    },
    MuiLoadingButton: {
      styleOverrides: {
        root: {
          fontSize: "10px",
        },
      },
    },
    MuiFormControlLabel :{
        root: {
          color: "gray",
        }
    },
    MuiTypography: {
      root: {
        color: grey[800],
      },
    },
    
  },
});



export { blueTheme, darkTheme, pinkTheme, purpleTheme, lightTheme };

