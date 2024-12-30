import {  useEffect, useState } from "react";
import { Card } from "../components/card";
import { ModalCustom } from "../components/modal";
import { EditModal } from "../components/EditModal";
import axios from "axios";
import { CustomBtn } from "../components/button";
import { useNavigate } from "react-router-dom";







export function ContactPage() {

    const [contacts,setContacts]=useState([])
    const [mState,setMstate]=useState(false)
    const [eState,seteState] = useState(false)
    const [selectedId,setSelectedid]=useState("")
    const [searchInput,setSearchInput]=useState("")
    const [invoked,setInvoked]=useState(true)

    const nav = useNavigate()


    ///
    const url = "http://localhost:3000/search";
    

    function navHandler(){
      nav("/")
    }

    // useEffect(()=>{
    //     const sample = [
    //       {
    //         email: "john.doe@example.com",
    //         name: "John Doe",
    //         number: "+1234567890",
    //       },
    //       {
    //         email: "jane.smith@example.com",
    //         name: "Jane Smith",
    //         number: "+0987654321",
    //       },
    //       {
    //         email: "alice.johnson@example.com",
    //         name: "Alice Johnson",
    //         number: "+1122334455",
    //       },
    //       {
    //         email: "bob.brown@example.com",
    //         name: "Bob Brown",
    //         number: "+2233445566",
    //       },
    //       {
    //         email: "charlie.white@example.com",
    //         name: "Charlie White",
    //         number: "+3344556677",
    //       },
    //     ];
    //     setContacts(sample)
    // },[])
    useEffect(()=>{
      const handleSearch = async () => {
        try {
          const response = await axios.post(url, {
            name: searchInput,
          });

          setContacts(response.data);
        } catch (error) {
          console.error("Error fetching contacts:", error);
        }
      };
handleSearch()

    },[searchInput,mState,eState,invoked])




  return (
    <div className="flex h-screen items-center p-20 justify-center bg-slate-100 flex-col space-y-4 overflow-hidden">
      <div className="bg-slate-200 rounded-lg shadow-lg p-4 h-1/3 flex flex-col justify-around items-center space-y-4 w-[500px]">
        <h1 className="text-xl font-semibold mb-2">Contact Manager</h1>
        <div className="w-full flex space-x-2">
          <input
            type="text"
            placeholder="Search"
            className="rounded-lg p-2 w-full border border-gray-300 focus:outline-none focus:ring focus:ring-slate-400"
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <div className="w-full">
          <button
            onClick={() => setMstate(true)}
            className="hover:-translate-y-1 transition ease-in-out duration-200 bg-slate-800 shadow-xl text-white rounded-lg w-full p-2 "
          >
            Create New
          </button>
          <ModalCustom state={mState} setState={setMstate} />

          <div></div>
        </div>
      </div>

      <div className="w-[500px] h-2/3 bg-slate-200 shadow-xl space-y-4 p-4 rounded-xl overflow-y-scroll">
        {contacts.length === 0 ? (
          <div className="flex items-center justify-center h-full">
            <span className="text-lg text-gray-500">wow such empty</span>
          </div>
        ) : (
          <>
            <EditModal state={eState} setState={seteState} id={selectedId} />
            {contacts.map((i, k) => (
              <Card
                key={k}
                name={i.contactName}
                email={i.email}
                number={i.contactNumber}
                setState={seteState}
                id={i.email}
                Setid={setSelectedid}
                setDeleter={setInvoked}
                deleter={invoked}
              />
            ))}
          </>
        )}
      </div>
      <CustomBtn label="Home" onClick={navHandler} />
    </div>
  );
}
