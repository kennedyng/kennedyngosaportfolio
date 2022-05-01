import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import { Divider } from '@material-ui/core';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import WebIcon from '@material-ui/icons/Web';
import LanguageIcon from '@material-ui/icons/Language';
import PaymentIcon from '@material-ui/icons/Payment';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));


const listIcon = {
    color: "#ff4d4a",
    fontSize: 30
}
export default function SkillList() {
    const classes = useStyles();

    return (
        <React.Fragment className={classes.root}>
            <Typography variant="h5" component="h2" gutterBottom>
                Skills
            </Typography>
            <Divider />
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemIcon>
                        <WebIcon style={listIcon}/>
                    </ListItemIcon>
                    <ListItemText primary="Front-end Development" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <LanguageIcon style={listIcon}/>
                    </ListItemIcon>
                    <ListItemText primary="Backend Development" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <PaymentIcon style={listIcon}/>
                    </ListItemIcon>
                    <ListItemText primary="Payment Module Integration" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <SupervisedUserCircleIcon style={listIcon}/>
                    </ListItemIcon>
                    <ListItemText primary="Communication Management" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <BorderColorIcon  style={listIcon}/>
                    </ListItemIcon>
                    <ListItemText primary="Technical Content Writer" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <VideoLibraryIcon style={listIcon}/>
                    </ListItemIcon>
                    <ListItemText primary="Technical Video Maker" />
                </ListItem>
            </List>
        </React.Fragment>
    );
}