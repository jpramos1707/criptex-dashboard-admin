
import { Users, Database, Shield } from "lucide-react";
import Layout from "@/components/dashboard/Layout";
import DashboardCard from "@/components/dashboard/DashboardCard";
import UsersTable from "@/components/dashboard/UsersTable";
import { mockUsers, dashboardStats } from "@/lib/mockData";

const Dashboard = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Welcome to the CriptexHub admin dashboard.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DashboardCard
            title="Total Users"
            value={dashboardStats.totalUsers}
            icon={<Users className="h-5 w-5" />}
            trend={{ value: 12, label: "vs last month", positive: true }}
          />
          <DashboardCard
            title="Active Users"
            value={dashboardStats.activeUsers}
            icon={<Shield className="h-5 w-5" />}
            trend={{ value: 8, label: "vs last month", positive: true }}
          />
          <DashboardCard
            title="Total Balance"
            value={`$${dashboardStats.totalBalance.toFixed(2)}`}
            icon={<Database className="h-5 w-5" />}
            trend={{ value: 3, label: "vs last month", positive: true }}
          />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Recent Users</h2>
          <UsersTable users={mockUsers.slice(0, 5)} />
          
          <div className="mt-4 text-center">
            <a 
              href="/users" 
              className="text-criptex-600 hover:text-criptex-700 text-sm font-medium"
            >
              View all users →
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
