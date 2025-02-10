// components/Hero.js
export default function Hero() {
    return (
      <section className="relative h-[90vh] flex items-center">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Innovation Meets Business Strategy
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We craft immersive digital experiences that accelerate growth and foster meaningful connections
            </p>
            <Button>Start Your Journey</Button>
          </motion.div>
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50/50 to-transparent" />
      </section>
    );
  }
  