import { motion, useAnimation } from "framer-motion";
import { Cloud, Mail, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import clutteriqLogo from "@/assets/clutteriq-logo.png";

const ConnectPage = () => {
  const navigate = useNavigate();
  const controls = useAnimation();

  useEffect(() => {
    controls.start(i => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 }
    }));
  }, [controls]);

  const handleConnect = (service: string) => {
    console.log(`Connecting to ${service}...`);
    navigate("/dashboard");
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      }
    },
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  };

  const getParticleAnimation = (i: number) => ({
    y: [0, -100],
    opacity: [0, 1, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      delay: i * 0.4,
      ease: "easeOut" as const
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
        
        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${20 + i * 10}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={getParticleAnimation(i)}
          />
        ))}

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(74,222,228,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(74,222,228,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <motion.div
            animate={floatingAnimation}
            className="relative"
          >
            <img 
              src={clutteriqLogo} 
              alt="ClutterIQ Logo" 
              className="w-24 h-24 md:w-32 md:h-32 drop-shadow-[0_0_30px_rgba(74,222,228,0.6)]"
            />
            <motion.div
              className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-[length:200%_auto]"
          >
            Connect Your Apps
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5 text-primary animate-pulse" />
            Link your favorite storage platforms to unlock intelligent organization
            <Zap className="w-5 h-5 text-accent animate-pulse" />
          </motion.p>
        </motion.div>

        {/* Integration Cards */}
        <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl mb-12">
          {/* Google Drive Card */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ delay: 0.6, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
            className="group perspective-1000"
          >
            <div className="relative h-full p-8 rounded-2xl bg-card/50 backdrop-blur-xl border border-primary/20 hover:border-primary/50 transition-all duration-500 overflow-hidden transform-gpu">
              {/* Animated glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              />
              <motion.div 
                className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.5, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Scan line effect */}
              <motion.div
                className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100"
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="w-16 h-16 mb-6 rounded-2xl bg-primary/10 flex items-center justify-center"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <Cloud className="w-8 h-8 text-primary" />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-3 text-foreground">Google Drive</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Connect your Google Drive to automatically organize files, sync folders, and get AI-powered insights
                </p>
                
                <Button
                  onClick={() => handleConnect("Google Drive")}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(74,222,228,0.6)] relative overflow-hidden group/btn"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10"
                  >
                    Connect Drive
                  </motion.span>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Gmail Card */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ delay: 0.8, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -10, rotateY: -5 }}
            className="group perspective-1000"
          >
            <div className="relative h-full p-8 rounded-2xl bg-card/50 backdrop-blur-xl border border-accent/20 hover:border-accent/50 transition-all duration-500 overflow-hidden transform-gpu">
              {/* Animated glow effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              />
              <motion.div 
                className="absolute -top-24 -right-24 w-48 h-48 bg-accent/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [1, 1.5, 1],
                  rotate: [0, -180, -360],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Scan line effect */}
              <motion.div
                className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100"
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="w-16 h-16 mb-6 rounded-2xl bg-accent/10 flex items-center justify-center"
                  whileHover={{ rotate: -360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <Mail className="w-8 h-8 text-accent" />
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-3 text-foreground">Gmail</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Integrate Gmail to manage attachments, categorize emails, and extract important information automatically
                </p>
                
                <Button
                  onClick={() => handleConnect("Gmail")}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(167,139,250,0.6)] relative overflow-hidden group/btn"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1, delay: 0.5 }}
                  />
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10"
                  >
                    Connect Gmail
                  </motion.span>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Footer Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-muted-foreground text-sm text-center"
        >
          You can manage connections anytime in Settings
        </motion.p>
      </div>
    </div>
  );
};

export default ConnectPage;
