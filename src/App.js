import React, { useState } from 'react';
import './App.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Forum, AndroidSharp, FiberManualRecordTwoTone } from '@material-ui/icons';
import {
  IconButton, 
  Typography,
  Paper,
  Grid,
  useMediaQuery,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';


const useStyles = makeStyles((theme) => ({
  root:{
    flex: 1,
  },
  chatIcon: {
    position: "fixed",
    right: "10%",
    bottom: "6%",
    color: "#F5821F",
  },
  paper: {
    zIndex: 1,
    position:'relative',
    borderRadius: "15px",
    [theme.breakpoints.down('sm')]:{
      width: "250px",
      height: "400px",
      right: "10%",
      bottom: "-90px",
    },
    [theme.breakpoints.up("sm")]:{
      width: "350px",
      height: "500px",
      right:"50px",
      bottom: "-50px",
    },
  },
  orangePaper:{
    zIndex: -1,
    position: "fixed",
    background: 'linear-gradient(45deg, #F5821F 30%, #FF5C00 90%)',
    borderRadius:"15px",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    padding: "10px",
    color: "#fff",
    [theme.breakpoints.down('sm')]:{
      height: "30%",
      width: "230px"
    },
    [theme.breakpoints.up("sm")]:{
      height:"35%",
      width: "330px"
    },
  },
  botIcon: {
    zIndex: 150,
    color: "#fff",
    background: 'linear-gradient(45deg, #F5821F 30%, #FF5C00 90%)',
    boxShadow: '0px 2px 19px 0px #997b60',
    [theme.breakpoints.down('sm')]:{
      top: "-30%",
      marginLeft: "10px"
    },
    [theme.breakpoints.up("sm")]:{
      bottom: "30%",
      marginLeft:"10px"
    },
  },
  faqContainer:{
    zIndex: 10,
    backgroundColor: "#fff",
    borderWidth: "2px",
    borderColor: '#bbb',
    [theme.breakpoints.down('sm')]:{
      height: "",
      width: "210px", 
      marginTop: "-20px",
      padding:"10px"
    },
    [theme.breakpoints.up("sm")]:{
      height:"35%",
      width: "310px",
      marginTop: "-20px",
      padding:"10px"
    },
  },
  listItem: {
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    padding:1,
    [theme.breakpoints.down('sm')]:{ 
      // margin: "10px",
    },
    [theme.breakpoints.up("sm")]:{
      // margin: "0px 10px 0px 10px"
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
  const [ faqIn, setFaqIn ] = useState(false);
  
  const handleChange = () => {
    setChatOn((prev) => !prev);
    setFadeIn1((prev) => !prev);
    setFadeIn2((prev) => !prev);
    setFaqIn((prev) => !prev);
  };

  // setTimeout(() => {
  //   setFadeIn1(true);
  // }, 1000);
  // setTimeout(() => {
  //   setFadeIn2(true);
  // }, 2000);
  return (
    
      <div className="App" style={{width:"100vw", height: "100vh", fill: "#ddd", flex: 1}}
    >
      
      <IconButton className={classes.chatIcon} onClick={handleChange}>
        <Forum fontSize="large" />
      </IconButton>
      <div>
        <Bounce bottom when={chatOn} delay={0} >
          <Grid container 
          direction="row"
            justify="flex-end"
            alignItems="flex-end">
            <Paper elevation={4} className={classes.paper}>
              <Fade when={fadeIn1} delay={1500}>
                <Paper elevation={0} className={classes.orangePaper}>
                
                <Fade when={fadeIn2} delay={3000} >
                  <Typography>
                    <Box 
                    style={(matches)?{padding: "8px 12px 0px 12px"}:{padding: "12px 20px 0px 20px"}} 
                    fontSize={(matches)? 23 : 30} 
                    fontWeight="fontWeightBold">
                    IRIS
                    </Box>
                    <Box 
                    style={(matches)?{padding: "8px 12px 0px 12px"}:{padding: "12px 20px 0px 20px"}}
                    fontSize={(matches)? 17 : 25} fontWeight={200}>
                      Hello &#128400;
                    </Box>
                    <Box 
                    style={(matches)?{padding: "8px 12px 0px 12px"}:{padding: "12px 20px 0px 20px"}}
                    fontSize={(matches)? 15 : 20}
                    >
                      I am Iris, a Virtual Assistant
                    </Box>
                    <Box 
                    style={(matches)?{padding: "0px 12px 8px 12px"}:{padding: "0px 20px 12px 20px"}}
                    fontSize={(matches)? 15 : 20}
                    >
                      How may I help you?
                    </Box>
                  </Typography>
                  <Grid>
                  <IconButton className={classes.botIcon}>
                    <AndroidSharp/>
                  </IconButton>
                  </Grid>
                  <Fade when={faqIn} delay={5000}>
                    <Paper className={classes.faqContainer}>
                    <Grid>
                    <IconButton className={classes.botIcon} 
                    style={(matches)?{marginTop: "-50px", marginLeft:"0px"}:{marginTop: "-50px", marginLeft:"0px"}}
                    >
                    <AndroidSharp/>
                  </IconButton>
                  </Grid>
                      <List>
                        <Fade>
                          <ListItem className={classes.listItem} >
                            <ListItemAvatar>
                              <FiberManualRecordTwoTone fontSize="small" style={{color:"#F5821F"}} />
                            </ListItemAvatar>
                            <ListItemText 
                                primary={
                                <React.Fragment>
                                  <Typography>
                                    <Box
                                      fontSize={matches ? 9 : 10}
                                    >
                                      Can I redeem my FB before the original term?
                                    </Box>
                                  </Typography>
                                </React.Fragment>
                            } />
                          </ListItem>
                        </Fade>
                        <Fade>
                          <ListItem className={classes.listItem} >
                            <ListItemAvatar>
                              <FiberManualRecordTwoTone fontSize="small" style={{color:"#F5821F"}} />
                            </ListItemAvatar>
                            <ListItemText 
                                primary={
                                <React.Fragment>
                                  <Typography>
                                    <Box
                                      fontSize={matches ? 9 : 10}
                                    >
                                      How do I pay my Credit car bill?
                                    </Box>
                                  </Typography>
                                </React.Fragment>
                            } />
                          </ListItem>
                        </Fade>
                        <Fade>
                          <ListItem className={classes.listItem} >
                            <ListItemAvatar>
                              <FiberManualRecordTwoTone fontSize="small" style={{color:"#F5821F"}} />
                            </ListItemAvatar>
                            <ListItemText 
                                primary={
                                <React.Fragment>
                                  <Typography>
                                    <Box
                                      fontSize={matches ? 9 : 10}
                                    > 
                                    How can I get my Account Statement?
                                    </Box>
                                  </Typography>
                                </React.Fragment>
                            } />
                          </ListItem>
                        </Fade>
                        <Fade>
                          <ListItem className={classes.listItem} >
                            <ListItemAvatar>
                              <FiberManualRecordTwoTone fontSize="small" style={{color:"#F5821F"}} />
                            </ListItemAvatar>
                            <ListItemText 
                                primary={
                                <React.Fragment>
                                  <Typography>
                                    <Box
                                      fontSize={matches ? 9 : 10}
                                    >
                                      What is the tenure of Fixed Deposit?
                                    </Box>
                                  </Typography>
                                </React.Fragment>
                            } />
                          </ListItem>
                        </Fade>
                      </List>
                    </Paper>
                  </Fade>
                </Fade>
                </Paper>
              </Fade>
            </Paper>
          </Grid>
        </Bounce >
      </div>
    </div>
    );
}

export default App;
