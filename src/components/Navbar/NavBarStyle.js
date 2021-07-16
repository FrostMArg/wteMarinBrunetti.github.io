export const navBarStyle = theme => {
    return ({
        navbarDisplayFlex: {
            display: 'flex',
            justifyContent: 'space-between'
        },
        navDisplayFlex: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        linkText: {
            textDecoration: 'none',
            textTransform: 'uppercase',
            color: 'white'
        },
        root: {
            flexGrow: 1,
            '&:hover': {
                background: '#efefef'
            }
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
        bkNone: {
            '&:hover': {
                background: 'transparent'
            }
        }
    })
}