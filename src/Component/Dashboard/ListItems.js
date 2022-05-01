import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import GradeIcon from '@material-ui/icons/Grade';
import CreateIcon from '@material-ui/icons/Create';

import { makeStyles } from '@material-ui/core';
import { motion} from 'framer-motion/dist/framer-motion'


const listItemIcon = {
    color: "white",
}



const list = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
        delay: 1
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }
  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
    hover: {
        color: "#ff4d5a",
    }
  }


  




export const secondaryListItems = (

   

    <motion.div variants={list} initial="hidden" animate="visible" >
       <motion.div whileHover="hover" variants={item} >
        <ListItem button component={Link} to="/home">
            
            <ListItemIcon >
                <HomeIcon style={listItemIcon} fontSize="Large"  />
            </ListItemIcon>
           
            <ListItemText primary="Home" />

        </ListItem>
        </motion.div>
        <ListItem button component={Link} to="/about">
            <motion.div variants={item}>
            <ListItemIcon>
                <InfoIcon  style={listItemIcon} fontSize="Large" />
            </ListItemIcon>
            </motion.div>
            <ListItemText primary="About Me" />
        </ListItem>
        <ListItem button component={Link} to="/portfolio">
            <motion.div variants={item}>
            <ListItemIcon>
                <GradeIcon style={listItemIcon} fontSize="Large" />
            </ListItemIcon>
            </motion.div>
            <ListItemText primary="Portfolio" />
        </ListItem>
        {/*<ListItem button component={Link} to="/blog">
            <motion.div variants={item}>
            <ListItemIcon >
                <CreateIcon style={listItemIcon} fontSize="Large" />
            </ListItemIcon>
            </motion.div>
            <ListItemText primary="Blog" />
        </ListItem>*/}
        <ListItem button component={Link} to="/contact">
            <motion.div variants={item}>
            <ListItemIcon>
                <ContactMailIcon  style={listItemIcon} fontSize="Large" />
            </ListItemIcon>
            </motion.div>
            <ListItemText primary="Contact" />
        </ListItem>
    </motion.div>
);