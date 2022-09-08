
import './App.css';
import {useState} from 'react'

function App() {
  
  const [name,setName]=useState("");
  const [tnc,setTnc]=useState(false);
  const [interest,setInterest]=useState("");
  function getformdata(e) 
  {
    e.preventDefault()
    console.log(tnc,interest,name)

  }
 
  return (
  
 
  <div className="App">
  <form onsubmit ={getformdata}>
   Name: <input type = "text" placeholder="Enter name"onChange={(e)=>setName(e.target.value)}/> <br/><br/>
   Choose: <select onChange={(e)=>setInterest(e.target.value)}>
      <option>Captain america</option>
      <option>Thanos</option>
      <option>Hulk</option>
      <option>Iron men</option>
      <option>Thor</option>
    </select><br/><br/>
    <input type="checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Accept term of condition</span><br/><br/>
   Submit: <button type="submit">submit</button>
   </form>
  </div>

 
      
    
  );
}

export default App;
 