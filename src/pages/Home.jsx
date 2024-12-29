import { useNavigate } from "react-router-dom";
import { CustomBtn } from "../components/button";

export function HomePage(){

    const nav = useNavigate()

    function handler1(){
        nav("/temp")

    }

    function handler2(){
        nav("/game")

    }


    return (
      <div className="h-screen flex justify-center items-center">
        <div className=" bg-slate-100  p-4 rounded-xl shadow-xl flex flex-col space-y-4 items-center justify-center">
          <h1 className="font-semibold text-xl">Main Menu</h1>
          <CustomBtn label="Temp App" onClick={handler1} />
          <CustomBtn label="Game App" onClick={handler2} />
        </div>
      </div>
    );
}