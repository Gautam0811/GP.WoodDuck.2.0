// // Themes
// // Component Utility : The Component is created for providing different themes in the app
// // Author Ananya Dhar on 1-3-2023
// // -------------------------
// import { createTheme } from '@mui/material/styles';
// import {deepOrange, orange,  blue, grey, pink, yellow } from '@mui/material/colors';
// import '../../src/styles/styleMain.css';


// const classicTheme = createTheme({
//   palette: {
//     text: {
//       primary: grey[900],
//       secondary: grey[800],
//     },
//   },
//   customProperty: {
//     backgroundColor: 'gray',
//   },
//   components: {
//     MuiTableCell: {
//       styleOverrides: {
//         root: {
//           padding: "7px !important",
//           fontSize: "11px !important",
//           textAlign: "center !important",
//         },
//       },
//     },
//     MuiLoadingButton: {
//       styleOverrides: {
//         root: {
//           fontSize: "10px",
//         },
//       },
//     },
//     MuiFormControlLabel: {
//       styleOverrides: {
//         root: {
//           color: "#005FA8",
//         },
//       },
//     },
//     MuiTypography: {
//       styleOverrides: {
//         root: {
//           color: "#005FA8",
//           fontSize: "12px",
//         },
//       },
//     },
//     MuiSvgIcon: {
//       styleOverrides: {
//         root: {
//           color: "#000000",
//         },
//       },
//     },
//     MuiToolbar: {
//       styleOverrides: {
//         root: {
//           backgroundColor: "#ffb74d",
//         },
//       },
//     },
//     MuiStack: {
//       styleOverrides: {
//         root: {
//           backgroundColor: "#f1f4fb",
//         }
//       }
//     }
//   },
// });

// const blueTheme = createTheme({
//   primary: blue,
//   palette: {
//     background: {
//       paper: blue[300],      
//     },
//     text: {
//       primary: blue[800],
//       secondary: grey[500],
//     },
//   },
//   components: {
//     MuiTableCell: {
//       styleOverrides: {
//         root: {
//           padding: "7px !important",
//           fontSize: "11px !important",
//           textAlign: "center !important",
//         },
//       },
//     },
//     MuiLoadingButton: {
//       styleOverrides: {
//         root: {
//           fontSize: "10px",
//         },
//       },
//     },
//     MuiTypography: {
//       styleOverrides : {
//         root: {
//           color: blue[900],
//           fontSize: '12px',
//         },
//       }
//   },
//     MuiFormControlLabel: {
//       styleOverrides: {
//         root: {
//           color: blue[800],
//         },
//       },
//     },
//     MuiStack: {
//       styleOverrides: {
//         root: {
//           backgroundColor: blue[200],
//         }
//       }
//     },
//     MuiToolbar: {
//       styleOverrides: {
//         root: {
//           backgroundColor: blue[100],
//         },
//       },
//     },
//     MuiSvgIcon : {
//       styleOverrides: {
//         root: {
//           color: blue[900],
//         }
//       }
//     }
//   },
// });

// const pinkTheme = createTheme({
//   palette: {
//     primary: pink,
//     background: {
//       default: deepOrange[300],
//       paper: pink[200],
//     },
//     text: {
//       primary: pink[800],
//       secondary: grey[500],
//     },
//   },
//   components: {
//     MuiTableCell: {
//       styleOverrides: {
//         root: {
//           padding: "7px !important",
//           fontSize: "11px !important",
//           textAlign: "center !important",
//         },
//       },
//     },
//     MuiLoadingButton: {
//       styleOverrides: {
//         root: {
//           fontSize: "10px",
//         },
//       },
//     },
//     MuiTypography: {
//       styleOverrides: {
//         root: {
//           color: pink[900],
//           fontSize: "12px",
//         },
//       },
//     },
//     MuiToolbar: {
//       styleOverrides: {
//         root: {
//           backgroundColor: pink[100],
//         },
//       },
//     },
//     MuiFormControlLabel: {
//       styleOverrides: {
//         root: {
//           color: pink[800],
//         },
//       },
//     },
//     MuiStack: {
//       styleOverrides: {
//         root: {
//           backgroundColor: pink[200],
//         }
//       }
//     },
//     MuiSvgIcon: {
//       styleOverrides: {
//         root: {
//           color: pink[900],
//         },
//       },
//     },
//   },
// });

// const yellowTheme = createTheme({
//   palette: {
//     primary: yellow,
//     background: {
//       default: deepOrange[300],
//       paper: yellow[300],
//     },
//     text: {
//       primary: orange[800],
//       secondary: grey[500],
//     },
//   },
//   components: {
//     MuiTableCell: {
//       styleOverrides: {
//         root: {
//           padding: "7px !important",
//           fontSize: "11px !important",
//           textAlign: "center !important",
//         },
//       },
//     },
//     MuiLoadingButton: {
//       styleOverrides: {
//         root: {
//           fontSize: "10px",
//         },
//       },
//     },
//     MuiFormControlLabel: {
//       root: {
//         color: orange[800],
//       },
//     },
//     MuiTypography: {
//       styleOverrides: {
//         root: {
//           color: orange[900],
//           fontSize: "12px",
//         },
//       },
//     },
//     MuiButton: {
//       styleOverrides: {
//         root: {
//           color: orange[800],
//         },
//       },
//     },
//     MuiToolbar: {
//       styleOverrides: {
//         root: {
//           backgroundColor: yellow[100],
//         },
//       },
//     },
//     MuiStack: {
//       styleOverrides: {
//         root: {
//           backgroundColor: yellow[200],
//         }
//       }
//     },
//     MuiSvgIcon: {
//       styleOverrides: {
//         root: {
//           color: orange[900],
//         },
//       },
//     },
//   },
// });

// const darkTheme = createTheme({
//   palette: {
//     primary: grey,
//     background: {
//       paper: grey[900],
//     },
//     text: {
//       primary: grey[200],
//       secondary: grey[600],
//     },
//   },
//   components: {
//     MuiTableCell: {
//       styleOverrides: {
//         root: {
//           padding: "7px !important",
//           fontSize: "11px !important",
//           textAlign: "center !important",
//         },
//       },
//     },
//     MuiLoadingButton: {
//       styleOverrides: {
//         root: {
//           fontSize: "10px",
//         },
//       },
//     },
//     MuiFormControlLabel: {
//       root: {
//         color: "gray",
//       },
//     },
//     MuiTypography: {
//       styleOverrides: {
//         root: {
//           color: grey[500],
//           fontSize: "12px",
//         },
//       },
//     },
//     MuiStack: {
//       styleOverrides: {
//         root: {
//           backgroundColor: grey[200],
//         }
//       }
//     },
//     MuiToolbar: {
//       styleOverrides: {
//         root: {
//           backgroundColor: grey[300],
//         },
//       },
//     },
//     MuiSvgIcon: {
//       styleOverrides: {
//         root: {
//           color: grey[700],
//         },
//       },
//     },
//   },
// });



// export { blueTheme, darkTheme, pinkTheme, yellowTheme, classicTheme };

export {}