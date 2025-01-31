// import React from "react";
// import Image from "next/image";
// import { useForm } from "react-hook-form";
// import useTranslation from "next-translate/useTranslation";
// import { FiMail, FiMapPin, FiBell } from "react-icons/fi";

// //internal import
// import Layout from "@layout/Layout";
// import Label from "@components/form/Label";
// import Error from "@components/form/Error";
// import { notifySuccess } from "@utils/toast";
// import InputArea from "@components/form/InputArea";
// import PageHeader from "@components/header/PageHeader";
// import useGetSetting from "@hooks/useGetSetting";
// import CMSkeleton from "@components/preloader/CMSkeleton";
// import useUtilsFunction from "@hooks/useUtilsFunction";

// const ContactUs = () => {
//   const { t } = useTranslation();
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const { showingTranslateValue } = useUtilsFunction();
//   const { storeCustomizationSetting, loading, error } = useGetSetting();

//   const submitHandler = () => {
//     notifySuccess(
//       "your message sent successfully. We will contact you shortly."
//     );
//   };

//   return (
//     <Layout title="Contact Us" description="This is contact us page">
//       <div className="bg-white">
//       <div style={{display:'flex', justifyContent:'center', alignItems:'center', marginTop:'20px', fontSize:'1.5rem', fontWeight:'bold'}}><h2>Contact Us</h2></div>
//         <div className="max-w-screen-2xl mx-auto lg:py-10 py-10 px-4 sm:px-10">
//           {/* contact promo */}
//           <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8 font-serif">
//             {loading ? (
//               <CMSkeleton
//                 count={10}
//                 height={20}
//                 error={error}
//                 loading={loading}
//               />
//             ) : (
//               <div className="border p-10 rounded-lg text-center">
//                 <span className="flex justify-center text-4xl  mb-4">
//                   <FiMail />
//                 </span>
//                 <h5 className="text-xl mb-2 font-bold">
//                   {showingTranslateValue(
//                     storeCustomizationSetting?.contact_us?.email_box_title
//                   )}
//                 </h5>
//                 <p className="mb-0 text-base opacity-90 leading-7">
//                   <a
//                     href={`mailto:${storeCustomizationSetting?.contact_us?.email_box_email}`}
//                     style={{color:'#1A4B8B'}}
//                   >
//                     {showingTranslateValue(
//                       storeCustomizationSetting?.contact_us?.email_box_email
//                     )}
//                   </a>{" "}
//                   {showingTranslateValue(
//                     storeCustomizationSetting?.contact_us?.email_box_text
//                   )}
//                 </p>
//               </div>
//             )}

//             {loading ? (
//               <CMSkeleton
//                 count={10}
//                 height={20}
//                 error={error}
//                 loading={loading}
//               />
//             ) : (
//               <div className="border p-10 rounded-lg text-center">
//                 <span className="flex justify-center text-4xl  mb-4">
//                   <FiBell />
//                 </span>
//                 <h5 className="text-xl mb-2 font-bold">
//                   {showingTranslateValue(
//                     storeCustomizationSetting?.contact_us?.call_box_title
//                   )}
//                 </h5>
//                 <p className="mb-0 text-base opacity-90 leading-7">
//                   <a
//                     href={`mailto:${storeCustomizationSetting?.contact_us?.call_box_phone}`}
//                     style={{color:'#1A4B8B'}}
//                   >
//                     {showingTranslateValue(
//                       storeCustomizationSetting?.contact_us?.call_box_phone
//                     )}
//                   </a>{" "}
//                   {showingTranslateValue(
//                     storeCustomizationSetting?.contact_us?.call_box_text
//                   )}
//                 </p>
//               </div>
//             )}
//             {loading ? (
//               <CMSkeleton
//                 count={10}
//                 height={20}
//                 error={error}
//                 loading={loading}
//               />
//             ) : (
//               <div className="border p-10 rounded-lg text-center">
//                 <span className="flex justify-center text-4xl  mb-4">
//                   <FiMapPin />
//                 </span>
//                 <h5 className="text-xl mb-2 font-bold">
//                   {showingTranslateValue(
//                     storeCustomizationSetting?.contact_us?.address_box_title
//                   )}
//                 </h5>
//                 <p className="mb-0 text-base opacity-90 leading-7">
//                   <span>
//                     {showingTranslateValue(
//                       storeCustomizationSetting?.contact_us
//                         ?.address_box_address_one
//                     )}
//                   </span>{" "}
//                   <br />
//                   {showingTranslateValue(
//                     storeCustomizationSetting?.contact_us
//                       ?.address_box_address_two
//                   )}{" "}
//                   <br />
//                   {showingTranslateValue(
//                     storeCustomizationSetting?.contact_us
//                       ?.address_box_address_three
//                   )}
//                 </p>
//               </div>
//             )}
//           </div>

