
import React, { useState } from "react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const UserForm = ({ onCancel }) => {
  const [selectedRole, setSelectedRole] = useState("");
  const [showCollegeField, setShowCollegeField] = useState(false);
  const [showDepartmentField, setShowDepartmentField] = useState(false);
  
  const handleRoleChange = (value) => {
    setSelectedRole(value);
    
    // Management roles don't need college or department
    if (value === "management_admin" || value === "management_people") {
      setShowCollegeField(false);
      setShowDepartmentField(false);
    } 
    // Principal needs only college
    else if (value === "principal") {
      setShowCollegeField(true);
      setShowDepartmentField(false);
    } 
    // HOD and department_admin need both college and department
    else {
      setShowCollegeField(true);
      setShowDepartmentField(true);
    }
  };
  
  return (
    <form className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Full Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter full name"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter email address"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-3 py-2 border rounded-md"
            placeholder="Enter password"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="role" className="text-sm font-medium">
            Role
          </label>
          <Select onValueChange={handleRoleChange}>
            <SelectTrigger id="role">
              <SelectValue placeholder="Select role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="management_admin">Management Admin</SelectItem>
              <SelectItem value="management_people">Management Staff</SelectItem>
              <SelectItem value="principal">Principal</SelectItem>
              <SelectItem value="hod">Head of Department</SelectItem>
              <SelectItem value="department_admin">Department Admin</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {showCollegeField && (
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
        )}
        
        {showDepartmentField && (
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
        )}
      </div>
      
      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Save User</Button>
      </div>
    </form>
  );
};

export default UserForm;
