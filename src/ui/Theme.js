import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0B72B9"
const arcOrange = "#FFBA60"
const arcGrey = "#868686"

export default createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`,
        },
        primary: {
            main: `${arcBlue}`,  
        },
        secondary: {
            main: `${arcOrange}`,  
        }
    },
    typography: {
        tab: {
            fontFamily: "Raleway",
            textTransform: "none",
            fontWeight: 700,
            fontSize: "1rem",
            color: "white",
        },
        estimate: {
            fontFamily: "Pacifico",
            fontSize: "1rem",
            textTransform: "none",
            color: "white",
        },
        h2: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "2.5rem",
            color: `${arcBlue}`,
            lineHeight: 1.5,
        },
        h3: {
            fontFamily: "Pacifico",
            fontSize: "2.5rem",
            color: `${arcBlue}`,
        },
        h4: {
            fontFamily: "Raleway",
            fontWeight: 700,
            fontSize: "1.75rem",
            color: `${arcBlue}`,
        },
        h6: {
            fontFamily: "Raleway",
            fontWeight: 500,
            color: `${arcBlue}`,
            lineHeight: 1,
        },
        subtitle1: {
            fontWeight: 300,
            fontSize: "1.25rem",
            color: `${arcGrey}`   
        },
        subtitle2: {
            fontWeight: 300,
            fontSize: "1.25rem",
            color: `white`  
        },
        body1: {
            fontSize: "1.25rem",
            color: `${arcGrey}`,
            fontWeight: 300,  
        },
        caption: {
            fontSize: "1rem",
            color: `${arcGrey}`,
            fontWeight: 300,  
        },
        learnButton: {
            color: `${arcBlue}`,
            borderColor: `${arcBlue}`,
            borderWidth: 2,
            textTransform: "none",
            borderRadius: 50,
            fontFamily: "Roboto",
            fontWeight: "bold",
        },
      },
      overrides: {
        MuiInputLabel: {
            root: {
                color: arcBlue,
                fontSize: "1rem"
            },
        },
        MuiInput: {
            root: {
                color: arcGrey,
                fontWeight: 300,
            },
            underline: {
                // before hovering or selecting the input field
                "&:before": {
                    borderBottom: `2px solid ${arcBlue}`
                },
                "&:hover:not($disabled):not($focused):not($error):before": { 
                    borderBottom: `2px solid ${arcBlue}`
                },
            }
        },

      }
})