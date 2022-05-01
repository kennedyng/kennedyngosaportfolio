import React from 'react';
import Typography from '@material-ui/core/Typography';
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

import Typist from 'react-typist';
import img from '../../Image/maruf.jpg';

import KennedyCv from '../../File/KennedyCv.pdf';
import { motion} from 'framer-motion/dist/framer-motion'



const useStyles = makeStyles((theme) => ({
    textDecoration: {
        '&:hover': {
            textDecoration: 'none',
            color: "red"
        }
    },


    mainTitle  : {
        fontWeight: "bold",
        color: "white",
     
        fontSize: 60,
        fontFamily: ['Oxygen', 'sans-serif']
    },
    subtitle : {
        color: "#ff4d5a"
    },
    resumeBtn : {
       color: "white",
       backgroundColor:"#ff4d4a",
       fontFamily: [
           'Oxygen'
       ],
       border: 20

    }
  
}));


const mainTitleVariants = {
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        ease: "easeInOut",
        
        delay: 1,
        duration: 1.5
      },
    },
    hidden: {
      opacity: 0,
      x: -200,
      rotate: 20,
     
    },
  }


function Home() {
    const classes = useStyles();

    return (
        <React.Fragment >
            <div>
                <Typography className={classes.mainTitle}variant="h2" component="h2" gutterBottom>
                    <motion.div variants={mainTitleVariants} initial="hidden" animate="visible">        
                    KENNEDY NGOSA
                    </motion.div>  
                </Typography>

                <Typography variant="h4" color="textSecondary" component="p" gutterBottom>

                   <Typist>
                        <Typography className={classes.subtitle}variant="subtitle"  gutterBottom>
                            Am A Sofware Engineer  
                        </Typography>
                        
                    </Typist>
                </Typography>
                


                <Link className={classes.textDecoration} href={KennedyCv} target="_blank" download="KennedyCv.pdf">
                    <motion.div variants={mainTitleVariants} initial="hidden" animate="visible">
                    <Button variant="outlined" fullWidth className={classes.resumeBtn}>my Resume</Button>
                    </motion.div>
                </Link>
            
            </div>
        </React.Fragment>
    )
}

export default Home
