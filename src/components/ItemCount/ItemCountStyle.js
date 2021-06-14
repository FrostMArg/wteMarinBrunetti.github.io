export const stylesItems = (theme) => {
    return ({
        container: {
            display: 'flex',
            flexFlow: 'column nowrap',
            rowGap: '1rem',
            backgroundColor: theme.palette.background.paper,
            borderRadius: 15,
            padding: "0.5%",
            margin: "1%"
        },
        inputGroup: {
            display: 'flex',
            flexFlow: 'row nowrap',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
            textAlign: 'center',
            border: 'transparent',
            '& > span': {
                width: '1rem',
            }
        },
        centrado: {
            textAlign: "center",
            justifyContent: 'center',
        },
    });
};