
import React, { useState } from "react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Plus, Minus, Trash } from "lucide-react";

const RequirementForm = ({ onCancel }) => {
  const [items, setItems] = useState([
    { name: "", category: "electronics", quantity: 1 }
  ]);
  
  const handleAddItem = () => {
    setItems([...items, { name: "", category: "electronics", quantity: 1 }]);
  };
  
  const handleRemoveItem = (index) => {
    if (items.length === 1) return;
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };
  
  const handleItemChange = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };
  
  return (
    <form className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="college" className="text-sm font-medium">
            College
          </label>
          <Select>
            <SelectTrigger id="college">
              <SelectValue placeholder="Select college" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="engineering">Engineering College</SelectItem>
              <SelectItem value="arts">Arts College</SelectItem>
              <SelectItem value="science">Science College</SelectItem>
              <SelectItem value="commerce">Commerce College</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <label htmlFor="department" className="text-sm font-medium">
            Department
          </label>
          <Select>
            <SelectTrigger id="department">
              <SelectValue placeholder="Select department" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="cs">Computer Science</SelectItem>
              <SelectItem value="it">Information Technology</SelectItem>
              <SelectItem value="eee">Electrical Engineering</SelectItem>
              <SelectItem value="mech">Mechanical Engineering</SelectItem>
              <SelectItem value="civil">Civil Engineering</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-sm font-medium">Requirement Items</label>
          <Button type="button" size="sm" onClick={handleAddItem}>
            <Plus className="h-4 w-4 mr-2" />
            Add Item
          </Button>
        </div>
        
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex items-end gap-4 p-4 border rounded-md bg-gray-50">
              <div className="space-y-2 flex-1">
                <label className="text-sm font-medium">Item Name</label>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => handleItemChange(index, "name", e.target.value)}
                  className="w-full px-3 py-2 border rounded-md"
                  placeholder="Enter item name"
                />
              </div>
              
              <div className="space-y-2 w-36">
                <label className="text-sm font-medium">Category</label>
                <Select 
                  value={item.category}
                  onValueChange={(value) => handleItemChange(index, "category", value)}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="furniture">Furniture</SelectItem>
                    <SelectItem value="stationery">Stationery</SelectItem>
                    <SelectItem value="equipment">Equipment</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2 w-40">
                <label className="text-sm font-medium">Quantity</label>
                <div className="flex items-center">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => {
                      if (item.quantity > 1) {
                        handleItemChange(index, "quantity", item.quantity - 1);
                      }
                    }}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) => handleItemChange(index, "quantity", parseInt(e.target.value) || 1)}
                    className="w-full text-center mx-2 px-3 py-2 border rounded-md"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => handleItemChange(index, "quantity", item.quantity + 1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="text-red-500"
                onClick={() => handleRemoveItem(index)}
                disabled={items.length === 1}
              >
                <Trash className="h-4 w-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
      
      <div className="space-y-2">
        <label htmlFor="notes" className="text-sm font-medium">
          Additional Notes
        </label>
        <textarea
          id="notes"
          rows={3}
          className="w-full px-3 py-2 border rounded-md"
          placeholder="Enter any additional notes or details..."
        ></textarea>
      </div>
      
      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Submit Requirement</Button>
      </div>
    </form>
  );
};

export default RequirementForm;
