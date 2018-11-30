import React, { Component } from 'react'

class Details extends Component {
    render() {
        return (
            <div className="details">
                <h3>You’re invited to our wedding on August 23, 2019.</h3>
                <h4>Kortright Centre for Conservation</h4>
                <p>9550 Pine Valley Dr</p>
                <p>Woodbridge, ON L4L 1A6</p>
                <p>(905) 832-2289</p>
                <iframe width="600" height="450" frameborder="0" title="map" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA04APN8FXCKz0EiAanW0g_3ranDy9DRZE&q=Kortright+Centre+for+Conservation" allowfullscreen />
            </div>
        )
    }
}

export default Details