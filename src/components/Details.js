import React, { Component } from 'react'

class Details extends Component {
    render() {
        return (
            <section className="details">
                <h3>Friday, August 23, 2019 at 5:00 pm</h3>
                <div className="venue">
                    <h4><a href="https://kortright.org/">Kortright Centre for Conservation</a> <span className="mice"><a href="https://www.google.com/maps/place/Kortright+Centre+for+Conservation/@43.830512,-79.589977,15z/data=!4m2!3m1!1s0x0:0xf79ddf278ea21a3b?sa=X&ved=2ahUKEwjunPK-hJTiAhWyzlkKHZUMAwcQ_BIwEnoECAkQCA">(directions)</a></span></h4>
                    <p>9550 Pine Valley Dr</p>
                    <p>Woodbridge, ON L4L 1A6</p>
                    <p>(905) 832-2289</p>

                    <p className="body">Kortright Centre for Conservation is a natural landscape. You'll want to wear shoes appropriate for grass and cobblestone, or bring an extra pair.</p>
                </div>
                <div className="hotel">
                    <h4><a href="https://www.accorhotels.com/gb/hotel-7157-novotel-toronto-vaughan/index.shtml">Hotel Novotel</a> <span className="mice"><a href="https://www.google.com/maps/place/Hotel+Novotel+Toronto+Vaughan/@43.8212885,-79.540632,17z/data=!3m1!4b1!4m5!3m4!1s0x882b2f6b3da807b9:0xdbe22d9fce86790f!8m2!3d43.8212885!4d-79.5384433">(directions)</a></span></h4>
                    <p>200 Bass Pro Mills Dr</p>
                    <p>Concord, ON L4L 1A6</p>
                    <p>(905) 660-0212</p>
                    <p className="body">Should you wish to stay in Woodbridge the evening of the wedding, we have booked a block of hotel rooms at the Hotel Novotel, where Dylan and Brandie will be staying. It is 7 km from the venue.</p>
                    <p className="body">Rooms are pro-rated at $169 per night, but you must call and request to book under the Kirk & Cranstone Wedding Block ID 500619 to get this discount. There are rooms with 1 King bed or 2 Queen beds. They will take your credit card number to reserve the booking, but you won't be charged until check in.</p>
                </div>
            </section>
        )
    }
}

export default Details