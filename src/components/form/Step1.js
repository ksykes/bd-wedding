import React, { Component } from "react";

class Step1 extends Component {
    render() {
        if (this.props.currentStep !== 1) { // Prop: The current step
            return null
        }

        // The markup for the Step 1 UI
        return (
            <div className="form-group">
                <label htmlFor="name">
                    <select id="name" required name="name" onChange={this.props.handleChange}>
                        {this.props.guests.map((guest, index) => {
                            return (<option key={index}>{guest.name}</option>);
                        })}
                    </select>
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
                        <input type="radio" id="dinnerOne" name="dinner" value="Option 1" onChange={this.props.handleChange} />
                        Option 1
                    </label>
                    <label htmlFor="dinnerTwo">
                        <input type="radio" id="dinnerTwo" name="dinner" value="Option 2" onChange={this.props.handleChange} />
                        Option 2
                    </label>
                    <label htmlFor="dinnerThree">
                        <input type="radio" id="dinnerThree" name="dinner" value="Option 3" onChange={this.props.handleChange} />
                        Option 3
                    </label>
                </fieldset>
            </div>
        )
    }
}

export default Step1