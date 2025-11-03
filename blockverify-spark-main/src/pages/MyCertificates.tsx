import { motion } from "framer-motion";
import { FileText, Calendar, Hash, Shield } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";
import DashboardLayout from "@/components/DashboardLayout";
import { Badge } from "@/components/ui/badge";

const MyCertificates = () => {
  const certificates = JSON.parse(localStorage.getItem("certificates") || "[]");

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold mb-2">
            My <span className="text-gradient">Certificates</span>
          </h1>
          <p className="text-muted-foreground">
            View and manage all your uploaded certificates
          </p>
        </motion.div>

        {certificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert: any, index: number) => (
              <AnimatedCard key={cert.hash} delay={index * 0.1}>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <Badge
                      variant={
                        cert.status === "verified" ? "default" : "secondary"
                      }
                      className={
                        cert.status === "verified"
                          ? "bg-green-500/10 text-green-500 border-green-500/20"
                          : ""
                      }
                    >
                      {cert.status}
                    </Badge>
                  </div>

                  <h3 className="text-xl font-bold mb-2 line-clamp-2">
                    {cert.name}
                  </h3>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Shield className="w-4 h-4 mr-2" />
                      {cert.issuer}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(cert.issueDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-start text-muted-foreground">
                      <Hash className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                      <span className="break-all text-xs">{cert.hash}</span>
                    </div>
                  </div>

                  {cert.description && (
                    <p className="mt-4 text-sm text-muted-foreground line-clamp-2">
                      {cert.description}
                    </p>
                  )}
                </div>
              </AnimatedCard>
            ))}
          </div>
        ) : (
          <AnimatedCard>
            <div className="p-12 text-center">
              <FileText className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">
                No Certificates Yet
              </h3>
              <p className="text-muted-foreground mb-6">
                Upload your first certificate to get started
              </p>
            </div>
          </AnimatedCard>
        )}
      </div>
    </DashboardLayout>
  );
};

export default MyCertificates;
