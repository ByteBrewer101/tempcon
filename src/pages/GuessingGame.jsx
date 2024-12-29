import { useEffect, useState } from "react";
import { CustomBtn } from "../components/button";
import { useNavigate } from "react-router-dom";

export function GuessGame() {
    const nav = useNavigate()
  const [randNo, setRandNo] = useState("");

  const [inpf, setInpf] = useState("");
  const [status, setStatus] = useState("Enter a number");
  const [flag,setFlag]=useState(false)

  useEffect(() => {
    const num = Math.floor(Math.random() * 10);
    setRandNo(num);
  }, [flag]);


  function submitHandler (){

    
      if (Number(inpf) === Number(randNo)) {
        setStatus("Congratulations !! your number was "+ randNo);
        setFlag(true)
      }

      if (Number(inpf) < Number(randNo)) {
        setStatus("Your guess is lesser");
      }
      if (Number(inpf) > Number(randNo)) {
        setStatus("Your guess is more");
      }

  }


  function navHandler(){
    nav("/")
  }

  


  return (
    <div className=" h-screen flex justify-center items-center flex-col space-y-4">
      <div className=" flex flex-col bg-slate-200 rounded-xl shadow-xl p-4 space-y-4 border-2 border-black">
        <p className="text-center text-xl font-semibold" >Guessing Game</p>
        <h1 className="text-lg" >{status}</h1>
       
        <input
          type="text"
          placeholder="input"
          className="p-2 rounded-lg"
          onChange={(e) => {
            setInpf(e.target.value)
          }}
        />
        <button
          className="rounded-lg p-2 bg-slate-500 text-white shadow-xl  "
          onClick={submitHandler}
        >
          Submit
        </button>
      </div>
      <CustomBtn label="Home" onClick={navHandler} />
    </div>
  );
}
