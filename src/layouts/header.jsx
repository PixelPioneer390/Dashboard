import { useState, useRef, useEffect } from "react";
import { useTheme } from "@/hooks/use-theme";
import { Bell, ChevronsLeft, Moon, Search, Sun, User, LogOut } from "lucide-react";
import profileImg from "@/assets/profile-image.jpg";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Header = ({ collapsed, setCollapsed }) => {
  const { theme, setTheme } = useTheme();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="relative z-10 flex h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-slate-900">
      <div className="flex items-center gap-x-3">
        <button
          className="btn-ghost size-10"
          onClick={() => setCollapsed(!collapsed)}
        >
          <ChevronsLeft className={collapsed && "rotate-180"} />
        </button>
        <div className="input">
          <Search size={20} className="text-slate-300" />
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search..."
            className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:text-slate-50"
          />
        </div>
      </div>

      <div className="flex items-center gap-x-3 relative" ref={profileRef}>
        <button
          className="btn-ghost size-10"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun size={20} className="dark:hidden" />
          <Moon size={20} className="hidden dark:block" />
        </button>

        <button className="btn-ghost size-10">
          <Bell size={20} />
        </button>

        <button
          className="size-10 overflow-hidden rounded-full"
          onClick={() => setIsProfileOpen(!isProfileOpen)}
        >
          <img
            src={profileImg}
            alt="profile image"
            className="size-full object-cover"
          />
        </button>

        {isProfileOpen && (
          <div className="absolute right-0 top-14 w-40 rounded-lg border text-gray-900 dark:text-white border-slate-200 bg-white shadow-md dark:border-slate-700 dark:bg-slate-800 z-20">
            <Link to="/profile" className="w-full">
            <button className="w-full flex items-center gap-2 px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700">
              <User size={16} />
              <span>Profile</span>
            </button></Link>
            <Link to="/login" className="w-full">
            <button className="w-full flex items-center gap-2 px-4 py-2 hover:bg-slate-100 dark:hover:bg-slate-700">
              <LogOut size={16} />
              <span>Logout</span>
            </button>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

Header.propTypes = {
  collapsed: PropTypes.bool,
  setCollapsed: PropTypes.func,
};
