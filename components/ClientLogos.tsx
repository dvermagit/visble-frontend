// export default function ClientLogos() {
//   const logos = [
//     { logo: '/idLa75rSWC_logos.png' },
//     { logo: '/idrtWOj-E8_logos.png' },
//     { logo: '/idIn6xDCix_1767881962246.png' },
//     { logo: '/idHmNYHC1S_logos.png' },
//     { logo: '/iddHundDDQ_1767881827127.png' },
//     { logo: '/image.png' },
//     { logo: '/image1.png' },
//     { logo: '/id8O32bVFz_logos.png' },
//     { logo: '/image2.png' },
//     { logo: '/image3.png' },
//   ];

//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold bricolage text-gray-900 mb-4">
//             Trusted by Leading Brands
//           </h2>
//           <p className="text-gray-600 max-w-2xl mx-auto">
//             Join thousands of companies that trust Visble for their brand monitoring needs
//           </p>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
//           {logos.map((company, index) => (
//             <div 
//               key={index}
//               className="flex items-center justify-center h-20 group cursor-pointer transition-all duration-300"
//             >
//               {company.logo ? (
//                 <div className="w-full h-full bg-white rounded-lg shadow-sm flex items-center justify-center p-4 t">
//                 {/* <div className="w-full h-full bg-white rounded-lg shadow-sm flex items-center justify-center p-4 group-hover:shadow-md transition-shadow"> */}
//                   <img 
//                     src={company.logo} 
//                     alt={`Client ${index + 1}`}
//                     className="max-w-full max-h-full object-contain transition-all"
//                     // className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all"
//                   />
//                 </div>
//               ) : (
//                 <div className="w-full h-full bg-white rounded-lg shadow-sm flex items-center justify-center ">
//                 {/* <div className="w-full h-full bg-white rounded-lg shadow-sm flex items-center justify-center group-hover:shadow-md transition-shadow opacity-30"> */}
//                   <div className="w-16 h-16 bg-gray-200 rounded"></div>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from 'next/image';

export default function ClientLogos() {
  // SEO UPDATE: Added 'name' for proper Alt Text
  const clients = [
    { name: 'Glance', logo: '/idLa75rSWC_logos.png' },
    { name: 'Kompanero', logo: '/idrtWOj-E8_logos.png' },
    { name: 'Italics', logo: '/idIn6xDCix_1767881962246.png' },
    { name: 'Funsholar', logo: '/Funsholar New Logo Raw File-05-cropped_1752754711196-DL_bhjea.png' },
    { name: 'Flyhomes', logo: '/iddHundDDQ_1767881827127.png' }, 
    { name: 'Leher', logo: '/image1.png' },
    { name: 'Acredge', logo: '/output-onlinepngtools.png' }, 
    { name: 'DGFT Guru', logo: '/dgft.png' },
    { name: 'Pinky Promise', logo: '/image2.png' },
    { name: 'Upthrust', logo: '/upthrust_img.png' },
  ];

  const biggerLogos = [
    '/Funsholar New Logo Raw File-05-cropped_1752754711196-DL_bhjea.png',
    '/dgft.png',
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
          {clients.map((client, index) => {
            const isBig = biggerLogos.includes(client.logo);

            return (
              <div
                key={index}
                className="flex items-center justify-center h-24 group transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-full h-full bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center p-4 relative overflow-hidden">
                  <div className={`relative w-full h-full ${isBig ? 'scale-110' : 'scale-90'}`}>
                    <Image
                      src={client.logo}
                      alt={`${client.name} logo - Trusted by Visble`}
                      fill
                      className="object-contain filter transition-all duration-300"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 20vw"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}