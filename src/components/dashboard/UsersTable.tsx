
import { User, UserStatus } from "@/lib/types";
import StatusBadge from "./StatusBadge";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Switch } from "@/components/ui/switch";

interface UsersTableProps {
  users: User[];
  onStatusChange?: (userId: string, newStatus: 'active' | 'inactive') => void;
}

export default function UsersTable({ users, onStatusChange }: UsersTableProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleStatusToggle = (user: User) => {
    if (onStatusChange) {
      const newStatus: UserStatus = user.status === 'active' ? 'inactive' : 'active';
      onStatusChange(user.id, newStatus);
    }
  };

  return (
    <div className="rounded-lg border bg-card shadow-sm overflow-hidden animate-slide-in">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px]">
          <thead>
            <tr className="border-b bg-muted/50">
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Code
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Username
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Balance
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Created
              </th>
              <th className="px-6 py-3 text-center text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-card">
            {users.length === 0 ? (
              <tr>
                <td colSpan={8} className="px-6 py-8 text-center text-muted-foreground">
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr
                  key={user.id}
                  className="hover:bg-muted/30 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {user.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {user.code}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {user.user}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <StatusBadge status={user.status} />
                      <Switch 
                        checked={user.status === 'active'} 
                        onCheckedChange={() => handleStatusToggle(user)}
                        className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-500"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium">
                    ${user.balance.toFixed(2)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                    {formatDate(user.created_at)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <Link
                      to={`/users/${user.id}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-criptex-600 hover:text-criptex-700 transition-colors"
                    >
                      <Eye className="h-4 w-4" />
                      <span>View</span>
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
