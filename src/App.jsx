import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Homepage from "./component/homepage/HomePage";

function App() {
 

  return (
    <>
      <Router>
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
         

          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
