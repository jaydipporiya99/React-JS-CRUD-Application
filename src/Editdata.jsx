import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Editdata() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [sid, setId] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");

  useEffect(() => {
    getStudent();
  }, []);

  const getStudent = async () => {
    const response = await fetch("http://localhost:3000/students/" + id);
    const data = await response.json();

    setId(data.id);
    setname(data.name);
    setemail(data.email);
  };

  const updateStudent = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/students/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: sid,
        name: name,
        email: email
      })
    });

    if (response.ok) {
      alert("Student Updated");
      navigate("/");
    }
  };

  return (
    <>
      <h3 className="text-center">You can edit student data...</h3>

      <h2 className="text-center text-primary">Edit & Update Data</h2>

      <div className="container">
        <form className="mx-auto w-50">

          <input
            type="text"
            className="form-control"
            value={sid}
            style={{ width: "300px" }}
            onChange={(e) => setId(e.target.value)}
          />

          <br />

          <input
            type="text"
            className="form-control"
            value={name}
            style={{ width: "300px" }}
            onChange={(e) => setname(e.target.value)}
          />

          <br />

          <input
            type="text"
            className="form-control"
            value={email}
            style={{ width: "300px" }}
            onChange={(e) => setemail(e.target.value)}
          />

          <br />

          <button onClick={updateStudent} className="btn btn-primary">
            Update Data
          </button>

        </form>
      </div>
    </>
  );
}

export default Editdata;