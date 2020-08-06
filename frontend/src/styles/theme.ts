import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#546ab8',
            main: '#1c2a5e'
        },
        secondary: {
            light: '#648dcc',
            main: '#005ff0'
        }
    },
    typography: {
        h1: {
            fontSize: 32,
            fontFamily: '"Cambria Math", "Roboto", "Helvetica", "Arial", sans-serif'
        },
        h2: {
            fontSize: 28
        },
        h3: {
            fontSize: 24
        },
        h4: {
            fontSize: 20
        },
        h5: {
            fontSize: 16
        },
        h6: {
            fontSize: 12
        }
    }
});
