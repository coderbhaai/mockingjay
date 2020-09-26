import React, { Component } from 'react'
import Form from './Form'
import swal from 'sweetalert'

export class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
             user:          []
        }
    }

    componentDidMount(){
        window.scrollTo(0, 0)
        if(typeof(Storage) !== "undefined" && localStorage.getItem('message') ){
            swal({ title: localStorage.getItem('message'), timer: 4000  })
            // setTimeout(function() { localStorage.removeItem('message') }, 4000)
        }
        if(typeof(Storage) !== "undefined"){ this.setState({ user: JSON.parse(localStorage.getItem('user')) || [] }) }
    }

    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <h3>About Us</h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam qui perferendis sed illo magni blanditiis voluptate dolor, odio sequi similique. Consequuntur odio saepe consectetur excepturi corrupti esse soluta laborum magni voluptatum nam fugiat fugit quo, illum officiis maxime dignissimos minus ipsa. Vel architecto ducimus culpa sint sapiente minus facere. Quos?</p>
                            <h3>Follow Us</h3>
                            <div className="middle">
                                <a className="btn" target="_blank" href="https://www.facebook.com/Amitkk-110578507216727"> <img src="/static/images/icons/facebook-white.svg" alt=" Connect with AmitKK Facebook Page"/></a>
                                <a className="btn" target="_blank" href="https://www.linkedin.com/in/amitkhare588/"> <img src="/static/images/icons/linkedin-white.svg" alt=" Connect with AmitKK Linkedin Page"/></a
                                ><a className="btn" target="_blank" href="https://twitter.com/AmitdoubleK"> <img src="/static/images/icons/twitter-white.svg" alt=" Connect with AmitKK Twitter Page"/></a>
                                <a className="btn" target="_blank" href="https://www.instagram.com/amitdoublek/"> <img src="/static/images/icons/instagram-white.svg" alt=" Connect with AmitKK Instagram Page"/></a>
                                <a className="btn" target="_blank" href="//api.whatsapp.com/send?phone=918424003840&amp;text= Hi, I got your number from AmitKK Website"> <img src="/static/images/icons/whatsapp-white.svg" alt=" Connect with AmitKK Whats App"/></a>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <h3>Important Links</h3>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/blogs">Blogs</a></li>
                                <li><a href="">Link Name</a></li>
                                <li><a href="">Link Name</a></li>
                                <li><a href="">Link Name</a></li>
                                <li><a href="">Link Name</a></li>
                                <li><a href="">Link Name</a></li>
                                <li><a href="">Link Name</a></li>
                                <li><a href="">Link Name</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <h3>More links</h3>
                            <ul>
                                <li><a href="">Link Name</a></li>
                                <li><a href="">Link Name</a></li>
                                <li><a href="">Link Name</a></li>
                                <li><a href="">Link Name</a></li>
                                <li><a href="">Link Name</a></li>
                                <li><a href="">Link Name</a></li>
                                <li><a href="">Link Name</a></li>
                                <li><a href="">Link Name</a></li>
                                <li><a href="">Link Name</a></li>
                            </ul>
                        </div>
                        <div className="col-sm-3">
                            <h3>Connect with us</h3>
                            <Form/>
                        </div>
                    </div>
                    <div className="cpy-right p-1 mt-3"><p>© 2020 | A Product of<a href="#" target="_blank"> AmitKK </a></p></div>
                </div>
            </footer>
        )
    }
}

export default Footer
