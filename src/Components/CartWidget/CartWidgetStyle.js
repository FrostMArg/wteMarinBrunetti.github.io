export const cartWidgetStyle = theme => {
    return ({
        root: {
            color: 'white'
        },
        linkText: {
            textDecoration: `none`,
            textTransform: `uppercase`,
            color: `white`,
            '@media (max-width: 960px) ': {
                color: 'black',
            }
        },
        primary: {
            main: '#36454B',
            contrastText: '#fff',
        },
        secondary: {
            light: '#55dab3',
            main: '#00a883',
            dark: '#007856',
            contrastText: '#000',
        }
    })
}