import React, { Component } from 'react'
import Step1 from './form/Step1'
import Step2 from './form/Step2'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class RSVP extends Component {
    constructor(props) {
        super(props);
        // Set the initial input values
        this.state = { currentStep: 1, name: "", email: "", message: "", address: "", rsvp: "", dinner: "", plusOneName: "", plusOneDinner: "" };
        // Bind new functions for next and previous
        this._next = this._next.bind(this)
        this._prev = this._prev.bind(this)
    }

    // _next and _previous functions will be called on button click
    _next() {
        let currentStep = this.state.currentStep
        // if the currentStep is 1 or 2, then add one on "next" button click
        currentStep = currentStep >= 2 ? 3 : currentStep + 1
        this.setState({
            currentStep: currentStep
        })
    }

    _prev() {
        let currentStep = this.state.currentStep
        // if the currentStep is 2 or 3, then subtract one on "previous" button click
        currentStep = currentStep <= 1 ? 1 : currentStep - 1
        this.setState({
            currentStep: currentStep
        })
    }

    // The "next" and "previous" button functions
    get previousButton() {
        let currentStep = this.state.currentStep
        // if the current step is not 1, then render the "previous" button
        if(currentStep !==1) {
            return (
                <button
                    className="btn"
                    type="button"
                    onClick={this._prev}>
                Previous
                </button>
            )
        }
        // ...else return nothing
        return null
    }

    get nextButton() {
        let currentStep = this.state.currentStep
        // if the current step is not 2, then render the "next" button
        if(currentStep <2) {
            return (
                <button
                    className="btn"
                    type="button"
                    onClick={this._next}>
                    Next
                </button>
            )
        }
        // ...else render nothing
        return null
    }

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "rsvp", ...this.state })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));
    
        e.preventDefault();
    }

    handleChange = e => this.setState({ [e.target.name]: e.target.value })

    render() {
        return (
            <section className="rsvpForm">
                <h2>Please RSVP by April 1, 2015.</h2>
                <form name="rsvp" onSubmit={this.handleSubmit}>
                    {/* Render the form steps and pass in the required props */}
                    <Step1
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        name={this.state.name}
                        email={this.state.email}
                        address={this.state.address}
                        rsvp={this.state.rsvp}
                        dinner={this.state.dinner}
                    />
                    <Step2
                        currentStep={this.state.currentStep}
                        handleChange={this.handleChange}
                        plusOneName={this.state.plusOneName}
                        plusOneDinner={this.state.plusOneDinner}
                    />
                    <div className="buttons">
                        {this.previousButton}
                        {this.nextButton}
                    </div>
                </form>
            </section>
        )
    }
}

export default RSVP