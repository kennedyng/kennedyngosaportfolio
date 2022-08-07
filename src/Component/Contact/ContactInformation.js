import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import emailjs from 'emailjs-com';
import { motion} from 'framer-motion/dist/framer-motion'

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
     
  
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
       
    },
    Input : {
        color: "white",
        border: "2px solid white",
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none"
        
       
    },
    InputText : {
        color : "white",
        fontFamily: "Oxygen"

    },
    sendBtn : {
        backgroundColor: "#fa4566",
        color: "white",
        fontFamily: "Oxygen"

    }
    
}));



export default function ContactInformation() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);


    const emailjsPrivateKey = "jxMmM3SAjIxloROdHCFxc";
    const emailjsPublicKey = "sGs8qtiXJSrmH_Mvo";

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        
        
        emailjs.sendForm("service_ro8cksw", "template_lb9xq9m", e.target, emailjsPublicKey)
          .then((result) => {
              
            alert("successfully sent to kennedy ngosa");
              console.log(result.text);
          }, (error) => {
                alert("Failed to send");
              console.log(error.text);
          });
    }
    return (
            <motion.div initial={false} animate={false} exit={false} >
            <div className={classes.paper}>
            <Typography variant="h4" component="h6" gutterBottom>
                Get In Touch
            </Typography>
            
            <form onSubmit={sendEmail} className={classes.form} noValidate>
                <TextField
             
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Your Name"
                    name="from_name"
                    autoComplete="name"
                    autoFocus
                    InputLabelProps = {{className: classes.InputText}}
                  
                    inputProps={{ className: classes.Input}}
                   
                />
                <TextField
                   
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="from_email"
                    autoComplete="email"
                    autoFocus
                 
                    inputProps={{ className: classes.Input}}
                    InputLabelProps = {{className: classes.InputText}}
                />
                <TextField
                    
                    margin="normal"
                    required
                    fullWidth
                    id="text"
                    label="Enter Your Subject"
                    name="email_subject"
                    autoComplete="text"
                    autoFocus
                    inputProps={{ className: classes.Input}}
                    InputLabelProps = {{className: classes.InputText}}
                
                />
                <TextField
                    
                    margin="normal"
                    required
                    fullWidth
                    id="text"
                    name="html_message"
                    autoComplete="text"
                    autoFocus
                    placeholder="Enter Your Text"
                    multiline
                    rows={2}
                    rowsMax={4}
                    inputProps={{ className: classes.Input}}
                    InputLabelProps = {{className: classes.InputText}}
                   
                   
                />
              
                <Button
                    type="submit"
                    variant="outlined"
                    color="primary"
                    fullWidth
                    className={classes.sendBtn}
                    onClick={() => {
                        setOpen(true);
                    }}
                >
                    Send Mail
                </Button>
            </form>

          
        </div>
        </motion.div>

    );
}