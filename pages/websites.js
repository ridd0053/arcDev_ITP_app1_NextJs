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
            <meta property='og:url' content='itp-course-material-ui.herokuapp.com/websites' key="og:url" />
            <link rel="canonical" key="canonical" href="itp-course-material-ui.herokuapp.com/websites" />
        </Head>
        <Grid item container direction="row" justifyContent={matchesMD ? "center" : undefined} className={classes.rowContainer} style={{marginTop: matchesXS ? "1em" : "2em"}}> {/* Header */}
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer} style={{marginRight: "1em", marginLeft: "-3.5em"}}>
                        <IconButton style={{backgroundColor: "transparent"}} component={Link}  href="/mobileapps">
                            <img src="/assets/backArrow.svg" alt="Back to Custom iOS/Android App Development  Page" />
                        </IconButton>
                    </Grid>
                </Hidden>
                <Grid item container direction="column" className={classes.heading}>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="h1" style={{fontSize: "2.25em", lineHeight: matchesXS ? 1.1 : null, marginBottom: matchesXS ? "0.5em" : null}}>
                            Website Development
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Sed quis dui condimentum risus volutpat rhoncus. Curabitur finibus nunc vel tempor mollis. Etiam a finibus lorem. Nam dignissim ultrices ex, sed consequat dui. Nunc ultrices eleifend orci, sit amet scelerisque quam egestas ac. Cras quam nunc, bibendum sit amet pretium ac, feugiat ut velit. Nunc sed turpis eleifend, rutrum nisi ac, imperdiet libero. Ut et dictum mauris. Donec consequat pellentesque neque, eget tristique velit accumsan ut. Morbi a ligula nec enim malesuada fermentum. Aliquam volutpat tempus massa, sed maximus ligula pretium ac.
                        </Typography>
                        <Typography align={matchesMD ? "center" : undefined} variant="body1" paragraph>
                            Pellentesque eget orci mauris. Nunc ac enim metus. Nam vehicula ligula in dui congue, at mollis urna finibus. Donec vulputate, erat a ultricies hendrerit, diam elit rutrum libero, ac eleifend sapien elit et tortor. Suspendisse malesuada ligula nisl, sit amet consequat nulla feugiat ac. Aliquam vel felis neque. Sed a pretium tortor, quis lobortis nunc. 
                        </Typography>
                    </Grid>
                </Grid>
                <Hidden mdDown>
                    <Grid item className={classes.arrowContainer}>
                        <IconButton style={{backgroundColor: "transparent"}} component={Link}  href="/services">
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
                        Cras dapibus gravida ligula, in auctor tortor bibendum et. Quisque sed diam lorem. Nulla eget lorem eu augue lobortis volutpat. Quisque vel gravida sem, et porta enim. Praesent dui turpis, volutpat id egestas sit amet, porttitor a lorem. Donec in mi a nunc dictum hendrerit eu eget nulla. Duis ultricies ac odio non pharetra. Phasellus consectetur gravida mauris eget faucibus.
                    </Typography>
                </Grid>
            </Grid> {/* End Analytics */}
            <Grid item container direction={matchesSM ? "column" : "row"} alignItems="center" className={classes.rowContainer} justifyContent="flex-end" style={{marginTop: "15em", marginBottom: "15em"}}> {/* E-Commerce */}
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
                        Nunc sed turpis eleifend, rutrum nisi ac, imperdiet libero
                    </Typography>
                    <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                        Ut et dictum mauris. Donec consequat pellentesque neque, eget tristique velit accumsan ut
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
                        Cras dapibus gravida ligula, in auctor tortor bibendum et. Quisque sed diam lorem. Nulla eget lorem eu augue lobortis volutpat. Quisque vel gravida sem, et porta enim. Praesent dui turpis, volutpat id egestas sit amet, porttitor a lorem. Donec in mi a nunc dictum hendrerit eu eget nulla. Duis ultricies ac odio non pharetra. Phasellus consectetur gravida mauris eget faucibus.
                    </Typography>
                </Grid>
            </Grid> {/* End Outreach */}
            <Grid item container direction={matchesSM ? "column" : "row"} alignItems="center" className={classes.rowContainer} justifyContent="flex-end" style={{marginTop: "15em", marginBottom: "15em"}}> {/* Search Engine Optimization */}
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
                        Integer ullamcorper lacus purus, eu sollicitudin augue tincidunt vitae?
                    </Typography>
                    <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                        ivamus blandit semper nibh at auctor. 
                    </Typography>
                    <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                        Cras blandit, sem ut eleifend rutrum, velit mi pellentesque purus
                    </Typography>
                </Grid>
            </Grid> {/* End Search Engine Optimization */}
            <Grid item>
                <CallToAction/>
            </Grid>
     </Grid>
  );
}