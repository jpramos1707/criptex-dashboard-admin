
import Layout from "@/components/dashboard/Layout";
import UsersTable from "@/components/dashboard/UsersTable";
import { mockUsers } from "@/lib/mockData";
import { Users as UsersIcon, Search, Filter } from "lucide-react";

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
          
          <div className="flex space-x-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search users..."
                className="pl-10 pr-4 py-2 border border-gray-700 bg-gray-800 rounded-lg text-sm focus:ring-criptex-500 focus:border-criptex-500"
              />
            </div>
            
            <button className="inline-flex items-center px-4 py-2 border border-gray-700 bg-gray-800 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </button>
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
            title="Total Balance" 
            value={`$${mockUsers.reduce((acc, user) => acc + user.balance, 0).toFixed(2)}`}
            textColor="text-criptex-500"
          />
        </div>

        <UsersTable users={mockUsers} />
      </div>
    </Layout>
  );
};

// Let's import DashboardCard at the top
import DashboardCard from "@/components/dashboard/DashboardCard";

export default Users;
