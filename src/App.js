import { BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import EmpList from "./EmpList";
import EmpForm from "./EmpForm";

import EmpEdit from "./EmpEdit";
import EmpDetails from "./EmpDetails";

import Register from "./Register";
import Login from "./Login";

import "./index.css"

function App(){
  return(
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/emplist" element={<EmpList/>}/>
          <Route path="/form" element={<EmpForm/>}/>
          <Route path="/empedit/:empid" element={<EmpEdit/>}/>
          <Route path="/empdetails/:empid" element={<EmpDetails/>}/>

        </Routes>
      </Router>

    </div>
  )
}
export default App;