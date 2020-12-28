/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Pagination extends Component {
    render() {
        return (
            <div >
            <ul className="pagination">
                <a href="#"><li><i class="fas fa-arrow-left"></i></li></a>
                <a href="#"><li>1</li></a>
                <a href="#"><li>2</li></a>
                <a href="#"><li>3</li></a>
                <a href="#"><li>4</li></a>
                <a href="#"><li>5</li></a>
                <a  href="#"><li>6</li></a>
                <a  href="#"><li>7</li></a>
                <a  href="#"><li>8</li></a>
                <a  href="#"><li>9</li></a>
                <a  href="#"><li>10</li></a>
                <a href="#" ><li><i class="fas fa-arrow-right"></i></li></a>
            </ul>
            </div>
        )
    }
}
