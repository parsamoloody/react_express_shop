import React from "react";
import { Link,Outlet  } from "react-router-dom";
import "../output.css";

export default function Layout() {
    return (
        <div className="container mx-auto">
        <header className="bg-gray-800 text-white p-4">
            <h1 className="text-2xl font-bold">My Blog</h1>
            <nav>
            <ul className="flex space-x-2">
                <li>
                <Link to="/" className="hover:underline">
                    Home
                </Link>
                </li>
                <li>
                <Link to="/blogs" className="hover:underline">
                    Blogs
                </Link>
                </li>
                <li>
                </li>
            </ul>
            </nav>
            <Outlet />
        </header>
        </div>
    );
}