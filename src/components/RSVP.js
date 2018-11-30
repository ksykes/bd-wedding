import React, { Component } from 'react'

class RSVP extends Component {
    render() {
        return (
            <div>
                <form action="">
                    <div>
                        <label>First Name</label>
                        <input type="text" name='firstname'/>
                    </div>
                    <div>
                        <label>Last Name</label>
                        <input type="text" name='lastname' required minLength='1' />
                    </div>
                    <fieldset>
                        <legend>Will you be coming?</legend>
                        <input type="radio" id='yes' name='rsvp' required />
                        <label htmlFor='yes'>Accept with pleasure</label>
                        <input type="radio" id='no' name='rsvp' required />
                        <label htmlFor='no'>Decline with regret</label>
                    </fieldset>
                </form>
            </div>
        )
    }
}

export default RSVP