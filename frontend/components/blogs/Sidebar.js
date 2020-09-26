import React, {useState} from 'react'

function Sidebar(props) {
    const [search, setSearch] = useState('');
    console.log('search', search)
    const changeText = (e)=>{
        setSearch(search => e.target.value);
    }
    return (
        <div className="col-sm-3 blogbar">
            <div className="form-group flex-center-h">
                <h3>Search for Blogs here</h3>
                <input className="form-control" type="text" placeholder="Search for" name="query" required onChange={(e)=>changeText(e)}/>
                <button type="Submit" className="amitBtn">Search</button>
            </div>
            <div className="categories mt-5">
                <h3>Recently Published</h3>
                <ul>{props.blogs.map((i,index)=>( <li key={index}><a href={"/blog/"+i.slug}>{i.title}</a></li> ))}</ul>
            </div>
            <div className="categories mt-5">
                <h3>Category List</h3>
                <ul>{props.category.map((i,index)=>( <li key={index}><a href={"/category/"+i.slug}>{i.title}</a></li> ))}</ul>
            </div>
            <div className="categories mt-5">
                <h3>Tag List</h3>
                <ul>{props.tag.map((i,index)=>( <li key={index}><a href={"/tag/"+i.slug}>{i.title}</a></li> ))}</ul>
            </div>
        </div>
    )
}

export default Sidebar
