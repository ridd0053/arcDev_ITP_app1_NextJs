import React from "react";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Link from "../Link"

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.common.blue,
        width: "100%",
        zIndex: 1302,
        position: "relative",
    },
    adornment: {
        width: "25em",
        verticalAlign: "bottom",
        [theme.breakpoints.down('md')]: {
            width: "21em",
        },
        [theme.breakpoints.down('xs')]: {
            width: "15em",
        },
    },
    mainContainer: {
        position: "absolute",
    },
    link: {
        color: "white",
        fontFamily:"Arial",
        fontSize: "0.75rem",
        fontWeight: "bold",
        textDecoration: "none",
    },
    gridItem: {
        margin: "3em",
    },
    icon: {
        width: "4em",
        height: "4em",
        [theme.breakpoints.down('md')]: {
            width: "2.5em",
            height: "2.5em",
        },
        [theme.breakpoints.down('xs')]: {
            width: "1.75em",
            height: "1.75em",
        },
   
    },
    socialContainer: {
        position: "absolute",
        marginTop: "-6em",
        right: "1.5em",
        [theme.breakpoints.down('xs')]: {
            right: "0.6em",
        },
    }
}))

export default function Footer(props) {
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <Hidden mdDown>
                <Grid container justifyContent="center" className={classes.mainContainer}>
                    <Grid item className={classes.gridItem} >
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link} href="/">
                            Home 
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link} href="/services">
                                Services
                            </Grid>
                            <Grid item className={classes.link} component={Link} href="/customsoftware">
                                Custom Sofware Development
                            </Grid>
                            <Grid item className={classes.link} component={Link} href="/mobileapps">
                            iOS/Android App Development
                            </Grid>
                            <Grid item className={classes.link} component={Link} href="/websites">
                            Website Development
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link} href="/revolution">
                                The Revolution
                            </Grid>
                            <Grid item className={classes.link} component={Link} href="/revolution">
                                Vission
                            </Grid>
                            <Grid item className={classes.link} component={Link} href="/revolution">
                                Technology
                            </Grid>
                            <Grid item className={classes.link} component={Link} href="/revolution">
                                Process
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link} href="/about">
                                About us
                            </Grid>
                            <Grid item className={classes.link} component={Link} href="/about">
                                History
                            </Grid>
                            <Grid item className={classes.link} component={Link} href="/about">
                                Team
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item className={classes.gridItem}>
                        <Grid container direction="column" spacing={2}>
                            <Grid item className={classes.link} component={Link} href="/contact">
                                Contact us
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
            <img src="/assets/footerAdornment.svg" alt="black decorative slash" className={classes.adornment} />
            <Grid container justifyContent="flex-end" className={classes.socialContainer} spacing={2}>
                <Grid item component={"a"} href="http://www.facebook.com" rel="noopener noreferrer" target="_blank" >
                    <img alt="facebook logo" src="/assets/facebook.svg" className={classes.icon} />
                </Grid>
                <Grid item component={"a"} href="http://www.twitter.com" rel="noopener noreferrer" target="_blank">
                    <img alt="twitter logo" src="/assets/twitter.svg" className={classes.icon}  />
                </Grid>
                <Grid item component={"a"} href="http://www.instagram.com" rel="noopener noreferrer" target="_blank">
                    <img alt="instagram logo" src="/assets/instagram.svg" className={classes.icon}  />
                </Grid>
            </Grid>
        </footer>
    )

}