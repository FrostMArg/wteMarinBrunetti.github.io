export const itemListStyles = theme => {
    return ({
        root: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2),
            }
        },
        link: { textDecoration: 'none' }
    })
}