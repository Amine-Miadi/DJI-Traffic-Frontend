import { createTheme} from '@mui/material/styles';

const primary = {
    main: '#183642',
    contrastText: '#fff',
};
const primarylight = {
    main: '#2B6278',
    dark: '#0B191E',
    contrastText: '#fff',
};
const primarydark = {
    main: '#0B191E',
    contrastText: '#fff',
};


const secondary = {
    main: '#313D5A',
    contrastText: '#000',
};
const secondarylight = {
    main: '#6E81AF',
    contrastText: '#000',
};
const secondarydark = {
    main: '#1D2435',
    contrastText: '#000',
};

const theme = createTheme({
    palette: {
      primary: primary,
      secondary: secondary,
      primarylight: primarylight,
      secondarylight: secondarylight,
      primarydark: primarydark,
      secondarydark: secondarydark,
    },
});

export default theme;