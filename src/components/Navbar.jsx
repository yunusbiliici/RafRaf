import logo from "../assets/logobir.png";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SearchIcon, MenuIcon, XIcon, TicketPlus } from "lucide-react";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 z-50 w-full flex items-center justify-between px-6 md:px-16 lg:px-36 py-5">
      <Link to="/" className="max-md:flex-1">
        <img src={logo} alt="Logo" className="w-36 h-auto" />
      </Link>

      {/* Menü container */}
      <div
        className={`max-md:absolute max-md:top-0 max-md:left-0 z-50 flex flex-col md:flex-row items-center max-md:justify-center gap-8 min-md:px-8 py-3 max-md:h-screen min-md:rounded-full
    max-md:bg-black/70 md:bg-transparent
    md:border border-gray-300/20
    overflow-hidden transition-[width] duration-300
    ${isOpen ? "max-md:w-full" : "max-md:w-0"}`}
      >
        {/* Kapatma ikonu sadece mobilde görünür */}
        <XIcon
          className="md:hidden absolute top-6 right-6 w-6 h-6 cursor-pointer text-white"
          onClick={() => setIsOpen(false)}
        />

        {/* Menü linkleri */}
        <Link
          className="text-white"
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
          to="/"
        >
          AnaSayfa
        </Link>
        <Link
          className="text-white"
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
          to="/Kitaplar"
        >
          Kitaplar
        </Link>
        <Link
          className="text-white"
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
          to="/Kayıt"
        >
          Kayıt
        </Link>
        <Link
          className="text-white"
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
          to="/Okunacaklar"
        >
          Okunacaklar
        </Link>
        <Link
          className="text-white"
          onClick={() => {
            scrollTo(0, 0);
            setIsOpen(false);
          }}
          to="/statistics_page"
        >
          İstatistikler
        </Link>
      </div>

      {/* Sağ ikonlar */}
      <div className="flex items-center gap-8">
        <SearchIcon className="hidden md:block w-6 h-6 cursor-pointer text-white" />
        {!user ? (
          <button
            onClick={openSignIn}
            className="border-2 border-white text-white px-4 py-2 rounded-full hover:bg-transparent hover:text-white"
          >
            Login
          </button>
        ) : (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Bookings"
                labelIcon={<TicketPlus width={15} />}
                onClick={() => navigate("/")}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}
      </div>

      {/* Menü butonu (mobilde görünür) */}
      <MenuIcon
        className="max-md:ml-4 md:hidden w-8 h-8 cursor-pointer text-white"
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
};

export default Navbar;
