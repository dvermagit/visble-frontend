export default function ClientLogos() {
  const logos = [
    { name: 'Flyhomes', logo: 'F' },
    { name: 'Phi Designs', logo: 'Φ' },
    { name: 'K9 School', logo: 'K9' },
    { name: 'Acredge', logo: 'A' },
    { name: 'Funscholar', logo: 'f' },
    { name: 'DAU', logo: 'DAU' },
    { name: 'DevX', logo: 'DX' },
    { name: 'DQPT Guru', logo: 'DQ' },
    { name: 'Pinky Promise', logo: 'PP' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold bricolage text-gray-900 mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join thousands of companies that trust Visble for their brand monitoring needs
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center opacity-70">
          {logos.map((company, index) => (
            <div 
              key={index}
              className="flex items-center justify-center h-16 group cursor-pointer transition-all duration-300 hover:opacity-100"
            >
              <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow">
                <span className="text-xl font-bold text-gray-700 bricolage">
                  {company.logo}
                </span>
              </div>
              <span className="ml-3 font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                {company.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}