import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import VisibilityIcon from '@material-ui/icons/Visibility';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import SkillList from './SkillList'
import ExperienceList from './ExperienceList';
import EducationContent from './EducationContent';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
            >
            {value === index && (
                <Box p={3}>
                <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        background: 'rgba(0, 56, 248, 0.34)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
        border: '1px solid rgba(0, 56, 248, 0.3)',
        color: "white",
        fontFamily: "Oxygen"
        
    },

    appIcon: {
        color: "white",
        
    }, 
}));

const tabIcont = {
    color:"#ff4d4a",
    fontSize: 30
}

export default function Content() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="transparent" elevation={0}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                   
                    aria-label="scrollable force tabs example"
                    className={classes.appIcon} 
                >
                    <Tab label="Main Skills" icon={<VisibilityIcon style={tabIcont}  />} {...a11yProps(0)} />
                    <Tab label="Experience" icon={<FavoriteIcon style={tabIcont} />} {...a11yProps(1)} />
                    <Tab label="Education" icon={<CastForEducationIcon style={tabIcont}/>} {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <SkillList />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ExperienceList />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <EducationContent />
            </TabPanel>
        </div>
    );
}