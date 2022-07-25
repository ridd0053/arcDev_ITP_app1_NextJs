import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Hidden from "@material-ui/core/Hidden";


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
        }
      },
      avatar: {
        width:"25em",
        height: "25em",
        [theme.breakpoints.down("sm")]: {
            width:"20em",
            height: "20em",
            maxHeight: 300,
            maxWidth: 300,
          }
      }
 }))

 export default function About(props) { 
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <Grid container direction="column">
            {/* Title*/}
            <Grid item className={classes.rowContainer} style={{marginTop: matchesMD ? "1em" : "2em"}}>
                <Typography variant="h2" align={matchesMD ? "center" : undefined}>About Us</Typography>
            </Grid>
            {/* Mission Statement */}
            <Grid item container justify="center" className={classes.rowContainer} style={{marginTop: "3em"}}>
                <Typography variant="h4" className={classes.missionStatement} align="center">
                    Whether it be person to person, business to consumer, or an individual to their interests, technology is meant to bring
                    us closer to what we care about in the best way possible. Arc Development will use that principle to provide fast,
                    modern, inexpensive, and aesthetic software to the Midwest and beyond
                </Typography>
            </Grid>
            {/* History*/}
            <Grid item container direction={matchesMD ? "column" : "row"} alignItems={matchesMD ? "center" : undefined} className={classes.rowContainer} justify="space-around" style={{marginTop: "10em", marginBottom: "10em"}}>
                <Grid item>
                    <Grid item container direction="column" lg style={{maxWidth: "35em"}}>
                        <Grid item>
                            <Typography variant="h4" gutterBottom align={matchesMD ? "center" : undefined}>
                                History
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1" paragraph style={{fontWeight: 700, fontStyle: "italic"}} align={matchesMD ? "center" : undefined}>
                                We're the new kid on the block.    
                            </Typography>
                            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                                Founded in 2019, we're ready to get our hands on the world's business problems. 
                            </Typography>
                            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                                It all started with one question: Why aren't all businesses using available technology?
                                There are many different answers to that question: economic barriers, social barriers,
                                educational barriers, and sometimes institutional barriers. 
                            </Typography>
                            <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                                We aim to be a powerful force in overcoming these obstacles. Recent developments in
                                software engineering and computing power, compounded by the proliferation of smart phones,
                                has opened up infinite worlds of possibility. Things that have always been done by hand can
                                now be done digitally and automatically, and completely new methods of interaction are
                                created daily. Taking full advantage of these advancements is the name of the game. 
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item container justify={matchesMD ? "center" : undefined}>
                    <Grid item container justify="center" lg alignItems={matchesMD ? "center" : undefined}>
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
                        Zachary Reece, Founder
                    </Typography>
                    <Typography variant="body1" paragraph align="center">
                        I started coding when I was 9 years old
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar alt="founder" src="/assets/founder.jpg" className={classes.avatar} />
                </Grid>
                <Grid item container>
                        <Hidden lgUp>                    
                            <Grid item lg style={{maxWidth:"45em", padding:"1.25em"}}>
                                <Typography variant="body1" paragraph align="center">
                                    I taught myself basic coding from a library book in third grade, and ever
                                    since then my passion has solely been set on learning — learning about
                                    computers, learning mathematics and philosophy, studying design, always
                                    just learning
                                </Typography>
                                <Typography variant="body1" paragraph align="center">
                                    Now I'm ready to apply everything I've learned, and to help others with the ituition I have developed.
                                </Typography>
                            </Grid>
                        </Hidden>
                    <Grid item container direction="column" lg alignItems={matchesMD ? "center" : undefined} style={{marginBottom: matchesMD ? "2.5em" :  0 }}>
                        <Grid item>
                            <img src="/assets/yearbook.svg"  alt="Yearbook page about founder" style={{maxWidth: matchesMD ? 300 : undefined}}/>
                        </Grid>
                        <Grid item>
                            <Typography variant="caption">
                                a page from founder's Sophomore yearbook
                            </Typography>
                        </Grid>
                    </Grid>
                    <Hidden mdDown>                    
                        <Grid item lg style={{maxWidth:"45em", padding:"1.25em"}}>
                            <Typography variant="body1" paragraph align="center">
                                I taught myself basic coding from a library book in third grade, and ever
                                since then my passion has solely been set on learning — learning about
                                computers, learning mathematics and philosophy, studying design, always
                                just learning
                            </Typography>
                            <Typography variant="body1" paragraph align="center">
                                Now I'm ready to apply everything I've learned, and to help others with the ituition I have developed.
                            </Typography>
                        </Grid>
                    </Hidden>
                    <Grid item container direction="column" alignItems={matchesMD ? "center" : "flex-end"} lg>
                        <Grid item>
                            <img src="/assets/puppy.svg" alt="grey spotted puppy" style={{maxWidth: matchesMD ? 300 : undefined}}  />
                        </Grid>
                        <Grid item>
                            <Typography variant="caption">
                                a miniature dapple dachshund, Sterling
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            {/* Call To Action*/}
            <Grid item>
                <CallToAction setTabindex={props.setTabindex} />
            </Grid>
        </Grid>
    )
  }