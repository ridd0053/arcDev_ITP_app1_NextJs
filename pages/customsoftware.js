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

import documentsAnimation from "../src/animations/documentsAnimation/data"
import scaleAnimation from "../src/animations/scaleAnimation/data"
import automationAnimation from "../src/animations/automationAnimation/data"
import uxAnimation from "../src/animations/uxAnimation/data"

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
    itemContainer: {
        maxWidth: "40em",
    }
}))

export default function CustomSoftware(props) { 
    const classes =  useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const documentsOptions = {
        loop: true,
        autoplay: true,
        animationData: documentsAnimation,
        renderSettings: {
            preserveAspectRation: "xMidYMid slice"
        }
    }
    const scaleOptions = {
        loop: true,
        autoplay: true,
        animationData: scaleAnimation,
        renderSettings: {
            preserveAspectRation: "xMidYMid slice"
        }
    }

    const automationOptions = {
        loop: true,
        autoplay: true,
        animationData: automationAnimation,
        renderSettings: {
            preserveAspectRation: "xMidYMid slice"
        }
    }

    const uxOptions = {
        loop: true,
        autoplay: true,
        animationData: uxAnimation,
        renderSettings: {
            preserveAspectRation: "xMidYMid slice"
        }
    }

    return (
        <Grid container direction="column">
            <Head>
                <title key="title">Custom Software Development and Design - Free Estimate</title>
                <meta name="description" key="description" content="Dit is een website gemaakt op basis van een cursus." />
                <meta property='og:title' content='Course Website | Custom Software' key="og:title" />
                <meta property='og:url' content='itp-course-material-ui.herokuapp.com/customsoftware' key="og:url" />
                <link rel="canonical" key="canonical" href="itp-course-material-ui.herokuapp.com/customsoftware" />
            </Head>
            <Grid item container direction="row" justifyContent={matchesMD ? "center" : undefined} className={classes.rowContainer} style={{marginTop: matchesXS ? "1em" : "2em"}}> {/* Header */}
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{marginRight: "1em", marginLeft: "-3.5em"}}>
                        <IconButton style={{backgroundColor: "transparent"}} component={Link}  href="/services">
                            <img src="/assets/backArrow.svg" alt="Back to Services Page" />
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="h1" style={{fontSize: "2.25em", lineHeight: matchesXS ? 1.1 : null, marginBottom: matchesXS ? "0.5em" : null}}>
                            Custom Software Development
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Sed quis dui condimentum risus volutpat rhoncus. Curabitur finibus nunc vel tempor mollis.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque elit sit amet pulvinar accumsan. Vestibulum nec fringilla libero. Maecenas porttitor velit in risus molestie, vel sollicitudin mi consectetur. Maecenas eleifend congue viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi turpis neque, imperdiet nec pellentesque ut, lacinia pellentesque urna. Pellentesque eu maximus ligula, nec placerat orci. Etiam pulvinar pretium lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam ac ipsum quis ligula sagittis ornare.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Nam euismod, lacus condimentum iaculis egestas, odio felis sodales magna, at sagittis lectus libero at dolor. Etiam a bibendum lorem. Duis nisl nulla, tincidunt sed libero eu, cursus consectetur diam. Proin non congue dolor. Curabitur ac lobortis nisi. Donec facilisis libero sapien, et porttitor nisl ultrices sed.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Pellentesque eget orci mauris.
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton style={{backgroundColor: "transparent"}} component={Link}  href="/mobileapps">
                            <img src="/assets/forwardArrow.svg" alt="Forward to iOS/Android App Development Page" />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid> {/* End Header */}
            <Grid item container direction="row" justifyContent="center" style={{marginTop: "10em", marginBottom: "15em"}} className={classes.rowContainer}> {/* Icons */}
                <Grid item container direction="column" md style={{maxWdith: "40em"}} alignItems="center">
                    <Grid item>
                        <Typography variant="h4" gutterBottom>
                            Lorem sit
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src="/assets/bulb.svg" alt="lightbuld" />
                    </Grid>
                </Grid>
                <Grid item container direction="column" md style={{maxWdith: "40em", marginTop: matchesSM ? "10em" : 0, marginBottom: matchesSM ? "10em" : 0}} alignItems="center">
                    <Grid item>
                        <Typography variant="h4" gutterBottom>
                            Lorem dolar
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src="/assets/cash.svg" alt="cash" />
                    </Grid>
                </Grid>
                <Grid item container direction="column" md style={{maxWdith: "40em"}} alignItems="center">
                    <Grid item>
                        <Typography variant="h4" gutterBottom>
                            Lorem ipsum
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src="/assets/stopwatch.svg" alt="stopwatch" />
                    </Grid>
                </Grid>
            </Grid> {/* End Icons */}
            <Grid item container direction={matchesMD ? "column" : "row"} alignItems={matchesMD ? "center" : undefined} justifyContent={matchesMD ? "center" : "space-between"} className={classes.rowContainer} style={{display: matchesMD ? "grid" : undefined}}> {/* Animations */}
                <Grid item container className={classes.itemContainer} md style={{marginBottom: matchesMD ? "15em" : 0}} direction={matchesSM ? "column" : "row"} > {/* Digital Documents and Data */}
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center" : undefined}>
                                Digital Documents { "& "} Data
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                                Lorem ipsum. Lorem sit.
                                Lorem dolor.
                            </Typography>
                            <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque elit sit amet pulvinar accumsan. Vestibulum nec fringilla libero. Maecenas porttitor velit in risus molestie, vel sollicitudin mi consectetur. Maecenas eleifend congue viverra.
                            </Typography>
                            <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi turpis neque, imperdiet nec pellentesque ut, lacinia pellentesque urna. Pellentesque eu maximus ligula, nec placerat orci.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Lottie options={documentsOptions} style={{maxHeight: 275, maxWidth:275, minHeight:250}} />
                    </Grid>
                </Grid> {/* End Digital Documents and Data*/}
                <Grid item container className={classes.itemContainer} md direction={matchesSM ? "column" : "row"}> {/* Scale*/}
                    <Grid item md style={{marginBottom: matchesSM ? "2em" : null}}>
                        <Lottie options={scaleOptions} style={{maxHeight: 260, maxWidth:280}} />
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center" : "right"} >
                                Scale
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align={matchesSM ? "center" : "right"}>
                                Cras dapibus gravida ligula, in auctor tortor bibendum et. Quisque sed diam lorem. Nulla eget lorem eu augue lobortis volutpat. Quisque vel gravida sem, et porta enim. Praesent dui turpis, volutpat id egestas sit amet, porttitor a lorem. Donec in mi a nunc dictum hendrerit eu eget nulla. Duis ultricies ac odio non pharetra. Phasellus consectetur gravida mauris eget faucibus.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid> {/* End Scale*/}
            </Grid> {/* End Animations */}
            <Grid item container direction="row"  style={{marginTop: "20em", marginBottom:"20em"}} className={classes.rowContainer}> {/* Root */}
                <Grid item container direction="column" alignItems="center">
                    <Grid item>
                        <img src="/assets/root.svg" alt="tree with roots extending out" height={matchesSM ? "300em" : "400em"} width={matchesSM ? "300em" : "400em"} />
                    </Grid>
                    <Grid item className={classes.itemContainer} direction={matchesSM ? "column" : "row"}>
                        <Typography variant="h4" align="center" gutterBottom>
                            Root-Cause Analysis
                        </Typography>
                        <Typography variant="body1" paragraph align="center">
                            Cras dapibus gravida ligula, in auctor tortor bibendum et. Quisque sed diam lorem. Nulla eget lorem eu augue lobortis volutpat. Quisque vel gravida sem, et porta enim. Praesent dui turpis, volutpat id egestas sit amet, porttitor a lorem.
                        </Typography>
                        <Typography variant="body1" paragraph align="center">
                            Integer ullamcorper lacus purus, eu sollicitudin augue tincidunt vitae. Vivamus blandit semper nibh at auctor. Cras blandit, sem ut eleifend rutrum, velit mi pellentesque purus, molestie mattis dui dui sit amet sem. Pellentesque sit amet bibendum elit. Nam sit amet eleifend mauris. Nullam ac facilisis mi. Proin fermentum fringilla lectus, sit amet tempor felis egestas ac.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid> {/* End Root */}
            <Grid item container direction={matchesMD ? "column" : "row"} alignItems={matchesMD ? "center" : undefined} justifyContent={matchesMD ? "center" : "space-between"} style={{marginBottom:"20em", display: matchesMD ? "grid" : undefined}} className={classes.rowContainer}> {/* Second Animations */}
                <Grid item container className={classes.itemContainer} md style={{marginBottom: matchesMD ? "15em" : 0}} direction={matchesSM ? "column" : "row"}> {/* Automation */}
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center" : undefined}>
                                Automation
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                            Suspendisse malesuada ligula nisl, sit amet consequat nulla feugiat ac?
                            </Typography>
                            <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                                Nunc ac enim metus. Nam vehicula ligula in dui congue, at mollis urna finibus. Donec vulputate, erat a ultricies hendrerit, diam elit rutrum libero, ac eleifend sapien elit et tortor.
                            </Typography>
                            <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                                Cras dapibus gravida ligula, in auctor tortor bibendum et. Quisque sed diam lorem. Nulla eget lorem eu augue lobortis volutpat. Quisque vel gravida sem, et porta enim. Praesent dui turpis, volutpat id egestas sit amet, porttitor a lorem.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item md style={{marginTop: matchesSM ? "2em" : null}}>
                        <Lottie options={automationOptions} style={{maxHeight: 290, maxWidth:280}} />
                    </Grid>
                </Grid> {/* End Automation*/}
                <Grid item container className={classes.itemContainer} md direction={matchesSM ? "column" : "row"}> {/* User Experience Design*/}
                    <Grid item md style={{marginBottom: matchesSM ? "2em" : null}}>
                        <Lottie options={uxOptions} style={{maxHeight: 310, maxWidth:155}} />
                    </Grid>
                    <Grid item container direction="column" md>
                        <Grid item>
                            <Typography variant="h4" align={matchesSM ? "center" : "right"}>
                                User Experience Design
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph align={matchesSM ? "center" : "right"}>
                                Quisque sed diam lorem. Nulla eget lorem eu augue lobortis volutpat.
                            </Typography>
                            <Typography variant="body1" paragraph align={matchesSM ? "center" : "right"}>
                                Integer ullamcorper lacus purus, eu sollicitudin augue tincidunt vitae. Vivamus blandit semper nibh at auctor. Cras blandit, sem ut eleifend rutrum, velit mi pellentesque purus, molestie mattis dui dui sit amet sem. Pellentesque sit amet bibendum elit.
                            </Typography>
                            <Typography variant="body1" paragraph align={matchesSM ? "center" : "right"}>
                                Cras dapibus gravida ligula, in auctor tortor bibendum et. Quisque sed diam lorem. Nulla eget lorem eu augue lobortis volutpat. Quisque vel gravida sem, et porta enim. Praesent dui turpis, volutpat id egestas sit amet, porttitor a lorem.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid> {/* End User Experience Design*/}
            </Grid> {/* End Second Animations */}
            <Grid item>
                <CallToAction />
            </Grid>
        </Grid>
    )

}