import React, { Component } from "react";

class Step2 extends Component {
    render() {
        if (this.props.currentStep !== 2) { // Prop: The current step
            return null
        }

        return (
            // The markup for the Step 2 UI
            <div className="form-group">
                <h3>{this.props.plusOneName}</h3>
                {/* <label htmlFor="plusOneName">
                    <input type="text" name="plusOneName" value={this.props.plusOneName} onChange={this.props.handleChange} />
                    Your plus one's name
                </label> */}
                <fieldset>
                    <legend>Your plus one's dinner choice:</legend>
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

export default Step2