// ---- STATE EXAMPLE ----

import React, { Component } from 'react'

class Message extends Component {

    constructor() {
        super()    // this is required bcz we extend React's Component class, this call has to be made in the base class constructor
        this.state = {
            message: 'Welcome Visitor!'
        }
    }
    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing!'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
        // return <h1>Welcome Visitor!</h1>
    }
}

export default Message

