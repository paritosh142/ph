
// components/home/StatsSection.js
export default function StatsSection() {
    return (
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-gray-200">Retention Rate</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">5k+</div>
              <div className="text-gray-200">Professionals Placed</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">24h</div>
              <div className="text-gray-200">Average Placement Time</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-gray-200">Global Clients</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  