import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function RootComponent({ user, setUser }) {
  return (
    <>
      <Header user={user} setUser={setUser} />
      <Outlet />
    </>
  );
}
