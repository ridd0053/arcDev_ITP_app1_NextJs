import React, { useState, useRef } from "react";
import { cloneDeep } from 'lodash';
import Lottie from "react-lottie"
import { makeStyles, useTheme } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import Hidden from "@material-ui/core/Hidden";
import CircularProgress from "@material-ui/core/CircularProgress";
import Snackbar from "@material-ui/core/Snackbar";
import useMediaQuery  from "@material-ui/core/useMediaQuery";
import emailjs from '@emailjs/browser';
import Head from "next/head";
import { event } from "../lib/ga";

import estimateAnimation from "../src/animations/estimateAnimation/data.json";

const useStyles = makeStyles(theme => ({
    icon: {
       width: "12em",
       height: "10em", 
    },
    estimateButton: {
        ...theme.typography.estimate, 
        borderRadius: 50,
        backgroundColor: theme.palette.common.orange,
        height: 50,
        width: 225,
        fontSize:"1.25rem",
        marginTop: "5em",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light,
        },
    },
    message: {
        border: `2px solid ${theme.palette.common.blue}`,
        marginTop: "2em",
        marginBottom: "1em",
        borderRadius: 5,
    },
    specialText: {
        fontFamily: "Raleway",
        fontWeight: 700,
        fontSize:  "1.5rem",
        color: theme.palette.common.orange
    },
}))
const defaultQuestions = [
    {
        id: 1,
        title: "Which service are you interested in?",
        active: true,
        options: [
            {
                id: 1,
                title: "Custom Software Development",
                subtitle: null,
                icon: "/assets/software.svg",
                iconAlt: "three floating screens",
                selected: false,
                cost: 0
            },
            {
                id: 2,
                title: "iOS/Android App Development",
                subtitle: null,
                icon: "/assets/mobile.svg",
                iconAlt: "phones and tablet outline",
                selected: false,
                cost: 0
            },
            {
                id: 3,
                title: "Website Development",
                subtitle: null,
                icon: "/assets/website.svg",
                iconAlt: "computer outline",
                selected: false,
                cost: 0
            }
        ]
    },
]
const softwareQuestions = [
    { ...defaultQuestions[0], active: false },
    {
      id: 2,
      title: "Which platforms do you need supported?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Web Application",
          subtitle: null,
          icon: "/assets/website.svg",
          iconAlt: "computer outline",
          selected: false,
          cost: 100
        },
        {
          id: 2,
          title: "iOS Application",
          subtitle: null,
          icon: "/assets/iphone.svg",
          iconAlt: "outline of iphone",
          selected: false,
          cost: 100
        },
        {
          id: 3,
          title: "Android Application",
          subtitle: null,
          icon: "/assets/android.svg",
          iconAlt: "outlines of android phone",
          selected: false,
          cost: 100
        }
      ],
      active: true
    },
    {
      id: 3,
      title: "Which features do you expect to use?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Photo/Video",
          subtitle: null,
          icon: "/assets/camera.svg",
          iconAlt: "camera outline",
          selected: false,
          cost: 25
        },
        {
          id: 2,
          title: "GPS",
          subtitle: null,
          icon: "/assets/gps.svg",
          iconAlt: "gps pin",
          selected: false,
          cost: 25
        },
        {
          id: 3,
          title: "File Transfer",
          subtitle: null,
          icon: "/assets/upload.svg",
          iconAlt: "outline of cloud with arrow pointing up",
          selected: false,
          cost: 25
        }
      ],
      active: false
    },
    {
      id: 4,
      title: "Which features do you expect to use?",
      subtitle: "Select all that apply.",
      options: [
        {
          id: 1,
          title: "Users/Authentication",
          subtitle: null,
          icon: "/assets/users.svg",
          iconAlt: "outline of a person with a plus sign",
          selected: false,
          cost: 25
        },
        {
          id: 2,
          title: "Biometrics",
          subtitle: null,
          icon: "/assets/biometrics.svg",
          iconAlt: "fingerprint",
          selected: false,
          cost: 25
        },
        {
          id: 3,
          title: "Push Notifications",
          subtitle: null,
          icon: "/assets/bell.svg",
          iconAlt: "outline of a bell",
          selected: false,
          cost: 25
        }
      ],
      active: false
    },
    {
      id: 5,
      title: "What type of custom features do you expect to need?",
      subtitle: "Select one.",
      options: [
        {
          id: 1,
          title: "Low Complexity",
          subtitle: "(Informational)",
          icon: "/assets/info.svg",
          iconAlt: "'i' inside a circle",
          selected: false,
          cost: 25
        },
        {
          id: 2,
          title: "Medium Complexity",
          subtitle: "(Interactive, Customizable, Realtime)",
          icon: "/assets/customized.svg",
          iconAlt: "two toggle switches",
          selected: false,
          cost: 50
        },
        {
          id: 3,
          title: "High Complexity",
          subtitle: "(Data Modeling and Computation)",
          icon: "/assets/data.svg",
          iconAlt: "outline of line graph",
          selected: false,
          cost: 100
        }
      ],
      active: false
    },
    {
      id: 6,
      title: "How many users do you expect?",
      subtitle: "Select one.",
      options: [
        {
          id: 1,
          title: "0-10",
          subtitle: null,
          icon: "/assets/person.svg",
          iconAlt: "person outline",
          selected: false,
          cost: 1
        },
        {
          id: 2,
          title: "10-100",
          subtitle: null,
          icon: "/assets/persons.svg",
          iconAlt: "outline of two people",
          selected: false,
          cost: 1.25
        },
        {
          id: 3,
          title: "100+",
          subtitle: null,
          icon: "/assets/people.svg",
          iconAlt: "outline of three people",
          selected: false,
          cost: 1.5
        }
      ],
      active: false
    }
  ];
  const websiteQuestions = [
    { ...defaultQuestions[0], active: false },
    {
      id: 2,
      title: "Which type of website are you wanting?",
      subtitle: "Select one.",
      options: [
        {
          id: 1,
          title: "Basic",
          subtitle: "(Informational)",
          icon: "/assets/info.svg",
          iconAlt: "person outline",
          selected: false,
          cost: 100
        },
        {
          id: 2,
          title: "Interactive",
          subtitle: "(Users, API's, Messaging)",
          icon: "/assets/customized.svg",
          iconAlt: "outline of two people",
          selected: false,
          cost: 200
        },
        {
          id: 3,
          title: "E-Commerce",
          subtitle: "(Sales)",
          icon: "/assets/globe.svg",
          iconAlt: "outline of three people",
          selected: false,
          cost: 250
        }
      ],
      active: true
    }
  ];


