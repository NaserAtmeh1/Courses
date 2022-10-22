
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Tutorials from "./Components/Tutorials"
import Add from "./Components/Add"
import Tutorial from "./Components/Tutorial"
import Navbar from "./Components/Navbar";

function App() {





  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Tutorials />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/add" element={<Add/>} />
          <Route path="/tutorials/:id" element={<Tutorial />} />
      </Routes>
    
    </BrowserRouter>
    
  );
}

export default App;
