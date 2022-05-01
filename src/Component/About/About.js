import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import { Avatar } from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { secondaryListItems } from '../Dashboard/ListItems';
import Content from './Content';
import unDrawFolderFiles from "../../Image/undrawFolderFiles.svg";
import { RouterAnimation } from "../Animation/RouterAnimation"
import { motion } from 'framer-motion/dist/framer-motion'

function Copyright() {
    return (
        <Typography variant="body3" color="textSecondary" align="center">
        {'©'}
        <Link color="inherit" href="/"> </Link>{' '}
        {new Date().getFullYear()}
        {''}
        </Typography>
    );
    }

    const drawerWidth = 240;

    const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        background:"#07172c",
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
        background:"#07172c",
        color: '#000'
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
        color: "white"
    },
    drawerPaper: {
        background: 'rgba(0, 56, 248, 0.34)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
        border: '1px solid rgba(0, 56, 248, 0.3)',
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        color: 'white',
      
        transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.easeInOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
       
        
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
        },
    },
    appIcon: {
        color: "white",
        fontSize: 30
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        
        overflow: 'auto',
        
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: '100vh',
    },
    large: {
        width: 50,
        hidth: 20,
    },
    textAlign: {
        textAlign: 'center',
    },
    img: {
        height: "50%",
       
        
    },
    text: {
        color: "white",
        fontFamily: "Oxygen"
    },



}));



const contentVariant = {
    hidden: {
      
        opacity: 0,
        scaleX: 0,
       
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            delay: 3
        }

    },

    exit: {
        x: 300

    }
    
}








export default function About() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <RouterAnimation>
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="absolute" elevation={0} className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                    <MenuIcon className={classes.appIcon}/>
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Kennedy Ngosa
                    </Typography>
                    <IconButton color="inherit">
                        <Link href="#" target="_blank">
                            <GitHubIcon className={classes.appIcon}/>
                        </Link>
                    </IconButton>
                    <IconButton color="inherit">
                        <Link href="#" target="_blank">
                            <LinkedInIcon className={classes.appIcon}/>
                        </Link>
                    </IconButton>
                   
                    <IconButton color="inherit">
                        <Link href="#" target="_blank">
                            <FacebookIcon className={classes.appIcon}/>
                        </Link>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
                }}
                open={open}
            >
                <div className={classes.toolbarIcon}>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronLeftIcon classsName={classes.appIcon} />
                    </IconButton>
                </div>
                <Divider/>
                  
                <Divider />
                    <List>{secondaryListItems}</List>
                <Divider />
                <Box className={classes.textAlign} pt={40}>
                    <Copyright />
                </Box>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                
                <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <motion.span variants={contentVariant} initial="hidden" animate="visible" exit="exit">
                        <img className={classes.img} src={unDrawFolderFiles} alt="myImage"/>
                        </motion.span>
                    </Grid>
                    
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <Typography variant="h4" component="h2" className={classes.text} gutterBottom>
                            About Me
                        </Typography>
                        <Typography variant="body1" color="textSecondary" component="p" className={classes.text} gutterBottom>
                            My intellectual curiosity drives me to be a lifelong learner. As a curious tech learner, I am currently exploring Web technology having the experience of the Software Service industry. <br/> <br/>
                            In my everyday life, I try to love reading a book, write different things, helping people, and coding as well. I also think about different sorts of people. That basically inspires me as a different aspect. 
                        </Typography>
                        <motion.span variants={contentVariant} initial="hidden" animate="visible" exit="exit">
                        <Content />
                        </motion.span >
                    </Grid>
                </Grid>
                </Container>
               
            </main>
        </div>
        </RouterAnimation>
    );
}