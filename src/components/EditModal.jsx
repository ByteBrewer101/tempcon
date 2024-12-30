import { useState } from "react";
import axios from "axios";

/* eslint-disable react/prop-types */
export function EditModal({ state, setState, id }) {
  const [name, setName] = useState("");

  const [number, setNumber] = useState("");

  // Function to handle form submission
  const handleSubmit = async () => {
    try {
      // Make the PUT request with axios
      const num = Number(number)
      const response = await axios.put("http://localhost:3000/edit", {
        name,
        email:id,
        number: num,
      });

      // Show feedback message
      alert(response.data.msg);

      // Close the modal after submission
      setState(false);
    } catch (error) {
      // Handle any errors
      alert("There was an error updating the user.");
      console.error(error);
    }
  };

  return (
    <>
      {/* Trigger button to open the modal */}
      {!state && <></>}

      <div
        className={`fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-xl transition-opacity ease-in-out duration-300 ${
          state ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`bg-white p-6 rounded shadow-lg w-1/3 transform transition-transform ease-in-out duration-300 ${
            state ? "-translate-y-4" : "translate-y-0"
          }`}
        >
          <h2 className="text-xl font-semibold mb-4">Edit User</h2>
          <div className="mb-4">
            <h1  className="block mb-1">
              Name
            </h1>
            <input
              value={name}
              type="text"
              className="border rounded w-full p-2"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        
          <div className="mb-4">
            <h1  className="block mb-1">
              Phone Number
            </h1>
            <input
              type="tel"
              className="border rounded w-full p-2"
              placeholder="Enter your phone number"
              onChange={(e) => setNumber(e.target.value)}
              value={number}
            />
          </div>

          <button
            onClick={handleSubmit} // Call the function to submit the data
            className="px-4 py-2 bg-slate-800 text-white rounded transition-ease-in-out hover:bg-slate-200 hover:text-black"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
