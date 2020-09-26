import React, { Component } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export class Layout extends Component {
    render() {
        const { children } = this.props
        return (
            <>
                <Head>
                    <title>BitzPrice</title>
                    <link href="/static/css/style.css" rel="stylesheet" key="style"/>
                </Head>
                <Header/>
                {children}
                <Footer/>
                <script src="/static/js/jquery-3.1.0.js"></script>
                <script src="/static/js/bootstrap.min.js"></script>
            </>
        )
    }
}

export default Layout
