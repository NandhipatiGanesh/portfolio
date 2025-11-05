// components/ServicesSection.tsx

export default function ServicesSection() {
  const services = [
    { id: "01", title: "Framer landing page Design + Dev", price: "Starts from $1,500" },
    { id: "02", title: "Multi-page website in Framer", price: "Starts from $3,000" },
    { id: "03", title: "Framer Migration", price: "DM for quote" },
    { id: "04", title: "Framer Website Maintenance", price: "DM for quote" },
  ];

  return (
    <section className="w-full">
      <div className="max-w-4xl mx-auto px-0">

        <div className="divide-y divide-gray-200">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex items-center justify-between py-6 sm:py-8 group"
            >
              <div className="flex items-center gap-6">
                <span className="text-gray-400 font-medium text-lg w-10 sm:w-12">
                  {service.id}.
                </span>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 group-hover:text-black transition-colors duration-200">
                  {service.title}
                </h3>
              </div>

              <span className="text-sm sm:text-base font-medium text-gray-600 bg-gray-50 px-4 py-1.5 rounded-full border border-gray-200 group-hover:bg-black group-hover:text-white transition-all duration-300">
                {service.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
