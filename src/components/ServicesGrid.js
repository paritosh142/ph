// components/ServicesGrid.js
const services = [
  {
    title: "Digital Strategy",
    icon: "📈",
    description: "Data-driven roadmaps for sustainable growth",
    color: "bg-blue-100",
  },
  // Add 5 more services
];

export default function ServicesGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className={`${service.color} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
