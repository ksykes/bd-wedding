import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const MapComponent = ({ text }) => <div>{text}</div>;

class Details extends Component {
    static defaultProps = {
        center: {
            lat: 43.8305,
            lng: 79.5900
        },
        zoom: 11
    };
    render() {
        return (
            <section className="details">
                <h3>You’re invited to our wedding on August 23, 2019.</h3>
                <h4>Kortright Centre for Conservation</h4>
                <p>9550 Pine Valley Dr</p>
                <p>Woodbridge, ON L4L 1A6</p>
                <p>(905) 832-2289</p>
                <div style={{ height: '5rem', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyA04APN8FXCKz0EiAanW0g_3ranDy9DRZE' }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        <MapComponent
                            lat={43.8305}
                            lng={79.5900}
                            text={''}
                        />
                    </GoogleMapReact>
                </div>
            </section>
        )
    }
}

export default Details