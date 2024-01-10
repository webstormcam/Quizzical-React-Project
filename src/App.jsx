import React from 'react'
import First from './First.jsx'
function App() {
  const [allQuestions, setAllQuestions] = React.useState([])


  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10')
       .then((response) => response.json())
       .then((data) => {
          const capturedData = JSON.stringify(data.results)
          setAllQuestions(capturedData)
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
