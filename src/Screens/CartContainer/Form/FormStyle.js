export const FormStyle = theme => {
    return ({
        root: {
            display: 'flex',
            alignContent: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            flexDirection: "row",
            alignItems: "center",
            '& > *': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        }, itemsContainer: {
            display: "flex",
            marginTop: '2em',
            paddingTop: '0.5em',
            paddingBottom: '0.5em',
            marginBottom: '2em',
            flexDirection: "column",
            alignItems: "center",
            height: "fit-content",
            width: '80%',
            borderRadius: 15,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
            elevation: 15,
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
            '@media (max-width: 425px) ': {
                width: '100%',
            }
        }, makeStylesRoot: {
            width: "90 %",
            margin: "8px",
        }, buttons: {
            textDecoration: 'none',
            borderRadius: 4,
            border: '1px solid gray',
            shadowColor: "#000",
            padding: '6px 8px',
            textTransform: 'uppercase',
            textAlign: 'center',
            margin: '12.5px',
            fontSize: '0.875rem',
        },
        linkText: {
            textDecoration: 'none',
            textTransform: 'uppercase'
        }
    });
}