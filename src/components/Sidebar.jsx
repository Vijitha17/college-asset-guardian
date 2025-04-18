
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { menuByRole } from "@/data/menuData";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Sidebar = ({ isOpen }) => {
  const location = useLocation();
  // For demo purposes, using management_admin role
  const role = "management_admin";
  const menuItems = menuByRole[role] || [];
  
  const [openMenus, setOpenMenus] = useState({});
  
  const toggleSubmenu = (title) => {
    setOpenMenus(prev => ({
      ...prev,
      [title]: !prev[title]
    }));
  };
  
  const isActive = (path) => {
    return location.pathname === path;
  };
  
  return (
    <aside
      className={cn(
        "bg-sidebar fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r border-sidebar-border transition-transform duration-300 ease-in-out",
        isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0 md:w-20"
      )}
    >
      <div className="flex h-16 items-center justify-center border-b border-sidebar-border">
        <h2 className={cn(
          "text-lg font-bold text-sidebar-foreground transition-all",
          isOpen ? "block" : "hidden md:block"
        )}>
          {isOpen ? "College IMS" : "IMS"}
        </h2>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-2 space-y-1">
          {menuItems.map((item) => (
            <div key={item.title} className="py-1">
              {item.submenu ? (
                <>
                  <button
                    onClick={() => toggleSubmenu(item.title)}
                    className={cn(
                      "group flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                    )}
                  >
                    {item.icon && (
                      <item.icon className={cn(
                        "mr-3 h-5 w-5 flex-shrink-0",
                        isOpen ? "" : "mx-auto"
                      )} />
                    )}
                    {(isOpen || !item.icon) && (
                      <>
                        <span className="flex-1 truncate">{item.title}</span>
                        <ChevronDown
                          className={cn(
                            "ml-auto h-4 w-4 shrink-0 transition-transform",
                            openMenus[item.title] ? "rotate-180" : ""
                          )}
                        />
                      </>
                    )}
                  </button>
                  
                  <div
                    className={cn(
                      "mt-1 space-y-1 pl-10",
                      openMenus[item.title] && isOpen ? "block" : "hidden"
                    )}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.path}
                        className={cn(
                          "block px-3 py-2 text-sm font-medium rounded-md transition-colors",
                          isActive(subItem.path)
                            ? "bg-sidebar-primary text-sidebar-primary-foreground"
                            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                        )}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.path}
                  className={cn(
                    "group flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive(item.path)
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  )}
                >
                  {item.icon && (
                    <item.icon className={cn(
                      "mr-3 h-5 w-5 flex-shrink-0",
                      isOpen ? "" : "mx-auto"
                    )} />
                  )}
                  {(isOpen || !item.icon) && (
                    <span className="truncate">{item.title}</span>
                  )}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
