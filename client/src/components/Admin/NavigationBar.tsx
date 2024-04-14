import React from "react";

export default function NavigationBar() {
  return (
    <div className="flex-col">
      <div className="navbar bg-base-100 hidden md:flex ">
        <div className="flex-1">
          <ul className="menu menu-horizontal px-1">
            <li className="font-bold hover:border-b-2 hover:border-amber-600">
              <a>Home</a>
            </li>
            <li className="hover:border-b-2 hover:border-amber-600 font-bold">
              <a>Shop</a>
            </li>
            <li className="font-bold hover:border-b-2 hover:border-amber-600">
              <a>Authors</a>
            </li>
            <li className="font-bold">
              <details>
                <summary>More</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <a>Link 1</a>
                  </li>
                  <li>
                    <a>Link 2</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li className="font-bold">
              <a>Frequently Asked Question?</a>
            </li>
            <li className="font-bold">
              <a>Account</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar bg-base-100 md:hidden">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-base-100 rounded-box w-[80vw] gap-4 py-8 [&_a]:p-4 [&_a]:font-bold"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Shop</a>
              </li>
              <li>
                <a>Authors</a>
              </li>
              <li>
                <a>More</a>
                <ul className="grid gap-4 py-4">
                  <li>
                    <a>Authors</a>
                  </li>
                  <li>
                    <a>Authors</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Frequently Asked Question?</a>
              </li>
              <li>
                <a>Account</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-right">
          <a className="btn btn-ghost text-xl">OrionBook</a>
        </div>
      </div>
      <div className="navbar bg-base-100 hidden md:flex">
        <div className="navbar-center flex-1">
          <a className="btn btn-ghost text-xl">OrionBook</a>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost btn-circle w-fit px-4 flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Search
          </button>
          <button className="btn btn-ghost btn-circle w-fit px-4 flex gap-2">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
            Cart
          </button>
        </div>
      </div>
    </div>
  );
}
