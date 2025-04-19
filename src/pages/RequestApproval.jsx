
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  ClipboardList,
  History,
  Plus
} from "lucide-react";
import RequestList from "@/components/requests/RequestList";
import ApprovalList from "@/components/requests/ApprovalList";
import ApprovalForm from "@/components/approval/ApprovalForm";
import ApprovalDetail from "@/components/approval/ApprovalDetail";

const RequestApproval = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isCreatingRequest, setIsCreatingRequest] = useState(false);
  const [selectedApproval, setSelectedApproval] = useState(null);
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Sample data for demo
  const sampleApproval = {
    id: "REQ001",
    type: "Purchase",
    department: "Computer Science",
    description: "New Computers for the lab to replace the old equipment. Urgent need for the next semester.",
    requestedBy: "John Doe",
    date: "2025-04-15",
    status: "pending",
    items: "10 x Desktop Computers",
    amount: 15000,
    vendor: "TechSupplies Ltd."
  };
  
  const handleApprove = () => {
    // In a real app, you would update API and state
    console.log("Approving request:", selectedApproval.id);
    // Demo: just go back to the list view
    setSelectedApproval(null);
  };
  
  const handleReject = () => {
    // In a real app, you would update API and state
    console.log("Rejecting request:", selectedApproval.id);
    // Demo: just go back to the list view
    setSelectedApproval(null);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      
      <div className="flex flex-1">
        <Sidebar isOpen={sidebarOpen} />
        
        <main className={`flex-1 p-6 md:p-8 transition-all duration-300 ${sidebarOpen ? "md:ml-64" : "md:ml-20"}`}>
          {selectedApproval ? (
            <ApprovalDetail 
              approval={selectedApproval} 
              onBack={() => setSelectedApproval(null)}
              onApprove={handleApprove}
              onReject={handleReject}
            />
          ) : (
            <>
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
                <h1 className="text-2xl font-bold mb-4 md:mb-0">Requests & Approvals</h1>
                
                <div className="flex flex-col md:flex-row w-full md:w-auto space-y-2 md:space-y-0 md:space-x-2">
                  {!isCreatingRequest && (
                    <>
                      <div className="relative w-full md:w-64">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <input 
                          type="text" 
                          placeholder="Search requests..." 
                          className="pl-8 pr-4 py-2 w-full rounded-md border border-input bg-background"
                        />
                      </div>
                      
                      <Button onClick={() => setIsCreatingRequest(true)}>
                        <Plus className="h-4 w-4 mr-2" />
                        New Request
                      </Button>
                    </>
                  )}
                  
                  {isCreatingRequest && (
                    <Button variant="outline" onClick={() => setIsCreatingRequest(false)}>
                      Cancel
                    </Button>
                  )}
                </div>
              </div>
              
              {isCreatingRequest ? (
                <ApprovalForm onCancel={() => setIsCreatingRequest(false)} />
              ) : (
                <Tabs defaultValue="requests" className="space-y-4">
                  <TabsList>
                    <TabsTrigger value="requests" className="flex items-center">
                      <ClipboardList className="h-4 w-4 mr-2" />
                      Requests
                    </TabsTrigger>
                    <TabsTrigger value="approvals" className="flex items-center">
                      <History className="h-4 w-4 mr-2" />
                      Approvals
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="requests" className="space-y-4">
                    <RequestList onView={() => setSelectedApproval(sampleApproval)} />
                  </TabsContent>
                  
                  <TabsContent value="approvals" className="space-y-4">
                    <ApprovalList onView={() => setSelectedApproval(sampleApproval)} />
                  </TabsContent>
                </Tabs>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
};

export default RequestApproval;
