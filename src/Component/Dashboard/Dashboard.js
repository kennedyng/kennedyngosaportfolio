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
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { secondaryListItems } from './ListItems';
import Home from '../Home/Home';
import { motion} from 'framer-motion/dist/framer-motion'
import { RouterAnimation } from "../Animation/RouterAnimation";
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
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
        background: '#07172c',       
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
       
        color: 'white',
        fontFamily: [
            'Oxygen'
        ],
        background: '#07172c',
       

    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        color: "white",
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
    appIcon: {
        color: "white",
        fontSize: 30
    }, 

    menuButton: {
        marginRight: 30,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
    },
    drawerPaper: {
        color: 'white',
        background: 'rgba(0, 56, 248, 0.34)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
        border: '1px solid rgba(0, 56, 248, 0.3)',
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
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
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
       
      
    },
    container: {
        paddingTop: theme.spacing(15),
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
        alignItems: 'center'
    },
    large: {
        width: 50,
        hidth: 20,
    },
    textAlign: {
        textAlign: 'center',
    }
}));


const mainTitleVariant = {
    hidden: {
        y: -40,
        opacity: 0,
        transition: {
           ease: "easeInOut",
           
            
        }
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 50,
            dumping: 300,
            delay: 3
        }
    }
}





const listVariant = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delay: 4
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }
  const itemVariant = {
    visible: { opacity: 1,
         y: 0, 
        },
    hidden: { opacity: 0, y: 100 },
    hover: {
        color: "#ff4d5a",
    }
  }



export default function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    
    return (
        <RouterAnimation >
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" elevation={0} className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar  className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                    <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        <motion.div variants={mainTitleVariant} initial="hidden" animate="visible">Kennedy Ngosa</motion.div>  
                    </Typography>

                    
                   
                
                   
                  
                    <IconButton color="inherit">
                        <Link href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_
                            profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact_info%3B62Vp%2FAXfQtycsJPsYnz6Ag%3D%3D" target="_blank">
                            <LinkedInIcon className={classes.appIcon} />
                        </Link>
                    </IconButton>
                  
                    
                    <IconButton color="inherit">
                        <Link href="https://web.facebook.com/kennedy.ngosa.315/" target="_blank">
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
                    <IconButton  onClick={handleDrawerClose}>
                        <ChevronLeftIcon fontSize="large" style={{color: "white"}} />
                       
                    </IconButton>
                    
                </div>
              
              
               <div style={{marginBottom: 20}}></div>
                    <List >{secondaryListItems}</List>
                <Divider />
                <Box className={classes.textAlign} pt={40}>
                    <Copyright />
                </Box>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}  />
                <Container maxWidth="lg" className={classes.container}>
                    <Grid container 
                    
                        alignItems="center" 
                        xs={12} sm={12} md={12} lg={12}
                        justifyContent="center"
                        direction="column"
                        >
                        <Grid item xs={12} sm={8} md={6} lg={6}>
                            <Home />

                        </Grid>
                    </Grid>
                </Container>
            </main>
        </div>
        </RouterAnimation>
    );
}