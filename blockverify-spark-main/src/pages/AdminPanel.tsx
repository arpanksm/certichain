import { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  FileCheck,
  AlertTriangle,
  TrendingUp,
  CheckCircle,
  XCircle,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import AnimatedCard from "@/components/AnimatedCard";

const AdminPanel = () => {
  const certificates = JSON.parse(localStorage.getItem("certificates") || "[]");
  const [selectedCert, setSelectedCert] = useState<any>(null);

  const stats = [
    {
      label: "Total Certificates",
      value: certificates.length,
      icon: FileCheck,
      color: "text-primary",
    },
    {
      label: "Pending Verification",
      value: certificates.filter((c: any) => c.status === "pending").length,
      icon: AlertTriangle,
      color: "text-yellow-500",
    },
    {
      label: "Verified",
      value: certificates.filter((c: any) => c.status === "verified").length,
      icon: CheckCircle,
      color: "text-green-500",
    },
    {
      label: "Fraud Detected",
      value: Math.floor(certificates.length * 0.02),
      icon: Shield,
      color: "text-red-500",
    },
  ];

  const handleApprove = (hash: string) => {
    const updatedCerts = certificates.map((c: any) =>
      c.hash === hash ? { ...c, status: "verified" } : c
    );
    localStorage.setItem("certificates", JSON.stringify(updatedCerts));
    toast.success("Certificate approved!");
    setSelectedCert(null);
  };

  const handleReject = (hash: string) => {
    const updatedCerts = certificates.map((c: any) =>
      c.hash === hash ? { ...c, status: "rejected" } : c
    );
    localStorage.setItem("certificates", JSON.stringify(updatedCerts));
    toast.error("Certificate rejected!");
    setSelectedCert(null);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">
            Admin <span className="text-gradient">Dashboard</span>
          </h1>
          <p className="text-muted-foreground">
            Manage certificates, users, and system analytics
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <AnimatedCard key={stat.label} delay={index * 0.1}>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg bg-primary/10 ${stat.color}`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                </div>
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* Certificates Table */}
        <AnimatedCard delay={0.4}>
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">All Certificates</h2>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  Export
                </Button>
              </div>
            </div>

            {certificates.length > 0 ? (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4">Name</th>
                      <th className="text-left py-3 px-4">Issuer</th>
                      <th className="text-left py-3 px-4">Date</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {certificates.map((cert: any, index: number) => (
                      <motion.tr
                        key={cert.hash}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="border-b border-border/50 hover:bg-muted/50 transition-colors"
                      >
                        <td className="py-4 px-4 font-medium">{cert.name}</td>
                        <td className="py-4 px-4 text-muted-foreground">
                          {cert.issuer}
                        </td>
                        <td className="py-4 px-4 text-muted-foreground">
                          {new Date(cert.issueDate).toLocaleDateString()}
                        </td>
                        <td className="py-4 px-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              cert.status === "verified"
                                ? "bg-green-500/10 text-green-500"
                                : cert.status === "pending"
                                ? "bg-yellow-500/10 text-yellow-500"
                                : "bg-red-500/10 text-red-500"
                            }`}
                          >
                            {cert.status}
                          </span>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex space-x-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleApprove(cert.hash)}
                              className="text-green-500 border-green-500/20 hover:bg-green-500/10"
                            >
                              <CheckCircle className="w-4 h-4 mr-1" />
                              Approve
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleReject(cert.hash)}
                              className="text-red-500 border-red-500/20 hover:bg-red-500/10"
                            >
                              <XCircle className="w-4 h-4 mr-1" />
                              Reject
                            </Button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="text-center py-12">
                <FileCheck className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  No certificates to review
                </p>
              </div>
            )}
          </div>
        </AnimatedCard>

        {/* User Management */}
        <AnimatedCard delay={0.6}>
          <div className="p-8 mt-8">
            <h2 className="text-2xl font-bold mb-6">User Management</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-white font-bold">
                    A
                  </div>
                  <div>
                    <p className="font-medium">admin@certichain.com</p>
                    <p className="text-sm text-muted-foreground">
                      Administrator
                    </p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/10 text-green-500">
                  Active
                </span>
              </div>
            </div>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
};

export default AdminPanel;
