import { useState } from "react";

function Calculator()
{
    const[num1, setNum1] = useState("");
    const[num2, setNum2] = useState("");
    const [result, setResult] = useState("");

    function calculate(operator)
    {
        const n1 = parseFloat(num1);
        const n2 = parseFloat(num2);

        if(isNaN(n1) || isNaN(n2))
        {
            alert("Please enter valid numbers!");
            return;
        }
    

    let res;

    switch(operator)
    {
        case "+":
            res = n1 + n2;
            break;
        case "-":
            res = n1 - n2;
            break;
        case "*":
            res = n1 * n2;
            break;
        case "/":
            if (n2 === 0) {
            alert("Cannot divide by zero!");
            return;
            }
            res = n1 / n2;
            break;
        default:
            res = "Invalid";
    }

    setResult(res);
}

function clearFields()
{
    setNum1("");
    setNum2("");
    setResult("");
}

return(
    <div >
        <h2>Calculator App</h2>

        <input 
            type="number"
            placeholder="Enter first number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
        />
        <br/><br/>
        <input  
            type="number"
            placeholder="Enter second number"
            value={num2}
            onChange={(e) =>setNum2(e.target.value)}></input>
            <br/> <br/>

            <button onClick={() => calculate("+")}>+</button>
            <button onClick={() => calculate("-")}>-</button>
            <button onClick={() => calculate("*")}>*</button>
            <button onClick={() => calculate("/")}>/</button>
            <br /><br />

            <strong>Result: {result}</strong>
            <br /><br />

            <button onClick={clearFields}>Clear</button>

    </div>
    );
}
export default Calculator;