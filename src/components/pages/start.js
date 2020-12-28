import React from 'react'
import {Link} from 'react-router-dom'
function Start() {
    return (
        <React.Fragment>
            <div class="start-page">
               <h3>Instructions:</h3>
               <h4>Subject: Computer Science</h4>
               <h4>Total number of questions: 10</h4>
               <h4>Total amount: 10min</h4>
                <Link to="/questions" className="start-button">Start Quiz</Link> 
            </div>
            
        </React.Fragment>
    )
}

export default Start
