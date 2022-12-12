import { useRef, useState } from 'react';
import './App.css';
import Button from './Components/Button';
import Display from './Components/Display';
import {evaluate, prodDependencies} from 'mathjs';


function App() {


  const [value, setValue] = useState('')
  const [info, setInfo] = useState('')

  const addValue= x=>{
      setValue(value + x)
  }

  const result = () => {
    if(value){
      setInfo(value)
      setValue((evaluate(value)).toString());

    }else{
      setValue("ingrese valores")
    }
  };

  const del=()=>{
    if(value){
      let one = value;
      setValue(one.slice(0,-1))
    }
  }

  return (
    <div className="wrapper">
      
      <Display >
        <div className='info' >{info}</div>
        <div>{value}</div>
        <div className=''  >
        <svg onClick={del} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#5c97d4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line></svg>
        </div>
      </Display>
      <div className='container-buttons' >
          <Button clic={()=> {setValue('')  
                              setInfo('')
            }}>
            CLEAR
          </Button>
          <Button clic={addValue} >%</Button>
          <Button clic={addValue} >/</Button>
          <Button clic={addValue} >7</Button>
          <Button clic={addValue} >8</Button>
          <Button clic={addValue} >9</Button>
          <Button clic={addValue} >*</Button>
          <Button clic={addValue} >4</Button>
          <Button clic={addValue} >5</Button>
          <Button clic={addValue} >6</Button>
          <Button clic={addValue} >-</Button>
          <Button clic={addValue} >1</Button>
          <Button clic={addValue} >2</Button>
          <Button clic={addValue} >3</Button>
          <Button clic={addValue} >+</Button>
          <Button clic={addValue} >.</Button>
          <Button clic={addValue} >0</Button>
          <Button clic={addValue} >00</Button>
          <Button clic={result} >=</Button>





      </div>
      

      
    </div>
  );
}

export default App;
