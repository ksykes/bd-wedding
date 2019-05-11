import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const MapComponent = ({ text }) => <div>{text}</div>;

class Details extends Component {
    static defaultProps = {
        center: {
            lat: 43.8305,
            lng: -79.5900
        },
        zoom: 14
    };
    render() {
        return (
            <section className="details">
                <h3>Friday, August 23, 2019 at 5:00 pm</h3>
                <h4><a href="https://kortright.org/">Kortright Centre for Conservation</a> <span><a href="https://www.google.com/maps/place/Kortright+Centre+for+Conservation/@43.830512,-79.589977,15z/data=!4m2!3m1!1s0x0:0xf79ddf278ea21a3b?sa=X&ved=2ahUKEwjunPK-hJTiAhWyzlkKHZUMAwcQ_BIwEnoECAkQCA">(directions)</a></span></h4>
                <p>9550 Pine Valley Dr</p>
                <p>Woodbridge, ON L4L 1A6</p>
                <p>(905) 832-2289</p>

                <div className="dress">
                    <p>Kortright Centre for Conservation is a natural landscape. You'll want to wear shoes appropriate for grass and cobblestone, or bring an extra pair.</p>
                </div>

                <div style={{ height: '15rem', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyA04APN8FXCKz0EiAanW0g_3ranDy9DRZE' }}
                        yesIWantToUseGoogleMapApiInternals
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        <MapComponent
                            lat={43.8305}
                            lng={-79.5900}
                            text={'Kortright Conservation Centre'}
                        />
                    </GoogleMapReact>
                </div>
            </section>
        )
    }
}

export default Details