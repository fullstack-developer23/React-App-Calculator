import './App.css';
import {useState} from 'react';
import { evaluate } from 'mathjs';
      const App = () => {

        const [sum, setSum] = useState("");

  const buttons = 
        ["7", "8", "9", "C", "4", "5",
        "6", "*", "1", "2","3", "/", 
        "+", "0","-", "="];
        const handleClick = (btnPress) => {
          // work out the sum
          // update the stateFunction setSum
          setSum (sum + btnPress)
          if(btnPress === "=") {
            let expression = sum;

            try {
            setSum(evaluate(expression))
            } catch(error) {
              setSum("error")}

          } else if (btnPress === "C") {
              setSum("");

          }
           else {
            setSum (sum + btnPress)
          } 
        };

      return (
       <div className="App">
        <h1>Calculator</h1>
       <div className="button-container">
       <h3>{sum}</h3>
       {buttons.map((button, index) => {
        return (
          <button key={index} className="buttonBox" onClick={() => handleClick (button)}>{button}</button>
        )
       })}
        </div>
      </div>
      );
  };
export default App;




























// const App = () => {

//   //the useState hook
//   const [number, setNumber] = useState(0);

//   //
//   const handleMinus = () =>{
//     setNumber(number - 1);
//   };

//   const handleAdd = () =>{
//     setNumber(number + 1);
//   };

//   return (
//     <div className="App">
//     <button onClick={handleAdd}>+</button>
//     <h1>{number}</h1>
//     <button onClick={handleMinus}>-</button>  
//     </div>
//   );
// };