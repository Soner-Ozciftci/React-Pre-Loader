import React, {useState,useEffect} from 'react';
import './App.css';
import ClipLoader from "react-spinners/ClipLoader";


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
  
  <ClipLoader
  color={#D0021B}
  loading={loading}
  size={150}
  aria-label="Loading Spinner"
  data-testid="loader"
/>
  :
  <img src="https://c.tenor.com/32nHeCvxlwEAAAAM/you-tube-like-and-subscribe.gif" />
}
    </div>
  );
}

export default App;
