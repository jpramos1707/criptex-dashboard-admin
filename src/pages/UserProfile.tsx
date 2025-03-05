
import { useParams, Navigate, Link, useNavigate } from "react-router-dom";
import Layout from "@/components/dashboard/Layout";
import { mockUsers } from "@/lib/mockData";
import { ChevronLeft, User, Save, Key } from "lucide-react";
import { useState, useEffect } from "react";
import StatusBadge from "@/components/dashboard/StatusBadge";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { User as UserType } from "@/lib/types";

const UserProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const currentUser = mockUsers.find((user) => user.id === id);
  
  const [user, setUser] = useState<UserType | undefined>(currentUser);
  const [isEditing, setIsEditing] = useState(false);
  const [showPasswordChange, setShowPasswordChange] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  // Sync with the current state from mockUsers
  useEffect(() => {
    const updatedUser = mockUsers.find((user) => user.id === id);
    setUser(updatedUser);
  }, [id]);

  if (!user) {
    return <Navigate to="/" replace />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleStatusToggle = () => {
    const newStatus = user.status === "active" ? "inactive" : "active";
    // Update the local state
    setUser({ ...user, status: newStatus });
    
    // Update the mockUsers array
    const userIndex = mockUsers.findIndex(u => u.id === user.id);
    if (userIndex !== -1) {
      mockUsers[userIndex].status = newStatus;
    }
    
    toast.success(`User status updated to ${newStatus}`);
  };

  const handleInputChange = (field: keyof UserType, value: string) => {
    if (user) {
      setUser({ ...user, [field]: value });
    }
  };

  const handleSaveChanges = () => {
    // Update the mockUsers array with all changes
    const userIndex = mockUsers.findIndex(u => u.id === user.id);
    if (userIndex !== -1 && user) {
      mockUsers[userIndex] = { ...user };
      
      if (showPasswordChange && newPassword) {
        mockUsers[userIndex].password = newPassword;
        setShowPasswordChange(false);
        setNewPassword("");
      }
    }
    
    setIsEditing(false);
    toast.success("User information updated successfully!");
  };

  // Toggle edit mode and ensure password change is turned off
  const toggleEditMode = () => {
    if (showPasswordChange) {
      setShowPasswordChange(false);
      setNewPassword("");
    }
    setIsEditing(!isEditing);
  };

  // Toggle password change and ensure edit mode is turned off
  const togglePasswordChange = () => {
    if (isEditing) {
      setIsEditing(false);
    }
    setShowPasswordChange(!showPasswordChange);
    if (showPasswordChange) {
      setNewPassword("");
    }
  };

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <Link 
            to="/" 
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
                  <div className="flex items-center space-x-4">
                    <StatusBadge status={user.status} />
                    <Switch 
                      checked={user.status === 'active'} 
                      onCheckedChange={handleStatusToggle}
                      className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-500"
                    />
                  </div>
                </div>
                <div className="mt-4 flex justify-between">
                  <Button 
                    variant="outline"
                    onClick={toggleEditMode}
                    className={`text-criptex-500 ${showPasswordChange ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={showPasswordChange}
                  >
                    {isEditing ? "Cancel Editing" : "Edit User Information"}
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={togglePasswordChange}
                    className={`flex items-center gap-2 text-criptex-500 ${isEditing ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isEditing}
                  >
                    <Key className="h-4 w-4" />
                    {showPasswordChange ? "Cancel Password Change" : "Change Password"}
                  </Button>
                </div>
              </div>
              <div className="p-6">
                {showPasswordChange && (
                  <div className="mb-6 p-4 border rounded-md bg-muted/30">
                    <h3 className="font-medium mb-2">Change Password</h3>
                    <div className="flex gap-4">
                      <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder="New Password"
                        className="flex-1 px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-white"
                      />
                    </div>
                  </div>
                )}
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">
                      User ID
                    </h3>
                    <input 
                      type="text"
                      value={user.id}
                      readOnly
                      disabled
                      className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-gray-400"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">
                      Code
                    </h3>
                    <input 
                      type="text"
                      value={user.code}
                      onChange={(e) => handleInputChange('code', e.target.value)}
                      readOnly={!isEditing}
                      className={`w-full px-3 py-2 border border-gray-600 rounded-md ${!isEditing ? 'bg-gray-800 text-gray-400' : 'bg-gray-800 text-white'}`}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">
                      Name
                    </h3>
                    <input 
                      type="text"
                      value={user.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      readOnly={!isEditing}
                      className={`w-full px-3 py-2 border border-gray-600 rounded-md ${!isEditing ? 'bg-gray-800 text-gray-400' : 'bg-gray-800 text-white'}`}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">
                      Username
                    </h3>
                    <input 
                      type="text"
                      value={user.user}
                      onChange={(e) => handleInputChange('user', e.target.value)}
                      readOnly={!isEditing}
                      className={`w-full px-3 py-2 border border-gray-600 rounded-md ${!isEditing ? 'bg-gray-800 text-gray-400' : 'bg-gray-800 text-white'}`}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">
                      Email
                    </h3>
                    <input 
                      type="email"
                      value={user.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      readOnly={!isEditing}
                      className={`w-full px-3 py-2 border border-gray-600 rounded-md ${!isEditing ? 'bg-gray-800 text-gray-400' : 'bg-gray-800 text-white'}`}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">
                      Telephone
                    </h3>
                    <input 
                      type="tel"
                      value={user.telephone}
                      onChange={(e) => handleInputChange('telephone', e.target.value)}
                      readOnly={!isEditing}
                      className={`w-full px-3 py-2 border border-gray-600 rounded-md ${!isEditing ? 'bg-gray-800 text-gray-400' : 'bg-gray-800 text-white'}`}
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">
                      Password
                    </h3>
                    <input 
                      type="password"
                      value={user.password}
                      readOnly
                      disabled
                      className="w-full px-3 py-2 border border-gray-600 rounded-md bg-gray-800 text-gray-400"
                    />
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground mb-1">
                      Created At
                    </h3>
                    <p className="text-gray-400">{formatDate(user.created_at)}</p>
                  </div>
                </div>
                
                {(isEditing || showPasswordChange) && (
                  <div className="mt-6 flex justify-end">
                    <Button 
                      onClick={handleSaveChanges}
                      className="bg-criptex-500 hover:bg-criptex-600 text-white flex items-center gap-2"
                    >
                      <Save className="h-4 w-4" />
                      Save Changes
                    </Button>
                  </div>
                )}
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
                  <div className="flex items-center space-x-3">
                    <StatusBadge status={user.status} />
                    <Switch 
                      checked={user.status === 'active'} 
                      onCheckedChange={handleStatusToggle}
                      className="data-[state=checked]:bg-green-500 data-[state=unchecked]:bg-gray-500"
                    />
                  </div>

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
    </Layout>
  );
};

export default UserProfile;
