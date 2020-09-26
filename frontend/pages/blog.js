import React, { Component } from 'react'
import BlogList from '../components/blogs/BlogList'
import BlogBanner from '../components/blogs/BlogBanner'
import Parallax from '../components/blogs/Parallax'
import axios from 'axios'

export class blog extends Component {
    constructor(props) {
        super(props)    
        this.state = {
             blogs:         []
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/blog/list')
            .then( res=>{
                console.log('res.data', res.data)
                this.setState({
                    blogs:      res.data
                })
            })
            .catch(err=>{ console.log('err.response.data', err.response) })
    }

    render() {
        return (
            <>
                <BlogBanner blogs={this.state.blogs}/>
                <div className="container my-5">
                    <h2 className="heading">Interesting Reads</h2>
                    <BlogList blogs = {this.state.blogs} heading="Interesting Reads"/>
                </div>
                <Parallax/>
            </>
        )
    }
}

export default blog
