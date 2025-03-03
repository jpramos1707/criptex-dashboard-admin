
import { useParams, Navigate, Link } from "react-router-dom";
import Layout from "@/components/dashboard/Layout";
import UserDetail from "@/components/dashboard/UserDetail";
import { mockUsers } from "@/lib/mockData";
import { ChevronLeft, User } from "lucide-react";

const UserProfile = () => {
  const { id } = useParams<{ id: string }>();
  const user = mockUsers.find((user) => user.id === id);

  if (!user) {
    return <Navigate to="/users" replace />;
  }

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <Link 
            to="/users" 
            className="inline-flex items-center text-sm text-criptex-500 hover:text-criptex-400 mb-4"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Back to Users
          </Link>
          
          <h1 className="text-3xl font-bold tracking-tight flex items-center">
            <User className="h-8 w-8 mr-3 text-criptex-500" />
            User Profile
          </h1>
          <p className="text-muted-foreground mt-2">
            Viewing detailed information for user: {user.name}
          </p>
        </div>

        <UserDetail user={user} />
      </div>
    </Layout>
  );
};

export default UserProfile;
