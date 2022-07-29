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

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { secondaryListItems } from '../Dashboard/ListItems';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

import VisibilityButton from './VisibilityButton';
import GithubButton from './GithubButton'
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import paidsolution from '../../Image/paidsolution.png'
import myportfolio from '../../Image/myportfolio.png'
import johnPortfolio from '../../Image/johnPortfolio.png'

import { RouterAnimation } from "../Animation/RouterAnimation";

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
        background: '#07172c',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
        background: '#07172c',
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
       color: "white",
       fontFamily:"Oxygen",
        overflow: 'auto',
        background: '#07172c',
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
        width: 475,
        height: 630,
    },
    alignText: {
        textAlign: 'center',
    },
    textDecoration: {
        '&:hover': {
            textDecoration: 'none',
        }
    },
    cardShadow: {
        '&:hover': {
            vector: [0, 10, 30],
            display: 'block',
            transform: 'translate3d(0px,0,0) scale(1) rotateX(0deg)',
            boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
        }
    }, 
    appIcon : {
        color: "white",
        fontSize: 30
    }

}));

export default function Portfolio() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const styles = {
        media: {
            height: 0,
            paddingTop: '56.25%' // 16:9
        },
        card: {
            position: 'relative',
            color: 'white',
            background: 'rgba(0, 56, 248, 0.34)',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(0, 56, 248, 0.3)',
        },
        overlay: {
            position: 'absolute',
            top: 8,
            left: '50%',
            color: '#fff',
            transform: 'translateX(-50%)',
        },
    }

    return (
        <RouterAnimation >
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
                    <MenuIcon className={classes.appIcon} />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Portifolio
                    </Typography>
                    <IconButton color="inherit">
                        <Link href="" target="_blank">
                            <GitHubIcon className={classes.appIcon} />
                        </Link>
                    </IconButton>
                    <IconButton color="inherit">
                        <Link href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact_info%3B62Vp%2FAXfQtycsJPsYnz6Ag%3D%3D" target="_blank">
                            <LinkedInIcon className={classes.appIcon}/>
                        </Link>
                    </IconButton>
                    <IconButton color="inherit">
                        <Link href="https://web.facebook.com/kennedy.ngosa.315/" target="_blank">
                            <FacebookIcon className={classes.appIcon} />
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
                        <ChevronLeftIcon  className={classes.appIcon} />
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
                    <Typography style={{textAlign: 'center'}} component="h2" variant="h3">
                        <Box pb={1}>
                            My Projects
                        </Box>
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4} lg={4}>
                            <Card className={classes.cardShadow} style={styles.card}>
                                <CardActionArea>
                                    <CardMedia image={paidsolution} style={styles.media}/>
                                    <div style={styles.overlay}>
                                        <Typography component="h1" variant="h5">
                                            
                                        </Typography>
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Paid Solution
                                        </Typography>
                                        <Divider />
                                        <Typography variant="body2" component="p">
                                            <strong>Key Technology: </strong> React, React Router, Material UI, SCSS, Express, Redux, Stripe, Auth0,
                                        </Typography>
                                        
                                    </CardContent>
                                    <CardActions>
                                        <Link href="https://paid-solution.vercel.app" target="_blank" >
                                            <VisibilityButton />
                                        </Link>
                                        <Link href="https://github.com/kennedyng/PaidSolution.git" target="_blank">
                                            <GithubButton />
                                        </Link>
                                    </CardActions>  
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={4} lg={4}>
                            <Card className={classes.cardShadow} style={styles.card}>
                                <CardActionArea>
                                    <CardMedia image={myportfolio} style={styles.media}/>
                                    <div style={styles.overlay}>
                                        <Typography component="h1" variant="h5">
                                            
                                        </Typography>
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            My Portfolio
                                        </Typography>
                                        <Divider />
                                        <Typography variant="body2" component="p">
                                            <strong>Key Technology: </strong> React, React Router, Material UI, Framer motion, Styled Components, Email Js
                                        </Typography>
                                        
                                    </CardContent>
                                    <CardActions>
                                        <Link href="https://kennedyngosaportfolio.vercel.app" target="_blank" >
                                            <VisibilityButton />
                                        </Link>
                                        <Link href="https://github.com/kennedyng/kennedyngosaportfolio.git" target="_blank">
                                            <GithubButton />
                                        </Link>
                                    </CardActions>  
                                </CardActionArea>
                            </Card>
                        </Grid>

                        <Grid item xs={12} md={4} lg={4}>
                            <Card className={classes.cardShadow} style={styles.card}>
                                <CardActionArea>
                                    <CardMedia image={johnPortfolio} style={styles.media}/>
                                    <div style={styles.overlay}>
                                        <Typography component="h1" variant="h5">
                                            
                                        </Typography>
                                    </div>
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Personal Portfolio
                                        </Typography>
                                        <Divider />
                                        <Typography variant="body2" component="p">
                                            <strong>Key Technology: </strong> React, React Router, <br /> Styled component
                                        </Typography>
                                        
                                    </CardContent>
                                    <CardActions>
                                        <Link href="https://portfolio-react-yobah8.vercel.app/" target="_blank" >
                                            <VisibilityButton />
                                        </Link>
                                        
                                    </CardActions>  
                                </CardActionArea>
                            </Card>
                        </Grid>

            

                        
                        
                        </Grid>
                     
                        
        
                   
                   
                </Container>
            </main>
        </div>
    </RouterAnimation>
    );
}
