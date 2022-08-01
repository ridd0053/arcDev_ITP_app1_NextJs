import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Head from "next/head";
import { LazyLoadImage } from "react-lazy-load-image-component";


import technologyAnimation from "../src/animations/technologyAnimation/data.json";

import CallToAction from "../src//ui/CallToAction";

const useStyles = makeStyles(theme => ({
  rowContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: "1.5em",
      paddingRight: "1.5em"
    }
  }
}));

export default function Revolution(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  
    const defaultOptions = {
      loop: true,
      autoplay: false,
      animationData: technologyAnimation,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    const sections = ([
        {
          icon: "/assets/consultationIcon.svg",
          iconAlt: "handshake",
          iconMaxWidth: 700,
          backgroundColor: "#B3B3B3",
          title: "Consultation",
          paragraphs: [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in blandit leo. Nunc quis rutrum nibh. Etiam suscipit purus sed efficitur venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent molestie purus at ultrices fermentum. Duis nec metus at risus ultricies rhoncus sit amet tempor velit.`,
            `Curabitur eleifend, quam a varius consectetur, risus metus tincidunt lacus, ac efficitur quam felis vitae purus. Fusce eget libero ornare ipsum scelerisque porta. Mauris tristique felis sed mattis pulvinar.`,
            `Aenean dictum odio eu massa suscipit, a porttitor sem varius. Phasellus arcu velit, viverra efficitur cursus eget, ullamcorper malesuada nunc. Praesent eget sodales libero, nec dapibus sapien. Vivamus a hendrerit massa.`
          ]
        },
        {
          icon: "/assets/mockupIcon.svg",
          iconAlt: "basic website design outline",
          iconMaxWidth: 1000,
          backgroundColor: "#FF7373",
          title: "Mockup",
          paragraphs: [
            `Praesent risus dolor, auctor eu urna ac, dignissim eleifend risus. Fusce id turpis sed orci venenatis scelerisque eget pulvinar nunc. Proin interdum, ligula id blandit maximus, tellus risus malesuada quam, ac sollicitudin dui ipsum id urna.`,
            `Proin interdum, ligula id blandit maximus, tellus risus malesuada quam, ac sollicitudin dui ipsum id urna. Phasellus lacinia, mauris in aliquet vestibulum, lacus velit porttitor purus, in posuere tortor dui vitae augue. Suspendisse vel facilisis libero. Nulla facilisi. Pellentesque non tristique ex. Vestibulum suscipit vel dolor id dapibus.`,
            `Nulla ut velit quis dolor dictum consequat. Praesent eget faucibus purus.`
          ]
        },
        {
          icon: "/assets/reviewIcon.svg",
          iconAlt: "magnifying glass",
          iconMaxWidth: "50em",
          backgroundColor: "#39B54A",
          title: "Review",
          paragraphs: [
            `Vivamus at odio venenatis, ultrices justo non, posuere nibh. Cras faucibus convallis mi, eu maximus sapien bibendum nec.`,
            `Nulla dui mi, fringilla eu purus in, ultricies sollicitudin risus. Pellentesque erat dolor, tincidunt ut varius eu, suscipit nec nisi.`,
            `Quisque dictum elit a nibh tempor scelerisque. In in purus tortor. In hac habitasse platea dictumst.`
          ]
        },
        {
          icon: "/assets/designIcon.svg",
          iconAlt: "paintbrush leaving stroke of paint",
          iconMaxWidth: 1000,
          backgroundColor: "#A67C52",
          title: "Design",
          paragraphs: [
            `Ut varius tincidunt orci quis egestas. Pellentesque at dui ullamcorper justo aliquet blandit. Proin vulputate, elit ut tincidunt interdum, leo nunc semper nunc, a tempus libero diam a magna.`,
            `In sodales tortor ac mauris suscipit, a interdum metus lacinia.`
          ]
        },
        {
          icon: "/assets/reviewIcon.svg",
          iconAlt: "magnifying glass",
          iconMaxWidth: "50em",
          backgroundColor: "#39B54A",
          title: "Review",
          paragraphs: [
            `Vestibulum sapien massa, molestie at risus vel, ullamcorper blandit diam.`,
            `Sed porta metus id lectus cursus, blandit faucibus quam feugiat. Nulla scelerisque ligula mi, at faucibus tortor posuere at. Nam blandit varius augue ac blandit. Sed et nibh in elit hendrerit interdum.`
          ]
        },
        {
          icon: "/assets/buildIcon.svg",
          iconAlt: "building construction site",
          iconMaxWidth: { maxWidth: matchesMD ? 700 : 1000 },
          backgroundColor: "#FBB03B",
          title: "Build",
          paragraphs: [
            `In tempor ultricies eros, vitae cursus lacus accumsan a.`,
            `Nullam ac est hendrerit, fermentum lectus vitae, laoreet purus. Nulla suscipit imperdiet metus et varius. Donec elit eros, efficitur ac eros vestibulum, facilisis semper quam.`,
            `Aliquam malesuada quam est. In sapien magna, accumsan vitae nibh in, fringilla ornare metus. Praesent euismod leo est, id ullamcorper lectus ullamcorper eget. Sed porta erat mattis risus ultricies, vitae congue diam finibus.`,
            `Mauris vitae neque magna. Vestibulum eget dapibus turpis. Fusce viverra libero dictum sem commodo fermentum.`,
            `Proin vulputate, elit ut tincidunt interdum, leo nunc semper nunc, a tempus libero diam a magna. Sed vestibulum, ipsum sed bibendum porta, nisi leo auctor felis, id tincidunt velit augue quis enim.`
          ]
        },
        {
          icon: "/assets/launchIcon.svg",
          iconAlt: "rocket",
          iconMaxWidth: 200,
          backgroundColor: "#C1272D",
          title: "Launch",
          paragraphs: [
            `Praesent risus dolor, auctor eu urna ac, dignissim eleifend risus.`,
            `Proin interdum, ligula id blandit maximus, tellus risus malesuada quam, ac sollicitudin dui ipsum id urna. Phasellus lacinia, mauris in aliquet vestibulum, lacus velit porttitor purus, in posuere tortor dui vitae augue.`,
            `Nunc vel aliquet nulla, nec volutpat lorem. Morbi vestibulum odio ac ultricies interdum. Proin interdum rhoncus nulla. Praesent sit amet iaculis nisl.`
          ]
        },
        {
          icon: "/assets/maintainIcon.svg",
          iconAlt: "wrench tightening bolts",
          iconMaxWidth: 500,
          backgroundColor: "#8E45CE",
          title: "Maintain",
          paragraphs: [
            `Nulla ut velit quis dolor dictum consequat.`,
            `Curabitur eleifend, quam a varius consectetur, risus metus tincidunt lacus, ac efficitur quam felis vitae purus.`,
            `Fusce eget libero ornare ipsum scelerisque porta. Mauris tristique felis sed mattis pulvinar. Aenean dictum odio eu massa suscipit, a porttitor sem varius. Phasellus arcu velit, viverra efficitur cursus eget, ullamcorper malesuada nunc. Praesent eget sodales libero, nec dapibus sapien.`
          ]
        },
        {
          icon: "/assets/iterateIcon.svg",
          iconAlt: "falling dominoes",
          backgroundColor: "#29ABE2",
          title: "Iterate",
          paragraphs: [
            `Sed porta metus id lectus cursus, blandit faucibus quam feugiat. Nulla scelerisque ligula mi, at faucibus tortor posuere at.`,
            `Nullam ac est hendrerit, fermentum lectus vitae, laoreet purus. Nulla suscipit imperdiet metus et varius. Donec elit eros, efficitur ac eros vestibulum, facilisis semper quam. Praesent sagittis pharetra lacus.`,
            `Aliquam malesuada quam est. In sapien magna, accumsan vitae nibh in, fringilla ornare metus. Praesent euismod leo est, id ullamcorper lectus ullamcorper eget.`
          ]
        }
      ]);

    return (
        <Grid container direction="column">
            <Head>
                <title key="title">The Revolution - Cutting-Edge Software | Arc Development</title>
                <meta name="description" key="description" content="Dit is een website gemaakt op basis van een cursus." />
                <meta property='og:title' content='Course Website | Revolution' key="og:title" />
                <meta property='og:url' content='itpArcCourseMatUdem.com/revolution' key="og:url" />
                <link rel="canonical" key="canonical" href="itpArcCourseMatUdem.com/revolution" />
            </Head>
            {/* Header */}
            <Grid item className={classes.rowContainer} style={{marginTop: "2em"}}> 
                <Typography align={matchesMD ? "center" : undefined} variant="h1" style={{fontFamily: "Pacifico"}}>The Revolution</Typography>
            </Grid>
            {/* Vision */}
            <Grid item container direction={matchesMD ? "column" : "row"} alignItems="center" className={classes.rowContainer} style={{ marginTop: "5em" }}>
                <Grid item lg>
                    <LazyLoadImage src="/assets/vision.svg" alt="mountain through binoculars" style={{maxWidth: matchesSM ? 300 : "40em", marginRight: matchesMD ? 0 : "5em", marginBottom: matchesMD ? "5em" : 0}} />
                </Grid>
                <Grid item container direction="column" lg style={{maxWidth: "40em"}}>
                    <Grid item>
                        <Typography variant="h4" align={matchesMD ? "center" : "right"}>
                            Vision
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph align={matchesMD ? "center" : "right"}>
                          Aliquam malesuada quam est. In sapien magna, accumsan vitae nibh in, fringilla ornare metus. Praesent euismod leo est, id ullamcorper lectus ullamcorper eget. Sed porta erat mattis risus ultricies, vitae congue diam finibus.
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesMD ? "center" : "right"}>
                          Integer imperdiet ex eros, eget vestibulum tellus elementum et. Curabitur convallis porttitor facilisis. Etiam ultricies semper nunc, ac tempor ligula semper vitae. Integer mattis ante at ullamcorper vehicula. Suspendisse vel tincidunt tortor. Sed imperdiet nunc tincidunt turpis condimentum tincidunt. Ut porttitor metus nisl. 
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesMD ? "center" : "right"}>
                          Suspendisse facilisis leo vel ligula feugiat mollis. Vivamus auctor finibus ipsum, sed interdum eros luctus sed. In nunc risus, placerat vel eleifend volutpat, faucibus ac urna. Etiam blandit nulla sit amet commodo aliquet. Praesent facilisis neque eros, vitae ornare diam facilisis quis. Curabitur vel arcu quis arcu dictum efficitur.
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesMD ? "center" : "right"}>
                          Fusce vel tincidunt lacus. Nullam malesuada venenatis felis, nec maximus nunc gravida vel. Sed lacinia velit a mauris fermentum, eu semper dolor euismod. Curabitur nec pretium metus, eu facilisis erat. Praesent blandit enim id auctor ornare. Integer vulputate, mauris sed convallis aliquet, tellus eros vehicula arcu, quis faucibus tellus odio consectetur purus. 
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesMD ? "center" : "right"}>
                          Sed porta metus id lectus cursus, blandit faucibus quam feugiat. Nulla scelerisque ligula mi, at faucibus tortor posuere at. Nam blandit varius augue ac blandit. Sed et nibh in elit hendrerit interdum.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            {/* Technology */}
            <Grid item container direction={matchesMD ? "column" : "row"} alignItems="center" className={classes.rowContainer} style={{ marginTop: "10em", marginBottom: "10em" }}>
                <Grid item container direction="column" lg style={{maxWidth: "40em"}}>
                    <Grid item>
                        <Typography variant="h4" align={matchesMD ? "center" : undefined}>
                            Technology
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                          Vivamus at odio venenatis, ultrices justo non, posuere nibh. Cras faucibus convallis mi, eu maximus sapien bibendum nec. Maecenas rutrum ipsum volutpat odio hendrerit tincidunt. Nulla dui mi, fringilla eu purus in, ultricies sollicitudin risus. 
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                          Fusce eget libero ornare ipsum scelerisque porta. Mauris tristique felis sed mattis pulvinar. Aenean dictum odio eu massa suscipit, a porttitor sem varius. Phasellus arcu velit, viverra efficitur cursus eget, ullamcorper malesuada nunc. Praesent eget sodales libero, nec dapibus sapien.
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                          Ut varius tincidunt orci quis egestas. Pellentesque at dui ullamcorper justo aliquet blandit. Proin vulputate, elit ut tincidunt interdum, leo nunc semper nunc, a tempus libero diam a magna. Sed vestibulum, ipsum sed bibendum porta, nisi leo auctor felis, id tincidunt velit augue quis enim. Mauris vel pharetra ante, non rhoncus ex.
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                          In sodales tortor ac mauris suscipit, a interdum metus lacinia. Cras ac luctus purus. Integer ipsum nisl, porta quis commodo ut, finibus a risus. In libero dui, feugiat quis suscipit vitae, tincidunt a purus. Maecenas elementum lacus sem, eu pharetra orci vehicula id.
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                          Vivamus ante odio, bibendum in dictum eu, convallis eu nibh. Pellentesque quis lacus quis nibh elementum rutrum. Etiam vehicula nisi ac dui ullamcorper, sed pharetra orci pretium. Sed quis hendrerit est. 
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                          Etiam ante diam, fermentum in blandit ac, finibus eu magna. Morbi ut eleifend magna, ut porttitor augue. Aenean efficitur luctus elementum.
                        </Typography>
                        <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined}>
                            Morbi vestibulum odio ac ultricies interdum. Proin interdum rhoncus nulla. Praesent sit amet iaculis nisl.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container justifyContent={matchesMD ? "center" : "flex-end"} lg>
                    <Lottie options={defaultOptions} style={{ maxWidth: "40em", margin: 0 }} />
                </Grid>
            </Grid>
            {/* Process */}
            <Grid item container direction="row" justifyContent="center" className={classes.rowContainer}>
                <Grid item>
                    <Typography variant="h4" gutterBottom>
                        Process
                    </Typography>
                </Grid>
            </Grid>
            {/* Sections */}
            {sections.map( (section, index)  => (
            <Grid key={index} item container direction={matchesMD ? "column" : "row"} justifyContent={matchesMD ? "center" : undefined} className={classes.rowContainer} style={{ backgroundColor: section.backgroundColor, height: "90em" }}>
                <Grid item container direction="column" alignItems={matchesMD ? "center" : undefined} lg>
                    <Grid item>
                        <Typography variant="h4" gutterBottom style={{ color: "#000", marginTop: matchesMD ? 0 : "5em" }} align={matchesMD ? "center" : undefined}>
                            {section.title}
                        </Typography>
                    </Grid>
                    <Grid item>
                        {section.paragraphs.map(paragraph => (
                        <Typography variant="body1" paragraph align={matchesMD ? "center" : undefined} style={{ color: "#fff", maxWidth: "20em" }}>
                            {paragraph}
                        </Typography>))}
                    </Grid>
                </Grid>
                <Grid item lg style={{alignSelf: "center"}}>
                    <LazyLoadImage threshold={400} src={section.icon} alt={section.iconAlt} style={{ maxWidth: section.iconMaxWidth }} width="100%" />
                </Grid>
            </Grid>))}
            {/* End of Sections */}
            {/* Call To Action */}
            <Grid item>
                <CallToAction  />
            </Grid>
        </Grid>
    )
}