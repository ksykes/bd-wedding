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
                <fieldset>
                    <legend>{this.props.plusOneName}'s dinner choice:</legend>
                    <div className="dinnerChoices">
                        <label htmlFor="dinnerOne">
                            <input type="radio" id="dinnerOne" name="plusOneDinner" value="beef" onChange={this.props.handleChange} />
                            AAA Prime Rib Roast <span class="mice">(Gluten Free)</span>
                        </label>
                    </div>
                    <div className="dinnerChoices">
                        <label htmlFor="dinnerTwo">
                            <input type="radio" id="dinnerTwo" name="plusOneDinner" value="salmon" onChange={this.props.handleChange} />
                            Kortright Maple Glaze Salmon <span class="mice">(Gluten Free)</span>
                        </label>
                    </div>
                    <div className="dinnerChoices">
                        <label htmlFor="dinnerThree">
                            <input type="radio" id="dinnerThree" name="plusOneDinner" value="chicken" onChange={this.props.handleChange} />
                            Herb Roasted Chicken with Wild Mushroom and Marsala Sauce <span class="mice">(Gluten Free)</span>
                        </label>
                    </div>
                    <div className="dinnerChoices">
                        <label htmlFor="dinnerFour">
                            <input type="radio" id="dinnerFour" name="plusOneDinner" value="vegetarian" onChange={this.props.handleChange} />
                            Eggplant Parmesan <span class="mice">(Vegetarian)</span>
                        </label>
                    </div>
                </fieldset>
                <fieldset className="restrictions">
                    <label htmlFor="plusOneRestrictions">
                        Does {this.props.plusOneName} have any dietary restrictions or allergies?
                        <textarea name="plusOneRestrictions" value={this.props.plusOneRestrictions} onChange={this.props.handleChange}></textarea>
                    </label>
                </fieldset>
            </div>
        )
    }
}

export default Step2