import React from "react";
import Button from "./components/Button";
import Screen from "./components/Screen";
import { useState } from "react";

function App() {
  const btnValues = [
    "C",
    "+-",
    "%",
    "/",
    7,
    8,
    9,
    "X",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    0,
    ".",
    "=",
  ];
  // Define state and click handlers here

  const [calc, setCalc] = useState({ sign: "", num: 0, res: 0 });

  const numClickHandler = (e) => {
    e.preventDefault();
    let typedValue = e.target.value;
    // console.log(calc.num)
    setCalc({
      ...calc,
      num: calc.num === 0 ? typedValue : calc.num + typedValue,
    });
  };

  const signClickHandler = (e) => {
    e.preventDefault();
    const typedSign = e.target.value;

    setCalc({ ...calc, sign: typedSign, res: calc.num, num: 0 });
  };

  const signsArray = ["+", "-", "X", "/"];

  const equalsClickHandler = (e) => {
    if (calc.sign && calc.num) {
      const math = (sign, a, b) => {
        const num1 = Number(a);
        const num2 = Number(b);
        let result;

        if (sign === "+") {
          result = num1 + num2;
        } else if (sign === "-") {
          result = num1 - num2;
        } else if (sign === "X") {
          result = num1 * num2;
        } else if (sign === "/") {
          result = num1 / num2;
        } else {
          result = "ERROR";
        }

        return String(result);
      };

      setCalc({
        ...calc,
        num: math(calc.sign, calc.res, calc.num),
        res: 0,
        sign: "",
      });
    }
  };

  return (
    <>
      <div className="wrapper">
        <Screen value={calc.num} />
        <div className="buttonBox">
          {btnValues.map((btn, index) => (
            <Button
              key={index}
              value={btn}
              className={btn === "=" ? "equals" : ""}
              onClick={
                signsArray.includes(btn)
                  ? signClickHandler
                  : btn === "="
                  ? equalsClickHandler
                  : numClickHandler
              }
            />
          ))}
        </div>
        ;
      </div>
    </>
  );
}

export default App;
