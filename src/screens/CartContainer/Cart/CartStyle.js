export const CartStyle = theme => {
    return ({
        root: {
            width: '100vw',
            backgroundColor: theme.palette.background.paper,
            justifyContent: "space- evenly",
            '@media (max-width: 425px) ': {
                justifyContent: "center",
            }
        },
        muiAvatarRoot: {
            width: 120,
            height: 120
        },
        detalleItem: {
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            '@media (max-width: 425px) ': {
                flexDirection: 'column',
                justifyContent: "center",
            }
        },
        MuiListItemRoot: {
            justifyContent: "center",
            '@media (max-width: 425px) ': {
                justifyContent: "center",

            }
        },
        centrado: {
            textAlign: 'center',
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
        },
        itemsContainer: {
            display: "flex",
            flexDirection: "column",
            paddingTop: '0.5em',
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
        },
        itemsLista: {
            display: 'flex',
            flexDirection: 'column',
            flexFlow: 'column wrap',
            width: '100%',
        },
        MuiListItemGutters: {
            paddingRight: "16px !important",
            paddingLeft: "0 !important",
        }
    });
}