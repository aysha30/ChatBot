import React, { useState } from 'react';
import './App.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Forum, AndroidSharp } from '@material-ui/icons';
import {
  IconButton, 
  Typography,
  Paper,
  Grid,
  useMediaQuery,
  Box,
} from '@material-ui/core';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';


const useStyles = makeStyles((theme) => ({
  root:{
    flex: 1,
  },
  chatIcon: {
    position: "fixed",
    right: "50px",
    bottom: "30px",
    color: "#F5821F",
  },
  paper: {
    zIndex: 1,
    position: 'relative',
    borderRadius: "15px",
    [theme.breakpoints.down('sm')]:{
      width: "250px",
      height: "400px",
      right: "10%",
      bottom: "-100px",
    },
    [theme.breakpoints.up("sm")]:{
      width: "350px",
      height: "500px",
      right:"50px",
      bottom: "-50px",
    },
  },
  orangePaper:{
    backgroundColor:"#F5821F",
    borderRadius:"15px",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: "10px",
    color: "#fff",
    [theme.breakpoints.down('sm')]:{
      height: "50%",
    },
    [theme.breakpoints.up("sm")]:{
      height:"50%",
    },
  }
}));

function App() {

  const classes = useStyles();
  
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  const [ chatOn, setChatOn ] = useState(false);
  const [ fadeIn1, setFadeIn1 ] = useState(false);
  const [ fadeIn2, setFadeIn2 ] = useState(false);
  const handleChange = () => {
    setChatOn((prev) => !prev);
    setFadeIn1((prev) => !prev);
    setFadeIn2((prev) => !prev);
  };

  setTimeout(() => {
    setFadeIn1(true);
  }, 1000);
  setTimeout(() => {
    setFadeIn2(true);
  }, 2000);
  return (
    
      <div className="App" style={{width:"100vw", height: "100vh", fill: "#ddd", flex: 1}}
    >
      
      <IconButton className={classes.chatIcon} onClick={handleChange}>
        <Forum fontSize="large" />
      </IconButton>
      <div>
        <Bounce bottom when={chatOn} >
          <Grid container 
          direction="row"
            justify="flex-end"
            alignItems="flex-end">
            <Paper elevation={4} className={classes.paper}>
              <Fade when={fadeIn1}>
                <Paper elevation={0} className={classes.orangePaper}>
                </Paper>
              </Fade>
                <Fade When={fadeIn2} >
                  <Typography>
                    <Box 
                    style={(matches)?{margin: "8px 12px 0px 12px"}:{margin: "12px 20px 0px 20px"}} 
                    fontSize={(matches)? 23 : 30} 
                    fontWeight="fontWeightBold">
                    IRIS
                    </Box>
                    <Box 
                    style={(matches)?{margin: "8px 12px 0px 12px"}:{margin: "12px 20px 0px 20px"}}
                    fontSize={(matches)? 17 : 25} fontWeight={200}>
                      Hello 🖐
                    </Box>
                    <Box 
                    style={(matches)?{margin: "8px 12px 0px 12px"}:{margin: "12px 20px 0px 20px"}}
                    fontSize={(matches)? 15 : 20}
                    >
                      I am Iris, a Virtual Assistant
                    </Box>
                    <Box 
                    style={(matches)?{margin: "0px 12px 8px 12px"}:{margin: "0px 20px 12px 20px"}}
                    fontSize={(matches)? 15 : 20}
                    >
                      How may I help you?
                    </Box>
                  </Typography>
                  <Grid>
                    <Box>
                      <AndroidSharp />
                    </Box>
                  </Grid>
                </Fade>
                  
                
            </Paper>
          </Grid>
        </Bounce >
      </div>
    </div>
    );
}

export default App;
