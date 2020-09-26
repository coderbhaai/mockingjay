import React, { Component } from 'react'
import axios from 'axios'

export class login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email:                      'amit4',
            password:                   '123456789'
        }
    }

    onChange= (e) => { this.setState({ [e.target.name]: e.target.value }) }

    submitHandler = e =>{
        e.preventDefault()
        const data={
            username:                      this.state.email,
            password:                   this.state.password,
        }
        axios.post('http://127.0.0.1:8000/api/login/', data )
        // fetch('http://127.0.0.1:8000/auth/', {
        //     method: 'POST',
        //     headers: {'Content-Type': 'application/json'},
        //     body:JSON.stringify(data)
        // })
        // .then(res=>res.json())
        .then(res=> {
            if(res.data){
                localStorage.setItem('user', JSON.stringify(res.data))
                localStorage.setItem( 'message', "You are logged in" )
                window.location.href = '/'
                this.callSwal("You are logged in")
            }
        }).catch(err=>{
            console.log('err.response.data', err.response.data)
        })
    }

    render() {
        return (
            <div className="container my-5">
                <h1 className="heading">Login</h1>
                <p className="text-center">Login Here</p>
                <div className="row">
                    <div className="col-sm-6">
                        <form  onSubmit={this.submitHandler}>
                            <div>
                                <label>E-Mail Address</label>
                                <input className="form-control" name="email" required placeholder="Email Please" onChange={this.onChange} value={this.state.email}/>
                            </div>
                            <div>
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" required placeholder="Password Please" onChange={this.onChange} value={this.state.password}/>
                            </div>
                            <button className="amitBtn" type="submit">Login<span></span></button>
                        </form>
                    </div>

                </div>
            </div>
        )
    }
}

export default login