import React from 'react';
import { withStyles } from '@material-ui/core';
import Table from './table';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const styles = (theme) => ({
    root:{
        width: "100%",
        overflowY: "auto"
    },
    title:{
        fontFamily: "Archivo",
        fontSize: "20pt",
        fontWeight: "bold",
        padding: "20px",
        textAlign: "left",
    },
    root1: {
        marginLeft: '24px',
        marginRight: '24px',
        boxSizing: 'border-box',
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '50%',
        marginBottom: '18px',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
});

class StudentManagement extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            vehicles:[
               
            ]
        }
    }

    componentDidMount(){
        let ref = this.props.firebase
        .database()
        .ref();

       ref.child("vehicles").once("value").then(dataSnapshot => {
         dataSnapshot.forEach((vehicle) => {
            console.log(vehicle.val())
            this.setState({vehicles: [...this.state.vehicles, vehicle.val()]});
         });
       });
    }

    render(){
        const { classes } = this.props;
        return(
            <div className={classes.root}>
                <div className={classes.title}>
                    Registered Vehicles
                </div>

                <Paper component="form" className={classes.root1}>
                    <InputBase
                        className={classes.input}
                        placeholder="Search Vehicle"
                        inputProps={{ 'aria-label': 'search vehicle' }}
                    />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </Paper>


                <Table vehicles={this.state.vehicles}/>

            </div>
        )
    }

}

export default withStyles(styles)(StudentManagement);