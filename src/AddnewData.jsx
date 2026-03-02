import { useState } from "react";

function AddnewData() {

  const [id, setId] = useState('');
  const [name, setname] = useState('');
  const [email, setemail] = useState('');

  const addStudent = async (e) => {
    e.preventDefault();

    const url = "http://localhost:3000/students";

    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id,
        name,
        email
      })
    });

    response = await response.json();

    if (response) {
      alert("New student added");
    }
  }

  return (
    <>
      <h2 className="text-center text-primary">ADD new data into API</h2>

      <div className="container">
        <form className="mx-auto w-50">

          <input
            type="text"
            className="form-control"
            placeholder="type your Id"
            style={{ width: "300px" }}
            onChange={(event) => setId(event.target.value)}
          />

          <br />

          <input
            type="text"
            className="form-control"
            placeholder="type your name"
            style={{ width: "300px" }}
            onChange={(event) => setname(event.target.value)}
          />

          <br />

          <input
            type="text"
            className="form-control"
            placeholder="type your email"
            style={{ width: "300px" }}
            onChange={(event) => setemail(event.target.value)}
          />

          <br />

          <button onClick={addStudent} className="btn btn-primary">
            Add new Data
          </button>

        </form>
      </div>
    </>
  );
}

export default AddnewData;