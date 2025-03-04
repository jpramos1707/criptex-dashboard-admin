
import { User } from "@/lib/types";
import StatusBadge from "./StatusBadge";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

interface UserDetailProps {
  user: User;
}

export default function UserDetail({ user }: UserDetailProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="animate-fade-in">
      <div className="flex items-center mb-6">
        <Link
          to="/"
          className="mr-3 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-2xl font-bold">User Details</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-semibold">{user.name}</h2>
                  <p className="text-sm text-muted-foreground mt-1">
                    {user.user} • {user.code}
                  </p>
                </div>
                <StatusBadge status={user.status} />
              </div>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">
                    User ID
                  </h3>
                  <p>{user.id}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">
                    Code
                  </h3>
                  <p>{user.code}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">
                    Name
                  </h3>
                  <p>{user.name}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">
                    Username
                  </h3>
                  <p>{user.user}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">
                    Email
                  </h3>
                  <p>{user.email}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">
                    Telephone
                  </h3>
                  <p>{user.telephone}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">
                    Password
                  </h3>
                  <p>{user.password}</p>
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">
                    Created At
                  </h3>
                  <p>{formatDate(user.created_at)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-lg border bg-card shadow-sm overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-lg font-semibold">Balance</h2>
            </div>
            <div className="p-6">
              <div className="text-3xl font-bold text-center mb-4">
                ${user.balance.toFixed(2)}
              </div>
              <div className="bg-muted rounded-md p-4">
                <h3 className="text-sm font-medium mb-2">Status</h3>
                <StatusBadge status={user.status} />

                <h3 className="text-sm font-medium mt-4 mb-2">Account Age</h3>
                <p className="text-sm">
                  {Math.floor(
                    (new Date().getTime() -
                      new Date(user.created_at).getTime()) /
                      (1000 * 60 * 60 * 24)
                  )}{" "}
                  days
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
