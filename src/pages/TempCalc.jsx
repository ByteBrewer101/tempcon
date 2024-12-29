/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { CustomBtn } from "../components/button";
import { useNavigate } from "react-router-dom";

export function TempCalc() {
  const [input, setInput] = useState("0");
  const [activeButton, setActiveButton] = useState("Celsius");

  const [degrees, setDegrees] = useState("Degrees");

  const [kel, setKel] = useState("Kelvin");

  const [far, setFar] = useState("Fahrenheit");

  useEffect(() => {
    function degreesHandler(){

      setDegrees(input);
      setFar(Ctf(Number(input)));
      setKel(ctk(Number(input)))
      


    }
    function kelvinHandler(){
      setKel(input);
      setDegrees(ktC(Number(input)));
      setFar(ktF(Number(input)));


    }

    function farenheitHandler(){
      setFar(input);
      setDegrees(ftC(Number(input)))
      setKel(ftk(Number(input)))

    }

    if(activeButton==="Celsius"){
      degreesHandler();
    }
    else if (activeButton==="Kelvin"){
      kelvinHandler();
    }
    else if(activeButton==="Fahrenheit"){
      farenheitHandler()
    }
    else{
      alert("error")
    }
    
    
  }, [input,activeButton]);


  //logic
  //celsius functions
  function Ctf(val) {
    return val * (9 / 5) + 32;
  }

  function ctk(val) {
    return val + 273;
  }

  //kelvin fns

  function ktF(val) {
    return (val - 273) * (9 / 5) + 32;
  }

  function ktC(val){
    return (val -273);
  }

  //farenheit fns

 function ftC(val) {

   return (val - 32) * (5 / 9);
 }

 function ftk(val) {

   return (val - 32) * (5 / 9) + 273.15;
 }

// logic

const nav = useNavigate()

function homeHandler(){
nav("/")
}



  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-2">
      <h1 className="font-semibold bg-slate-100 border-2 border-slate-200 shadow-xl rounded-lg mb-2 text-xl p-2" >Temperature Converter</h1>
      <div className="border-2 border-slate-500 p-4 rounded-xl shadow-xl flex flex-col space-y-2 ">
        <div className="flex items-center bg-slate-200 rounded-xl px-2 justify-between">
          <input
            type="text"
            value={input}
            className="bg-slate-200 p-2 rounded-lg text-slate-900 focus:outline-none"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            placeholder="input"
          />
          <p>{activeButton}</p>
        </div>

        <div className="flex justify-between p-2 shadow-lg rounded-lg bg-slate-100">
          <p>{degrees}</p>
          <p>Celsius</p>
        </div>
        <div className="flex justify-between p-2 shadow-lg rounded-lg bg-slate-100">
          <p>{kel}</p>
          <p>Kelvin</p>
        </div>
        <div className="flex justify-between p-2 shadow-lg rounded-lg bg-slate-100">
          <p>{far}</p>
          <p>Farenheit</p>
        </div>

        <TemperatureButtons
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      </div>
      <CustomBtn label="Home" onClick={homeHandler} />
    </div>
  );
}



function TemperatureButtons(props) {
  const handleButtonClick = (buttonName) => {
    props.setActiveButton(buttonName);
  };

  return (
    <div className="bg-slate-300 p-2 rounded-lg shadow-lg flex  justify-around ">
      <button
        onClick={() => handleButtonClick("Celsius")}
        className={`p-2 rounded-lg ${
          props.activeButton === "Celsius"
            ? "bg-slate-500 text-white"
            : "bg-gray-200"
        }`}
      >
        Celsius
      </button>
      <button
        onClick={() => handleButtonClick("Kelvin")}
        className={`p-2 rounded-lg ${
          props.activeButton === "Kelvin"
            ? "bg-slate-500 text-white"
            : "bg-gray-200"
        }`}
      >
        Kelvin
      </button>
      <button
        onClick={() => handleButtonClick("Fahrenheit")}
        className={`p-2 rounded-lg ${
          props.activeButton === "Fahrenheit"
            ? "bg-slate-500 text-white"
            : "bg-gray-200"
        }`}
      >
        Fahrenheit
      </button>
      
    </div>
  );
}
