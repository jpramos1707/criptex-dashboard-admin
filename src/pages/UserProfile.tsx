
import { useParams, Navigate } from "react-router-dom";
import Layout from "@/components/dashboard/Layout";
import UserDetail from "@/components/dashboard/UserDetail";
import { mockUsers } from "@/lib/mockData";

const UserProfile = () => {
  const { id } = useParams<{ id: string }>();
  const user = mockUsers.find((user) => user.id === id);

  if (!user) {
    return <Navigate to="/users" replace />;
  }

  return (
    <Layout>
      <UserDetail user={user} />
    </Layout>
  );
};

export default UserProfile;
