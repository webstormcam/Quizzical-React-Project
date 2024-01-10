import React from 'react'
import First from './First.jsx'
import {decode} from 'html-entities';

function App() {
  const [allQuestions, setAllQuestions] = React.useState([])


  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10')
       .then((response) => response.json())
       .then((data) => {
          const capturedData = JSON.stringify(data.results)
          const decodedText = decode(capturedData,{level:'html5'})
          // setAllQuestions(capturedData)
          console.log(decodedText)
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);




  return (
    <>
    <First/>
    </>
  )
}


export default App
