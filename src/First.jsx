import React from 'react'

function First(props){

   return (
    <main>
        <div className="start-text">
            <h1>Quizzical</h1>
            <p>Some description if needed</p>
            <button onClick={props.onClick}>Start Quiz</button>
        </div>
        
    </main>
   )
}

export default First