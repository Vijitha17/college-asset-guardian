
import React from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CreateUserForm = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-6">Create New User</h2>
      
      <form className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-2">
            <label className="text-sm font-medium">Full Name</label>
            <input
              type="text"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter full name"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter email"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Role</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="hod">HOD</SelectItem>
                <SelectItem value="staff">Staff</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">College</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select college" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="college1">Engineering College</SelectItem>
                <SelectItem value="college2">Arts College</SelectItem>
                <SelectItem value="college3">Science College</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Department</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cs">Computer Science</SelectItem>
                <SelectItem value="it">Information Technology</SelectItem>
                <SelectItem value="eee">Electrical Engineering</SelectItem>
                <SelectItem value="ece">Electronics Engineering</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md"
              placeholder="Enter password"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Additional Notes</label>
          <textarea
            className="w-full px-3 py-2 border rounded-md min-h-[100px]"
            placeholder="Enter any additional notes"
          />
        </div>

        <div className="flex justify-end space-x-2">
          <Button variant="outline">Cancel</Button>
          <Button type="submit">Create User</Button>
        </div>
      </form>
    </div>
  );
};

export default CreateUserForm;
