import React, { useEffect, useState } from "react";
function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    await fetch("/api/SelectCompt")
      .then((res) => res.json())
      .then((json) => setUsers(json));
  };
  //console.log("Data1....." + data1);
  useEffect(() => {
    //see tableview3 for more info
    fetchUsers();
  }, []);

  const [inEditMode, setInEditMode] = useState({
    status: false,
    rowKey: null,
  });

  const [firstname, setFirstName] = useState(null);
  const [lastname, setLastName] = useState(null);

  const onEdit = ({ userid, currentFirstName, currentLastName }) => {
    setInEditMode({
      status: true,
      rowKey: userid,
    });
    setFirstName(currentFirstName);
    setLastName(currentLastName);
  };

  const updateUsers = async ({ userid, newFirstName, newLastName }) => {
    await fetch("/api/UpdateCompt", {
      method: "POST",
      body: JSON.stringify({
        userid: userid,
        firstname: newFirstName,
        lastname: newLastName,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        // reset inEditMode and state values
        onCancel();

        // fetch the updated data
        fetchUsers();
      });
  };

  const onSave = ({ userid, newFirstName, newLastName }) => {
    console.log("title update inventory pass" + newFirstName);
    console.log("title update inventory content" + newLastName);
    updateUsers({ userid, newFirstName, newLastName });
  };

  const onDelete = async ({ userid, newFirstName, newLastName }) => {
    await fetch("/api/DeleteCompt", {
      method: "POST",
      body: JSON.stringify({
        userid: userid,
        firstname: newFirstName,
        lastname: newLastName,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        // reset inEditMode and state values
        onCancel();

        // fetch the updated data
        fetchUsers();
      });
  };

  const onCancel = () => {
    // reset the inEditMode state value
    setInEditMode({
      status: false,
      rowKey: null,
    });
    // reset the state value
    setFirstName(null);
    setLastName(null);
  };

  return (
    <div class="h-screen  bg-white flex   justify-center mt-12">
      <div class="bg-white w-196 shadow-xl rounded p-5">
        <h2 class="text-center text-2xl font-extrabold text-gray-900">
          List Users
        </h2>
        <br></br>
        <table class="border-collapse border border-green-800 ...">
          <thead>
            <tr class="border-collapse border border-green-800 ...">
              <th
                align="left"
                class="border-collapse border border-green-800 ..."
              >
                {" "}
                First Name
              </th>
              <th
                align="left"
                class="border-collapse border border-green-800 ..."
              >
                Last Name
              </th>
              <th align="center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.user_id}>
                {/* <td>{user.first_name}</td> */}

                <td class="border-collapse border border-green-800 ...">
                  {inEditMode.status && inEditMode.rowKey === user.user_id ? (
                    <input
                      value={firstname}
                      onChange={(event) => setFirstName(event.target.value)}
                    />
                  ) : (
                    user.first_name
                  )}
                </td>
                <td class="border-collapse border border-green-800 ...">
                  {inEditMode.status && inEditMode.rowKey === user.user_id ? (
                    <input
                      value={lastname}
                      onChange={(event) => setLastName(event.target.value)}
                    />
                  ) : (
                    user.last_name
                  )}
                </td>

                <td class="border-collapse border border-green-800 ...">
                  {inEditMode.status && inEditMode.rowKey === user.user_id ? (
                    <React.Fragment>
                      <button
                        class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-3 rounded"
                        onClick={() =>
                          onSave({
                            userid: user.user_id,
                            newFirstName: firstname,
                            newLastName: lastname,
                          })
                        }
                      >
                        Save
                      </button>

                      <button
                        class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded"
                        style={{ marginLeft: 8 }}
                        onClick={() => onCancel()}
                      >
                        Cancel
                      </button>
                    </React.Fragment>
                  ) : (
                    <React.Fragment>
                      <button
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                        onClick={() =>
                          onEdit({
                            userid: user.user_id,
                            currentFirstName: user.first_name,
                            currentLastName: user.last_name,
                          })
                        }
                      >
                        Edit
                      </button>

                      <button
                        class="bg-green-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded"
                        style={{ marginLeft: 8 }}
                        onClick={() =>
                          onDelete({
                            userid: user.user_id,
                            currentFirstName: user.first_name,
                            currentLastName: user.last_name,
                          })
                        }
                      >
                        Delete
                      </button>
                    </React.Fragment>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
