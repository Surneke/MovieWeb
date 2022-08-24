import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    shape: {
        borderRadius: 20
    },
    palette: {
        primary: {
            main: '#fff'
        },
        secondary: {
            main: '#73bcec'
        },
        background: {
            default: '#f8f8f8',
        },
        text: {
            primary: '#fff',
        }
    },
    typography: {
        h1: {
            fontFamily: 'Nunito',
            fontWeight: 800
        },
        h2: {
            fontFamily: 'Nunito',
            fontWeight: 800
        },
        h3: {
            fontFamily: 'Nunito',
            fontWeight: 700
        },
        h4: {
            fontFamily: 'Nunito',
            fontWeight: 700
        },
        h5: {
            fontFamily: 'Nunito',
            fontWeight: 700
        },
        h6: {
            fontFamily: 'Nunito',
            fontWeight: 700
        },
        subtitle1: {
            fontFamily: 'Nunito',
            fontWeight: 700
        },
        subtitle2: {
            fontFamily: 'Nunito',
            fontWeight: 700
        },
        body1: {
            fontFamily: 'Nunito',
            fontWeight: 300
        },
        body2: {
            fontFamily: 'Nunito',
            fontWeight: 300
        },
        button: {
            fontFamily: 'Nunito',
            fontWeight: 700,
        },
        caption: {
            fontFamily: 'Nunito',
            fontWeight: 400
        },
        overline: {
            fontFamily: 'Nunito',
            fontWeight: 300
        }
    },
});
