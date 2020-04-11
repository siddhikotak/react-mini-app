import { createMuiTheme } from "@material-ui/core/styles";
import customPalette from "./color";

const theme = createMuiTheme({
    palette: customPalette,
    overrides: {
        MuiButton: {
            container: {
                '&:hover': {
                    boxShadow: ' 0px 4px 15px 1px rgba(66,109,209,0.6)'
                },
                '&:active': {
                    boxShadow: ' 0px 4px 15px 1px rgba(66,109,209,0.6)'
                },
                background: 'linear-gradient(270deg, rgba(66,109,209,1) 0%, rgba(54,187,222,1) 100%)',
                color: 'white',
                boxShadow: ' 0px 1px 5px 2px rgba(66,109,209,0.6)'
            },
        },
        MuiPaper: {
            root: {
                color: 'white'
            },
            outlined: {
                boxShadow: 'none',
                backgroundColor: customPalette.elevation.elevation2,
                border: 'solid 1px silver',
                color: 'white'
            },
            elevation1: {
                backgroundColor: customPalette.elevation.elevation1
            },
            elevation2: {
                backgroundColor: customPalette.elevation.elevation2
            },

        },
    }
})

export default theme;