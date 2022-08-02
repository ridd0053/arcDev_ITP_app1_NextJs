import React from "react";
import Link from "../src/Link"
import Lottie from "react-lottie"
import { makeStyles, useTheme } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useMediaQuery  from "@material-ui/core/useMediaQuery";
import Head from "next/head";
import { LazyLoadImage, LazyLoadComponent } from "react-lazy-load-image-component";

import CallToAction from "../src/ui/CallToAction"

import animationData from "../src/animations/landinganimation/data"

import ButtonArrow from "../src/ui/ButtonArrow"

const useStyles = makeStyles(theme => ({
    mainContainer: {
        marginTop:"5em",
        [theme.breakpoints.down('md')]: {
            marginTop: "3em",
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: "2em",
        },
    },
    animation: {
        maxWidth: "50em",
        minWidth: "21em",
        marginTop:"2em",
        marginLeft: "10%",
        [theme.breakpoints.down('sm')]: {
            maxWidth: "30em",
        },
    },
    heroTextContainer: {
        minWidth: "21.5em",
        marginLeft: "1em",
        [theme.breakpoints.down('xs')]: {
            marginLeft: 0,
        },
    },
    estimateButton: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
        marginRight: 40,
        height: 45,
        width: 145,
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },
    },
    learnButtonHero: {
        ...theme.typography.learnButton,
        fontSize: "0.9rem",
        height: 45,
        width: 145,
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
    buttonContainer: {
        marginTop:"1em",
    },
    serviceContainer: {
        marginTop: "12em",
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
    revolutionBackground: {
        backgroundImage: `url("/assets/repeatingBackground.svg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
    },
    revolutionCard: {
        position: "absolute",
        boxShadow: theme.shadows[10],
        borderRadius: 15,
        padding: "10em",
        [theme.breakpoints.down('sm')]: {
            padding: `8em ${0}`,
            borderRadius: 0,
            width: "100%",
        },
    },
    informationBackground: {
        position: "absolute",
        zIndex: -1,
        backgroundImage: `url("/assets/infoBackground.svg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "77em",
        width: "100%",
    }
}))
export default function LandingPage(props) { 
    const classes = useStyles()
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderSettings: {
            preserveAspectRation: "xMidYMid slice"
        }
    }
    return (
        <Grid container direction="column" className={classes.mainContainer}>
            <Head>
                <title key="title">Custom Software, Mobile Apps and Websites | Arc Development</title>
                <meta name="description" key="description" content="Dit is een website gemaakt op basis van een cursus." />
                <meta property='og:title' content='Course Website | Home' key="og:title" />
                <meta property='og:url' content='itp-course-material-ui.herokuapp.com' key="og:url" />
                <link rel="canonical" key="canonical" href="itp-course-material-ui.herokuapp.com" />
            </Head>
            <Grid item> {/* Hero block*/}
                <Grid container justifyContent="flex-end" alignItems="center" direction="row">
                    <Grid sm item className={classes.heroTextContainer}>
                        <Typography variant="h1" align="center">
                            Bringing West Cost Technology <br /> to the Midwest
                        </Typography>
                        <Grid container justifyContent="center" className={classes.buttonContainer}>
                            <Grid item>
                                <Button className={classes.estimateButton} variant="contained" component={Link}  href="/estimate">Free Estimate</Button>
                            </Grid>
                            <Grid item>
                                <Button variant="outlined" className={classes.learnButtonHero} component={Link}  href="/revolution">
                                    <span style={{marginRight: 10}}> Learn More </span>
                                    <ButtonArrow width={15} height={15} fill={theme.palette.common.blue}/>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid sm item className={classes.animation}>
                        <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
                    </Grid>
                </Grid>
            </Grid> {/* End Hero block*/}
            <Grid item> {/* Services block  --- Custom software development */}
                <Grid container direction="row" className={classes.serviceContainer} justifyContent={matchesSM ? "center" : undefined}>
                    <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ?  "center" : undefined}}>
                        <Typography variant="h4">
                            Custom Software Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                            Lorem ipsum. Lorem Sit. Lorem consectetur.
                        </Typography>
                        <Typography variant="subtitle1">
                        Orci varius natoque penatibus et magnis dis parturient {" "} 
                        <span className={classes.specialText}>ullamcorper.</span>
                        </Typography>
                        <Button variant="outlined" className={classes.learnButton} component={Link}  href="/customsoftware" >
                            <span style={{marginRight: 10}}> Learn More </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <LazyLoadImage className={classes.icon} src="/assets/customSoftwareIcon.svg" alt="custom software icon" />
                    </Grid>
                </Grid>
            </Grid> {/* End Services block --- Custom software development*/}
            <Grid item> {/* Services block  --- iOS/Android App Development */}
                <Grid container direction="row" className={classes.serviceContainer} justifyContent={matchesSM ? "center" : "flex-end"}>
                    <Grid item style={{textAlign: matchesSM ?  "center" : undefined}}>
                        <Typography variant="h4">
                        iOS/Android App Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                        Lorem ipsum. Lorem Sit. Lorem consectetur.
                        </Typography>
                        <Typography variant="subtitle1">
                        Donec finibus nisl sed augue pharetra convallis
                            {matchesSM ? null : <br />} 
                            eget tellus nec nibh pretium posuere.
                        </Typography>
                        <Button variant="outlined" className={classes.learnButton} component={Link}  href="/mobileapps">
                            <span style={{marginRight: 10}}> Learn More </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item style={{marginRight: matchesSM ? 0 : "5em"}}>
                        <LazyLoadImage className={classes.icon} src="/assets/mobileIcon.svg" alt="Mobile icon" />
                    </Grid>
                </Grid>
            </Grid> {/* End Services block --- iOS/Android App Development*/}
            <Grid item> {/* Services block  --- Website Development */}
                <Grid container direction="row" className={classes.serviceContainer} justifyContent={matchesSM ? "center" : undefined}>
                    <Grid item style={{marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ?  "center" : undefined}}>
                        <Typography variant="h4">
                            Website Development
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitle}>
                        Lorem ipsum. Lorem Sit. Lorem consectetur.
                        </Typography>
                        <Typography variant="subtitle1">
                        Donec interdum ipsum sem, {matchesXS && <br />}  eu vehicula turpis.
                        </Typography>
                        <Button variant="outlined" className={classes.learnButton} component={Link}  href="/websites">
                            <span style={{marginRight: 10}}> Learn More </span>
                            <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                        </Button>
                    </Grid>
                    <Grid item>
                        <LazyLoadImage className={classes.icon} src="/assets/websiteIcon.svg" alt="Website icon" />
                    </Grid>
                </Grid>
            </Grid> {/* End Services block --- Website Development */}
            <Grid item> {/* Revolution block */}
                <Grid container style={{height: "80em", marginTop: "12em"}} alignItems="center" justifyContent="center">
                    <Card className={classes.revolutionCard}>
                        <CardContent>
                            <Grid container direction="column">
                                <Grid item style={{textAlign: "center"}}>
                                    <Typography variant="h3" gutterBottom>
                                        The Revolution
                                    </Typography>
                                </Grid>
                                <Grid item style={{textAlign: "center"}}>
                                    <Typography variant="subtitle1" gutterBottom>
                                    Vestibulum erat tellus, porttitor eget maximus quis, elementum vitae dui.
                                    </Typography>
                                    <Button variant="outlined" className={classes.learnButton} component={Link}  href="/revolution">
                                        <span style={{marginRight: 10}}> Learn More </span>
                                        <ButtonArrow width={10} height={10} fill={theme.palette.common.blue}/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                    <LazyLoadComponent threshold={850}>
                        <div className={classes.revolutionBackground} />
                    </LazyLoadComponent>
                </Grid>
            </Grid> {/* End Revolution block */}
            <Grid item> {/* Information block */}
                <Grid container direction="row" alignItems="center" style={{height: "77em"}}>
                    <Grid item container style={{ textAlign: matchesXS ? "center" : "inherit" }} direction={matchesXS ? "column": "row"}>
                        <Grid item sm style={{ marginLeft: matchesXS ? 0 : matchesSM ? "2em" : "5em" }}>
                            <Grid container direction="column" style={{marginBottom: matchesXS ? "10em" : 0 }}>
                                <Typography variant="h1" style={{color: "white"}}>About Us</Typography>
                                <Typography variant="subtitle2" gutterBottom>Let's get personal</Typography>
                                <Grid item>
                                    <Button variant="outlined" className={classes.learnButton} style={{color: "white", borderColor: "white"}} component={Link}  href="/about">
                                        <span style={{marginRight: 10}}> Learn More </span>
                                        <ButtonArrow width={10} height={10} fill="white"/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item sm style={{ marginRight: matchesXS ? 0 : matchesSM ? "2em" : "5em", textAlign: matchesXS ? "center" : "right" }}>
                            <Grid container direction="column">
                                <Typography variant="h1" style={{color: "white"}}>Contact Us</Typography>
                                <Typography variant="subtitle2" gutterBottom>Say hello!</Typography>
                                <Grid item>
                                    <Button variant="outlined" className={classes.learnButton} style={{color: "white", borderColor: "white"}} component={Link}  href="/contact">
                                        <span style={{marginRight: 10}}> Learn More </span>
                                        <ButtonArrow width={10} height={10} fill="white"/>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <LazyLoadComponent threshold={700}>
                        <div className={classes.informationBackground} />
                    </LazyLoadComponent>
                </Grid>
            </Grid>{/* End Information block */}
            <Grid item> {/* Call To Action block */}
                <LazyLoadComponent threshold={700}>
                    <CallToAction />
                </LazyLoadComponent>
            </Grid> {/* End Call To Action block */}
        </Grid>
     
    );
}