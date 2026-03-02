import { Routes, Route, Link } from "react-router-dom"
import Displaydata from "./Displaydata"
import AddnewData from "./AddnewData"
import Editdata from "./Editdata"



function App() {
 

  return (
    <>
     <div className="container text-center">
        <Link className="btn btn-primary me-4" to="/" >Display data</Link>
        
        <Link className="btn btn-secondary" to="/add">Add new data</Link>  
     </div>
     <Routes>
      <Route path="/" element={<Displaydata />} />
      <Route path="/add" element={<AddnewData />} />
       <Route path="/edit/:id" element={<Editdata />} />
     </Routes>
    </>
  )
}

export default App
