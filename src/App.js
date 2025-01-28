import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Homepage from "./components/Homepage.js";
import EmployLogin from "./components/EmployLogin";
import Profile from "./components/Profile.js";
import Logout from "./components/Logout.js";
import Settings from "./components/Settings.js";
import EditContactDetails from "./components/EditContactDetails.js";
import EditQualification from "./components/EditQualification.js";
import EditPreferences from "./components/EditPreferences.js";
import EditReadytowork from "./components/EditReadytowork.js";
// import Body from "./components/Body";
// import Card from "./components/Card";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter basename="/" >
      <Routes>
        <Route path="/" element={<Body></Body>}>
          <Route path="/" element={<Homepage></Homepage>}> </Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/logout" element={<Logout></Logout>}></Route>
          <Route path="/settings" element={<Settings></Settings>}></Route>
          <Route path="/edit/contactdetails" element={<EditContactDetails></EditContactDetails>}></Route>
          <Route path="/edit/qualification" element={<EditQualification></EditQualification>}></Route>
          <Route path="/edit/preferences" element={<EditPreferences></EditPreferences>}></Route>
          <Route path="/edit/readytowork" element={<EditReadytowork></EditReadytowork>}></Route>
          <Route
            path="/employLogin"
            element={<EmployLogin></EmployLogin>}
          ></Route>
        </Route>
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
