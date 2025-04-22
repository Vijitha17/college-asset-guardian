
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Plus, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import PurchaseList from "@/components/purchase/PurchaseList";

const PurchaseManagement = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleCreatePurchase = () => {
    navigate('/purchase');
  };

  const handleCreateRequest = () => {
    navigate('/purchase/create-request');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} />
        
        <main className={`flex-1 p-6 md:p-8 transition-all duration-300 ${sidebarOpen ? "md:ml-64" : "md:ml-20"}`}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <h1 className="text-2xl font-bold mb-4 md:mb-0">Purchase Management</h1>
            
            <div className="flex flex-col md:flex-row w-full md:w-auto space-y-2 md:space-y-0 md:space-x-2">
              <Button onClick={handleCreatePurchase}>
                <Plus className="h-4 w-4 mr-2" />
                Create Purchase
              </Button>
              <Button onClick={handleCreateRequest}>
                <FileText className="h-4 w-4 mr-2" />
                Create Purchase Request
              </Button>
            </div>
          </div>
          
          <PurchaseList />
        </main>
      </div>
    </div>
  );
};

export default PurchaseManagement;
