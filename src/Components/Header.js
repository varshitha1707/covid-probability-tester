import React, { Component } from 'react'
import '../App.css'

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <header class="masthead d-flex align-items-center">
            <div class="container px-4 px-lg-5 text-center">
                <h1 class="mb-1">Stylish Portfolio</h1>
                <h3 class="mb-5"><em>A Free Bootstrap Theme by Start Bootstrap</em></h3>
                <a class="btn btn-primary btn-xl" href="#about">Find Out More</a>
            </div>
        </header>
            </div>
        )
    }
}

export default Header
