
import Layout from "@/components/dashboard/Layout";
import UsersTable from "@/components/dashboard/UsersTable";
import { mockUsers } from "@/lib/mockData";
import { Users as UsersIcon } from "lucide-react";
import DashboardCard from "@/components/dashboard/DashboardCard";

const Users = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight flex items-center">
              <UsersIcon className="h-8 w-8 mr-3 text-criptex-500" />
              Users
            </h1>
            <p className="text-muted-foreground mt-2">
              Manage and monitor all users in the CriptexHub platform.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <DashboardCard 
            title="Total Users" 
            value={mockUsers.length}
            textColor="text-criptex-500"
          />
          <DashboardCard 
            title="Active Users" 
            value={mockUsers.filter(user => user.status === 'active').length}
            textColor="text-green-500"
          />
          <DashboardCard 
            title="Inactive Users" 
            value={mockUsers.filter(user => user.status === 'inactive').length}
            textColor="text-yellow-500"
          />
        </div>

        <UsersTable users={mockUsers} />
      </div>
    </Layout>
  );
};

export default Users;
