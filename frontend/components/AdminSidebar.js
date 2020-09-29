import React, { Component } from 'react'
import { Modal } from 'reactstrap'

export class AdminSidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tool:                       'All Tools',
            addmodalIsOpen:             false,
            project :                   '',
            url :                       '',
            sector :                    '',
            country :                   '',
            // projects:                   []
        }
    }
    
    addModalOn=()=>{
        this.setState({
            addmodalIsOpen:             true
        })
    }

    resetData = ()=>{
        this.setState({
            addmodalIsOpen:             false,
            project :                   '',
            url :                       '',
            sector :                    '',
            country :                   ''
        })
    }

// Note
        //  Createe URL of project based on Name
        //  Check if package has been purchased or not
        //  check list of packages the user has in DB and print here
        //

    render() {
        return (
            <>
            <div className="menu">
                <ul id="menu">
                    <li id="menu-academico" ><a href="#"><i className="fa fa-cogs" aria-hidden="true"></i><span> {this.state.tool} </span><span className="fa fa-angle-right" style={{float: "right"}}></span><div className="clearfix"></div></a>
                        <ul id="menu-academico-sub">
                            <li><a className="dropdown-item" href="/admin/seo">SEO Tools</a></li>
                            <li><a className="dropdown-item" href="/admin/smm">SMM Tools</a></li>
                            <li><a className="dropdown-item" href="/admin/adwords">Adwords Tools</a></li>
                            <li><a className="dropdown-item" href="/admin/copywriting">Copywriting</a></li>
                        </ul>
                    </li>
                    <li id="menu-academico" ><a href="#"><i className="fa fa-shield" aria-hidden="true"></i><span> Projects</span><span className="fa fa-angle-right" style={{float: "right"}}></span><div className="clearfix"></div></a>
                        <ul id="menu-academico-sub" >
                            <li onClick={this.addModalOn} className="noAnchor">Add a Project</li>
                            <li><a className="dropdown-item" href="">Project 1</a></li>
                            <li><a className="dropdown-item" href="">Project 2</a></li>
                            <li><a className="dropdown-item" href="">Project 3</a></li>
                        </ul>
                    </li>
                    <li ><a href="#"><i className="fa fa-refresh" aria-hidden="true"></i><span> Upgrade</span></a></li>
                </ul>
            </div>
            <Modal isOpen={this.state.addmodalIsOpen} className="adminModal">
                <div className="modal-header">
                    <h2>Add Project Here</h2>
                    <div className="closeModal" onClick={this.resetData}>X</div>
                </div>
                <form>
                    <div className="row">
                        <div className="col-sm-6">
                            <label>Project Name</label>
                            <input className="form-control" type="text" placeholder="Name of Project" name="project" required value={this.state.project} onChange={this.onChange}/>
                        </div>
                        <div className="col-sm-6">
                            <label>Website URL</label>
                            <input className="form-control" type="text" placeholder="Website URL" name="url" required value={this.state.url} onChange={this.onChange}/>
                        </div>
                        <div className="col-sm-6">
                            <label>Business Sector</label>
                            <input className="form-control" type="text" placeholder="Business Sector" name="sector" required value={this.state.sector} onChange={this.onChange}/>
                        </div>
                        <div className="col-sm-6">
                            <label>Country</label>
                            <input className="form-control" type="text" placeholder="Targeting Country" name="country" required value={this.state.country} onChange={this.onChange}/>
                        </div>
                    </div>
                    <div className="my-btn">
                        <button className="amitBtn" type="submit">Add Project</button> 
                    </div>
                </form>
            </Modal>
        </>
        )
    }
}

export default AdminSidebar
