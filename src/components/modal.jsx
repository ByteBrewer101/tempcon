import { useState } from "react";
import axios from "axios";

/* eslint-disable react/prop-types */
export function ModalCustom({ state, setState }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  // Submit handler with validation and API call
  async function SubmitHandler() {
    // Input validation
    if (!name || !email || !number) {
      alert("All fields are required!");
      return;
    }

    if (!/^[a-zA-Z ]+$/.test(name)) {
      alert("Name must only contain letters and spaces.");
      return;
    }

    if (!/^\d{10}$/.test(number)) {
      alert("Phone number must be a 10-digit number.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert("Please enter a valid email.");
      return;
    }

    // Create the payload to send to the API
    const userData = {
      name: name,
      number: number,
      email: email,
    };

    try {
      // Sending the data to the API
      const response = await axios.post(
        "http://localhost:3000/create",
        userData
      );
      console.log("User created successfully:", response.data);
      alert("User created successfully!");
      setState(false); // Close the modal on success
    } catch (error) {
      console.error("Error creating user:", error);
      alert("There was an error creating the user. Please try again.");
    }
  }

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
          <h2 className="text-xl font-semibold mb-4">Create User</h2>
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
              Email
            </h1>
            <input
              type="email"
              className="border rounded w-full p-2"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            onClick={SubmitHandler}
            className="px-4 py-2 bg-slate-800 text-white rounded transition-ease-in-out hover:bg-slate-200 hover:text-black"
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
