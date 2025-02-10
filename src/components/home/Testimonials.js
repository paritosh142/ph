// components/home/Testimonials.js
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechCorp",
    text: "Their solutions transformed our development team's capabilities within weeks. The candidates were exactly what we needed.",
    avatar: "/avatars/sarah-johnson.jpg",
  },
  {
    name: "Michael Chen",
    role: "HR Director @ FinNext",
    text: "The precision in candidate matching saved us hundreds of hours in screening. Exceptional service from start to finish.",
    avatar: "/avatars/michael-chen.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Client Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from industry leaders who transformed their workforce with our
            solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full mr-4 border-2 border-blue-100"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
