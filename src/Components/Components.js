import '../App.css';
import Main from "./Main/Main.js";
import AuthRegister from "./Auth/AuthRegister";
import AuthLogin from "./Auth/AuthLogin";
import ProtectedRoute from "../Service/ProtectedRoute.js";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import MainDetail from "./Main/MainDetail.js";

//routing main & detail routes in app
function Components() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element={<Main />} /> 
        {/* Auth paths */}
        <Route path="/register" element={<AuthRegister />} />
        <Route path="/login" element={<AuthLogin />} />
        
        {/* Different routes based on the id of the plushie */}
        <Route 
          path="/:id"
          element={<ProtectedRoute path="/:id" element={MainDetail} />} 
        /> 
      </Routes>
      </div>
    </Router>
  );
}

export default Components;