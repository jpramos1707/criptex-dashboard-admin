
import Layout from "@/components/dashboard/Layout";
import UsersTable from "@/components/dashboard/UsersTable";
import { mockUsers } from "@/lib/mockData";

const Users = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Users</h1>
          <p className="text-muted-foreground mt-2">
            Manage and monitor all users in the CriptexHub platform.
          </p>
        </div>

        <UsersTable users={mockUsers} />
      </div>
    </Layout>
  );
};

export default Users;
