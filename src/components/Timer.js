/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import '../App.css'

export default class Timer extends Component {
    render() {
        return (
            <div className="timer">
                <p>
                    <h1 className="min">12</h1>
                    <h1>:</h1>
                    <h1 className="sec">00</h1>
                </p>    
            </div>
        )
    }
}
