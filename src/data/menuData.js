import {
  LayoutDashboard,
  PackageOpen,
  Box,
  Truck,
  ShoppingCart,
  FileText,
  Users,
  DollarSign,
  CheckCircle,
  History,
  Settings,
  Wrench,
  TrendingUp,
  TrendingDown
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
      icon: PackageOpen,
      submenu: [
        {
          title: "Current Requirement",
          path: "/requirement/current"
        },
        {
          title: "Requirement History",
          path: "/requirement/history"
        }
      ]
    },
    {
      title: "Stock Management",
      icon: Box,
      submenu: [
        {
          title: "Current Stock",
          path: "/stock/current"
        },
        {
          title: "Allocated Stock",
          path: "/stock/allocated"
        },
        {
          title: "Stock in Service",
          path: "/stock/in-service"
        }
      ]
    },
    {
      title: "Vendor Management",
      icon: Truck,
      submenu: [
        {
          title: "Service Vendor",
          path: "/vendor/service"
        },
        {
          title: "Product Vendor",
          path: "/vendor/product"
        }
      ]
    },
    {
      title: "Purchase",
      icon: ShoppingCart,
      submenu: [
        {
          title: "Approve Purchase",
          path: "/purchase/approve"
        },
        {
          title: "Approved Purchase",
          path: "/purchase/approved"
        },
        {
          title: "Purchased List",
          path: "/purchase/list"
        }
      ]
    },
    {
      title: "User Management",
      icon: Users,
      submenu: [
        {
          title: "User List",
          path: "/users/list"
        }
      ]
    },
    {
      title: "Expenditure",
      icon: DollarSign,
      submenu: [
        {
          title: "Purchase Expenditure",
          path: "/expenditure/purchase"
        },
        {
          title: "Service Expenditure",
          path: "/expenditure/service"
        }
      ]
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
      icon: PackageOpen,
      submenu: [
        {
          title: "Create Requirement",
          path: "/requirement/create"
        },
        {
          title: "Current Requirement",
          path: "/requirement/current"
        },
        {
          title: "Requirement History",
          path: "/requirement/history"
        }
      ]
    },
    {
      title: "Stock Management",
      icon: Box,
      path: "/stock",
      submenu: [
        {
          title: "Current Stock",
          path: "/stock"
        },
        {
          title: "Send to Service",
          path: "/stock/service"
        }
      ]
    },
    {
      title: "Vendor Management",
      icon: Truck,
      path: "/vendor",
      submenu: [
        {
          title: "Service Vendor",
          path: "/vendor/service"
        },
        {
          title: "Product Vendor",
          path: "/vendor/product"
        }
      ]
    },
    {
      title: "Purchase",
      icon: ShoppingCart,
      path: "/purchase",
      submenu: [
        {
          title: "Create Purchase Request",
          path: "/purchase/create-request"
        },
        {
          title: "Create Purchase",
          path: "/purchase/create"
        },
        {
          title: "Purchase Request Status",
          path: "/purchase/request-status"
        },
        {
          title: "Purchased List",
          path: "/purchase/list"
        },
        {
          title: "Manage Purchase",
          path: "/purchase/manage"
        }
      ]
    },
    {
      title: "User Management",
      icon: Users,
      path: "/users",
      submenu: [
        {
          title: "Create User",
          path: "/users/create"
        },
        {
          title: "User List",
          path: "/users/list"
        },
        {
          title: "Manage Users",
          path: "/users/manage"
        },
        {
          title: "College",
          path: "/users/college"
        },
        {
          title: "Departments",
          path: "/users/departments"
        }
      ]
    },
    {
      title: "Expenditure",
      icon: DollarSign,
      path: "/expenditure",
      submenu: [
        {
          title: "Purchase Expenditure",
          path: "/expenditure/purchase"
        },
        {
          title: "Service Expenditure",
          path: "/expenditure/service"
        }
      ]
    },
    {
      title: "Request & Approval",
      icon: History,
      path: "/request",
      submenu: [
        {
          title: "Requests",
          path: "/request/list"
        },
        {
          title: "Approvals",
          path: "/request/approval"
        },
        {
          title: "Request History",
          path: "/request/history"
        },
        {
          title: "Approval History",
          path: "/request/approval-history"
        }
      ]
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
      icon: PackageOpen,
      submenu: [
        {
          title: "Create Requirement",
          path: "/requirement/create"
        },
        {
          title: "Current Requirement",
          path: "/requirement/current"
        },
        {
          title: "Requirement History",
          path: "/requirement/history"
        }
      ]
    },
    {
      title: "Stock Management",
      icon: Box,
      submenu: [
        {
          title: "Allocated Stock",
          path: "/stock/allocated"
        }
      ]
    },
    {
      title: "User Management",
      icon: Users,
      submenu: [
        {
          title: "User List",
          path: "/users/list"
        }
      ]
    },
    {
      title: "Request",
      icon: History,
      submenu: [
        {
          title: "Create Request",
          path: "/request/create"
        },
        {
          title: "Request History",
          path: "/request/history"
        }
      ]
    },
    {
      title: "Approval",
      icon: CheckCircle,
      submenu: [
        {
          title: "Approve Request",
          path: "/approval/request"
        }
      ]
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
      icon: PackageOpen,
      submenu: [
        {
          title: "Create Requirement",
          path: "/requirement/create"
        },
        {
          title: "Current Requirement",
          path: "/requirement/current"
        },
        {
          title: "Requirement History",
          path: "/requirement/history"
        }
      ]
    },
    {
      title: "Stock Management",
      icon: Box,
      submenu: [
        {
          title: "Allocated Stock",
          path: "/stock/allocated"
        }
      ]
    },
    {
      title: "User Management",
      icon: Users,
      submenu: [
        {
          title: "User List",
          path: "/users/list"
        }
      ]
    },
    {
      title: "Request",
      icon: History,
      submenu: [
        {
          title: "Create Request",
          path: "/request/create"
        },
        {
          title: "Request History",
          path: "/request/history"
        }
      ]
    },
    {
      title: "Approval",
      icon: CheckCircle,
      submenu: [
        {
          title: "Approve Request",
          path: "/approval/request"
        }
      ]
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
      icon: PackageOpen,
      submenu: [
        {
          title: "Create Requirement",
          path: "/requirement/create"
        },
        {
          title: "Current Requirement",
          path: "/requirement/current"
        },
        {
          title: "Requirement History",
          path: "/requirement/history"
        }
      ]
    },
    {
      title: "Stock Management",
      icon: Box,
      submenu: [
        {
          title: "Allocated Stock",
          path: "/stock/allocated"
        }
      ]
    },
    {
      title: "User Management",
      icon: Users,
      submenu: [
        {
          title: "User List",
          path: "/users/list"
        }
      ]
    },
    {
      title: "Request",
      icon: History,
      submenu: [
        {
          title: "Create Request",
          path: "/request/create"
        },
        {
          title: "Request History",
          path: "/request/history"
        }
      ]
    },
    {
      title: "Reports",
      path: "/reports",
      icon: FileText
    }
  ]
};
