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
        const { name, email, address, rsvp, dinner, plusOneName, plusOneDinner } = this.state;

        return (
            <section className="rsvpForm">
                <h2>Please RSVP by April 1, 2015.</h2>
                <form onSubmit={this.handleSubmit}>
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
                </form>
            </section>
        )
    }
}

export default RSVP