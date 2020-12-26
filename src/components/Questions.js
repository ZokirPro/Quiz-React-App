import React, { Component } from 'react'
export default class Questions extends Component {
    render() {
        return (
            <section className="hero is-primary is-fullheight">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-mobile is-centered">
                            <div className="column is-half">
                                <div className="has-text-centered">
                                    <h1 className="title has-text-centered">The awesome CSS quiz</h1>
                                    <h6 className="subtitle1 has-text-centered is-uppercase is-7 navigation">QUESTION 1 OF 1</h6>
                                    <h5 className="subtitle2 has-text-centered is-5">What does CSS stand for?</h5>
                                    <p className="option has-text-grey-dark">
                                    <span className="has-text-weight-bold is-size-5">A</span> Cascading Style Sheets
                                    </p>
                                    <p className="option has-text-grey-dark">
                                    <span className="has-text-weight-bold is-size-5">B</span> Creative Style Sheets
                                    </p>
                                    <p className="option has-text-grey-dark">
                                    <span className="has-text-weight-bold is-size-5">C</span> Computer Style Sheets
                                    </p>
                                    <p className="option has-text-grey-dark">
                                    <span className="has-text-weight-bold is-size-5">D</span>  Colorful Style Sheets
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
          </ section>
        )
    }
}
