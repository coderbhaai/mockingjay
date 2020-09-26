import React, { Component } from 'react'
import BlogList from '../../components/blogs/BlogList'
import BlogBanner from '../../components/blogs/BlogBanner'
import Parallax from '../../components/blogs/Parallax'
import Sidebar from '../../components/blogs/Sidebar'
import axios from 'axios'

export class blog extends Component {
    constructor(props) {
        super(props)    
        this.state = {
            blogs:          [],
            category:       [],
            tag:            [],
            coverImg:       '',
            single:         []
        }
    }

    componentDidMount(){
        const url = window.location.href.split("/").pop();
        axios.get('http://127.0.0.1:8000/api/blog/?slug='+url)
            .then( res=>{
                console.log('res.data', res.data)
                this.setState({
                    blogs:              res.data.result.blogs,
                    category:           res.data.result.category,
                    tag:                res.data.result.tag,
                    coverImg:           res.data.result.single[0].coverImg,
                    single:             res.data.result.single[0],
                })
            })
            .catch(err=>{ console.log('err.response.data', err.response) })
    }

    render() {
        console.log('this.state', this.state)
        return (
            <>
                <div className="banner">
                    <img src={"http://127.0.0.1:8000/media/"+this.state.coverImg} alt=""/>
                    <h1>{this.state.single.title}</h1>
                </div>
                <div className="container my-5">
                    <h2 className="heading">{this.state.single.title}</h2>
                    <div className="row">
                        <div className="col-sm-9">
                            <p>{this.state.single.body}</p>
                            {/* {% include 'comments.html' %} */}
                        </div>
                        <Sidebar blogs={this.state.blogs} category={this.state.category} tag={this.state.tag}/>
                    </div>
                </div>
            </>
        )
    }
}
export default blog