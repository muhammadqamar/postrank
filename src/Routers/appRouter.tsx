import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home/home";
import Layout from "../components/Layout";
import Login from "../components/Authentications/Login";
import ResetPassword from "../components/Authentications/ResetPassword/index";
import CreateAccount from "../components/Authentications/CreateAccount/index";
import PostDetails from "../pages/PostDetails";

const AppRouter = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/" ||
        (location.pathname === "/post-details" && <Layout />)}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="reset-password" element={<ResetPassword />} />
        <Route path="create-account" element={<CreateAccount />} />
        <Route path="post-details" element={<PostDetails />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
