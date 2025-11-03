import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, CheckCircle, XCircle, Hash, FileText, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { QRCodeSVG } from "qrcode.react";
import AnimatedCard from "@/components/AnimatedCard";

const Verify = () => {
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<any>(null);
  const [showQR, setShowQR] = useState(false);

  const handleVerify = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsVerifying(true);

    const formData = new FormData(e.currentTarget);
    const hash = formData.get("hash") as string;

    // Mock verification
    setTimeout(() => {
      const certificates = JSON.parse(
        localStorage.getItem("certificates") || "[]"
      );
      const certificate = certificates.find((c: any) => c.hash === hash);

      const result = {
        isValid: !!certificate,
        certificate: certificate || null,
        blockchainTxId: `0xbc${Math.random().toString(36).substring(2, 15)}`,
        aiRiskScore: Math.floor(Math.random() * 10) + 1,
        verifiedAt: new Date().toISOString(),
      };

      setVerificationResult(result);
      setIsVerifying(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Verify <span className="text-gradient">Certificate</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enter the certificate hash to verify its authenticity on the
            blockchain
          </p>
        </motion.div>

        <AnimatedCard>
          <div className="p-8">
            <form onSubmit={handleVerify} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="hash">Certificate Hash</Label>
                <div className="relative">
                  <Hash className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="hash"
                    name="hash"
                    placeholder="0x..."
                    className="pl-10"
                    required
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Enter the unique hash identifier from your certificate
                </p>
              </div>

              <Button
                type="submit"
                className="w-full gradient-primary hover:opacity-90 glow-primary"
                disabled={isVerifying}
              >
                {isVerifying ? (
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
                      <Shield className="w-5 h-5" />
                    </motion.div>
                    Verifying on Blockchain...
                  </>
                ) : (
                  <>
                    <Shield className="w-5 h-5 mr-2" />
                    Verify Certificate
                  </>
                )}
              </Button>
            </form>
          </div>
        </AnimatedCard>

        {/* Verification Result */}
        <AnimatePresence>
          {verificationResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-8"
            >
              <AnimatedCard>
                <div className="p-8">
                  <div className="text-center mb-8">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.2 }}
                      className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-4 ${
                        verificationResult.isValid
                          ? "bg-green-500/10 text-green-500"
                          : "bg-red-500/10 text-red-500"
                      }`}
                    >
                      {verificationResult.isValid ? (
                        <CheckCircle className="w-10 h-10" />
                      ) : (
                        <XCircle className="w-10 h-10" />
                      )}
                    </motion.div>
                    <h2 className="text-3xl font-bold mb-2">
                      {verificationResult.isValid
                        ? "Certificate Verified ✓"
                        : "Certificate Not Found"}
                    </h2>
                    <p className="text-muted-foreground">
                      {verificationResult.isValid
                        ? "This certificate is authentic and stored on the blockchain"
                        : "No matching certificate found in the blockchain"}
                    </p>
                  </div>

                  {verificationResult.isValid && (
                    <div className="space-y-4">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-muted/50">
                          <div className="flex items-center space-x-2 mb-2">
                            <FileText className="w-4 h-4 text-primary" />
                            <p className="text-sm font-medium">
                              Certificate Name
                            </p>
                          </div>
                          <p className="text-lg font-bold">
                            {verificationResult.certificate.name}
                          </p>
                        </div>

                        <div className="p-4 rounded-lg bg-muted/50">
                          <div className="flex items-center space-x-2 mb-2">
                            <Shield className="w-4 h-4 text-primary" />
                            <p className="text-sm font-medium">Issuer</p>
                          </div>
                          <p className="text-lg font-bold">
                            {verificationResult.certificate.issuer}
                          </p>
                        </div>

                        <div className="p-4 rounded-lg bg-muted/50">
                          <div className="flex items-center space-x-2 mb-2">
                            <Hash className="w-4 h-4 text-primary" />
                            <p className="text-sm font-medium">
                              Blockchain TX ID
                            </p>
                          </div>
                          <p className="text-sm font-mono break-all">
                            {verificationResult.blockchainTxId}
                          </p>
                        </div>

                        <div className="p-4 rounded-lg bg-muted/50">
                          <div className="flex items-center space-x-2 mb-2">
                            <Shield className="w-4 h-4 text-primary" />
                            <p className="text-sm font-medium">AI Risk Score</p>
                          </div>
                          <p className="text-lg font-bold">
                            {verificationResult.aiRiskScore}/100
                            <span className="text-sm text-green-500 ml-2">
                              (Low Risk)
                            </span>
                          </p>
                        </div>
                      </div>

                      <Button
                        onClick={() => setShowQR(true)}
                        variant="outline"
                        className="w-full border-primary/50 hover:bg-primary/10"
                      >
                        <QrCode className="w-4 h-4 mr-2" />
                        Generate QR Code
                      </Button>
                    </div>
                  )}
                </div>
              </AnimatedCard>
            </motion.div>
          )}
        </AnimatePresence>

        {/* QR Code Modal */}
        <Dialog open={showQR} onOpenChange={setShowQR}>
          <DialogContent className="glass-card">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center p-6"
            >
              <h3 className="text-2xl font-bold mb-4">
                Certificate QR Code
              </h3>
              <div className="bg-white p-6 rounded-lg inline-block mb-4">
                <QRCodeSVG
                  value={verificationResult?.certificate?.hash || ""}
                  size={256}
                  level="H"
                />
              </div>
              <p className="text-sm text-muted-foreground">
                Scan this QR code to quickly verify the certificate
              </p>
            </motion.div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Verify;
