import { motion } from "framer-motion";
import { Shield, FileCheck, AlertTriangle, TrendingUp } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";
import DashboardLayout from "@/components/DashboardLayout";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const certificates = JSON.parse(localStorage.getItem("certificates") || "[]");

  const stats = [
    {
      label: "Total Certificates",
      value: certificates.length,
      icon: FileCheck,
      color: "text-primary",
    },
    {
      label: "Verified",
      value: certificates.filter((c: any) => c.status === "verified").length,
      icon: Shield,
      color: "text-green-500",
    },
    {
      label: "Pending",
      value: certificates.filter((c: any) => c.status === "pending").length,
      icon: AlertTriangle,
      color: "text-yellow-500",
    },
    {
      label: "Success Rate",
      value: "98.5%",
      icon: TrendingUp,
      color: "text-secondary",
    },
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold mb-2">
            Welcome back, <span className="text-gradient">{user.name}</span>!
          </h1>
          <p className="text-muted-foreground">
            Here's an overview of your certificate dashboard
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <AnimatedCard key={stat.label} delay={index * 0.1}>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-3 rounded-lg bg-primary/10 ${stat.color}`}
                  >
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Recent Activity */}
        <AnimatedCard delay={0.4}>
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
            {certificates.length > 0 ? (
              <div className="space-y-4">
                {certificates.slice(0, 5).map((cert: any, index: number) => (
                  <motion.div
                    key={cert.hash}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <FileCheck className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{cert.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {cert.issueDate}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        cert.status === "verified"
                          ? "bg-green-500/10 text-green-500"
                          : "bg-yellow-500/10 text-yellow-500"
                      }`}
                    >
                      {cert.status}
                    </span>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <FileCheck className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  No certificates yet. Upload your first certificate to get
                  started!
                </p>
              </div>
            )}
          </div>
        </AnimatedCard>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
