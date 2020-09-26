import React, { Component } from 'react'
import axios from 'axios'
import swal from 'sweetalert'

class register extends Component {
    constructor(props) {
        super(props)    
        this.state = {
            name:                       'amit7',
            email:                      'a@a.com',
            role:                       'user',
            password:                   '123456789',
            password_confirmation:      '123456789',
            last_login:                 '',
        }
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        if(typeof(Storage) !== "undefined" && JSON.parse(localStorage.getItem('user'))){ 
            if( JSON.parse(localStorage.getItem('user')).role ){ 
                window.location.href = '/' 
                localStorage.setItem( 'message', "You are already Logged in" )
            }
        }
    }
    
    onChange= (e) => { this.setState({ [e.target.name]: e.target.value }) }
    callSwal=(mesg)=>{ swal({ title: mesg, timer: 4000 }) }

    submitHandler = e => {
        e.preventDefault()
        if(this.state.password!= this.state.password_confirmation){
            this.callSwal("Password does not match")
        }else{
            const data={
                username:                   this.state.name, 
                email:                      this.state.email,
                role:                       this.state.role,
                password:                   this.state.password
            }
            axios.post('http://127.0.0.1:8000/api/register/', data)
            .then( res=>{
                if(res.data){
                    localStorage.setItem('user', JSON.stringify(res.data))
                    localStorage.setItem( 'message', "Regsitration Succesful" )
                    window.location.href = '/'
                    this.callSwal("Regsitration Succesful")
                }
            })
            .catch(err=>{
                console.log('err.response.data', err.response.data)
                if(err.response.data.email){ this.callSwal(err.response.data.email) }
                if(err.response.data.username){ this.callSwal(err.response.data.username) }
            })
        }
    }

    render() {
        return (
            <div className="container my-5">
                <h1 className="heading">Register</h1>
                <p className="text-center">Register here</p>
                <div className="row">
                    <div className="col-sm-6">
                        <form onSubmit={this.submitHandler}>
                            <div className="form-group">
                                <label>Name</label>
                                <input type="text" className="form-control" name="name" placeholder="Enter name" required autoComplete="name" autoFocus value={this.state.name} onChange={this.onChange}/>
                            </div>
                            <select className="form-control" required value={this.state.role} onChange={this.onChange} name="role">
                                <option value="user">User</option>
                                <option value="agency">Marketing Agency</option>
                                <option value="company">Company</option>
                            </select>
                            <div className="form-group">
                                <label>E-Mail Address</label>
                                <input type="email" className="form-control" name="email" placeholder="Enter email" required autoComplete="email" value={this.state.email} onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" name="password" placeholder="Enter Password" required autoComplete="new-password" value={this.state.password} onChange={this.onChange}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password-confirm">Confirm Password</label>
                                <input type="password" className="form-control" name="password_confirmation" placeholder="Confirm Password" required autoComplete="new-password" value={this.state.password_confirmation} onChange={this.onChange}/>
                            </div>
                            <button type="submit" className="amitBtn">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
export default register