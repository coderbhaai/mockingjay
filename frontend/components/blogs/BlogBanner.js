import React from 'react'

function BlogBanner(props) {
    return (
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel" data-interval="50000" >
            <div className="carousel-inner blogBanner">
                {props.blogs.slice(0, 1).map((i)=>{
                    return(
                        <div className="carousel-item active" key={i.id}>
                            <img src={i.coverImg}/>
                            <div className="carousel-caption">
                                <a href={"/blog/" + i.slug}><h2>{i.title}</h2></a>
                                <a href={"/blog/" + i.slug} className="amitBtn">Read More</a>
                            </div>
                        </div>
                    )})}
                {props.blogs.slice(1, 3).map((i)=>{
                    return(
                        <div className="carousel-item" key={i.id}>
                            <img src={i.coverImg}/>
                            <div className="carousel-caption">
                                <a href={"/blog/" + i.slug}><h2>{i.title}</h2></a>
                                <a href={"/blog/" + i.slug} className="amitBtn">Read More</a>
                            </div>
                        </div>
                    )})}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev"><span className="carousel-control-prev-icon" aria-hidden="true"></span></a>
            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next"><span className="carousel-control-next-icon" aria-hidden="true"></span></a>
        </div>
    )
}

export default BlogBanner