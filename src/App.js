import { useState } from "react";
import Slide from "./components/Slide";


function App() {
  const[slideValue,setSlideValue] = useState(0)
  const handleInput = (e) =>{
    setSlideValue(e.target.value)
  }
  //change colors text background
  let bgColor;
  let textColor;
  // condition
  if(slideValue<25){
    bgColor="green";
    textColor='red';
  }
  if(slideValue>25 && slideValue<=50 ){
    bgColor="yellow";
    textColor='green';
  }
  if(slideValue>51 && slideValue<=75 ){
    bgColor="pink";
    textColor='orange';
  }
  if(slideValue === 100 ){
    bgColor="blue";
    textColor='white';
  }
  return (
    <div className='container'>
      <h1>Slide to Grow App</h1>
      <Slide slideValue={slideValue} handleInput={handleInput} bgColor={bgColor} textColor={textColor}/>
    </div>
  );
}

export default App;
