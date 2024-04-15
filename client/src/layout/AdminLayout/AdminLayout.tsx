import { Outlet } from "react-router-dom";
import React from "react";
import NavigationBar from "../../components/Admin/NavigationBar/NavigationBar";

export default function AdminLayout() {
  return (
    <div className="flex flex-col overflow-hidden h-fit w-full">
      <NavigationBar />

      <main className="w-full flex items-start">
        <aside className="menu bg-base-200 w-56 rounded-sm gap-2 pt-4 pb-6 [&_a]:font-semibold [&_a]:text-sm ml-6">
          <li>
            <a>Account details</a>
          </li>
          <li>
            <a>Dashboard</a>
          </li>
          <li>
            <a>Manage products</a>
          </li>
          <li>
            <a>Manage authors</a>
          </li>
          <li>
            <a>Manage categories</a>
          </li>
          <li>
            <a>Manage orders</a>
          </li>
          <li>
            <a>My wallet</a>
          </li>
          <li>
            <a>Log out</a>
          </li>
        </aside>
        <section className="w-full">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
