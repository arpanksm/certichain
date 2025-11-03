import { motion } from "framer-motion";
import { Upload, Hash, Shield, CheckCircle } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";

const About = () => {
  const timeline = [
    {
      icon: Upload,
      title: "Certificate Issuance",
      description:
        "Institution uploads certificate with metadata to our secure platform.",
    },
    {
      icon: Hash,
      title: "Blockchain Hashing",
      description:
        "Certificate data is hashed and stored immutably on the blockchain.",
    },
    {
      icon: Shield,
      title: "AI Analysis",
      description:
        "Our AI models analyze the certificate for authenticity and potential fraud patterns.",
    },
    {
      icon: CheckCircle,
      title: "Instant Verification",
      description:
        "Anyone can verify the certificate authenticity in seconds using the hash or QR code.",
    },
  ];

  const team = [
    
    {
      name: "Arpan Kusum",
      role: "GCS/2331003",
      image: "https://madhuramsliet.com/assets/avatars/arpanku.jpg",
    },
    {
      name: "Kishlay Raj",
      role: "GCS/2331004",
      image: "https://madhuramsliet.com/assets/avatars/kishlay.jpg",
    },
    {
      name: "Sahil Sharma",
      role: "GCS/2331007",
      image: "https://yt3.googleusercontent.com/s-AmycnYHturhOA8vTtOkovLJPZN74T_d4ImGbKtiqvqRby2TVIzZvSfPrr1dR3RBXhY6A_HQw=s120-c-k-c0x00ffffff-no-rj",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">CertiChain</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            We're revolutionizing certificate verification by combining the
            immutability of blockchain technology with the intelligence of
            artificial intelligence to create a tamper-proof, fraud-resistant
            verification system.
          </p>
        </motion.div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            How <span className="text-gradient">It Works</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our four-step process ensures maximum security and efficiency
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {timeline.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="flex items-start gap-8">
                {/* Timeline Line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-primary to-transparent" />
                )}

                {/* Icon */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center glow-primary">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <AnimatedCard className="flex-1" delay={index * 0.1}>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sm font-semibold text-primary">
                        Step {index + 1}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </AnimatedCard>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Meet Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate experts dedicated to securing digital credentials
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <AnimatedCard key={member.name} delay={index * 0.1} hover={true}>
              <div className="p-6 text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="mb-4 mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary font-medium">{member.role}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
