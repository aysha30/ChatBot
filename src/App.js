import React, { useState } from 'react';
import './App.css';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Forum, AndroidSharp, FiberManualRecordTwoTone, ChatOutlined } from '@material-ui/icons';
import {
  IconButton, 
  Typography,
  Paper,
  Grid,
  useMediaQuery,
  Box,
  ListItem,
  ListItemText,
  ListItemIcon,
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
    position:'fixed',
    borderRadius: "15px",
    [theme.breakpoints.down('sm')]:{
      width: "250px",
      height: "450px",
      right: "10%",
      bottom: "15%",
    },
    [theme.breakpoints.up("sm")]:{
      width: "350px",
      height: "540px",
      right:"9%",
      bottom: "15%",
    },
  },
  orangePaper:{
    // zIndex: -1,
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
    borderStyle: 'solid',
    borderRadius: 10,
    [theme.breakpoints.down('sm')]:{ 
      marginBottom: "15px",
      marginLeft: "10px",
      padding: 1,
      width: "205px"
    },
    [theme.breakpoints.up("sm")]:{
      width: "300px",
      padding:0,
      marginBottom:"15px",
      marginLeft:"13px"
    },
  },
  convo: {
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius:"25px",
    [theme.breakpoints.down('sm')]:{ 
      padding: 0,
    },
    [theme.breakpoints.up("sm")]:{
      padding: "0px",
    },
  }
}));

