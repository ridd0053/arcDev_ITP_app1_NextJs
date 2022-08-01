import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";
import Head from "next/head";
import PeopleIcon from "@material-ui/icons/People";
import PagesIcon from "@material-ui/icons/Pages";
import PetsIcon from "@material-ui/icons/Pets";



import CallToAction from "../src/ui/CallToAction"

const useStyles = makeStyles(theme => ({ 
    missionStatement: {
        fontStyle: "italic",
        fontWeight: 300,
        fontSize: "1.5rem",
        maxWidth: "50rem",
        lineHeight: 1.4,
    },
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
          paddingLeft: "1.5em",
          paddingRight: "1.5em"
        },
        [theme.breakpoints.down("xs")]: {
            paddingLeft: "1em",
            paddingRight: "1em"
          }
      },
      avatar: {
        width:"25em",
        height: "25em",
        backgroundColor: theme.palette.common.orange,
        [theme.breakpoints.down("sm")]: {
            width:"20em",
            height: "20em",
            maxHeight: 300,
            maxWidth: 300,
          }
      },
      PeopleIcon: {
        color: theme.palette.common.blue,
        width:150,
        height:150,
      }
 }))

 export default function About(props) { 
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <Grid container direction="column">
            <Head>
                <title key="title">About Us - History {"&"} Team | Arc Development</title>
                <meta name="description" key="description" content="Dit is een website gemaakt op basis van een cursus." />
                <meta property='og:title' content='Course Website | About Us' key="og:title" />
                <meta property='og:url' content='itpArcCourseMatUdem.com/about' key="og:url" />
                <link rel="canonical" key="canonical" href="itpArcCourseMatUdem.com/about" />
            </Head>
            {/* Title*/}
            <Grid item className={classes.rowContainer} style={{marginTop: matchesMD ? "1em" : "2em"}}>
                <Typography variant="h1" align={matchesMD ? "center" : undefined}>About Us</Typography>
            </Grid>
            {/* Mission Statement */}
            <Grid item container justifyContent="center" className={classes.rowContainer} style={{marginTop: "3em"}}>
                <Typography variant="h4" className={classes.missionStatement} align="center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat tellus, porttitor eget maximus quis, elementum vitae dui. Nulla libero leo, venenatis quis leo id, molestie pretium turpis. Vivamus sodales elementum consectetur. Nulla aliquet pellentesque ultricies. Nulla pulvinar dignissim dui facilisis lacinia.
                </Typography>
            </Grid>
            {/* History*/}
            <Grid item container direction={matchesMD ? "column" : "row"} alignItems={matchesMD ? "center" : undefined} className={classes.rowContainer} justifyContent="space-around" style={{marginTop: "10em", marginBottom: "10em"}}>
                <Grid item>
                    <Grid item container direction="column" lg style={{maxWidth: "35em"}}>
                        <Grid item>
                            <Typography variant="h4" gutterBottom align={matchesMD ? "center" : undefined}>
                                History
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph style={{fontWeight: 700, fontStyle: "italic"}} align={matchesMD ? "center" : undefined}>
                                Cras eget tellus nec nibh pretium posuere.   
                            </Typography>
                            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                            </Typography>
                            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                                Fusce vestibulum faucibus diam quis viverra. Curabitur at commodo risus. Sed volutpat, lectus non condimentum venenatis, mi odio maximus justo, et consequat felis turpis nec nisl. Maecenas tempus quis justo porta rhoncus. Aenean rhoncus convallis leo nec mollis. 
                            </Typography>
                            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                                Donec eu arcu nibh. Nullam dictum cursus urna, in laoreet orci. Curabitur blandit tellus et est semper, ut ultrices tortor lacinia. Praesent id magna egestas, lacinia nunc non, condimentum dui. Aliquam imperdiet ante sed turpis dictum, ac gravida dui condimentum.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container justifyContent={matchesMD ? "center" : undefined}>
                    <Grid item container justifyContent="center" lg alignItems={matchesMD ? "center" : undefined}>
                        <img src="/assets/history.svg" alt="quil pen sitting on top of book" style={{maxHeight: matchesMD ? 200 : "22em"}} />
                    </Grid>
                </Grid>
            </Grid>
            {/* Team*/}
            <Grid item container direction="column" className={classes.rowContainer} alignItems="center" style={{marginBottom: "15em"}}>
                <Grid item>
                    <Typography variant="h4" gutterBottom align="center">
                        Team 
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1" paragraph align="center">
                        Student
                    </Typography>
                    <Typography variant="body1" paragraph align="center">
                        I just started coding.
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar alt="founder" className={classes.avatar}>
                        <PeopleIcon className={classes.PeopleIcon} />
                    </Avatar>
                </Grid>
                <Grid item container>
                        <Hidden lgUp>                    
                            <Grid item lg style={{maxWidth:"45em", padding:"1.25em"}}>
                                <Typography variant="body1" paragraph align="center">
                                    This is a project that I made for school. Based on an online course!
                                </Typography>
                            </Grid>
                        </Hidden>
                    <Grid item container direction="column" lg alignItems={matchesMD ? "center" : undefined} style={{marginBottom: matchesMD ? "2.5em" :  0 }}>
                        <Grid item>
                            <PagesIcon style={{width: 150, height: 150, maxWidth: matchesMD ? 300 : undefined}} />
                        </Grid>
                        <Grid item>
                            <Typography variant="caption">
                                a page
                            </Typography>
                        </Grid>
                    </Grid>
                    <Hidden mdDown>                    
                        <Grid item lg style={{maxWidth:"45em", padding:"1.25em"}}>
                            <Typography variant="body1" paragraph align="center">
                                This is a project that I made for school. Based on an online course!
                            </Typography>
                        </Grid>
                    </Hidden>
                    <Grid item container direction="column" alignItems={matchesMD ? "center" : "flex-end"} lg>
                        <Grid item>
                            <PetsIcon style={{width: 150, height: 150, maxWidth: matchesMD ? 300 : undefined}} />
                        </Grid>
                        <Grid item>
                            <Typography variant="caption">
                                Pets
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* Call To Action*/}
            <Grid item>
                <CallToAction />
            </Grid>
        </Grid>
    )
  }