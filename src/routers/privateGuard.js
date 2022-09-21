import React, { useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import GridLayout from "../util/gridlayout";
import LocalStorageService from "../util/localStorageService";
const Private = () => {
  const isUserLoggedIn = LocalStorageService.getAccessToken();
  //const navigate = useNavigate();

  return (
    <>
      {isUserLoggedIn ? (
        <GridLayout>
          <Outlet />
        </GridLayout>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};
export default Private;
