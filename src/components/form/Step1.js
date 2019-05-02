import React, { Component } from 'react'
import Select from 'react-select'

class Step1 extends Component {
    state = {
        selectedOption: null
    }
    handleChange = (selectedOption) => {
        this.setState({ selectedOption })
        console.log(`Option selected:`, selectedOption)
    }

    render() {
        if (this.props.currentStep !== 1) { // Prop: The current step
            return null
        }

        const { selectedOption } = this.state
        const guests = this.props.guests
        console.log(guests)

        // The markup for the Step 1 UI
        return (
            <div className="form-group">
                <label htmlFor="name">
                    <select id="name" required name="name" onChange={this.props.handleChange}>
                        {this.props.guests.map((guest, index) => {
                            return (<option key={index}>{guest.name}</option>);
                        })}
                    </select>
                    {/* <Select
                        value={selectedOption}
                        onChange={this.handleChange}
                        options={
                            this.props.guests.map((guest, index) => {
                                return {
                                    label: guest,
                                    value: guest,
                                    key: index
                                }
                            })
                        }
                    /> */}
                    Your full name
                </label>
                <label htmlFor="email">
                    <input type="email" name="email" value={this.props.email} onChange={this.props.handleChange} required />
                    Your email address
                </label>
                <label htmlFor="address">
                    <textarea name="address" value={this.props.address} onChange={this.props.handleChange} required></textarea>
                    Your mailing address
                </label>
                <fieldset>
                    <legend>RSVP:</legend>
                    <label htmlFor="RSVPyes">
                        <input type="radio" id="RSVPyes" name="rsvp" value="Yes" onChange={this.props.handleChange} />
                        Accepts with pleasure
                    </label>
                    <label htmlFor="RSVPno">
                        <input type="radio" id="RSVPno" name="rsvp" value="No" onChange={this.props.handleChange} />
                        Denies with regret
                    </label>
                </fieldset>
                <fieldset>
                    <legend>Dinner choice:</legend>
                    <label htmlFor="dinnerOne">
                        <input type="radio" id="dinnerOne" name="dinner" value="beef" onChange={this.props.handleChange} />
                        Beef <span>GF</span>, AAA Prime Rib Roast
                    </label>
                    <label htmlFor="dinnerTwo">
                        <input type="radio" id="dinnerTwo" name="dinner" value="salmon" onChange={this.props.handleChange} />
                        Salmon <span>GF</span>, Kortright Maple Glaze
                    </label>
                    <label htmlFor="dinnerThree">
                        <input type="radio" id="dinnerThree" name="dinner" value="chicken" onChange={this.props.handleChange} />
                        Herb Roasted Chicken <span>GF</span>, Wild Mushroom and Marsala Sauce
                    </label>
                    <label htmlFor="dinnerFour">
                        <input type="radio" id="dinnerFour" name="dinner" value="vegetarian" onChange={this.props.handleChange} />
                        Vegetarian/Vegan, Eggplant Parmesan
                    </label>
                </fieldset>
            </div>
        )
    }
}

export default Step1