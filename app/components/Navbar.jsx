"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "./Soc-logo.jpg";
import Sidebar from "./Sidebar";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [showSideMenu, setShowSideMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    //remove on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSideMenu = () => {
    setShowSideMenu(!showSideMenu);
  };

  const closeSidebar = () => {
    setShowSideMenu(false);
  };

  return (
    <nav
      id="nav-bar"
      className="flex items-center justify-between px-4 py-2 border-b-2 border-b-gray-100 "
    >
      <Image src={logo} alt="Dojo" width={100}></Image>
      {isMobile ? (
        <button className="text-xl focus:outline-none" onClick={toggleSideMenu}>
          &#8801;
        </button>
      ) : (
        <div className="flex items-center gap-8">
          <Link className="hover:underline" href="/">
            Home
          </Link>
          <Link className="hover:underline" href="/tickets">
            Tickets
          </Link>
          <Link className="hover:underline" href="/addTicket">
            <button className="bg-green-600 py-3 px-8 text-white">
              Add Ticket
            </button>
          </Link>
        </div>
      )}

      {isMobile && showSideMenu && <Sidebar close={closeSidebar} />}
    </nav>
  );
}
