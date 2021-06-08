export const navBarStyle = theme => {
    return ({
        navbarDisplayFlex: {
            display: `flex`,
            justifyContent: `space-between`
        },
        navDisplayFlex: {
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: "center"
        },
        linkText: {
            textDecoration: `none`,
            textTransform: `uppercase`,
            color: `white`
        },
        root: {
            "&:hover": {
                background: "#efefef"
            }
        }
    })


}