function App() {

  const classes = useStyles();
  
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  const [ fadeIn1, setFadeIn1 ] = useState(false);
  
  const handleChange = () => {
    setFadeIn1((prev) => !prev);
  };

  return (
    
      <div className="App" style={{width:"100vw", height: "100vh", fill: "#ddd", flex: 1}}
    >
      
      <IconButton className={classes.chatIcon} onClick={handleChange}>
        <Forum fontSize="large" />
      </IconButton>
      <div>
        <Bounce bottom when={fadeIn1}>
          <Grid container 
          direction="row"
            justify="flex-end"
            alignItems="flex-end">
            <Paper elevation={4} className={classes.paper}>
              <Fade when={fadeIn1} delay={3000} collapse bottom>
                <Paper elevation={0} className={classes.orangePaper}>
                
                <Fade when={fadeIn1} delay={5000} >
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
                  <Fade when={fadeIn1} delay={7000}>
                    <Paper elevation={1} className={classes.faqContainer}>
                    <Grid>
                    <IconButton className={classes.botIcon} 
                    style={(matches)?{marginTop: "-50px", marginLeft:"0px"}:{marginTop: "-50px", marginLeft:"0px"}}
                    >
                    <AndroidSharp/>
                  </IconButton>
                  </Grid>
                  <Typography>
                    <Box style={(matches)?{marginBottom:"12px", marginLeft: "5px"}:{marginBottom:"12px", marginLeft: "10px"}} 
                    fontSize={matches ? 12 : 16} fontWeight="fontWeightBold">
                      Frequently Asked Question <span style={{color: "#F5821F"}}>?</span>
                    </Box>
                  </Typography>
                      <Grid container direction="column" spacing={1}>
                        <Fade when={fadeIn1} delay={9000}>
                          <Grid item container direction="row" 
                          spacing={1} justify="flex-start" alignItems="center">
                            <ListItem className={classes.listItem} >
                            <ListItemIcon width="20px">
                            <FiberManualRecordTwoTone fontSize="small" style={{color:"#F5821F", marginLeft:"8px"}} />
                            </ListItemIcon>
                            <ListItemText style={(matches)?{ marginLeft: "-20px", paddingRight:"5px"}:{marginLeft: "-20px", paddingTop:"5px", paddingBottom:"5px"}}
                              primary={
                              <React.Fragment><Typography>
                                  <Box
                                    fontSize={matches ? 9 : 12}
                                  >
                                    Can I redeem my FB before the original term?
                                  </Box>
                                </Typography>
                                </React.Fragment>
                              } />
                            </ListItem>
                          </Grid>
                        </Fade>
                        <Fade when={fadeIn1} delay={11000}>
                          <Grid item container direction="row" 
                          spacing={1} justify="flex-start" alignItems="center">
                            <ListItem className={classes.listItem} >
                            <ListItemIcon>
                            <FiberManualRecordTwoTone fontSize="small" style={{color:"#F5821F", marginLeft:"8px"}} />
                            </ListItemIcon>
                            <ListItemText style={(matches)?{ marginLeft: "-20px", paddingRight:"5px"}:{marginLeft: "-20px", paddingTop:"5px", paddingBottom:"5px"}}
                              primary={
                              <React.Fragment><Typography>
                                  <Box
                                    fontSize={matches ? 9 : 12}
                                  >
                                    How can I pay my Credit card bill?
                                  </Box>
                                </Typography>
                                </React.Fragment>
                              } />
                            </ListItem>
                          </Grid>
                        </Fade>
                        <Fade when={fadeIn1} delay={13000}>
                          <Grid item container direction="row" 
                          spacing={1} justify="flex-start" alignItems="center">
                            <ListItem className={classes.listItem} >
                            <ListItemIcon>
                            <FiberManualRecordTwoTone fontSize="small" style={{color:"#F5821F", marginLeft:"8px"}} />
                            </ListItemIcon>
                            <ListItemText style={(matches)?{ marginLeft: "-20px", paddingRight:"5px"}:{marginLeft: "-20px", paddingTop:"5px", paddingBottom:"5px"}}
                              primary={
                              <React.Fragment><Typography>
                                  <Box
                                    fontSize={matches ? 9 : 12}
                                  >
                                    How can I get my Account Statement?
                                  </Box>
                                </Typography>
                                </React.Fragment>
                              } />
                            </ListItem>
                          </Grid>
                        </Fade>
                        <Fade when={fadeIn1} delay={15000}>
                          <Grid item container direction="row" 
                          spacing={1} justify="flex-start" alignItems="center">
                            <ListItem className={classes.listItem} >
                            <ListItemIcon>
                            <FiberManualRecordTwoTone fontSize="small" style={{color:"#F5821F", marginLeft:"8px"}} />
                            </ListItemIcon>
                            <ListItemText style={(matches)?{ marginLeft: "-20px", paddingRight:"5px"}:{marginLeft: "-20px", paddingTop:"5px", paddingBottom:"5px"}}
                              primary={
                              <React.Fragment><Typography>
                                  <Box
                                    fontSize={matches ? 9 : 12}
                                  >
                                    What is the tenure of Fixed Deposit?
                                  </Box>
                                </Typography>
                                </React.Fragment>
                              } />
                            </ListItem>
                          </Grid>
                        </Fade>
                        <Fade when={fadeIn1} delay={16000}>
                          
                          <Grid item container direction="row" 
                          spacing={1} justify="center" alignItems="center">
                            <Paper elevation={2} style={(matches)?{borderRadius:"25px", marginBottom:"10px", marginTop:"15px"}:{borderRadius:"25px", marginBottom:"10px"}}>
                            <ListItem className={classes.convo} >
                            <ListItemIcon>
                              <ChatOutlined className="chat_icon" fontSize="small" style={{marginLeft:"12px"}} />
                            </ListItemIcon>
                            <ListItemText style={(matches)?{ marginLeft: "-22px", paddingRight:"15px", paddingTop:"5px", paddingBottom:"5px",}:{marginLeft: "-24px", paddingTop:"5px", paddingBottom:"5px", paddingRight:"15px"}}
                              primary={
                              <React.Fragment><Typography>
                                  <Box fontWeight="fontWeightBold"
                                    fontSize={matches ? 10 : 12}
                                  >
                                    Start a New Conversation
                                  </Box>
                                </Typography>
                                </React.Fragment>
                              } />
                            </ListItem>
                          </Paper>
                          </Grid>
                          
                        </Fade>
                      </Grid>
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
