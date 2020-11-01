import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from 'react-router-dom';
import Trafficmap from './trafficmap.jsx';
import MapIcon from '@material-ui/icons/Map';
import InfoIcon from '@material-ui/icons/Info';
import AssessmentIcon from '@material-ui/icons/Assessment';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import AssignmentIcon from '@material-ui/icons/Assignment';

const styles = (theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    background: '#082947',
    color: 'white',
    padding: '0',
  },
  paper: {
    padding: theme.spacing(4, 0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: '#0b3464',
  },
  title: {
      fontFamily: 'Archivo',
      color: 'white',
      fontWeight: '800',
      fontSize: '18pt',
      marginBottom: '30px',
      textAlign: 'center',
  },
  item: {
    width:'100%',
    display:'block',
    boxSizing: 'border-box',
    margin: '0 20px',
    borderBottom: '1px solid gray',
    borderTop: '1px solid gray',
    cursor: 'pointer',
    '&:hover':{
        color: 'red'
    },
    '&:active':{

    }
    },
    itemtitle: {
        textAlign: 'left',
        fontFamily: 'Archivo',
        fontWeight: '400',
        fontSize: '13pt',
        color: 'white',
        padding: '30px 30px',
    },
    itemicon: {
        fontSize: '16pt',
        paddingTop: '30px',
        paddingRight: '0px',
        color: 'white',
    },
});

class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lat: 21.1292537,
            lon: 79.0562505,
            zoom : 15.5,
            map : null,
            geojson : {
                'type': 'FeatureCollection',
                'features': [
                    {
                        'type': 'Feature',
                        'properties': {
                            'message': 'Foo',
                        },
                        'geometry': {
                            'type': 'Point',
                            'coordinates': [79.0562505,21.1292537]
                        }
                    },
                ]
            }
        }
    }

    componentDidMount() {
       
    }

    render(){
        const { classes } = this.props;

        const menuItem = (title, link, icon) => (
            <div className={classes.item} >
                <Grid container>
                    <Grid item xs={2} />
                    <Grid item xs={1}>
                        <div className={classes.itemicon}>
                            {icon}
                        </div>
                    </Grid>
                    <Grid item xs={9}>
                        <div className={classes.itemtitle}>
                            {title}
                        </div>
                    </Grid>
                </Grid>
            </div>)

        return(
            <Grid container component="main" className={classes.root}>
                <Grid item xs={12} sm={8} md={3} component={Paper} elevation={2} square style={{background:'#0b3464'}}>
                    <div className={classes.paper}>
                        <div className={classes.title}>
                            Smart City Mobility Control
                        </div>
                        { menuItem("Traffic View", "/students", <MapIcon />) }
                        { menuItem("Registered Vehicles", "/students", <DriveEtaIcon />) }   
                        { menuItem("Exams", "/students", <AssessmentIcon />) }  
                        { menuItem("Assignments", "/students", <AssignmentIcon />) }
                        { menuItem("Announcements", "/students", <InfoIcon />) }
                    </div>
                </Grid>
                <Grid item xs={false} sm={4} md={9} className={classes.image}>
                    {this.props.location.pathname === "/" ? (<Trafficmap/>) : (<div></div>)}
                    {this.props.location.pathname === "/vehicles" ? (<Trafficmap/>) : (<div></div>)}
                </Grid>
            </Grid>
        )
    }
}

export default withRouter(withStyles(styles)(Homepage));