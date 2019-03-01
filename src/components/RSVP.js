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
                    <label htmlFor="name">
                        <input type="text" name="name" value={name} onChange={this.handleChange} />
                        Your full name
                    </label>
                    <label htmlFor="email">
                        <input type="email" name="email" value={email} onChange={this.handleChange} />
                        Your email address
                    </label>
                    <label htmlFor="address">
                        <textarea name="address" value={address} onChange={this.handleChange}></textarea>
                        Your mailing address
                    </label>
                    <fieldset>
                        <legend>RSVP:</legend>
                        <label htmlFor="yes">
                            <input type="radio" id="yes" name="rsvp" value="Yes" onChange={this.handleChange} />
                            Accepts with pleasure
                        </label>
                        <label htmlFor="no">
                            <input type="radio" id="no" name="rsvp" value="No" onChange={this.handleChange} />
                            Denies with regret
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Dinner choice:</legend>
                        <label htmlFor="one">
                            <input type="radio" id="one" name="dinner" value="Option 1" onChange={this.handleChange} />
                            Option 1
                        </label>
                        <label htmlFor="two">
                            <input type="radio" id="two" name="dinner" value="Option 2" onChange={this.handleChange} />
                            Option 2
                        </label>
                        <label htmlFor="three">
                            <input type="radio" id="three" name="dinner" value="Option 3" onChange={this.handleChange} />
                            Option 3
                        </label>
                    </fieldset>
                    <hr/>
                    <p>If you don't have a plus one, leave this section blank...</p>
                    <legend>Plus One</legend>
                    <label htmlFor="plusOneName">
                        <input type="text" name="plusOneName" value={plusOneName} onChange={this.handleChange} />
                        Your plus one's name
                    </label>
                    <fieldset>
                        <legend>Your plus one's dinner choice:</legend>
                        <label htmlFor="one">
                            <input type="radio" id="one" name="plusOneDinner" value="Option 1" onChange={this.handleChange} />
                            Option 1
                        </label>
                        <label htmlFor="two">
                            <input type="radio" id="two" name="plusOneDinner" value="Option 2" onChange={this.handleChange} />
                            Option 2
                        </label>
                        <label htmlFor="three">
                            <input type="radio" id="three" name="plusOneDinner" value="Option 3" onChange={this.handleChange} />
                            Option 3
                        </label>
                    </fieldset>
                    <button type="submit">Submit</button>
                </form>
            </section>
        )
    }
}

export default RSVP