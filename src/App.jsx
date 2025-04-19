
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
import AddStockForm from "./components/stock/AddStockForm";
import ServiceStockForm from "./components/stock/ServiceStockForm";
import CreatePurchaseRequest from "./components/purchase/CreatePurchaseRequest";

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
          <Route path="/users/*" element={<UserManagement />} />
          <Route path="/users/create" element={<CreateUserForm />} />
          <Route path="/requirement/*" element={<Requirements />} />
          <Route path="/stock" element={<StockManagement />} />
          <Route path="/stock/add" element={<AddStockForm />} />
          <Route path="/stock/edit/:id" element={<EditStockForm />} />
          <Route path="/stock/allocate/:id" element={<AllocateStockForm />} />
          <Route path="/stock/service" element={<ServiceStockForm />} />
          <Route path="/stock/service/:id" element={<ServiceStockForm />} />
          <Route path="/vendor/*" element={<VendorManagement />} />
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
