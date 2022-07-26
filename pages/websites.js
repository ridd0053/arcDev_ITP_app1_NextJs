import React from "react";
import Link from "../src/Link"
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import Head from "next/head";

import CallToAction from "../src/ui/CallToAction";

const useStyles = makeStyles(theme => ({
  heading: {
    maxWidth: "40em"
  },
  arrowContainer: {
    marginTop: "0.5em"
  },
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em"
    }
  },
  paragraphContainer: {
    maxWidth: "30em"
  }
}));

export default function Websites(props) {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <Grid container direction="column">
        <Head>
            <title key="title">Stunnig Custom Website Design | Arc Development</title>
            <meta name="description" key="description" content="Dit is een website gemaakt op basis van een cursus." />
            <meta property='og:title' content='Course Website | Websites' key="og:title" />
            <meta property='og:url' content='itpArcCourseMatUdem.com/websites' key="og:url" />
            <link rel="canonical" key="canonical" href="itpArcCourseMatUdem.com/websites" />
        </Head>
        <Grid item container direction="row" justify={matchesMD ? "center" : undefined} className={classes.rowContainer} style={{marginTop: matchesXS ? "1em" : "2em"}}> {/* Header */}
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{marginRight: "1em", marginLeft: "-3.5em"}}>
                        <IconButton style={{backgroundColor: "transparent"}} component={Link}  href="/mobileapps" onClick={() => {props.setTabindex(1); props.setSelectedIndex(2)}}>
                            <img src="/assets/backArrow.svg" alt="Back to Custom iOS/Android App Development  Page" />
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="h1">
                            Website Development
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Having a website is a necessity in today's business world. They give you one
                            central, public location to let people know who you are, what you do, and why
                            you're the best at it. 
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            From simply having your hours posted to having a full fledged online store,
                            making yourself as accessible as possible to users online drives growth and
                            enables you to reach new customers. 
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton style={{backgroundColor: "transparent"}} component={Link}  href="/services" onClick={() => {props.setTabindex(1); props.setSelectedIndex(0)}}>
                            <img src="/assets/forwardArrow.svg" alt="Forward to Services Page" />
                        </IconButton>
                    </Grid>
                </Hidden>
            </Grid> {/* End Header */}
            <Grid item container direction={matchesSM ? "column" : "row"} alignItems="center" className={classes.rowContainer} style={{marginTop: "15em"}}> {/* Analytics */}
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h4" gutterBottom align={matchesSM ? "center" : undefined}>
                                Analytics
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src="/assets/analytics.svg" alt="graph with magnifying glass revealing 1's and 0's" style={{marginLeft:"-2.75em"}} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.paragraphContainer}>
                    <Typography align={matchesSM ? "center" : undefined} variant="body1" paragraph>
                        Knowledge is power, and data is 21st Century
                        gold. Analyzing this data can reveal hidden
                        patterns and trends in your business,
                        empowering you to make smarter decisions
                        with measurable effects.
                    </Typography>
                </Grid>
            </Grid> {/* End Analytics */}
            <Grid item container direction={matchesSM ? "column" : "row"} alignItems="center" className={classes.rowContainer} justify="flex-end" style={{marginTop: "15em", marginBottom: "15em"}}> {/* E-Commerce */}
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h4" align="center" gutterBottom>
                                E-Commerce
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src="/assets/ecommerce.svg" alt="world outline made of dollar signs" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{marginLeft: matchesSM ? 0 : "1em"}} className={classes.paragraphContainer}>
                    <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                            It's no secret that people like to shop online.
                    </Typography>
                    <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                            In 2017 over $2.3 trillion was spent in e-commerce, and
                            it's time for your slice of that pie.
                    </Typography>
                </Grid>
            </Grid> {/* End E-Commerce */}
            <Grid item container direction={matchesSM ? "column" : "row"} alignItems="center" className={classes.rowContainer}> {/* Outreach*/}
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h4" gutterBottom align={matchesSM ? "center" : undefined}>
                                Outreach
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src="/assets/outreach.svg" alt="megaphone" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{marginLeft: matchesSM ? 0 : "1em"}} className={classes.paragraphContainer}>
                    <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                        Draw people in with a dazzling website.
                        Showing off your products online is a great
                        way to help customers decide what's right for
                        them before visiting in person.
                    </Typography>
                </Grid>
            </Grid> {/* End Outreach */}
            <Grid item container direction={matchesSM ? "column" : "row"} alignItems="center" className={classes.rowContainer} justify="flex-end" style={{marginTop: "15em", marginBottom: "15em"}}> {/* Search Engine Optimization */}
                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h4" align="center" gutterBottom>
                                Search Engine Optimization
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img src="/assets/seo.svg" alt="website standing on winner's podium" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item style={{marginLeft: matchesSM ? 0 : "1em"}} className={classes.paragraphContainer}>
                    <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                        How often have you ever been to the second page of Google results?
                    </Typography>
                    <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                        If you're like us, probably never. 
                    </Typography>
                    <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                        Customers don't go there either, so we make sure your website is
                    </Typography>
                </Grid>
            </Grid> {/* End Search Engine Optimization */}
            <Grid item>
                <CallToAction setTabindex={props.setTabindex} />
            </Grid>
     </Grid>
  );
}