//           {/* contact form */}
//           <div className="px-0 pt-24 mx-auto items-center flex flex-col md:flex-row w-full justify-between">
//             <div className="hidden md:w-full lg:w-5/12 lg:flex flex-col h-full">
//               <Image
//                 width={874}
//                 height={874}
//                 src={
//                   storeCustomizationSetting?.contact_us?.midLeft_col_img ||
//                   "/contact-us.png"
//                 }
//                 alt="logo"
//                 className="block w-auto"
//               />
//             </div>
//             <div className="px-0 pb-2 lg:w-5/12 flex flex-col md:flex-row">
//               <form
//                 onSubmit={handleSubmit(submitHandler)}
//                 className="w-full mx-auto flex flex-col justify-center"
//               >
//                 <div className="mb-12">
//                   <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold font-serif mb-3">
//                     <CMSkeleton
//                       count={1}
//                       height={50}
//                       // error={error}
//                       loading={loading}
//                       data={storeCustomizationSetting?.contact_us?.form_title}
//                     />
//                   </h3>
//                   <p className="text-base opacity-90 leading-7">
//                     <CMSkeleton
//                       count={2}
//                       height={20}
//                       // error={error}
//                       loading={loading}
//                       data={
//                         storeCustomizationSetting?.contact_us?.form_description
//                       }
//                     />
//                   </p>
//                 </div>

//                 <div className="flex flex-col space-y-5">
//                   <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
//                     <div className="w-full md:w-1/2 ">
//                       <InputArea
//                         register={register}
//                         label={t("common:contact-page-form-input-name")}
//                         name="name"
//                         type="text"
//                         placeholder={t(
//                           "common:contact-page-form-plaholder-name"
//                         )}
//                       />
//                       <Error errorName={errors.name} />
//                     </div>
//                     <div className="w-full md:w-1/2 md:ml-2.5 lg:ml-5 mt-2 md:mt-0">
//                       <InputArea
//                         register={register}
//                         label={t("common:contact-page-form-input-email")}
//                         name="email"
//                         type="email"
//                         placeholder={t(
//                           "common:contact-page-form-plaholder-email"
//                         )}
//                       />
//                       <Error errorName={errors.email} />
//                     </div>
//                   </div>
//                   <div className="relative">
//                     <InputArea
//                       register={register}
//                       label={t("common:contact-page-form-input-subject")}
//                       name="subject"
//                       type="text"
//                       placeholder={t(
//                         "common:contact-page-form-plaholder-subject"
//                       )}
//                     />
//                     <Error errorName={errors.subject} />
//                   </div>
//                   <div className="relative mb-4">
//                     <Label
//                       label={t("common:contact-page-form-input-message")}
//                     />
//                     <textarea
//                       {...register("message", {
//                         required: `Message is required!`,
//                       })}
//                       name="message"
//                       className="px-4 py-3 flex items-center w-full rounded appearance-none opacity-75 transition duration-300 ease-in-out text-sm focus:ring-0 bg-white border border-gray-300 focus:shadow-none focus:outline-none focus:border-gray-500 placeholder-body"
//                       autoComplete="off"
//                       spellCheck="false"
//                       rows="4"
//                       placeholder={t(
//                         "common:contact-page-form-plaholder-message"
//                       )}
//                     ></textarea>
//                     <Error errorName={errors.message} />
//                   </div>
//                   <div className="relative">
//                     <button
//                       data-variant="flat"
//                       className="md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none  text-white px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 hover:text-white hover:bg-emerald-600 h-12 mt-1 text-sm lg:text-base w-full sm:w-auto"
//                       style={{backgroundColor:'#1A4B8B'}}
//                     >
//                       {t("common:contact-page-form-send-btn")}
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default ContactUs;












