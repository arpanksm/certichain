import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <div className="mb-8 inline-flex items-center justify-center w-24 h-24 rounded-full gradient-primary">
          <Shield className="w-12 h-12 text-white" />
        </div>
        
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-4 text-8xl font-bold text-gradient"
        >
          404
        </motion.h1>
        
        <h2 className="mb-4 text-3xl font-bold">Page Not Found</h2>
        
        <p className="mb-8 text-xl text-muted-foreground max-w-md">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link to="/">
          <Button className="gradient-primary hover:opacity-90 glow-primary">
            <Home className="w-4 h-4 mr-2" />
            Return to Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
