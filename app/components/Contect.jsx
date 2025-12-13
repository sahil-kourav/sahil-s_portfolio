// import React from 'react'
// import Image from 'next/image'
// import { assets } from '@/assets/assets'

// const Contact = () => {

//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending....");
//     const formData = new FormData(event.target);

//     formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY);

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData
//     });

//     const data = await response.json();

//     if (data.success) {
//       setResult("Thank you! Your form has been submitted successfully.");
//       event.target.reset();
//     } else {
//       console.log("Error", data);
//       setResult(data.message);
//     }
//   };

//   return (
//     <div
//       id="contact"
//       className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
//     >
//       <h4 className="text-center mb-2 text-lg font-Ovo">
//         Connect with me
//       </h4>

//       <h2 className="text-center text-5xl font-Ovo">
//         Get in touch
//       </h2>

//       <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
//         I'd love to hear from you! If you have any questions, comments, or feedback,
//         please use the form below.
//       </p>

//       <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
//         <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
//           <input
//             type="text"
//             name='name'
//             placeholder="Enter your name"
//             required
//             className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
//           />
//           <input
//             type="email"
//             name='email'
//             placeholder="Enter your email"
//             required
//             className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
//           />
//         </div>

//         <textarea
//           rows="6"
//           name='message'
//           placeholder="Enter your message"
//           required
//           className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
//         ></textarea>

//         <button
//           type="submit"
//           className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
//         >
//           Submit now
//           <Image
//             src={assets.right_arrow_white}
//             alt="Right arrow"
//             className="w-4"
//           />
//         </button>

//         <p className="mt-4 text-center text-gray-500">{result}</p>
//       </form>
//     </div>
//   )
// }

// export default Contact

"use client";
import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { assets } from "@/assets/assets";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Thank you! Your form has been submitted successfully.");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div
      id="contact"
      className='w-full px-[7%] md:px-[10%] lg:px-[10%] py-20 min-h-screen bg-[url("/footer-bg-color.png")] 
                 bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
    >
      {/* --- Section Title --- */}
      <h4 className="text-center mb-2 text-sm uppercase tracking-widest text-gray-700 dark:text-gray-400">
        Connect with me
      </h4>

      <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-16 font-Ovo leading-6 text-gray-700 dark:text-gray-300">
        I'd love to hear from you! If you have any questions, comments, or
        feedback, please use the form below.
      </p>

      {/* --- Form --- */}
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="max-w-2xl mx-auto"
        onSubmit={onSubmit}
      >
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <motion.input
            whileFocus={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 
                       rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
          />
          <motion.input
            whileFocus={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 
                       rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
          />
        </div>

        <motion.textarea
          whileFocus={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 120 }}
          rows="6"
          name="message"
          placeholder="Enter your message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 
                     rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 
                     bg-black/80 text-white rounded-xl mx-auto 
                     hover:bg-black duration-500 dark:bg-transparent 
                     dark:border-[0.5px] dark:hover:bg-darkHover"
        >
          Submit now
          <Image
            src={assets.right_arrow_white}
            alt="Right arrow"
            className="w-4"
          />
        </motion.button>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-4 text-center text-gray-500 dark:text-gray-400 leading-relaxed"
        >
          {result}
        </motion.p>
      </motion.form>
    </div>
  );
};

export default Contact;
