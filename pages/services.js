import React from "react";
import Link from "../src/Link"
import { makeStyles, useTheme } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import useMediaQuery  from "@material-ui/core/useMediaQuery";
import Head from "next/head";

import ButtonArrow from "../src/ui/ButtonArrow"

const useStyles = makeStyles(theme => ({
    serviceContainer: {
        marginTop: "10em",
        [theme.breakpoints.down('sm')]: {
            padding: 25,
        },
        [theme.breakpoints.down('xs')]: {
            padding: 5,
        },
    },
    specialText: {
        fontFamily: "Pacifico",
        color: theme.palette.common.orange,
    },
    subtitle: {
        marginBottom: "1em",
    },
    icon: {
        marginLeft: "2em",
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
        },
    },
    learnButton: {
        ...theme.typography.learnButton,
        fontSize: "0.7rem",
        height: 35,
        padding: 5,
        [theme.breakpoints.down('sm')]: {
            marginBottom: "2em",
        },
    },
}))

export default function Services(props) { 
    const classes =  useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
    return (
        <Grid container direction="column">
            <Head>
                <title key="title">Top Custom Software Development Services | Arc Development</title>
                <meta name="description" key="description" content="Dit is een website gemaakt op basis van een cursus." />
                <meta property='og:title' content='Course Website | Services' key="og:title" />
                <meta property='og:url' content='itpArcCourseMatUdem.com/services' key="og:url" />
                <link rel="canonical" key="canonical" href="itpArcCourseMatUdem.com/services" />
            </Head>
            <Grid item style={{marginLeft: matchesSM ? 0 : "5em", marginTop: matchesSM ? "1em" : "2em"}}>
                <Typography align={matchesSM ? "center" : undefined} variant="h1" gutterBottom >
                    Services
                </Typography>
            </Grid>
            <Grid item> {/* Services block  --- iOS/Android App Development */}
                <Grid container direction="row" className={classes.serviceContainer} justifyContent={matchesSM ? "center" : "flex-end"} style={{marginTop: matchesSM ? "1em" : "5em"}}>
                    <Grid item style={{textAlign: matchesSM ?  "center" : undefined}}>
                        <Typography variant="h4">
                        iOS/Android App Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Extend Functionality. Extend Access, Increase Engagement.
                        </Typography>
                        <Typography variant="subtitle1">
                            Integrate your web experience or create a standalone app
                            {matchesSM ? null : <br />} 
                            with either mobile platform.
                        </Typography>
                        <Button variant="outlined" className={classes.learnButton} component={Link}  href="/mobileapps">
                            <span style={{marginRight: 10}}> Learn More </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
                        <img className={classes.icon} src="/assets/mobileIcon.svg" alt="Mobile icon" width="250em" />
                    </Grid>
                </Grid>
            </Grid> {/* End Services block --- iOS/Android App Development*/}
            <Grid item> {/* Services block  --- Custom software development */}
                <Grid container direction="row" className={classes.serviceContainer} justifyContent={matchesSM ? "center" : undefined}>
                    <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ?  "center" : undefined}}>
                        <Typography variant="h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Save Energy. Save Time. Save Money.
                        </Typography>
                        <Typography variant="subtitle1">
                            Complete digital solution, from investigation to {" "} 
                            <span className={classes.specialText}>celebration.</span>
                        </Typography>
                        <Button variant="outlined" className={classes.learnButton} component={Link}  href="/customsoftware">
                            <span style={{marginRight: 10}}> Learn More </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <img className={classes.icon} src="/assets/customSoftwareIcon.svg" alt="custom software icon" />
                    </Grid>
                </Grid>
            </Grid> {/* End Services block --- Custom software development*/}
            <Grid item> {/* Services block  --- Website Development */}
                <Grid container direction="row" className={classes.serviceContainer} justifyContent={matchesSM ? "center" : "flex-end"} style={{marginBottom: "10em"}}>
                    <Grid item style={{textAlign: matchesSM ?  "center" : undefined, width: matchesSM ? undefined : "35em"}}>
                        <Typography variant="h4">
                            Website Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Reach More. Discover More. Sell More.
                        </Typography>
                        <Typography variant="subtitle1">
                            Optimized for Search Enignes, {matchesXS && <br />}  built for speed.
                        </Typography>
                        <Button variant="outlined" className={classes.learnButton} component={Link}  href="/websites">
                            <span style={{marginRight: 10}}> Learn More </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
                        <img className={classes.icon} src="/assets/websiteIcon.svg" alt="Website icon" width="250em" />
                    </Grid>
                </Grid>
            </Grid> {/* End Services block --- Website Development */}
        </Grid>
    )

}