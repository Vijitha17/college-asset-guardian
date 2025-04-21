import {
  LayoutDashboard,
  PackageOpen,
  Box,
  Truck,
  ShoppingCart,
  FileText,
  Users,
  DollarSign,
  History,
  ArrowDown,
  List
} from "lucide-react";

export const menuByRole = {
  management_people: [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard
    },
    {
      title: "Requirement",
      path: "/requirement/current",
      icon: PackageOpen
    },
    {
      title: "Stock Management",
      path: "/stock",
      icon: Box
    },
    {
      title: "Vendor Management",
      path: "/vendor/service",
      icon: Truck
    },
    {
      title: "Purchase",
      path: "/purchase/approve",
      icon: ShoppingCart
    },
    {
      title: "User Management",
      path: "/users/list",
      icon: Users
    },
    {
      title: "Expenditure",
      path: "/expenditure/purchase",
      icon: DollarSign
    },
    {
      title: "Reports",
      path: "/reports",
      icon: FileText
    }
  ],

  management_admin: [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard
    },
    {
      title: "Requirement",
      path: "/requirement/current",
      icon: PackageOpen
    },
    {
      title: "Stock Management",
      path: "/stock",
      icon: Box
    },
    {
      title: "Vendor Management",
      path: "/vendor/service",
      icon: Truck
    },
    {
      title: "Purchase",
      path: "/purchase/create-request",
      icon: ShoppingCart
    },
    {
      title: "User Management",
      path: "/users/list",
      icon: Users
    },
    {
      title: "Expenditure",
      path: "/expenditure/add",
      icon: DollarSign
    },
    {
      title: "Request & Approval",
      path: "/request/history",
      icon: History
    },
    {
      title: "Reports",
      path: "/reports",
      icon: FileText
    }
  ],
  
  principal: [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard
    },
    {
      title: "Requirement",
      path: "/requirement/create",
      icon: PackageOpen
    },
    {
      title: "Stock Management",
      path: "/stock/allocated",
      icon: Box
    },
    // Added Stock Movement (main menu link, not dropdown)
    {
      title: "Stock Movement",
      path: "/movement",
      icon: ArrowDown
    },
    {
      title: "User Management",
      path: "/users/list",
      icon: Users
    },
    {
      title: "Request & Approval",
      path: "/request/create",
      icon: History
    },
    {
      title: "Reports",
      path: "/reports",
      icon: FileText
    }
  ],
  
  hod: [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard
    },
    {
      title: "Requirement",
      path: "/requirement/create",
      icon: PackageOpen
    },
    {
      title: "Stock Management",
      path: "/stock/allocated",
      icon: Box
    },
    // Added Stock Movement (main menu link, not dropdown)
    {
      title: "Stock Movement",
      path: "/movement",
      icon: ArrowDown
    },
    {
      title: "User Management",
      path: "/users/list",
      icon: Users
    },
    {
      title: "Request & Approval",
      path: "/request/create",
      icon: History
    },
    {
      title: "Reports",
      path: "/reports",
      icon: FileText
    }
  ],
  
  department_admin: [
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: LayoutDashboard
    },
    {
      title: "Requirement",
      path: "/requirement/create",
      icon: PackageOpen
    },
    {
      title: "Stock Management",
      path: "/stock/allocated",
      icon: Box
    },
    // Added Stock Movement (main menu link, not dropdown)
    {
      title: "Stock Movement",
      path: "/movement",
      icon: ArrowDown
    },
    {
      title: "User Management",
      path: "/users/list",
      icon: Users
    },
    {
      title: "Request",
      path: "/request/create",
      icon: History
    },
    {
      title: "Reports",
      path: "/reports",
      icon: FileText
    }
  ]
};
