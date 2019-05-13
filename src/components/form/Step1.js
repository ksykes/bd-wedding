import React, { Component } from 'react'
import Select from 'react-select'
import Animated from 'react-select/lib/animated'

class Step1 extends Component {
    render() {
        if (this.props.currentStep !== 1) { // Prop: The current step
            return null
        }

        const guests = this.props.guests
        // console.log(guests)

        // The markup for the Step 1 UI
        return (
            <div className="form-group">
                <label htmlFor="name">
                    <Select
                        value={guests.value}
                        onChange={this.props.handleNameChange}
                        id="name"
                        name="name"
                        options={guests}
                        closeMenuOnSelect={true}
                        backspaceRemovesValue={true}
                        placeholder={"Click and start typing to select your name:"}
                    />
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
                    <div className="rsvpChoices">
                        <label htmlFor="RSVPyes">
                            <input type="radio" id="RSVPyes" name="rsvp" value="Yes" onChange={this.props.handleChange} />
                            Accepts with pleasure
                        </label>
                    </div>
                    <div className="rsvpChoices">
                        <label htmlFor="RSVPno">
                            <input type="radio" id="RSVPno" name="rsvp" value="No" onChange={this.props.handleChange} />
                            Denies with regret
                        </label>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Dinner choice:</legend>
                    <div className="dinnerChoices">
                        <label htmlFor="dinnerOne">
                            <input type="radio" id="dinnerOne" name="dinner" value="beef" onChange={this.props.handleChange} />
                            AAA Prime Rib Roast <span class="mice">(Gluten Free)</span>
                        </label>
                    </div>
                    <div className="dinnerChoices">
                        <label htmlFor="dinnerTwo">
                            <input type="radio" id="dinnerTwo" name="dinner" value="salmon" onChange={this.props.handleChange} />
                            Kortright Maple Glaze Salmon <span class="mice">(Gluten Free)</span>
                        </label>
                    </div>
                    <div className="dinnerChoices">
                        <label htmlFor="dinnerThree">
                            <input type="radio" id="dinnerThree" name="dinner" value="chicken" onChange={this.props.handleChange} />
                            Herb Roasted Chicken with Wild Mushroom and Marsala Sauce <span class="mice">(Gluten Free)</span>
                        </label>
                    </div>
                    <div className="dinnerChoices">
                        <label htmlFor="dinnerFour">
                            <input type="radio" id="dinnerFour" name="dinner" value="vegetarian" onChange={this.props.handleChange} />
                            Eggplant Parmesan <span class="mice">(Vegetarian/Vegan)</span>
                        </label>
                    </div>
                </fieldset>
                <fieldset class="restrictions">
                    <label htmlFor="restrictions">
                        Do you have any dietary restrictions?
                        <textarea name="restrictions" value={this.props.restrictions} onChange={this.props.handleChange}></textarea>
                    </label>
                </fieldset>
            </div>
        )
    }
}

export default Step1