import React from "react";
import Lottie from "react-lottie"
import Link from "../src/Link"
import { makeStyles, useTheme } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import useMediaQuery  from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden"
import Head from "next/head";

import integrationAnimation from "../src/animations/integrationAnimation/data.json";

import CallToAction from "../src/ui/CallToAction"


const useStyles = makeStyles(theme => ({
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down('sm')]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em",
            paddingTop: "1em",
        },
    }, 
    heading: {
        maxWidth: "40em",
    },
    arrowContainer: {
        marginTop: "0.5em",
    },
}))

export default function MobileApps(props) { 
    const classes =  useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: integrationAnimation,
        renderSettings: {
            preserveAspectRation: "xMidYMid slice"
        }
    }

    return  (
        <Grid container direction="column">
            <Head>
                <title key="title">iOS/Android App Design and Development | Arc Development</title>
                <meta name="description" key="description" content="Dit is een website gemaakt op basis van een cursus." />
                <meta property='og:title' content='Course Website | Mobile Apps' key="og:title" />
                <meta property='og:url' content='itp-course-material-ui.herokuapp.com/mobileapps' key="og:url" />
                <link rel="canonical" key="canonical" href="itp-course-material-ui.herokuapp.com/mobileapps" />
            </Head>
            <Grid item container direction="row" justifyContent={matchesMD ? "center" : undefined} className={classes.rowContainer} style={{marginTop: matchesXS ? "1em" : "2em"}}> {/* Header */}
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{marginRight: "1em", marginLeft: "-3.5em"}}>
                        <IconButton style={{backgroundColor: "transparent"}} component={Link}  href="/customsoftware">
                            <img src="/assets/backArrow.svg" alt="Back to Custom Software Development Page" />
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="h1" style={{fontSize: "2.25em", lineHeight: matchesXS ? 1.1 : null, marginBottom: matchesXS ? "0.5em" : null}}>
                            iOS/Android App Development
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Mobile apps allow you to take your tools on the go. 
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque elit sit amet pulvinar accumsan. Vestibulum nec fringilla libero. Maecenas porttitor velit in risus molestie, vel sollicitudin mi consectetur. Maecenas eleifend congue viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi turpis neque, imperdiet nec pellentesque ut, lacinia pellentesque urna. Pellentesque eu maximus ligula, nec placerat orci. Etiam pulvinar pretium lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam ac ipsum quis ligula sagittis ornare. Nam euismod, lacus condimentum iaculis egestas, odio felis sodales magna, at sagittis lectus libero at dolor. Etiam a bibendum lorem. Duis nisl nulla, tincidunt sed libero eu, cursus consectetur diam. Proin non congue dolor. Curabitur ac lobortis nisi. Donec facilisis libero sapien, et porttitor nisl ultrices sed.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Convenience. Connection.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton style={{backgroundColor: "transparent"}} component={Link}  href="/websites">
                            <img src="/assets/forwardArrow.svg" alt="Forward to Website Development Page" />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid> {/* End Header */}
            <Grid item container direction={matchesSM ? "column" : "row"} style={{ marginTop: "15em", marginBottom: "15em" }} className={classes.rowContainer}> {/* Integration & Simultaneous Platform Support  */}
                <Grid item container direction="column" md>
                    <Grid item>
                        <Typography variant="h4" gutterBottom align={matchesSM ? "center" : undefined}>
                            Integration
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                            Our technology enables an innate interconnection
                            between web and mobile applications, putting
                            everything you need right in one convenient place
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                            This allows you to extend your reach, reinvent
                            interactions, and develop a stronger relationship with
                            your users than ever before.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item md>
                    <Lottie options={defaultOptions} style={{ maxWidth: matchesMD ? "15em" : "20em", height: matchesMD ? "20em" : undefined  }} />
                </Grid>
                <Grid item container direction="column" md>
                <Grid item>
                        <Typography variant="h4" gutterBottom align={matchesSM ? "center" : "right"}>
                            Simultaneous Platform Support
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph align={matchesSM ? "center" : "right"}>
                            Our cutting-edge development process allows us
                            to create apps for iPhone, Android, and tablets —
                            all at the same time.
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesSM ? "center" : "right"}>
                            This significantly reduces costs and creates a
                            more unified brand experience across all devices.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid> {/* End Integration & Simultaneous Platform Support  */}
            <Grid item container direction={matchesMD ? "column" : "row"} className={classes.rowContainer} style={{ marginBottom: "15em", display: matchesMD ? "grid" : undefined }}> {/* Extend  */}
                <Grid item container direction="column" alignItems="center" md>
                    <Grid item>
                        <Typography variant="h4" align="center" gutterBottom>
                            Extend Functionality
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src="/assets/swissKnife.svg" alt="swiss army knife" />
                    </Grid>
                </Grid>
                <Grid item container direction="column" alignItems="center" md style={{marginTop: matchesMD ? "10em" : 0, marginBottom: matchesMD ? "10em" : 0 }}>
                    <Grid item>
                        <Typography variant="h4" align="center" gutterBottom >
                            Extend Access
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src="/assets/extendAccess.svg" alt="tear-one-off sign" style={{ maxWidth: matchesXS ? "20em" : "28em" }} />
                    </Grid>
                </Grid>
                <Grid item container direction="column" alignItems="center" md>
                    <Grid item>
                        <Typography variant="h4" align="center" gutterBottom >
                            Extend Engagement
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src="/assets/increaseEngagement.svg" alt="app with notification" />
                    </Grid>
                </Grid>
            </Grid> {/* End Extend  */}
            <Grid item>
                <CallToAction />
            </Grid>
        </Grid>
    )
}