import React, { Component } from 'react'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class RSVP extends Component {
    constructor(props) {
        super(props);
        this.state = { name: "", email: "", message: "", address: "", rsvp: "", dinner: "", plusOneName: "", plusOneDinner: "" };
    }

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "rsvpForm": "rsvp", ...this.state })
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
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Your full name:</label>
                    <input type="text" name="name" value={name} onChange={this.handleChange} />
                    <label htmlFor="email">Your email address</label>
                    <input type="email" name="email" value={email} onChange={this.handleChange} />
                    <label htmlFor="address">Your mailing address</label>
                    <textarea name="address" value={address} onChange={this.handleChange}></textarea>
                    <fieldset>
                        <legend>RSVP:</legend>
                        <input type="radio" id="yes" name="rsvp" value={rsvp} onChange={this.handleChange} />
                        <label htmlFor="yes">Accepts with pleasure</label>
                        <input type="radio" id="no" name="rsvp" value={rsvp} onChange={this.handleChange} />
                        <label htmlFor="no">Denies with regret</label>
                    </fieldset>
                    <fieldset>
                        <legend>Dinner choice:</legend>
                        <input type="radio" id="one" name="dinner" value={dinner} onChange={this.handleChange} />
                        <label htmlFor="one">Option 1</label>
                        <input type="radio" id="two" name="dinner" value={dinner} onChange={this.handleChange} />
                        <label htmlFor="two">Option 2</label>
                        <input type="radio" id="three" name="dinner" value={dinner} onChange={this.handleChange} />
                        <label htmlFor="three">Option 3</label>
                    </fieldset>
                    <hr/>
                    <p>If you don't have a plus one, leave this section blank...</p>
                    <legend>Plus One</legend>
                    <input type="text" name="plusOneName" value={plusOneName} onChange={this.handleChange} />
                    <label htmlFor="plusOneName">Name</label>
                    <fieldset>
                        <legend>Your plus one's dinner choice:</legend>
                        <input type="radio" id="one" name="plusOneDinner" value={plusOneDinner} onChange={this.handleChange} />
                        <label htmlFor="one">Option 1</label>
                        <input type="radio" id="two" name="plusOneDinner" value={plusOneDinner} onChange={this.handleChange} />
                        <label htmlFor="two">Option 2</label>
                        <input type="radio" id="three" name="plusOneDinner" value={plusOneDinner} onChange={this.handleChange} />
                        <label htmlFor="three">Option 3</label>
                    </fieldset>
                    <button type="submit">Submit</button>
                </form>
            </section>
        )
    }
}

export default RSVP