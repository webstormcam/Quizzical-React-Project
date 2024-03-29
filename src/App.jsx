import React from 'react'
import First from './First.jsx'
import Second from './Second.jsx';
import {decode} from 'html-entities';

function App() {
  const [allQuestions, setAllQuestions] = React.useState()

  function grabQuestions(){
    fetch('https://opentdb.com/api.php?amount=10&type=multiple')
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
  }


    React.useEffect(() => {
      grabQuestions
   }, []);
  
  console.log(allQuestions)



  return (
    <>
    {allQuestions ? <Second/>:<First onClick={grabQuestions}/>}
    </>
  )
}


export default App
