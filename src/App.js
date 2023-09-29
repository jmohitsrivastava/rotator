import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {

  let [animate,setanimate]=useState("ball");
  let[btnname,setbtnname]=useState("start")
  let [chek,setchek]=useState(false)

  const rotate=()=>{
    
    if(chek===false){
    const csss=document.querySelector("#bal").className;
    setanimate("ball-rotate")
    setbtnname("stop")
    setchek(true)
  }else{
    setanimate("ball")
    setbtnname("start")
    setchek(false)
  }

  }

  return (


    <>
     <div className="parent-div">

      {/* /button */}
      <div  className="button-box">
      <button id="btn-1" onClick={rotate}>{btnname}</button>
       </div>
     {/* /button end */}


     {/* ball's */}
          
   <div className='balls'>

       {/* ball 1*/}    
        <div id="bal" className={animate} >
       
        </div>

        {/* ball 2*/}    
        <div  style={{marginTop:"22vh"}} id="bal" className={animate} >
       
        </div>

        {/* ball 2*/}    
        <div  style={{marginTop:"44vh"}} id="bal" className={animate} >
       
        </div>

        {/* ball 3*/}    
        <div  style={{marginTop:"65vh"}} id="bal" className={animate} >
       
        </div>

  
 </div>    
    
    </div>
    </>
  );
}

export default App;
