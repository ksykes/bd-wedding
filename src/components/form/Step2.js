import React, { Component } from "react";

class Step2 extends Component {
    render() {
        if (this.props.currentStep !== 2) { // Prop: The current step
            return null
        }

        return (
            // The markup for the Step 2 UI
            <div className="form-group">
                <label htmlFor="plusOneName">
                    <input type="text" name="plusOneName" value={this.props.plusOneName} onChange={this.props.handleChange} />
                    Your plus one's name
                        </label>
                <fieldset>
                    <legend>Your plus one's dinner choice:</legend>
                    <label htmlFor="plusOne">
                        <input type="radio" id="plusOne" name="plusOneDinner" value="Option 1" onChange={this.props.handleChange} />
                        Option 1
                            </label>
                    <label htmlFor="plusTwo">
                        <input type="radio" id="plusTwo" name="plusOneDinner" value="Option 2" onChange={this.props.handleChange} />
                        Option 2
                            </label>
                    <label htmlFor="plusThree">
                        <input type="radio" id="plusThree" name="plusOneDinner" value="Option 3" onChange={this.props.handleChange} />
                        Option 3
                    </label>
                </fieldset>
                <button type="submit">Submit</button>
            </div>
        )
    }
}

export default Step2