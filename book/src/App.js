import { books } from "./bookList";
import './book.css'
import Display from "./display";
import ReadButton from "./readmode";

function App() {
  return (
    <div>
      <h1>BEST 5 BOOKS TO READ</h1>
       <Display {...books[0]} />
      <ReadButton>Click to Read</ReadButton>
      <Display {...books[1]} />
      <ReadButton>Click to Read</ReadButton>
      <Display {...books[2]} />
      <ReadButton>Click to Read</ReadButton>
      <Display {...books[3]} />
      <ReadButton>Click to Read</ReadButton>
      <Display {...books[4]} />
      <ReadButton>Click to Read</ReadButton>
      
    </div>
  );
}

export default App;
