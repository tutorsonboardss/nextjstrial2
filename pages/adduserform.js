import React from "react";
import { useState, useRef } from "react";

const Adduserform = () => {
  const [users, setUsers] = useState([]);
  const fNameField = useRef();
  const lNameField = useRef();
  const hiddenField = useRef();
  const registerUser = async (event) => {
    //     if(fNameField.current.value==="" ){
    //         alert("firsname  required");
    //         return
    //     }
    //     if(lNameField.current.value==="" ){
    //        alert("last name  required");
    //        return
    //    }

    event.preventDefault();

    const res = await fetch("/api/InsertCompt", {
      body: JSON.stringify({
        firstname: event.target.firstname.value,
        lastname: event.target.lastname.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    //console.log(result[0].title);
    console.log(result);
    fNameField.current.value = "";
    lNameField.current.value = "";
    hiddenField.current.value = "User added sucessfully";
    alert("User added sucessfully");
    // result.user => 'Ada Lovelace'
  };
  return (
    <div class="h-screen  bg-white flex   justify-center mt-12">
      {/* start the first form  */}
      <div class="bg-white w-96 shadow-xl rounded p-5">
        <h2 class="text-center text-3xl font-extrabold text-gray-900">
          Add User
        </h2>

        <form class="space-y-6" onSubmit={registerUser}>
          <input ref={hiddenField} type="hidden" name="remember" value="" />

          <div>
            <label for="firstname">
              <span class="font-bold"> First Name</span>
              <input
                ref={fNameField}
                type="text"
                id="firstname"
                name="firstname"
                autoComplete="firstname"
                class="mb-4 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="First Name"
                required
              />
            </label>
          </div>

          <div class="rounded shadow-sm -space-y-px">
            <div>
              <label for="lastname">
                <span class="font-bold">Last Name</span>
                <input
                  ref={lNameField}
                  type="text"
                  id="lastname"
                  name="lastname"
                  autoComplete="lastname"
                  class="mb-4 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Last Name"
                  required
                />
              </label>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Add User
            </button>
          </div>
        </form>
      </div>
      {/* end the first form  */}
    </div>
  );
};

export default Adduserform;
