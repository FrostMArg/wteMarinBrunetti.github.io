export const stylesItems = (theme) => {
    return ({
        container: {
            display: 'flex',
            flexFlow: 'column nowrap',
            rowGap: '1rem',
            backgroundColor: theme.palette.background.paper,
            borderRadius: 15,
            border: '1px solid gray',
            padding: "1%",
            margin: "2%"
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
                width: '4.4rem',
            }
        }
    });
};