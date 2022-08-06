import React, { useState, useEffect, useMemo } from "react";
import { makeStyles, useTheme } from "@material-ui/styles";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tabs  from "@material-ui/core/Tabs";
import Tab  from "@material-ui/core/Tab";
import Button  from "@material-ui/core/Button";
import Menu  from "@material-ui/core/Menu";
import MenuItem  from "@material-ui/core/MenuItem";
import useMediaQuery  from "@material-ui/core/useMediaQuery";
import Link from "../Link"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Popper from "@material-ui/core/Popper";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import MenuList from "@material-ui/core/MenuList";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails  from "@material-ui/core/AccordionDetails";
import Grid from "@material-ui/core/Grid";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Typography } from "@material-ui/core";
import { event } from "../../lib/ga"

// Adds shadow effect to the header when user scrolls the page
function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

  const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "8.5em",
        [theme.breakpoints.down('md')]: {
            marginBottom: "10.5em",
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: "11.5em"
        },
    },
    logo: {
        height: "8em",
        textTransform: "none",
        [theme.breakpoints.down('md')]: {
            height: "7em",
        },
        [theme.breakpoints.down('xs')]: {
            height: "5.5em",
        },
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent",
        },
    },
    tabContainer: {
        marginLeft: "auto",
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px",
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px",
        "&:hover": {
          backgroundColor: theme.palette.secondary.light,
      },
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: "white",
        borderRadius: 0,
        zIndex: 1302,
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        },
        "&.Mui-selected": {       // this is to refer to the prop provided by M-UI
            borderBottom: `2px solid ${theme.palette.common.orange}`,
            opacity: 1,
          },
    },
    drawerIcon: {
        height: "50px",
        width: "50px"
      },
      drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
          backgroundColor: "transparent"
        }
      },
      drawer: {
        backgroundColor: theme.palette.common.blue,
        zIndex: 2000,
      },
      drawerItem: {
        ...theme.typography.tab,
        color: "white",
        opacity: 0.7,
      },
      drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange
      },
      drawerItemSelected: {
        borderBottom: `2px solid ${theme.palette.common.orange}`,
        "& .MuiListItemText-root": {
          opacity: 1,
        }
      },
      appbar: {
        zIndex: theme.zIndex.modal + 1,
        [theme.breakpoints.down('md')]: {
          paddingRight: "0 !important",
      },
      },
      expansion: {
        backgroundColor: theme.palette.common.blue,
        borderBottom: props => props.tabIndex === 1 ? ` 2px solid ${theme.palette.common.orange}` : "1px solid rgba(0, 0, 0, 0.12)",
        "&.Mui-expanded": {
          margin: 0,
          borderBottom: 0,
        },
        "&::before": {
          backgroundColor: "rgba(0, 0, 0, 0)"
        },
      },
      expansionDetails: {
        padding: 0,
        backgroundColor: theme.palette.primary.light,
      },
      expansionSummary: {
        padding: "0 24px 0 16px",
        backgroundColor: props => props.tabIndex === 1 ? "rgba(0, 0, 0, 0.14)" : "inherit",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.08)",
        },
      },
      message: {
        paddingTop: "1em",
        paddingBottom: "1.5em",
        backgroundColor: theme.palette.error.main,

      }
  }))

