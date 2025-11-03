import { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Shield, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import AnimatedCard from "@/components/AnimatedCard";
import DashboardLayout from "@/components/DashboardLayout";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedUser = {
      ...user,
      name: formData.get("name"),
      email: formData.get("email"),
    };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setIsEditing(false);
    toast.success("Profile updated successfully!");
  };

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">
            Your <span className="text-gradient">Profile</span>
          </h1>
          <p className="text-muted-foreground">
            Manage your account information
          </p>
        </motion.div>

        <AnimatedCard>
          <div className="p-8">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center text-white text-3xl font-bold">
                {user.name?.[0]?.toUpperCase() || "U"}
              </div>
              <div>
                <h2 className="text-2xl font-bold">{user.name}</h2>
                <p className="text-muted-foreground">{user.email}</p>
                <Badge className="mt-2">
                  {user.role === "admin" ? "Administrator" : "User"}
                </Badge>
              </div>
            </div>

            <form onSubmit={handleSave} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="name"
                    name="name"
                    defaultValue={user.name}
                    disabled={!isEditing}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    defaultValue={user.email}
                    disabled={!isEditing}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Account Type</Label>
                <div className="relative">
                  <Shield className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="role"
                    value={user.role === "admin" ? "Administrator" : "User"}
                    disabled
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="flex space-x-4">
                {isEditing ? (
                  <>
                    <Button
                      type="submit"
                      className="flex-1 gradient-primary hover:opacity-90"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsEditing(false)}
                      className="flex-1"
                    >
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button
                    type="button"
                    onClick={() => setIsEditing(true)}
                    className="w-full gradient-primary hover:opacity-90"
                  >
                    Edit Profile
                  </Button>
                )}
              </div>
            </form>
          </div>
        </AnimatedCard>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