import React from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import useTranslation from "next-translate/useTranslation";
import { FiMail, FiMapPin, FiBell } from "react-icons/fi";

// internal import
import Layout from "@layout/Layout";
import Label from "@components/form/Label";
import Error from "@components/form/Error";
import { notifySuccess } from "@utils/toast";
import InputArea from "@components/form/InputArea";
import PageHeader from "@components/header/PageHeader";
import useGetSetting from "@hooks/useGetSetting";
import CMSkeleton from "@components/preloader/CMSkeleton";
import useUtilsFunction from "@hooks/useUtilsFunction";

const ContactUs = () => {
  const { t } = useTranslation();
  const {
    register,
    handleSubmit,
    reset, // Use reset function from react-hook-form
    formState: { errors },
  } = useForm();

  const { showingTranslateValue } = useUtilsFunction();
  const { storeCustomizationSetting, loading, error } = useGetSetting();

  const submitHandler = (data) => {
    notifySuccess(
      "Your message has been sent successfully. We will contact you shortly."
    );
    
    // Reset the form after submission
    reset(); // This will reset the form fields to their default values (empty)
  };

  return (
    <Layout title="Contact Us" description="This is contact us page">
      <div className="bg-white">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
            fontSize: "1.5rem",
            fontWeight: "bold",
          }}
        >
          <h2>Contact Us</h2>
        </div>
        <div className="max-w-screen-2xl mx-auto lg:py-10 py-10 px-4 sm:px-10">
          {/* contact promo */}
          <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8 font-serif">
            {loading ? (
              <CMSkeleton
                count={10}
                height={20}
                error={error}
                loading={loading}
              />
            ) : (
              <div className="border p-10 rounded-lg text-center">
                <span className="flex justify-center text-4xl  mb-4">
                  <FiMail />
                </span>
                <h5 className="text-xl mb-2 font-bold">
                  {showingTranslateValue(
                    storeCustomizationSetting?.contact_us?.email_box_title
                  )}
                </h5>
                <p className="mb-0 text-base opacity-90 leading-7">
                  <a
                    href={`mailto:${storeCustomizationSetting?.contact_us?.email_box_email}`}
                    style={{ color: "#1A4B8B" }}
                  >
                    {showingTranslateValue(
                      storeCustomizationSetting?.contact_us?.email_box_email
                    )}
                  </a>{" "}
                  {showingTranslateValue(
                    storeCustomizationSetting?.contact_us?.email_box_text
                  )}
                </p>
              </div>
            )}

            {loading ? (
              <CMSkeleton
                count={10}
                height={20}
                error={error}
                loading={loading}
              />
            ) : (
              <div className="border p-10 rounded-lg text-center">
                <span className="flex justify-center text-4xl  mb-4">
                  <FiBell />
                </span>
                <h5 className="text-xl mb-2 font-bold">
                  {showingTranslateValue(
                    storeCustomizationSetting?.contact_us?.call_box_title
                  )}
                </h5>
                <p className="mb-0 text-base opacity-90 leading-7">
                  <a
                    href={`mailto:${storeCustomizationSetting?.contact_us?.call_box_phone}`}
                    style={{ color: "#1A4B8B" }}
                  >
                    {showingTranslateValue(
                      storeCustomizationSetting?.contact_us?.call_box_phone
                    )}
                  </a>{" "}
                  {showingTranslateValue(
                    storeCustomizationSetting?.contact_us?.call_box_text
                  )}
                </p>
              </div>
            )}
            {loading ? (
              <CMSkeleton
                count={10}
                height={20}
                error={error}
                loading={loading}
              />
            ) : (
              <div className="border p-10 rounded-lg text-center">
                <span className="flex justify-center text-4xl  mb-4">
                  <FiMapPin />
                </span>
                <h5 className="text-xl mb-2 font-bold">
                  {showingTranslateValue(
                    storeCustomizationSetting?.contact_us?.address_box_title
                  )}
                </h5>
                <p className="mb-0 text-base opacity-90 leading-7">
                  <span>
                    {showingTranslateValue(
                      storeCustomizationSetting?.contact_us
                        ?.address_box_address_one
                    )}
                  </span>{" "}
                  <br />
                  {showingTranslateValue(
                    storeCustomizationSetting?.contact_us
                      ?.address_box_address_two
                  )}{" "}
                  <br />
                  {showingTranslateValue(
                    storeCustomizationSetting?.contact_us
                      ?.address_box_address_three
                  )}
                </p>
              </div>
            )}
          </div>

          {/* contact form */}
          <div className="px-0 pt-24 mx-auto items-center flex flex-col md:flex-row w-full justify-between">
            <div className="hidden md:w-full lg:w-5/12 lg:flex flex-col h-full">
              <Image
                width={874}
                height={874}
                src={
                  storeCustomizationSetting?.contact_us?.midLeft_col_img ||
                  "/contact-us.png"
                }
                alt="logo"
                className="block w-auto"
              />
            </div>
            <div className="px-0 pb-2 lg:w-5/12 flex flex-col md:flex-row">
              <form
                onSubmit={handleSubmit(submitHandler)}
                className="w-full mx-auto flex flex-col justify-center"
              >
                <div className="mb-12">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold font-serif mb-3">
                    <CMSkeleton
                      count={1}
                      height={50}
                      // error={error}
                      loading={loading}
                      data={storeCustomizationSetting?.contact_us?.form_title}
                    />
                  </h3>
                  <p className="text-base opacity-90 leading-7">
                    <CMSkeleton
                      count={2}
                      height={20}
                      // error={error}
                      loading={loading}
                      data={
                        storeCustomizationSetting?.contact_us?.form_description
                      }
                    />
                  </p>
                </div>

                <div className="flex flex-col space-y-5">
                  <div className="flex flex-col md:flex-row space-y-5 md:space-y-0">
                    <div className="w-full md:w-1/2 ">
                      <InputArea
                        register={register}
                        label={t("common:contact-page-form-input-name")}
                        name="name"
                        type="text"
                        placeholder={t(
                          "common:contact-page-form-plaholder-name"
                        )}
                      />
                      <Error errorName={errors.name} />
                    </div>
                    <div className="w-full md:w-1/2 md:ml-2.5 lg:ml-5 mt-2 md:mt-0">
                      <InputArea
                        register={register}
                        label={t("common:contact-page-form-input-email")}
                        name="email"
                        type="email"
                        placeholder={t(
                          "common:contact-page-form-plaholder-email"
                        )}
                      />
                      <Error errorName={errors.email} />
                    </div>
                  </div>
                  <div className="relative">
                    <InputArea
                      register={register}
                      label={t("common:contact-page-form-input-subject")}
                      name="subject"
                      type="text"
                      placeholder={t(
                        "common:contact-page-form-plaholder-subject"
                      )}
                    />
                    <Error errorName={errors.subject} />
                  </div>
                  <div className="relative mb-4">
                    <Label
                      label={t("common:contact-page-form-input-message")}
                    />
                    <textarea
                      {...register("message", {
                        required: `Message is required!`,
                      })}
                      name="message"
                      className="px-4 py-3 flex items-center w-full rounded appearance-none opacity-75 transition duration-300 ease-in-out text-sm focus:ring-0 bg-white border border-gray-300 focus:shadow-none focus:outline-none focus:border-gray-500 placeholder-body"
                      autoComplete="off"
                      spellCheck="false"
                      rows="4"
                      placeholder={t(
                        "common:contact-page-form-plaholder-message"
                      )}
                    ></textarea>
                    <Error errorName={errors.message} />
                  </div>
                  <div className="relative">
                    <button
                      data-variant="flat"
                      className="md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none  text-white px-5 md:px-6 lg:px-8 py-3 md:py-3.5 lg:py-3 hover:text-white hover:bg-emerald-600 h-12 mt-1 text-sm lg:text-base w-full sm:w-auto"
                      style={{ backgroundColor: "#1A4B8B" }}
                    >
                      {t("common:contact-page-form-send-btn")}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactUs;
