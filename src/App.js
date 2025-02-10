import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Homepage from "./components/Homepage.js";
import EmployeeLogin from "./components/EmployeeLogin";
import Profile from "./components/Profile.js";

import Settings from "./components/Settings.js";
import EditContactDetails from "./components/EditContactDetails.js";
import EditQualification from "./components/EditQualification.js";
import EditPreferences from "./components/EditPreferences.js";
import EditReadytowork from "./components/EditReadytowork.js";
import AdminHomePage from "./components/AdminHomePage.js";
import SignUp from "./components/SignUp.js";
import CompanyReview from "./components/CompanyReview.js";
import ContactUs from "./components/ContactUs.js";
import { Provider } from "react-redux";
// import appStore from "./utils/appStore.js";
import appStore from "./utils/appStore.js"
import Notification from "./components/Notification.js";
import Messages from "./components/Messages.js";
import EmployeeSignUp from "./components/EmployeeSignUp.js";
import JobDetails from "./components/JobDetails.js";
// import Body from "./components/Body";
// import Card from "./components/Card";
// import Navbar from "./components/Navbar";

function App() {
  return (
    <Provider store={appStore}  >
    <BrowserRouter basename="/"   >
      <Routes>
        <Route path="/" element={<Body></Body>}>
          <Route path="/" element={<Homepage></Homepage>}> </Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signUp" element={<SignUp></SignUp>}></Route>
          <Route path="/home" element={<Homepage></Homepage>}></Route>
          <Route path="/companyreviews" element={<CompanyReview></CompanyReview>}></Route>
          <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
          <Route path="/notification" element={<Notification></Notification>}></Route>
          <Route path="/messages" element={<Messages></Messages>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
        <Route path="/job/:jobId" element={<JobDetails></JobDetails>}></Route>
          <Route path="/settings" element={<Settings></Settings>}></Route>
          <Route path="/edit/contactdetails" element={<EditContactDetails></EditContactDetails>}></Route>
          <Route path="/edit/qualification" element={<EditQualification></EditQualification>}></Route>
          <Route path="/edit/preferences" element={<EditPreferences></EditPreferences>}></Route>
          <Route path="/edit/readytowork" element={<EditReadytowork></EditReadytowork>}></Route>
          <Route path="/admin/homepage" element={<AdminHomePage></AdminHomePage>}></Route>
          <Route
            path="/employeeLogin"
            element={<EmployeeLogin></EmployeeLogin>}
          ></Route>
          <Route path="/employeeSignUp" element={<EmployeeSignUp></EmployeeSignUp>}></Route>
        </Route>
       
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
