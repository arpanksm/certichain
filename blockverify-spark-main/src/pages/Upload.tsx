import { useState } from "react";
import { motion } from "framer-motion";
import { Upload as UploadIcon, FileText, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import AnimatedCard from "@/components/AnimatedCard";
import DashboardLayout from "@/components/DashboardLayout";

const Upload = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsUploading(true);

    const formData = new FormData(e.currentTarget);
    const certificateData = {
      name: formData.get("name"),
      issuer: formData.get("issuer"),
      issueDate: formData.get("issueDate"),
      description: formData.get("description"),
      hash: `0x${Math.random().toString(36).substring(2, 15)}${Math.random().toString(36).substring(2, 15)}`,
      status: "verified",
      uploadDate: new Date().toISOString(),
    };

    // Simulate upload
    setTimeout(() => {
      const certificates = JSON.parse(
        localStorage.getItem("certificates") || "[]"
      );
      certificates.push(certificateData);
      localStorage.setItem("certificates", JSON.stringify(certificates));

      setIsUploading(false);
      setUploadSuccess(true);
      toast.success("Certificate uploaded and hashed to blockchain!");

      setTimeout(() => {
        setUploadSuccess(false);
        setFileName("");
        (e.target as HTMLFormElement).reset();
      }, 3000);
    }, 2000);
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold mb-2">
            Upload <span className="text-gradient">Certificate</span>
          </h1>
          <p className="text-muted-foreground">
            Upload your certificate to store it securely on the blockchain
          </p>
        </motion.div>

        <AnimatedCard>
          <div className="p-8">
            {!uploadSuccess ? (
              <form onSubmit={handleUpload} className="space-y-6">
                {/* File Upload */}
                <div className="space-y-2">
                  <Label htmlFor="file">Certificate File (PDF)</Label>
                  <div className="relative">
                    <Input
                      id="file"
                      name="file"
                      type="file"
                      accept=".pdf"
                      onChange={handleFileChange}
                      className="cursor-pointer"
                      required
                    />
                    {fileName && (
                      <div className="mt-2 flex items-center text-sm text-muted-foreground">
                        <FileText className="w-4 h-4 mr-2" />
                        {fileName}
                      </div>
                    )}
                  </div>
                </div>

                {/* Certificate Name */}
                <div className="space-y-2">
                  <Label htmlFor="name">Certificate Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="e.g., Bachelor of Computer Science"
                    required
                  />
                </div>

                {/* Issuer */}
                <div className="space-y-2">
                  <Label htmlFor="issuer">Issuing Institution</Label>
                  <Input
                    id="issuer"
                    name="issuer"
                    placeholder="e.g., MIT University"
                    required
                  />
                </div>

                {/* Issue Date */}
                <div className="space-y-2">
                  <Label htmlFor="issueDate">Issue Date</Label>
                  <Input
                    id="issueDate"
                    name="issueDate"
                    type="date"
                    required
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description">Description (Optional)</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Add any additional notes or description..."
                    rows={4}
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full gradient-primary hover:opacity-90 glow-primary"
                  disabled={isUploading}
                >
                  {isUploading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="mr-2"
                      >
                        <UploadIcon className="w-5 h-5" />
                      </motion.div>
                      Uploading to Blockchain...
                    </>
                  ) : (
                    <>
                      <UploadIcon className="w-5 h-5 mr-2" />
                      Upload Certificate
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full gradient-primary mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2">Upload Successful!</h3>
                <p className="text-muted-foreground">
                  Your certificate has been securely stored on the blockchain
                </p>
              </motion.div>
            )}
          </div>
        </AnimatedCard>
      </div>
    </DashboardLayout>
  );
};

export default Upload;
