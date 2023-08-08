import React, {useState,useEffect} from 'react';
import './App.css';


function App() {
  const [loading,setLoading]=useState(false);

  useEffect(()=>{
   setLoading(true) 
setTimeout(()=>{
  setLoading(false)
},4000)
  },[])
  return (
    <div className="App">
{
  loading ?
  :
  <img src="https://c.tenor.com/32nHeCvxlwEAAAAM/you-tube-like-and-subscribe.gif" />
}
    </div>
  );
}

export default App;
