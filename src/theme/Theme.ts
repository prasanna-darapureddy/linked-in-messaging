import { createTheme } from "@mui/material";

const Theme = createTheme({
    palette: {
        primary: {
          main: '#0052cc',
        },
        secondary: {
          main: '#01754f',
        },
    },
    components: {        
        MuiTextField: {
            defaultProps: {
              
            },
            styleOverrides: {
                root: {
                    "& .MuiFormHelperText-root":{
                        fontWeight:500,
                        marginLeft:0,
                        fontSize:'13px',
                        color:'#cf0007',
                    },                  
                },
            },
        },
        MuiMenu: {
            defaultProps: {
                anchorOrigin:{
                    vertical:'bottom',
                    horizontal:'right',
                },
                transformOrigin: {
                    vertical:'top',
                    horizontal:'right',
                },
            },
        },
        MuiDialog: {
            styleOverrides: {
                root: {
                    '& .MuiDialogContent-root': {
                        padding: 2,
                      },
                      '& .MuiDialogActions-root': {
                        padding: 1,
                      },
                },
            },
        },
    }
})
export default Theme