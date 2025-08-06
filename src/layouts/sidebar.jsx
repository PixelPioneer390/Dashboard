import { useState, forwardRef } from "react";
import { NavLink } from "react-router-dom";
import { navbarLinks } from "@/constants";
import logoLight from "@/assets/logo-light.svg";
import logoDark from "@/assets/logo-dark.svg";
import { cn } from "@/utils/cn";
import PropTypes from "prop-types";
import { ChevronDown, ChevronRight } from "lucide-react";

export const Sidebar = forwardRef(({ collapsed }, ref) => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const toggleDropdown = (title) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const isDropdownGroup = (title) =>
    ["Employees", "Campaigns", "Center"].includes(title);

  const isHiddenGroup = (title) => ["Dashboard", "Settings"].includes(title);

  return (
    <aside
      ref={ref}
      className={cn(
        "fixed z-[100] flex h-full w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-white transition-all dark:border-slate-700 dark:bg-slate-900",
        collapsed ? "md:w-[70px] md:items-center" : "md:w-[240px]",
        collapsed ? "max-md:-left-full" : "max-md:left-0"
      )}
    >
      <div className="flex gap-x-3 p-3">
        <img src={logoLight} alt="Logoipsum" className="dark:hidden" />
        <img src={logoDark} alt="Logoipsum" className="hidden dark:block" />
        {!collapsed && (
          <p className="text-lg font-medium text-slate-900 dark:text-slate-50">
            Mars BPO
          </p>
        )}
      </div>

      <div className="flex w-full flex-col gap-y-2 overflow-y-auto p-3 scrollbar-thin">
        {navbarLinks.map((group) => {
          const isDropdown = isDropdownGroup(group.title);
          const isHiddenTitle = isHiddenGroup(group.title);
          const isOpen = openDropdowns[group.title];

          return (
            <div
              key={group.title}
              className={cn(
                "flex flex-col gap-y-1",
                collapsed && "md:items-center"
              )}
            >
              {isDropdown && (
                <div
                  className={cn(
                    "flex items-center justify-between gap-2 cursor-pointer p-2 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800",
                    collapsed && "justify-center"
                  )}
                  onClick={() => toggleDropdown(group.title)}
                >
                  {!collapsed ? (
                    <>
                      <div className="flex items-center gap-2">
                        {group.icon && (
                          <group.icon
                            size={18}
                            className="text-slate-700 dark:text-slate-200"
                          />
                        )}
                        <span className="text-[15px] text-slate-800 dark:text-slate-200 font-medium">
                          {group.title}
                        </span>
                      </div>
                      {isOpen ? (
                        <ChevronDown
                          size={18}
                          className="text-slate-700 dark:text-slate-200"
                        />
                      ) : (
                        <ChevronRight
                          size={18}
                          className="text-slate-700 dark:text-slate-200"
                        />
                      )}
                    </>
                  ) : isOpen ? (
                    <ChevronDown
                      size={18}
                      className="text-slate-700 dark:text-slate-200"
                    />
                  ) : (
                    <ChevronRight
                      size={18}
                      className="text-slate-700 dark:text-slate-200"
                    />
                  )}
                </div>
              )}

              {(isDropdown ? isOpen : !isDropdown) &&
                group.links.map((link) => (
                  <NavLink
                    key={link.label}
                    to={link.path}
                    className={cn(
                      "sidebar-item",
                      collapsed && "md:w-[45px]",
                      isHiddenTitle && !isDropdown && "mt-0"
                    )}
                  >
                    <link.icon
                      size={22}
                      className="flex-shrink-0 text-slate-700 dark:text-slate-200"
                    />
                    {!collapsed && (
                      <p className="text-[15px] font-medium text-slate-800 dark:text-slate-200">
                        {link.label}
                      </p>
                    )}
                  </NavLink>
                ))}
            </div>
          );
        })}
      </div>
    </aside>
  );
});

Sidebar.displayName = "Sidebar";

Sidebar.propTypes = {
  collapsed: PropTypes.bool,
};
