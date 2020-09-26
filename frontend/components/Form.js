import React, { Component } from 'react'

export class Form extends Component {
    render() {
        return (
            <form>
                <div><label htmlFor="name">Name</label><input type="text" className="form-control" placeholder="Name"/></div>
                <div><label htmlFor="email">Email</label><input type="email" className="form-control" placeholder="Email"/></div>
                <div><label htmlFor="phone">Phone</label><input type="tel" className="form-control" placeholder="Phone"/></div>
                <div><label htmlFor="message">Message</label><textarea name="message" placeholder="Message"></textarea></div>
                <button className="amitBtn w-100">Submit</button>
            </form>
        )
    }
}

export default Form
