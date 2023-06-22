import './App.css';
import {useRef} from 'react';
import { useState, React } from 'react';

function App() {
  const [flag, newflag] = useState(true);
  const [value, newvalue] =useState('X turn');
  const topleft = useRef();
  const topcenter = useRef();
  const topright = useRef();
  const centerleft = useRef();
  const centercenter = useRef();
  const centerright = useRef();
  const downleft = useRef();
  const downcenter = useRef();
  const downright = useRef();
  const turn =useRef();
  function play(ref) {
    if (flag) {
      ref.current.innerHTML = 'X';
      ref.current.style.pointerEvents = 'none';
      turn.current.innerHTML=('0 turn');

    } else {
      ref.current.innerHTML = '0';
      ref.current.style.pointerEvents = 'none';
      turn.current.innerHTML="X turn";
    }
    newflag(!flag);
    check();
  }
  function check(){
    setTimeout(() => {
      
    
    if((topleft.current.innerHTML==="X") &&
       (topcenter.current.innerHTML==="X") &&
       (topright.current.innerHTML==="X")
    ){
      alert("X win");
    }
    else if((centerleft.current.innerHTML==="X") &&
    (centercenter.current.innerHTML==="X") &&
    (centerright.current.innerHTML==="X"))
    {
      alert("X win")
    }
    else if((downleft.current.innerHTML==="X") &&
    (downcenter.current.innerHTML==="X") &&
    (downright.current.innerHTML==="X"))
    {
      alert("X win")
    }
    else if((topleft.current.innerHTML==="X") &&
    (centerleft.current.innerHTML==="X") &&
    (downleft.current.innerHTML==="X"))
    {
      alert("X win")
    }
    else if((topcenter.current.innerHTML==="X") &&
    (centercenter.current.innerHTML==="X") &&
    (downcenter.current.innerHTML==="X"))
    {
      alert("X win")
    }
    else if((topright.current.innerHTML==="X") &&
    (centerright.current.innerHTML==="X") &&
    (downright.current.innerHTML==="X"))
    {
      alert("X win")
    }
    else if((topleft.current.innerHTML==="X") &&
    (centercenter.current.innerHTML==="X") &&
    (downright.current.innerHTML==="X"))
    {
      alert("X win")
    }
    else if((topright.current.innerHTML==="X") &&
    (centercenter.current.innerHTML==="X") &&
    (downleft.current.innerHTML==="X"))
    {
      alert("X win")
    }
    
    else if((topleft.current.innerHTML==="0") &&
    (topcenter.current.innerHTML==="0") &&
    (topright.current.innerHTML==="0"))
    {
      alert("0 win")
    }
    else if((centerleft.current.innerHTML==="0") &&
    (centercenter.current.innerHTML==="0") &&
    (centerright.current.innerHTML==="0"))
    {
      alert("0 win")
    }
    else if((downleft.current.innerHTML==="0") &&
    (downcenter.current.innerHTML==="0") &&
    (downright.current.innerHTML==="0"))
    {
      alert("0 win")
    }
    else if((topleft.current.innerHTML==="0") &&
    (centerleft.current.innerHTML==="0") &&
    (downleft.current.innerHTML==="0"))
    {
      alert("0 win")
    }
    else if((topcenter.current.innerHTML==="0") &&
    (centercenter.current.innerHTML==="0") &&
    (downcenter.current.innerHTML==="0"))
    {
      alert("0 win")
    }
    else if((topright.current.innerHTML==="0") &&
    (centerright.current.innerHTML==="0") &&
    (downright.current.innerHTML==="0"))
    {
      alert("0 win")
    }
    else if((topleft.current.innerHTML==="0") &&
    (centercenter.current.innerHTML==="0") &&
    (downright.current.innerHTML==="0"))
    {
      alert("0 win")
    }
    else if((topright.current.innerHTML==="0") &&
    (centercenter.current.innerHTML==="0") &&
    (downleft.current.innerHTML==="0"))
    {
      alert("0 win")
    }
    else if((topright.current.innerHTML !=="") && 
            (topleft.current.innerHTML!=="") &&
            (topcenter.current.innerHTML!=="") &&
            (downright.current.innerHTML !=="") && 
            (downleft.current.innerHTML!=="") &&
            (downcenter.current.innerHTML!=="") &&
            (centerright.current.innerHTML !=="") && 
            (centerleft.current.innerHTML!=="") &&
            (centercenter.current.innerHTML!=="") 
    )
    {
      alert("draw");
      normal();
    }}, 100);

   
  }
  function normal(){
    topright.current.innerHTML="";
    topleft.current.innerHTML="";
    topcenter.current.innerHTML="";
    downright.current.innerHTML ="";
    downleft.current.innerHTML="";
    downcenter.current.innerHTML=""; 
    centerright.current.innerHTML="";
    centerleft.current.innerHTML="";
    centercenter.current.innerHTML="";

    topleft.current.style.pointerEvents = "" 
    topcenter.current.style.pointerEvents = "" 
    topright.current.style.pointerEvents = "" 
    centerleft.current.style.pointerEvents = "" 
    centercenter.current.style.pointerEvents = "" 
    centerright.current.style.pointerEvents = "" 
    downleft.current.style.pointerEvents = "" 
    downcenter.current.style.pointerEvents = "" 
    downright.current.style.pointerEvents = ""
    newflag('true');
    newvalue('X turn');
}

  return (
    <div className="container-fluid">
      <h1 className="text-center mt-2 mb-2">Tic Tac Toe</h1>
      <h6 className="text-center mt-2 mb-2">TURN</h6>
      <p className="xandyturn text-center" ref={turn}>{value}</p>
      <div className="col-sm-5 d-flex mx-auto mt-4">
        <div className="topleft col-sm-4">
          <p className="pblock text-center" ref={topleft} onClick={() => play(topleft)}></p>
        </div>
        <div className="topcenter col-sm-4">
          <p className="pblock text-center" ref={topcenter}  onClick={() => play(topcenter)}></p>
        </div>
        <div className="topright col-sm-4">
          <p className="pblock text-center" ref={topright}  onClick={() => play(topright)}></p>
        </div>
      </div>
      <div className="col-sm-5 d-flex mx-auto">
        <div className="centerleft col-sm-4">
          <p className="pblock text-center" ref={centerleft}  onClick={() => play(centerleft)}></p>
        </div>
        <div className="centercenter col-sm-4">
          <p className="pblock text-center" ref={centercenter}  onClick={() => play(centercenter)}></p>
        </div>
        <div className="centerright col-sm-4">
          <p className="pblock text-center" ref={centerright}  onClick={() => play(centerright)}></p>
        </div>
      </div>
      <div className="col-sm-5 d-flex mx-auto mb-4">
        <div className="downleft col-sm-4">
          <p className="pblock text-center" ref={downleft}  onClick={() => play(downleft)}></p>
        </div>
        <div className="downcenter col-sm-4">
          <p className="pblock text-center" ref={downcenter}  onClick={() => play(downcenter)}></p>
        </div>
        <div className="downright col-sm-4">
          <p className="pblock text-center" ref={downright}  onClick={() => play(downright)}></p>
        </div>
      </div>
      <div className="buttondiv col-sm-3">
        <button type="button" className="btn btn-success btn-sm" onClick={normal}>
          Play Again
        </button>
      </div>
    </div>
  );
}

export default App;
