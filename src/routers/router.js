import React from "react";
import { Route, Routes } from "react-router-dom";
import Group from "../pages/group";
import Home from "../pages/home";
import Live from "../pages/live";
import Login from "../pages/login";
import MarketPlace from "../pages/marketplace";
import Messenger from "../pages/messenger";
import Notification from "../pages/notification";
import SignUp from "../pages/signup";
import Watch from "../pages/watch";
import Private from "./privateGuard";

const Router1 = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route element={<Private />}>
        <Route path="/" element={<Home />} />
        <Route path="/marketplace" element={<MarketPlace />} />
        <Route path="/group" element={<Group />} />
        <Route path="/live" element={<Live />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/messenger" element={<Messenger />} />
      </Route>
    </Routes>
  );
};
export default Router1;
