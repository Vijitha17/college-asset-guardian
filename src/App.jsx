import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Reports from "./pages/Reports";
import UserManagement from "./pages/UserManagement";
import Requirements from "./pages/Requirements";
import StockManagement from "./pages/StockManagement";
import VendorManagement from "./pages/VendorManagement";
import PurchaseManagement from "./pages/PurchaseManagement";
import ExpenditureManagement from "./pages/ExpenditureManagement";
import RequestApproval from "./pages/RequestApproval";
import CreateUserForm from "./components/users/CreateUserForm";
import EditStockForm from "./components/stock/EditStockForm";
import AllocateStockForm from "./components/stock/AllocateStockForm";
import RequestList from "./components/requests/RequestList";
import RequestHistory from "./components/requests/RequestHistory";
import ApprovalHistory from "./components/requests/ApprovalHistory";
import StockView from "./pages/StockView";
import VendorView from "./pages/VendorView";
import RequestInventory from "./components/movement/RequestInventory";
import RequestStatus from "./components/movement/RequestStatus";
import IncomingRequests from "./components/movement/IncomingRequests";
import HandoverManagement from "./components/movement/HandoverManagement";
import ReturnsManagement from "./components/movement/ReturnsManagement";
import MovementHistory from "./components/movement/MovementHistory";
import AddStockForm from "./components/stock/AddStockForm";
import ServiceStockForm from "./components/stock/ServiceStockForm";
import CreatePurchaseRequest from "./components/purchase/CreatePurchaseRequest";
import AddCollegeForm from "./components/users/AddCollegeForm";
import AddDepartmentForm from "./components/users/AddDepartmentForm";
import StockMovement from "./pages/StockMovement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/reports" element={<Reports />} />
          
          {/* User management routes */}
          <Route path="/users" element={<UserManagement />} />
          <Route path="/users/create" element={<CreateUserForm />} />
          <Route path="/users/add-college" element={<AddCollegeForm />} />
          <Route path="/users/add-department" element={<AddDepartmentForm />} />
          
          <Route path="/requirement/*" element={<Requirements />} />
          <Route path="/stock" element={<StockManagement />} />
          <Route path="/stock/add" element={<AddStockForm />} />
          <Route path="/stock/service" element={<ServiceStockForm />} />
          <Route path="/stock/view/:id" element={<StockView />} />
          <Route path="/stock/edit/:id" element={<EditStockForm />} />
          <Route path="/stock/allocate/:id" element={<AllocateStockForm />} />
          
          {/* Stock movement routes */}
          <Route path="/movement" element={<StockMovement />} />
          <Route path="/movement/request-inventory" element={<RequestInventory />} />
          <Route path="/movement/request-status" element={<RequestStatus />} />
          <Route path="/movement/incoming-requests" element={<IncomingRequests />} />
          <Route path="/movement/handover" element={<HandoverManagement />} />
          <Route path="/movement/returns" element={<ReturnsManagement />} />
          <Route path="/movement/history" element={<MovementHistory />} />
          
          <Route path="/vendor/*" element={<VendorManagement />} />
          <Route path="/vendor/view/:id" element={<VendorView />} />
          <Route path="/purchase/*" element={<PurchaseManagement />} />
          <Route path="/purchase/create-request" element={<CreatePurchaseRequest />} />
          <Route path="/expenditure/*" element={<ExpenditureManagement />} />
          <Route path="/request/list" element={<RequestList />} />
          <Route path="/request/approval" element={<RequestApproval />} />
          <Route path="/request/history" element={<RequestHistory />} />
          <Route path="/request/approval-history" element={<ApprovalHistory />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
