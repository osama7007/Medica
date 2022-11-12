import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import useAuthStateHandler from "../firebase/useAuthStateHandler";

export function IsAuthRouteGuard() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const localStorageAuth = JSON.parse(localStorage.getItem("auth"));
  return localStorageAuth?.isAuth && isAuth ? (
    <Outlet />
  ) : (
    <Navigate to="/Login" />
  );
}
export function IsNotAuthRouteGuard() {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const localStorageAuth = JSON.parse(localStorage.getItem("auth"));
  return localStorageAuth?.isAuth && isAuth ? <Navigate to="/" /> : <Outlet />;
}
