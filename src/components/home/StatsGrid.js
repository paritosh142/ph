// components/home/StatsGrid.js
const stats = [
  { value: "98%", label: "Client Retention Rate" },
  { value: "5k+", label: "Professionals Placed" },
  { value: "24h", label: "Avg. Placement Time" },
  { value: "500+", label: "Global Clients Served" },
];

export default function StatsGrid() {
  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-5xl font-bold mb-4 animate-countup">
                {stat.value}
              </div>
              <div className="text-gray-200 text-sm font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
