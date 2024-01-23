import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HOME, LOGIN, SIGNUP } from "./Components/ConstantLinks";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import "./index.css";
import HomeLayout from "./Layouts/HomeLayout";
import { ProtectedLayout } from "./Layouts/ProtectedLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<HomeLayout />}>
            <Route path={LOGIN} element={<Login />} />
            <Route path={SIGNUP} element={<Signup />} />
          </Route>
          <Route element={<ProtectedLayout />}>
            <Route path={HOME} element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
