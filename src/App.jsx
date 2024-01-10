import React from 'react'
import First from './First.jsx'
import {decode} from 'html-entities';

function App() {
  const [allQuestions, setAllQuestions] = React.useState({})


  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10')
       .then((response) => response.json())
       .then((data) => {
          // const capturedData = JSON.stringify(data)
          // const decodedText = decode(capturedData,{level:'html5'})
          // console.log(decodedText)
          // const parsedText = JSON.parse(decodedText)
          setAllQuestions(data.results)
          // console.log(capturedData)
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);


console.log(allQuestions)

  return (
    <>
    <First/>
    </>
  )
}


export default App
