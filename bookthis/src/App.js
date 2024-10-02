
import { useState } from 'react'
import { books } from "./bookList";
import './book.css'
import Display from "./display";
import ReadButton from "./readmode";

function App() {
  const [buttonClicked ,setButtonClicked] = useState("please click a button ")
  
  function handleSubmit(selectedButton)
    {
        console.log(selectedButton)
        setButtonClicked(selectedButton)

        
    }
  return (
    <div>
      <h1>BEST 5 BOOKS TO READ</h1>
       <Display {...books[0]} />
      <ReadButton onSelect={()=>handleSubmit('SOUL')}>Click to print in Console</ReadButton>
      <Display {...books[1]} />
      <ReadButton onSelect={()=>handleSubmit('THE OLD YOU')}>Click to print in Console</ReadButton>
      <Display {...books[2]} />
      <ReadButton onSelect={()=>handleSubmit('DONT LOOK BACK')}>Click to print in Console</ReadButton>
      <Display {...books[3]} />
      <ReadButton onSelect={()=>handleSubmit('HIDE AND SEEK')}>Click to print in Console</ReadButton>
      <Display {...books[4]} />
      <ReadButton onSelect={()=>handleSubmit('WALK TO THE SHADOW')}>Click to print in Console</ReadButton>
      <menu>{buttonClicked}</menu>
    </div>
  );
}

export default App;
