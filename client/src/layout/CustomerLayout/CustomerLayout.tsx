import { Outlet } from "react-router-dom";
import React from "react";
import NavigationBar from "../../components/Admin/NavigationBar/NavigationBar";

export default function CustomerLayout() {
  return (
    <div className="flex overflow-hidden h-[100vh]">
      <NavigationBar />
      <Outlet />
    </div>
  );
}
