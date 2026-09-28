import{useState,useEffect}from"react";
import"./App.css";


function app(){
const[choices,setChoices]=useState([]);
const[option,setOption]=useState("");
const[selectedIndex,setSelectedIndex]=useState("");

function addChoice(){
  if(option.trim()===""){
    alert("Please enter an option.");
    return;
  }
  setChoices([...choices,option.trim()]);
  setOption("")
}

function removeChoice(){
  if (selectedIndex===""){
    alert("Please select a choice to remove.");
    return;
  }
  const newchoices=choices.filter(
    (_,index)=>index!==Number(selectedIndex)
  );
    setChoices(newchoices);
    setSelectedIndex(""); 
}

function decideChoice(){
  if(choices.length===0){
    alert("There are no choices to choose from.");
    return;
  }
  const randomIndex=Math.floor(Math.random()*choices.length);
  const selectedChoice=choices[randomIndex];
  alert(`It has been decided you are to: ${selectedChoice}`);
}
//return(
//<h1>test compile</h1>
//);
return(
  <div classname="app>">
    <h1>Indecision Machine</h1>
    

    <fieldset>
      <legend>Choices</legend>

      <select 
      className="choices" 
      size="5" 
      value={selectedIndex} 
      onChange={(event)=>setSelectedIndex(event.target.value)}
      >

        {choices.map((choice,index)=>(
          <option key={index} value={index}>
            {choice}
            </option>
        
      ))}
      </select>
      </fieldset>

      <div className="input">
        <label htmlfor="option">Option:</label>
        
        <input
        id="option"
        type="text"
        value={option}
        onChange={(event)=>setOption(event.target.value)}
        />

        <button className="AddButton"onClick= {addChoice}>Add</button>

        <button className="RemoveButton" onClick={removeChoice}>Remove</button>

<button className="DecideButton" onClick={decideChoice}>
          Decide!!!
        </button>
      </div>
  </div>


);
}

export default app