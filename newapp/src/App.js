// import image from'./logo512.png'
import img from './logo192.png'
import { useState } from 'react'
import Concept from './Concepts/concept'
import {conceptdata} from './Concepts/data'
import Button from './Concepts/button'
function App() 
{
  // const [buttonClicked ,setButtonClicked] = useState("please click a button ")
  // // let buttonClicked="Please click a button"
  // function handleSubmit(selectedButton)
  //   {
  //       console.log(selectedButton)
  //       setButtonClicked(selectedButton)

        
  //   }
  return (
    <div>
      {/* <Concept img ={conceptdata[0].img} Title ={conceptdata[0].Title} Description ={conceptdata[0].Description}/>
      <Concept img ={conceptdata[1].img} Title ={conceptdata[1].Title} Description ={conceptdata[1].Description}/> */}
      {/* <Concept img ={img} Title=":logo" Description =":qwerty"/> */}
      {/* <Concept {...conceptdata[0]} />
      <Button onSelect={()=>handleSubmit('Components')}>Click</Button>
      <menu>{buttonClicked}</menu> */}
      {/* <Concept {...conceptdata[1]} />
      <button>Click</button> */}
    
    </div>

    // <><img src ={image}/></>
  );
}

export default App;
