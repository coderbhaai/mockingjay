import React from 'react'

function BlogList(props) {
    return (
        <>
            <div className="row blogs mt-5">
                { props.blogs.map((i)=>{
                return(
                    <div className="col-sm-4 " key={i.id}>
                        <div className="card">
                            <a href={"/blog/" + i.slug}>
                                <div><img src={i.coverImg }/></div>
                                <div className="name">
                                    <h2>{i.title}</h2>
                                    <button className="amitBtn">Read More</button>
                                </div>
                            </a>
                        </div>
                    </div>
                )})}
            </div>
        </>
    )
}

export default BlogList