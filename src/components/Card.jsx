import axios from "axios";

/* eslint-disable react/prop-types */
export function Card({name,number,email,setState,Setid,setDeleter,deleter}) {


async function handleDelete() {
  try {
    const response = await axios.delete("http://localhost:3000/delete", {
      data: { email: email }, // Pass the email in the request body using 'data'
    });

    if (response.data.msg === "user deleted") {
      console.log("User deleted");
      setDeleter(!deleter)
    } else {
      console.log(response.data.msg);
    }
  } catch (error) {
    console.error("Error deleting user:", error);
  }
}


  return (
    <div className="  bg-slate-300 rounded-lg min-w-full h-[200px] flex flex-col items-start justify-around p-4 shadow-lg transition-transform transform ">
      <div className="flex flex-col mb-4">
        <h1 className="text-xl font-bold text-black">{name}</h1>
        <h2 className="text-lg text-black">{number}</h2>
        <h3 className="text-md text-slate-700">{email}</h3>
      </div>

      <div className="flex items-center justify-center space-x-2">
        <button onClick={()=>{setState(true);Setid(email)}}  className="bg-slate-800 text-white font-semibold py-1 px-3 rounded hover:bg-slate-500 hover:text-white transition duration-200">
          Edit
        </button>
        <button onClick={handleDelete} className="bg-slate-800 text-white font-semibold py-1 px-3 rounded hover:bg-slate-500 hover:text-white transition duration-200">
          Delete
        </button>
      </div>
    </div>
  );
}
