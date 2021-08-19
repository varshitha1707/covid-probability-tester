import React, { Component } from 'react'
import '../App.css'

export class Callout extends Component {
    render() {
        return (
            <div>
               <section class="callout">
            <div class="container px-4 px-lg-5 text-center">
                <h2 class="mx-auto mb-5">
                    Welcome to
                    <em>your</em>
                    next website!
                </h2>
                <a class="btn btn-primary btn-xl" href="https://startbootstrap.com/theme/stylish-portfolio/">Download Now!</a>
            </div>
        </section> 
            </div>
        )
    }
}

export default Callout
