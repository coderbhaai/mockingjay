import React, { Component } from 'react'
import Sidebar from '../../components/AdminSidebar'

export class user extends Component {
    render() {
        return (
            <section className="main">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-2">
                            <Sidebar/>
                        </div>
                        <div className="col-sm-10">
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default user