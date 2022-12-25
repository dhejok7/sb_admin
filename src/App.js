import "./App.css";
import Sidebar from "./components/Sidebar";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import NestedExample from "./components/NestedExample";
import Account from "./components/NestedComponents/Account";
import Profile from "./components/NestedComponents/Profile";

function App() {
  let datas = {
    earningsMonthly: "22,000",
    earningsYearly: "2,55,000",
    tasks: "60",
    pendingRequest: "7",
  };
  return (
    <div id="wrapper">
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard data={datas} />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/edit-user/:id" element={<EditUser />} />
          <Route path="/nested-example" element={<NestedExample/>}>
            <Route path="account" element={<Account />}></Route>
            <Route path="profile" element={<Profile />}/>

          </Route>
          <Route path="*" element={<Navigate to={"/dashboard"} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
