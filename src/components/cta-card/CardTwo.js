// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// //internal import
// import useGetSetting from "@hooks/useGetSetting";
// import CMSkeleton from "@components/preloader/CMSkeleton";
// import useUtilsFunction from "@hooks/useUtilsFunction";

// const CardTwo = () => {
//   const { storeCustomizationSetting, error, loading } = useGetSetting();
//   const { showingTranslateValue } = useUtilsFunction();

//   return (
//     <>
//       <div className="w-full bg-white  rounded-lg">
//         <div className="flex justify-between items-center">
//           <div className="w-1/5 flex-grow hidden lg:flex md:flex md:justify-items-center lg:justify-end">
//             <Image
//               width={5000}
//               height={250}
//               alt="Quick Delivery to Your Home"
//               className="block w-auto object-contain"
//               src={
//                 storeCustomizationSetting?.home?.quick_delivery_img ||
//                 "/cta/delivery-boy.png"
//               }
//             />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CardTwo;


import React from "react";
import Image from "next/image";

// Internal import
import useGetSetting from "@hooks/useGetSetting";

const CardTwo = () => {
  const { storeCustomizationSetting } = useGetSetting();

  // Use local images (ensure they are placed inside the 'public' folder in the root)
  const topImage = "/cta/banner1.webp"; // Top section image
  const bottomImage = "/cta/banner2.avif"; // Bottom section image

  return (
    <div className="flex justify-between gap-4 w-full" style={{ height: "390px" }}>
      {/* 40% width section divided into two parts */}
      <div className="w-full lg:w-4/12 rounded-lg overflow-hidden flex flex-col gap-4">
        {/* Top section */}
        <div className="w-full h-1/2 relative">
          <Image
            src={topImage} // Top section image
            alt="Top Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        {/* Bottom section */}
        <div className="w-full h-1/2 relative">
          <Image
            src={bottomImage} // Bottom section image
            alt="Bottom Image"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* 60% width section with image from storeCustomizationSetting */}
      <div className="w-full lg:w-8/12 rounded-lg overflow-hidden relative">
        <Image
          src={storeCustomizationSetting?.home?.quick_delivery_img || "/images/delivery-boy.png"} // Fallback image if not found
          alt="Quick Delivery Image"
          width={2000} // Adjust width as needed
          height={450} // Adjust height as needed
          objectFit="cover" // Ensure the image covers the entire div
          className="w-full h-full rounded-lg" // Optional: round corners for styling
        />
      </div>
    </div>
  );
};

export default CardTwo;