export default function Estimate(props) { 
    const classes =  useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

    const myRef = useRef(null)

    const [questions, setQuestions] = useState(defaultQuestions);
    const [dialogOpen, setDialogOpen] = useState(false); 

    const [name, setName] = useState("")

    const [email, setEmail] = useState("")
    const [emailHelper, setEmailHelper] = useState("")

    const [phone, setPhone] = useState("")
    const [phoneHelper, setPhoneHelper] = useState("")

    const [message, setMessage] = useState("")

    const [total, setTotal] = useState(0);

    const [service, setService] = useState([]);
    const [platforms, setPlatforms] = useState([]);
    const [features, setFeatures] = useState([]);
    const [customFeatures, setcustomFeatures] = useState("");
    const [category, setCategory] = useState("");
    const [users, setUsers] = useState("");

    const [loading, setLoading] = useState(false)
    const [alert, setAlert] = useState({open: false, message:"", backgroundColor:""})


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: estimateAnimation,
        renderSettings: {
            preserveAspectRation: "xMidYMid slice"
        }
    }

    const nextQuestion = () => {
        if (matchesSM) {
            window.scrollTo(0, myRef.current.offsetTop)
        }
        const newQuestions = cloneDeep(questions);
        const currentlyActive = newQuestions.filter(question => question.active)
        const activeIndex = currentlyActive[0].id - 1
        const nextIndex = activeIndex + 1
        newQuestions[activeIndex] = {...currentlyActive[0], active: false}
        newQuestions[nextIndex] = {...newQuestions[nextIndex], active: true}
        setQuestions(newQuestions)
    }

    const previousQuestion = () => {
        if (matchesSM) {
            window.scrollTo(0, myRef.current.offsetTop)
        }
        const newQuestions = cloneDeep(questions);
        const currentlyActive = newQuestions.filter(question => question.active)
        const activeIndex = currentlyActive[0].id - 1
        const nextIndex = activeIndex - 1
        newQuestions[activeIndex] = {...currentlyActive[0], active: false}
        newQuestions[nextIndex] = {...newQuestions[nextIndex], active: true}

        setQuestions(newQuestions)
    }

    const navigationPreviousDisabled = () => {
        const currentlyActive = questions.filter(question => question.active)

        if( currentlyActive[0].id === 1 ) {
            return true
        } else {
            return false
        }
    }

    const navigationNextDisabled = () => {
        const currentlyActive = questions.filter(question => question.active)

        if( currentlyActive[0].id === questions[questions.length - 1].id ) {
            return true
        } else {
            return false
        }
    }

    const handleSelect = (id) => {
        const newQuestions = cloneDeep(questions);
        const currentlyActive = newQuestions.filter(question => question.active)
        const activeIndex = currentlyActive[0].id - 1

        const newSelected = newQuestions[activeIndex].options[id - 1];
        const previousSelected = currentlyActive[0].options.filter(option => option.selected)
        switch(currentlyActive[0].subtitle) {
            case 'Select one.':
                if(previousSelected[0]) {
                    previousSelected[0].selected = !previousSelected[0].selected
                }
                newSelected.selected = !newSelected.selected
                break;
            default:
                newSelected.selected = !newSelected.selected
                break;
        }

        switch(newSelected.title) {
            case "Custom Software Development":
                if (matchesSM) {
                    window.scrollTo(0, myRef.current.offsetTop)
                }
                setQuestions(softwareQuestions)
                setService(newSelected.title)
                setPlatforms([])
                setFeatures([])
                setcustomFeatures("")
                setCategory("")
                setUsers("")
                break;
            case "iOS/Android App Development":
                if (matchesSM) {
                    window.scrollTo(0, myRef.current.offsetTop)
                }
                setQuestions(softwareQuestions)
                setService(newSelected.title)
                setPlatforms([])
                setFeatures([])
                setcustomFeatures("")
                setCategory("")
                setUsers("")
                break;
            case "Website Development":
                if (matchesSM) {
                    window.scrollTo(0, myRef.current.offsetTop)
                }
                setQuestions(websiteQuestions)
                setService(newSelected.title)
                setPlatforms([])
                setFeatures([])
                setcustomFeatures("")
                setCategory("")
                setUsers("")
                break;
            default:
                setQuestions(newQuestions)
                break;
        }

    }

    const isDisabled =
    name.length === 0 ||
    message.length === 0 ||
    phone.length === 0 ||
    email.length === 0 ||
    phoneHelper.length !== 0 ||
    emailHelper.length !== 0;

    const onChange = event => {
        let valid;
        switch(event.target.id) {
            case "email":
                setEmail(event.target.value)
                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
                if(!valid) {
                    setEmailHelper("Invalid email")
                }else {
                    setEmailHelper("")
                }
                break;
            case "phone":
                setPhone(event.target.value)
                valid = /^([0-9]{9,})$/.test(event.target.value)
                if(!valid) {
                    setPhoneHelper("Invalid phone")
                }else {
                    setPhoneHelper("")
                }
                break;
            default:
                break;
        }
    }

    const getTotal = () => {
        let cost = 0;
        let userGroup;

        const selections = questions.map(question => question.options.filter(option => option.selected)).filter(
            question => question.length >  0
        );
        const sumGo= ["0-10", "10-100", "100+"]
 
        selections.map(options=> options.map(option =>
            sumGo.includes(option.title) ? 
                (userGroup = option.title, cost *= option.cost) 
                : cost += option.cost
            ))
        
        setTotal(cost)
        setUsers(userGroup)
        
    }

    const getSelections = () => {
        let newPlatforms = [];
        let newFeatures = [];
        if(service === "Custom Software Development" || service === "iOS/Android App Development") {
            questions.filter(question => question.title === "Which platforms do you need supported?").map(
                question => question.options.filter(option => option.selected))[0].map(
                    option => newPlatforms.push(option.title)
                )
            questions.filter(question => question.title === "Which features do you expect to use?").map(
                question => question.options.filter(option => option.selected)).map(
                    option => option.map(newFeature => newFeatures.push(newFeature.title) )
                )
                const customFeature = questions.filter(question => question.title === "What type of custom features do you expect to need?").map(
                question => question.options.filter(option => option.selected))[0][0].title
            setPlatforms(newPlatforms)
            setFeatures(newFeatures)
            setcustomFeatures(customFeature)
        }
        if(service === "Website Development") {
            const newCategory = questions.filter(question => question.title === "Which type of website are you wanting?")[0].options.filter(
                option => option.selected)[0].title
            setCategory(newCategory)
            }
            
     };
     const esitimateDisabled = () => {
        let disabled = true
        const emptySelections = questions.filter(question => question.title !== "Which features do you expect to use?")
        .map( question =>
            question.options.filter(option => option.selected)).filter(question =>
                question.length === 0);
            
        const featuresSelected = questions.filter(question => question.title === "Which features do you expect to use?")
        .map(question => question.options.filter(option => option.selected))
        .filter(selections => selections.length > 0);

        if ( questions.length === 2 ) {
            if( emptySelections.length === 1 ) {
                disabled = false
            }
        } 
        else if( questions.length === 1) {
            disabled = true
        } 
        else if( emptySelections.length === 1 && featuresSelected.length > 0) {
            disabled = false
        }
        return disabled
     }

     const placeRequest = (e) => {
        setLoading(true)
        emailjs.send(process.env.NEXT_PUBLIC_MY_SERVICE_ID, process.env.NEXT_PUBLIC_MY_TEMPLATE_ID, {sort: "Estimate request", name, email, phone, message, service, platforms, features, customFeatures, category, users, total}, process.env.NEXT_PUBLIC_MY_PUBLIC_KEY).then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            setLoading(false)
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            setDialogOpen(false);
            setAlert({open: true, message:"Your estimate is send successfully", backgroundColor:"#4BB543"})
            event({params:{category: "estimate form"}, action: "Send email"})

        }, function(error) {
            console.log('FAILED...', error);
            setLoading(false)
            setName("");
            setEmail("");
            setPhone("");
            setMessage("");
            setDialogOpen(false);
            setAlert({open: true, message:"Something went wrong, please try again later", backgroundColor:"#FF3232"})
        });
    }

     const softwareSelection = (
        <Grid item container direction="column" style={{marginBottom: "1.25em"}}>
            <Grid item container alignItems="center">
                <Grid item xs={2}>
                    <img src="/assets/check.svg" alt="checkmark" />
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="body1">
                        You want {service}
                        {platforms.length > 0 ? 
                        ` for ${
                        //if only web application is selected...
                        platforms.indexOf("Web Application") > -1 &&
                        platforms.length === 1
                          ? //then finish sentence here
                            "a Web Application."
                          : //otherwise, if web application and another platform is selected...
                          platforms.indexOf("Web Application") > -1 &&
                            platforms.length === 2
                          ? //then finish the sentence here
                            `a Web Application and an ${platforms[1]}.`
                          : //otherwise, if only one platform is selected which isn't web application...
                          platforms.length === 1
                          ? //then finish the sentence here
                            `an ${platforms[0]}`
                          : //otherwise, if other two options are selected...
                          platforms.length === 2
                          ? //then finish the sentence here
                            "an iOS Application and an Android Application."
                          : //otherwise if all three are selected...
                          platforms.length === 3
                          ? //then finish the sentence here
                            "a Web Application, an iOS Application, and an Android Application."
                          : null
                        }`
                        : null}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container alignItems="center" style={{marginBottom: "1.25em"}}>
                <Grid item xs={2}>
                    <img src="/assets/check.svg" alt="checkmark" />
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="body1">
                        {"with "}
                        {/* if we have features... */}
                        {features.length > 0
                        ? //...and there's only 1...
                            features.length === 1
                            ? //then end the sentence here
                            `${features[0]}.`
                            : //otherwise, if there are two features...
                            features.length === 2
                            ? //...then end the sentence here
                            `${features[0]} and ${features[1]}.`
                            : //otherwise, if there are three or more features...
                            features
                            //filter out the very last feature...
                            .filter(
                            (feature, index) =>
                            index !== features.length - 1
                            )
                            //and for those features return their name...
                            .map((feature, index) => (
                            <span key={index}>{`${feature}, `}</span>
                            ))
                        : null}
                        {features.length > 2
                            ? //...and then finally add the last feature with 'and' in front of it
                            ` and ${features[features.length - 1]}.`
                            : null}
                    </Typography>
                </Grid>
            </Grid>
            <Grid item container alignItems="center">
                <Grid item xs={2}>
                    <img src="/assets/check.svg" alt="checkmark" />
                </Grid>
                <Grid item xs={10}>
                    <Typography variant="body1">
                        The custom features will be of {customFeatures.toLocaleLowerCase()}
                        {`, and the project will be used by about ${users} users.`}
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )

    const websiteSelection = (
    <Grid item container direction="column" style={{marginTop: "14em"}}>
        <Grid item container alignItems="center">
            <Grid item xs={2}>
                <img src="/assets/check.svg" alt="checkmark" />
            </Grid>
            <Grid item xs={10}>
                <Typography variant="body1">
                    You want {category === "Basic" ? "a Basic website." : `an ${category} website`}
                </Typography>
            </Grid>
        </Grid>
    </Grid>
    )

    return (
        <Grid container direction="row">
            <Head>
                <title key="title">Free Custom Software Estimate | Arc Development</title>
                <meta name="description" key="description" content="Dit is een website gemaakt op basis van een cursus." />
                <meta property='og:title' content='Course Website | Estimate' key="og:title" />
                <meta property='og:url' content='itp-course-material-ui.herokuapp.com/estimate' key="og:url" />
                <link rel="canonical" key="canonical" href="itp-course-material-ui.herokuapp.com/estimate" />
            </Head>
            {/* Questions */}
            <Grid item container direction="column" lg alignItems={matchesMD ? "center" : undefined}>
                <Grid item style={{marginTop: "2em", marginLeft: matchesMD ? 0 : "5em"}}>
                    <Typography variant="h1" align={matchesMD ? "center" : undefined}>
                        Estimate
                    </Typography>
                </Grid>
                <Grid item style={{marginRight: matchesMD ? 0 : "10em", maxWidth: "50em", marginTop:"7.5em"}}>
                    <Lottie options={defaultOptions} width="100%" height="100%"/>
                </Grid>
            </Grid>
            <Grid item container direction="column" alignItems="center" lg style={{marginRight: matchesMD ? 0 : "2em", marginBottom:"25em"}}>
                {questions.filter(question => question.active).map((question, index) => (
                    <React.Fragment key={index}>
                        <Grid item ref={myRef}>
                            <Typography variant="h1" align="center" style={{fontWeight: 500, marginTop:"5em", fontSize:"2.25rem", lineHeight:1.25, marginLeft: matchesSM ? "1em" : 0, marginRight: matchesSM ? "1em" : 0}}>
                                {question.title}
                            </Typography>
                            <Typography variant="body1" align="center" style={{marginBottom: "2.5em"}} gutterBottom>
                                {question.subtitle}
                            </Typography>
                        </Grid>
                        <Grid item container>
                            {question.options.map(option => (
                                <Grid item container direction="column" md key={option.id} component={Button} onClick={() => handleSelect(option.id)} 
                                style={{display: "grid", textTransform:"none", borderRadius: 0, marginBottom: matchesSM ? "1.5em" : 0, backgroundColor: option.selected ? theme.palette.common.orange : null}}>
                                    <Grid item style={{maxWidth: "14em"}}>
                                        <Typography variant="h6" align="center" style={{marginBottom: "1em"}}>
                                            {option.title}
                                        </Typography>
                                        <Typography variant="caption" align="center">
                                            {option.subtitle}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <img src={option.icon} alt={option.iconAlt} className={classes.icon} />
                                    </Grid>
                                </Grid>
                            ))}
                        </Grid>
                    </React.Fragment>
                ))}
    
                <Grid item container justifyContent="space-between" style={{width: "18em", marginTop:"3em"}}>
                    <Grid item>
                        <IconButton disabled={navigationPreviousDisabled()} onClick={previousQuestion}>
                            <img src={navigationPreviousDisabled() ? "/assets/backArrowDisabled.svg" : "/assets/backArrow.svg"} alt="Previous question" />
                        </IconButton>
                    </Grid>
                    <Grid item>
                        <IconButton disabled={navigationNextDisabled()} onClick={nextQuestion}>
                          <img src={navigationNextDisabled() ? "/assets/forwardArrowDisabled.svg" : "/assets/forwardArrow.svg"} alt="Next question" />  
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item >
                    <Button variant="contained" disabled={esitimateDisabled()} onClick={() => {setDialogOpen(true); getTotal(); getSelections(); event({params:{category: "estimate form"}, action: "Open dialog"})}} className={classes.estimateButton}>
                        Get Estimate
                    </Button>
                </Grid>
            </Grid>
            <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} style={{zIndex: 1302}} 
            fullWidth maxWidth="lg" fullScreen={matchesSM}>
                <DialogTitle>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Typography variant="h1" align="center">
                                Estimate
                            </Typography>
                        </Grid>
                    </Grid>
                </DialogTitle>
                <DialogContent>
                    <Grid container justifyContent="space-around" direction={matchesSM ? "column" : "row"} alignItems={matchesSM ? "center" : undefined}>
                        <Grid item container direction="column" md={7} style={{maxWidth: "20em"}}>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField label="Name" id="name" value={name} fullWidth onChange={(event) => setName(event.target.value)} />
                            </Grid>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField label="E-mail" error={emailHelper.length !== 0} helperText={emailHelper} id="email" value={email} fullWidth onChange={onChange} />
                            </Grid>
                            <Grid item style={{marginBottom: "0.5em"}}>
                                <TextField label="Phone" error={phoneHelper.length !== 0} helperText={phoneHelper} id="phone" value={phone} fullWidth onChange={onChange} />
                            </Grid>
                            <Grid item style={{maxWidth: "20em"}}>
                                <TextField 
                                value={message} 
                                id="message"
                                multiline 
                                minRows={10}
                                fullWidth
                                className={classes.message}
                                InputProps={{disableUnderline: true}}
                                placeholder="Tell us more about your project"
                                onChange={(event) => setMessage(event.target.value)} 
                                />
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined} style={{lineHeight: 1.25}}>
                                    We can create this digital solution for an estimated 
                                    <span className={classes.specialText}>{" "}€{total.toFixed(2)}</span>
                                </Typography>
                                <Typography variant="body1" paragraph align={matchesSM ? "center" : undefined}>
                                    Fill out your name, phone number and email, place your request and we'll get back to you with details moving forward and a final price.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction="column" md={5} style={{maxWidth: "30em"}} alignItems={matchesSM ? "center" : undefined}>
                            <Hidden smDown>
                                <Grid item>
                                    {service === "Website Development" ? websiteSelection : softwareSelection}
                                </Grid>
                            </Hidden>
                            <Grid item>
                                <Button variant="contained" className={classes.estimateButton} onClick={placeRequest} disabled={isDisabled}>
                                    
                                    {loading ? <CircularProgress size={30} /> :
                                    <React.Fragment>
                                        Place Request <img src="/assets/send.svg" alt="paper airplane" style={{marginLeft: "0.5em"}} 
                                    />
                                    </React.Fragment> }
                                </Button>
                            </Grid>
                            <Hidden mdUp>
                                <Grid item style={{marginTop: matchesSM? "0.5em" : 0, marginBottom: matchesSM ? "5em" : 0}}>
                                    <Button color="primary" style={{fontWeight: 300}} onClick={() => setDialogOpen(false)}>
                                        Cancel
                                    </Button>
                                </Grid>
                            </Hidden>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
            <Snackbar 
                    open={alert.open} 
                    message={alert.message}
                    autoHideDuration={4000} 
                    anchorOrigin={{vertical:"top", horizontal:"center"}} 
                    ContentProps={{style: {backgroundColor: alert.backgroundColor}}} 
                    onClose={() => setAlert({...alert, open: false})}/>
        </Grid>
    )
}