export default function Header(props) {
    const classes = useStyles(props);
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    const [anchorEl, setAnchorEl] = useState(null)
    const [open, setOpen] = useState(false)
    const [openDrawer, setOpenDrawer] = useState(false);
    

    const handleChange = (e, value) => {
        props.setTabindex(value)
    }

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget)
        setOpen(true)
    }

    const handleMenuItemClick = (e, i) => {
        setAnchorEl(null)
        setOpen(false)
        props.setSelectedIndex(i)
    }

    const handleClose = (e) => {
        setAnchorEl(null)
        setOpen(false)
    }

    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      } else if (event.key === 'Escape') {
        setOpen(false);
      }
    }

    const routes = useMemo(() => { 
        return [
        { name: "Home", link: "/", activeIndex: 0 },
        {
          name: "Services",
          link: "/services",
          activeIndex: 1,
          ariaOwns: anchorEl ? "simple-menu" : undefined,
          ariaPopup: anchorEl ? "true" : undefined,
          mouseOver: event => handleClick(event)
        },
        { name: "The Revolution", link: "/revolution", activeIndex: 2 },
        { name: "About Us", link: "/about", activeIndex: 3 },
        { name: "Contact Us", link: "/contact", activeIndex: 4 },
        { name: "Project 2", link: "/projectmanager", activeIndex: 5 },
      ]}, [anchorEl]);

    const menuOptions = useMemo(() => {
    return [
        {
          name: "Custom Software Development",
          link: "/customsoftware",
          activeIndex: 1,
          selectedIndex: 0,
        },
        {
          name: "iOS/Android App Development",
          link: "/mobileapps",
          activeIndex: 1,
          selectedIndex: 1,
        },
        {
          name: "Website Development",
          link: "/websites",
          activeIndex: 1,
          selectedIndex: 2,
        }
    ]}, []);

      const path = typeof window !== "undefined" ? window.location.pathname : null;

      const activeIndex = () => {
        const found = routes.find(({ link }) => link === path)
        const menuFound = menuOptions.find(({ link }) => link === path)
        if ( menuFound ) {
          props.setTabindex(1)
          props.setSelectedIndex(menuFound.selectedIndex)
        }
        else if(found === undefined) {
          props.setTabindex(false)
        }
        else {
          props.setTabindex(found.activeIndex)
        }
      }

      useEffect(() => {
        activeIndex();
      }, [path])

      const tabs = (
        <React.Fragment>
            <Tabs value={props.tabIndex} className={classes.tabContainer} onChange={handleChange}>
                {routes.map((route, index) => (
                    <Tab
                    key={route.link} 
                    className={classes.tab}
                    component={Link}
                    href={route.link} 
                    label={route.name}
                    aria-owns={route.ariaOwns}
                    aria-haspopup={route.ariaPopup}
                    onMouseOver={route.mouseOver}
                    onMouseLeave={() => setOpen(false)}
                    />
                ))}
            </Tabs>
            <Button variant="contained" color="secondary" className={classes.button} component={Link}  href="/estimate" onClick={() => event({params:{category: "Estimate"}, action: "Desktop Header Pressed"})}>Free Estimate</Button>
            <Popper
              open={open}
              anchorEl={anchorEl}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin: "top left"
                  }}
                >
                  <Paper classes={{root: classes.menu}} elevation={0} >
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        onMouseLeave={handleClose}
                        disablePadding
                        autoFocusItem={false}
                        id="simple-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                        onMouseOver={() => setOpen(true)}
                      >
                        {menuOptions.map((option, i) => (
                          <MenuItem
                          key={i} 
                          onClick={(event) => {handleMenuItemClick(event, i); handleClose();}} 
                          component={Link} 
                          href={option.link} 
                          classes={{root: classes.menuItem}} 
                          selected={i === props.selectedIndex && props.tabIndex === 1 && window.location.pathname !== "/services"}>
                          {option.name}</MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            {/* <Menu 
             id="simple-menu"
             classes={{paper: classes.menu}} 
             anchorEl={anchorEl} 
             open={open} 
             onClose={handleClose} 
             MenuListProps={{onMouseLeave: handleClose}}
             elevation={0}
             style={{zIndex:1302}}
             keepMounted
             >
            </Menu>  */}
        </React.Fragment>
      )
      const drawer = (
        <React.Fragment>
          <SwipeableDrawer
            disableSwipeToOpen={false} 
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            onOpen={() => setOpenDrawer(true)}
            classes={{ paper: classes.drawer }}
          >
            <div className={classes.toolbarMargin}></div>
            <List disablePadding>
                {routes.map( route =>
                route.name === "Services" ? 
                (
                  <Accordion key={route.name} elevation={0} classes={{root: classes.expansion}}>
                    <AccordionSummary classes={{root: classes.expansionSummary}} expandIcon={<ExpandMoreIcon color="secondary" />}>
                        <ListItemText classes={{root: classes.drawerItem}} style={{opacity: props.tabIndex === 1 ? 1 : null}} disableTypography onClick={() => {setOpenDrawer(false)}}>
                          <Link color="inherit" href={route.link}> {route.name} </Link>
                        </ListItemText>
                    </AccordionSummary>
                    <AccordionDetails  classes={{root: classes.expansionDetails}}>
                        <Grid container direction="column">
                          {menuOptions.map(subroute => (
                            <Grid item key={subroute.name}>
                              <ListItem 
                                key={subroute.link}
                                onClick={() => {setOpenDrawer(false); props.setSelectedIndex(subroute.selectedIndex)}} 
                                divider
                                button
                                component={Link} 
                                href={subroute.link}
                                selected={props.selectedIndex === subroute.selectedIndex && props.tabIndex === 1 && window.location.pathname !== "/services" }
                                classes={{selected: classes.drawerItemSelected}}
                                >
                                    <ListItemText classes={{root: classes.drawerItem}} disableTypography>
                                        {subroute.name.split(" ").filter(word => word !== "Development").join(" ")}
                                        <br />
                                        <span style={{fontSize: "0.7rem"}}>
                                          Development
                                        </span>
                                    </ListItemText>
                                </ListItem>
         
                            </Grid>
                          ))}
                        </Grid>
                    </AccordionDetails>
                  </Accordion>
                ) 
                : 
                (
                    <ListItem 
                    key={route.link}
                    onClick={() => {setOpenDrawer(false);}} 
                    divider
                    button
                    component={Link} 
                    href={route.link}
                    selected={props.tabIndex === route.activeIndex}
                    classes={{selected: classes.drawerItemSelected}}
                    >
                        <ListItemText classes={{root: classes.drawerItem}} disableTypography>
                            {route.name}
                        </ListItemText>
                    </ListItem>
                ))}
                <ListItem 
                selected={props.tabIndex === false} 
                onClick={() => {setOpenDrawer(false); event({params:{category: "Estimate"}, action: "Mobile Header Pressed"}); }} 
                divider button  
                component={Link}
                 href="/estimate" 
                 classes={{root: classes.drawerItemEstimate, selected: classes.drawerItemSelected}}>
                    <ListItemText className={classes.drawerItem} disableTypography>
                        Free Estimate
                    </ListItemText>
                </ListItem>
            </List>
          </SwipeableDrawer>
          <IconButton
            className={classes.drawerIconContainer}
            onClick={() => setOpenDrawer(!openDrawer)}
            disableRipple
          >
            <MenuIcon className={classes.drawerIcon} />
          </IconButton>
        </React.Fragment>
      );

    return (
        <React.Fragment>
        <ElevationScroll>
            <AppBar position="fixed" className={classes.appbar}>
            <Grid container direction="column" justifyContent="center" classes={{root: classes.message}}>
                    <Grid item >
                      <Typography variant="body1" style={{color: "#fff", fontSize: "1rem"}} align="center">
                        This site was created expressly for learning purposes, so don't take the content seriously. 
                        <br/> Please do not use the contact form and please do not place an estimate request, I will not respond to this.
                        </Typography>
                    </Grid>
                  </Grid>
                <Toolbar disableGutters>
                    <Button component={Link} href="/" className={classes.logoContainer} disableRipple>
                    <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 139" className={classes.logo}>
                      <style>{`.st0{fill:none}.st1{fill:#fff}.st2{font-family:Raleway; font-weight: 300;}.st6{fill:none;stroke:#000;stroke-width:3;stroke-miterlimit:10}`}</style>
                      <path d="M448.07-1l-9.62 17.24-8.36 14.96L369.93 139H-1V-1z"/>
                      <path className="st0" d="M-1 139h479.92v.01H-1z"/>
                      <text transform="translate(261.994 65.233)" className="st1 st2" fontSize="57">Arc</text>
                      <text transform="translate(17.692 112.015)" className="st1 st2" fontSize="54">Development</text>
                      <path className="st0" d="M382.44 116.43l47.65-85.23 8.36-14.96M369.83 139l-.01.01L362 153"/>
                      <path d="M438.76 15.76l-56.42 100.91c-12.52-10.83-20.45-26.82-20.45-44.67 0-32.58 26.42-59 59-59 6.23 0 12.24.97 17.87 2.76z" fill="#0b72b9"/>
                      <path d="M479.89 72c0 32.58-26.42 59-59 59-14.73 0-28.21-5.4-38.55-14.33l56.42-100.91c23.85 7.57 41.13 29.89 41.13 56.24z"/>
                      <g id="Group_186" transform="translate(30.153 11.413)"><g id="Group_185"><g id="Words">
                      <path id="Path_59" className="st1" d="M405.05 14.4l-.09 80.38-7.67-.01.06-52.25-29.4 52.21-7.94-.01 45.04-80.32z"/>
                      </g></g></g>
                      <path className="st0" d="M457-17l-8.93 16-9.62 17.24-8.36 14.96L369.93 139l-.01.01L361 155"/>
                    </svg>
                    </Button>
                    <Hidden mdDown>
                      {tabs}
                    </Hidden>
                    <Hidden lgUp>
                      {drawer}
                    </Hidden>
                </Toolbar>
            </AppBar>
        </ElevationScroll>
        <div className={classes.toolbarMargin} />
        </React.Fragment>

    );
}