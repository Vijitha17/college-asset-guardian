
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const ServiceStockForm = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedVendor, setSelectedVendor] = useState("");

  // Sample items data
  const stockItems = [
    { id: "STK001", name: "Desktop Computer", category: "electronics" },
    { id: "STK002", name: "Office Chair", category: "furniture" },
    { id: "STK003", name: "Printer", category: "electronics" },
    { id: "STK004", name: "Whiteboard", category: "equipment" },
  ];

  // Sample vendors data
  const vendors = [
    { id: "VND001", name: "TechRepair Services" },
    { id: "VND002", name: "Office Equipment Repairs" },
    { id: "VND003", name: "Electronics Fix Ltd." },
    { id: "VND004", name: "General Maintenance Co." },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-6">Send Stock to Service</h2>
      
      <form className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">Item</label>
            <Select onValueChange={setSelectedItem}>
              <SelectTrigger>
                <SelectValue placeholder="Select item" />
              </SelectTrigger>
              <SelectContent>
                {stockItems.map(item => (
                  <SelectItem key={item.id} value={item.id}>
                    {item.name} ({item.id})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Quantity</label>
            <input
              type="number"
              min="1"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter quantity"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Service Vendor</label>
            <Select onValueChange={setSelectedVendor}>
              <SelectTrigger>
                <SelectValue placeholder="Select vendor" />
              </SelectTrigger>
              <SelectContent>
                {vendors.map(vendor => (
                  <SelectItem key={vendor.id} value={vendor.id}>
                    {vendor.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Service Type</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select service type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="repair">Repair</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
                <SelectItem value="calibration">Calibration</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Expected Service Date</label>
            <input
              type="date"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Expected Return Date</label>
            <input
              type="date"
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Service Charges (Est.)</label>
            <input
              type="number"
              min="0"
              step="0.01"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter estimated cost"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Priority</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Issue Description</label>
          <textarea
            className="w-full px-3 py-2 border rounded-md min-h-[100px]"
            placeholder="Describe the issue or service needed"
          />
        </div>

        <div className="flex justify-end space-x-2">
          <Button variant="outline">Cancel</Button>
          <Button type="submit">Submit Service Request</Button>
        </div>
      </form>
    </div>
  );
};

export default ServiceStockForm;
