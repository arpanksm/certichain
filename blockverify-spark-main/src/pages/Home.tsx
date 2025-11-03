import { motion } from "framer-motion";
import { Shield, CheckCircle, Users, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import AnimatedCard from "@/components/AnimatedCard";
import BackgroundAnimation from "@/components/BackgroundAnimation";

const Home = () => {
  const navigate = useNavigate();

  const stats = [
    { label: "Certificates Verified", value: "50,000+", icon: CheckCircle },
    { label: "Institutions Onboarded", value: "200+", icon: Users },
    { label: "Fraud Detected", value: "500+", icon: Shield },
    { label: "Success Rate", value: "99.9%", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen relative">
      <BackgroundAnimation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block p-4 rounded-full bg-primary/10 mb-8"
            >
              <Shield className="w-16 h-16 text-primary" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">Verify Smarter.</span>
              <br />
              <span className="text-gradient">Verify Securely.</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Revolutionary certificate verification powered by blockchain
              immutability and AI-driven fraud detection. Secure, instant, and
              tamper-proof.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigate("/login")}
                className="gradient-primary hover:opacity-90 text-lg px-8 glow-primary"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/verify")}
                className="border-primary/50 hover:bg-primary/10 text-lg px-8"
              >
                Verify Certificate
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-secondary/10 blur-xl"
        />
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <AnimatedCard key={stat.label} delay={index * 0.1}>
                <div className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    className="text-3xl font-bold text-gradient mb-2"
                  >
                    {stat.value}
                  </motion.h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="text-gradient">CertiChain?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Combining cutting-edge technology for unparalleled security
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Blockchain Security",
                description:
                  "Immutable records stored on distributed ledger technology ensure certificates can never be tampered with.",
                icon: Shield,
              },
              {
                title: "AI Fraud Detection",
                description:
                  "Advanced machine learning algorithms analyze patterns and detect fraudulent certificates with 99.9% accuracy.",
                icon: CheckCircle,
              },
              {
                title: "Instant Verification",
                description:
                  "Verify certificates in seconds with our lightning-fast verification system powered by smart contracts.",
                icon: TrendingUp,
              },
            ].map((feature, index) => (
              <AnimatedCard key={feature.title} delay={index * 0.1}>
                <div className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-primary mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedCard>
            <div className="p-12 text-center gradient-primary">
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                Join thousands of institutions already using CertiChain for
                secure certificate verification.
              </p>
              <Button
                size="lg"
                onClick={() => navigate("/login")}
                className="bg-white text-primary hover:bg-white/90 text-lg px-8"
              >
                Create Account
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
};

export default Home;
