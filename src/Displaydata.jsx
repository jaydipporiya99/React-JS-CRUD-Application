import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Displaydata() {

  const navigate = useNavigate();
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    renderData();
  }, []);

  const renderData = async () => {
    try {
      const response = await fetch("http://localhost:3000/students");

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setStudentData(data);
      setLoading(false);

    } catch (error) {
      console.log("Error fetching data:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return <h3 className="text-center">Loading...</h3>;
  }

  const deleteData = async (id) => {
    const url = "http://localhost:3000/students/";

    let response = await fetch(url + id, {
      method: "DELETE",
    });

    if (response.ok) {
      alert("Record deleted");
      renderData();
    }
  };

  const Editstudentdata = (id) => {
    navigate("/edit/" + id);
  };

  return (
    <>
      <h2 className="text-center text-primary">
        Fetching Data From API
      </h2>

      <table className="table table-hover mx-auto w-50">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {studentData.length > 0 ? (
            studentData.map((student) => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>

                <td>
                  <button
                    onClick={() => deleteData(student.id)}
                    className="btn btn-danger me-2"
                  >
                    Delete
                  </button>

                  <button
                    onClick={() => Editstudentdata(student.id)}
                    className="btn btn-warning"
                  >
                    Edit
                  </button>
                </td>

              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center">
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}

export default Displaydata;