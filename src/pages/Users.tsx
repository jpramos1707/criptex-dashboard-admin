
import Layout from "@/components/dashboard/Layout";
import UsersTable from "@/components/dashboard/UsersTable";
import { mockUsers } from "@/lib/mockData";
import { Users as UsersIcon } from "lucide-react";
import DashboardCard from "@/components/dashboard/DashboardCard";
import { useState } from "react";
import { User } from "@/lib/types";
import { useToast } from "@/hooks/use-toast";

const Users = () => {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const { toast } = useToast();

  const handleStatusChange = (userId: string, newStatus: 'active' | 'inactive') => {
    setUsers(prevUsers => 
      prevUsers.map(user => 
        user.id === userId ? { ...user, status: newStatus } : user
      )
    );
  };

  const handleSaveChanges = () => {
    // In a real app, this would send the updated data to an API
    toast({
      title: "Changes saved",
      description: "All user status changes have been saved successfully.",
    });
  };

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center">
              <UsersIcon className="h-8 w-8 mr-3 text-criptex-500" />
              Users
            </h1>
          </div>
          <button 
            onClick={handleSaveChanges}
            className="px-4 py-2 bg-criptex-500 text-white rounded-md hover:bg-criptex-600 transition-colors"
          >
            Save Changes
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <DashboardCard 
            title="Total Users" 
            value={users.length}
            textColor="text-criptex-500"
          />
          <DashboardCard 
            title="Active Users" 
            value={users.filter(user => user.status === 'active').length}
            textColor="text-green-500"
          />
          <DashboardCard 
            title="Inactive Users" 
            value={users.filter(user => user.status === 'inactive').length}
            textColor="text-yellow-500"
          />
        </div>

        <UsersTable 
          users={users} 
          onStatusChange={handleStatusChange}
        />
      </div>
    </Layout>
  );
};

export default Users;
