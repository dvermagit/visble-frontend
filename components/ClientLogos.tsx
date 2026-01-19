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

export default function ClientLogos() {
  const logos = [
    { logo: '/idLa75rSWC_logos.png' },
    { logo: '/idrtWOj-E8_logos.png' },
    { logo: '/idIn6xDCix_1767881962246.png' },
    { logo: '/Funsholar New Logo Raw File-05-cropped_1752754711196-DL_bhjea.png' },
    { logo: '/iddHundDDQ_1767881827127.png' },
    { logo: '/output-onlinepngtools.png' },
    { logo: '/image1.png' },
    { logo: '/dgft.png' },
    { logo: '/image2.png' },
    { logo: '/upthrust_img.png' },
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
          {logos.map((company, index) => {
            const isBig = biggerLogos.includes(company.logo);

            return (
              <div
                key={index}
                className="flex items-center justify-center h-20 group cursor-pointer transition-all duration-300"
              >
                <div className="w-full h-full bg-white rounded-lg shadow-sm flex items-center justify-center p-4">
                  <img
                    src={company.logo}
                    alt={`Client ${index + 1}`}
                    className={`object-contain transition-all ${
                      isBig
                        ? 'max-h-16 scale-110'
                        : 'max-h-12'
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
