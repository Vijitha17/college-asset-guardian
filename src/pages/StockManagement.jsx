
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Plus, Send } from "lucide-react";
import StockList from "@/components/stock/StockList";

const StockManagement = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleAddStock = () => {
    navigate('/stock/add');
  };

  const handleSendToService = () => {
    navigate('/stock/service');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} />
        
        <main className={`flex-1 p-6 md:p-8 transition-all duration-300 ${sidebarOpen ? "md:ml-64" : "md:ml-20"}`}>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
            <h1 className="text-2xl font-bold mb-4 md:mb-0">Stock Management</h1>
            
            <div className="flex flex-col md:flex-row w-full md:w-auto space-y-2 md:space-y-0 md:space-x-2">
              <Button onClick={handleAddStock}>
                <Plus className="h-4 w-4 mr-2" />
                Add Stock
              </Button>
              <Button onClick={handleSendToService}>
                <Send className="h-4 w-4 mr-2" />
                Send to Service
              </Button>
            </div>
          </div>
          
          <StockList />
        </main>
      </div>
    </div>
  );
};

export default StockManagement;
