import Card from "../../components/Card";

export default function Services() {
  const services = [
    {
      title: "IT Staffing",
      description:
        "Find the perfect IT professionals to augment your team and drive innovation.",
    },
    {
      title: "Project-Based Staffing",
      description:
        "Get skilled professionals for your short-term and long-term projects.",
    },
    {
      title: "Executive Search",
      description:
        "Recruit top-level executives to lead your organization to success.",
    },
    {
      title: "Temporary Staffing",
      description:
        "Flexible workforce solutions for seasonal demands and special projects.",
    },
    {
      title: "Direct Hire",
      description:
        "Find permanent employees that fit your company culture and long-term goals.",
    },
    {
      title: "Skill Gap Analysis",
      description:
        "Identify and address skill gaps in your organization for improved performance.",
    },
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
