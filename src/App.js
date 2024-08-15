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

  return (
    <>
      <div className="wrapper">
        <Screen value={calc.num} />
        <div className="buttonBox">
          {btnValues.map((btn) => (
            <Button
              value={btn}
              className={btn === "=" ? "equals" : ""}
              onClick={numClickHandler}
            />
          ))}
        </div>
        ;
      </div>
    </>
  );
}

export default App;
