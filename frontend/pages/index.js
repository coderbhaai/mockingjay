import React, { Component } from 'react'
import axios from 'axios'
import BlogList from '../components/blogs/BlogList'

export class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
             blogs:         [],
             category:      []
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:8000/blog/suggest_blogs')
            .then( res=>{
                this.setState({
                    blogs:      res.data
                })
            })
            .catch(err=>{ console.log('err.response.data', err.response) })
    }

    render() {
        return (
            <>
               <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="/static/images/static/banner-1.jpg"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/static/images/static/banner-2.jpg"/>
                        </div>
                        <div className="carousel-item">
                            <img src="/static/images/static/banner-3.jpg"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span><span className="sr-only"></span></a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span><span className="sr-only"></span></a>
                </div>
                <div className="container my-5">
                    <h2 className="heading">Interesting Reads</h2>
                    <BlogList blogs = {this.state.blogs}/>
                </div>
            </>
        )
    }
}

export default index