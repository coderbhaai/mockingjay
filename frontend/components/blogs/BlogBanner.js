import React from 'react'
import Swiper from 'react-id-swiper'

function BlogBanner(props) {
    const params = {
        fadeEffect: { crossFade: true },
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
        },
        slidersPerView: 1,
        effect: "fade",
        navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
        loop: true,
        grabCursor: true,
        observer: true, 
        observeParents: true
    }
    if(props.blogs.length){
        return (
            <div className="banner">
                <Swiper {...params}>
                    {props.blogs.map((i, index)=>(
                        <div key={index}>
                            <img src={i.coverImg}/>
                            <div className="carousel-caption">
                                <h2><a href={"/blog/" + i.slug}>{i.title}</a></h2>
                                <a href={"/blog/" + i.slug} className="amitBtn">Read More</a>
                            </div>
                        </div>
                    ))}
                </Swiper>
            </div>
        )
    }else{
        return null
    }
}

export default BlogBanner