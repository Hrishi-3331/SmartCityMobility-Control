import React from 'react';
import mapboxgl from 'mapbox-gl';
import Grid from '@material-ui/core/Grid';
import { withStyles } from "@material-ui/core/styles";

mapboxgl.accessToken = 'pk.eyJ1IjoiaHJpc2hpLTMzMzEiLCJhIjoiY2p3enpxZ3NqMHdpaDN5b3luMHhsdnlrdCJ9.gLk8ChT7pKjMRfDtrlDNcw';

const styles = (theme) => ({
  root: {
    height: '100vh',
  },
  map:{
      width: '100%',
      height: '100%',
      margin: '0',
  }
});

class TrafficMap extends React.Component{
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
        const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [this.state.lon, this.state.lat],
        zoom: this.state.zoom
        });

        this.setState({
            map : map
        })

        this.state.geojson.features.forEach(function (marker) {
        var el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/campusconnect-54302.appspot.com/o/car(2).png?alt=media&token=dd4f7a00-bfa3-4a16-8f78-0896c4e808e7')";
        el.style.width = 48 + 'px';
        el.style.height = 48 + 'px';
            
        el.addEventListener('click', function () {
            window.alert(marker.properties.message);
        });
             
        new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
        });
    }

    render(){
        const {classes} = this.props;
        return(
            <Grid container component="main" className={classes.root}>
                <div id='map' ref={el => this.mapContainer = el} className={classes.map}></div>
            </Grid>
        )
    }
}

export default withStyles(styles)(TrafficMap);