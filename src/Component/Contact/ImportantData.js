import React from 'react'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme) => ({
    paperHight: {
        height: 150,
        display: 'row',
    },
    bigIconSize: {
        width: 50,
        height: 50,
        padding: '5px',
        color: "#fff"
    },
    paper: {
        display: 'flex',
        color: 'white',
        background: 'rgba(0, 56, 248, 0.34)',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5px)',
        border: '1px solid rgba(0, 56, 248, 0.3)',
        borderRadius: "16px",
        padding: 20
    },
    paddingTop: {
        paddingTop: '5px',
    },
    divPaddingTop: {
        paddingTop: '35px',
    },
    textTitle : {
        fontFamily:[
            'Oxygen',
            'san-serif'
        ],
        color: "white"

    },
    textSubTitle: {
        fontFamily:[
            'Oxygen',
            'san-serif'
        ],
        color: "#ff4d5a"

    }
}));

function ImportantData() {
    const classes = useStyles();
    return (
        <div className={classes.divPaddingTop}>
            <div className={classes.paperHight}>
                <Paper className={classes.paper} elevation={3}>
                    <IconButton>
                        <PhoneIcon className={classes.bigIconSize}/>
                    </IconButton>
                    <div >
                        <Typography className={[classes.paddingTop, classes.textSubTitle]} component="h6" variant="h6">
                            Phone
                        </Typography>
                        <Typography component="p" variant="body2">
                            +260 978329482<br/>
                        </Typography>
                    </div>
                </Paper>
            </div>
            <div className={classes.paperHight}>
                <Paper className={classes.paper} elevation={0}>
                    <IconButton>
                        <EmailIcon className={classes.bigIconSize}/>
                    </IconButton>
                    <div>
                        <Typography className={[classes.paddingTop, classes.textSubTitle]} component="h6" variant="h6">
                            Email
                        </Typography>
                        <Typography component="p" variant="body2">
                            Kennedyngosachanda@gmail.com<br/>
                            ngosakennedy@yahoo.com
                        </Typography>
                    </div>
                </Paper>
            </div>
            <div className={classes.paperHight}>
                <Paper className={classes.paper} elevation={3}>
                    <IconButton>
                        <LocationOnIcon className={classes.bigIconSize}/>
                    </IconButton>
                    <div>
                        <Typography className={[classes.paddingTop, classes.textSubTitle]} component="h6" variant="h6">
                            Location
                        </Typography>
                        <Typography component="p" variant="body2">
                            lusaka, zambia
                        </Typography>
                    </div>
                </Paper>
            </div> 
        </div>
    )
}

export default ImportantData
