// // import React from 'react'
// // import Image from 'next/image'
// // import { assets } from '@/assets/assets'

// // const Contact = () => {

// //   const [result, setResult] = React.useState("");

// //   const onSubmit = async (event) => {
// //     event.preventDefault();
// //     setResult("Sending....");
// //     const formData = new FormData(event.target);

// //     formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY);

// //     const response = await fetch("https://api.web3forms.com/submit", {
// //       method: "POST",
// //       body: formData
// //     });

// //     const data = await response.json();

// //     if (data.success) {
// //       setResult("Thank you! Your form has been submitted successfully.");
// //       event.target.reset();
// //     } else {
// //       console.log("Error", data);
// //       setResult(data.message);
// //     }
// //   };

// //   return (
// //     <div
// //       id="contact"
// //       className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
// //     >
// //       <h4 className="text-center mb-2 text-lg font-Ovo">
// //         Connect with me
// //       </h4>

// //       <h2 className="text-center text-5xl font-Ovo">
// //         Get in touch
// //       </h2>

// //       <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
// //         I'd love to hear from you! If you have any questions, comments, or feedback,
// //         please use the form below.
// //       </p>

// //       <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
// //         <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
// //           <input
// //             type="text"
// //             name='name'
// //             placeholder="Enter your name"
// //             required
// //             className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
// //           />
// //           <input
// //             type="email"
// //             name='email'
// //             placeholder="Enter your email"
// //             required
// //             className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
// //           />
// //         </div>

// //         <textarea
// //           rows="6"
// //           name='message'
// //           placeholder="Enter your message"
// //           required
// //           className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
// //         ></textarea>

// //         <button
// //           type="submit"
// //           className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover"
// //         >
// //           Submit now
// //           <Image
// //             src={assets.right_arrow_white}
// //             alt="Right arrow"
// //             className="w-4"
// //           />
// //         </button>

// //         <p className="mt-4 text-center text-gray-500">{result}</p>
// //       </form>
// //     </div>
// //   )
// // }

// // export default Contact

// "use client";
// import React from "react";
// import Image from "next/image";
// import { motion } from "motion/react";
// import { assets } from "@/assets/assets";

// const Contact = () => {
//   const [result, setResult] = React.useState("");

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setResult("Sending...");
//     const formData = new FormData(event.target);
//     formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY);

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
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
//       className='w-full px-[7%] md:px-[10%] lg:px-[10%] relative py-20 md:py-24 bg-[url("/footer-bg-color.png")] 
//                  bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'
//     >
//       {/* --- Section Title --- */}
//       <h4 className="text-center mb-2 text-sm uppercase tracking-widest text-gray-700 dark:text-gray-400">
//         Connect with me
//       </h4>

//       <h2 className="text-center text-5xl font-Ovo">Get in touch</h2>

//       <p className="text-center max-w-2xl mx-auto mt-5 mb-16 font-Ovo leading-6 text-gray-700 dark:text-gray-300">
//         I'd love to hear from you! If you have any questions, comments, or
//         feedback, please use the form below.
//       </p>

//       {/* --- Form --- */}
//       <motion.form
//         initial={{ opacity: 0, y: 40 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.4 }}
//         className="max-w-2xl mx-auto"
//         onSubmit={onSubmit}
//       >
//         <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
//           <motion.input
//             whileFocus={{ scale: 1.03 }}
//             transition={{ type: "spring", stiffness: 150 }}
//             type="text"
//             name="name"
//             placeholder="Enter your name"
//             required
//             className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 
//                        rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
//           />
//           <motion.input
//             whileFocus={{ scale: 1.03 }}
//             transition={{ type: "spring", stiffness: 150 }}
//             type="email"
//             name="email"
//             placeholder="Enter your email"
//             required
//             className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 
//                        rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90"
//           />
//         </div>

//         <motion.textarea
//           whileFocus={{ scale: 1.02 }}
//           transition={{ type: "spring", stiffness: 120 }}
//           rows="6"
//           name="message"
//           placeholder="Enter your message"
//           required
//           className="w-full p-4 outline-none border-[0.5px] border-gray-400 
//                      rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90"
//         ></motion.textarea>

//         <motion.button
//           whileHover={{ scale: 1.05 }}
//           transition={{ duration: 0.3 }}
//           type="submit"
//           className="py-3 px-8 w-max flex items-center justify-between gap-2 
//                      bg-black/80 text-white rounded-xl mx-auto 
//                      hover:bg-black duration-500 dark:bg-transparent 
//                      dark:border-[0.5px] dark:hover:bg-darkHover"
//         >
//           Submit now
//           <Image
//             src={assets.right_arrow_white}
//             alt="Right arrow"
//             className="w-4"
//           />
//         </motion.button>

//         <motion.p
//           initial={{ opacity: 0, y: 10 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
//           className="mt-4 text-center text-gray-500 dark:text-gray-400 leading-relaxed"
//         >
//           {result}
//         </motion.p>
//       </motion.form>
//     </div>
//   );
// };

// export default Contact;























"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send, 
  CheckCircle2, 
  Loader2,
  Github,
  Linkedin,
  Twitter,
  Instagram
} from "lucide-react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sahilkourav02@gmail.com",
      link: "mailto:sahilkourav02@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9131635893",
      link: "tel:+919131635893"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Indore, India",
      link: null
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" }
  ];

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");
    setIsSuccess(false);

    const formData = new FormData(event.target);
    formData.append("access_key", process.env.NEXT_PUBLIC_ACCESS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Thank you! Your message has been sent successfully.");
        setIsSuccess(true);
        event.target.reset();
        
        // Reset success state after 5 seconds
        setTimeout(() => {
          setResult("");
          setIsSuccess(false);
        }, 5000);
      } else {
        console.log("Error", data);
        setResult("Oops! Something went wrong. Please try again.");
        setIsSuccess(false);
      }
    } catch (error) {
      setResult("Network error. Please check your connection.");
      setIsSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className='w-full px-[7%] md:px-[10%] lg:px-[10%] relative py-20 md:py-24 scroll-mt-20
                 bg-[url("/footer-bg-color.png")] bg-no-repeat bg-center bg-[length:90%_auto] 
                 dark:bg-none'
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h4 className="mb-2 text-sm uppercase tracking-widest text-gray-700 dark:text-gray-400 font-medium">
            Connect with me
          </h4>

          <h2 className="text-5xl font-Ovo text-gray-800 dark:text-white mb-6">
            Get in touch
          </h2>

          <p className="max-w-2xl mx-auto font-Ovo leading-relaxed text-gray-700 dark:text-gray-300">
            I'd love to hear from you! Whether you have a question, want to collaborate, 
            or just want to say hi, feel free to reach out.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Information Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-Ovo font-semibold text-gray-800 dark:text-white mb-6">
                Contact Information
              </h3>
              
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group"
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      className="flex items-center gap-4 p-4 rounded-xl border border-gray-400 dark:border-gray-700
                               bg-white dark:bg-gray-900/50
                               hover:bg-lightHover dark:hover:bg-darkHover
                               hover:border-gray-500 dark:hover:border-gray-600
                               transition-all duration-300"
                    >
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 
                                    flex items-center justify-center flex-shrink-0
                                    group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{info.title}</p>
                        <p className="text-gray-800 dark:text-white">{info.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 p-4 rounded-xl border border-gray-400 dark:border-gray-700
                                  bg-white dark:bg-gray-900/50">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 
                                    flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{info.title}</p>
                        <p className="text-gray-800 dark:text-white">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-Ovo font-semibold text-gray-800 dark:text-white mb-6">
                Follow Me
              </h3>
              
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 * index }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-white dark:bg-gray-900/50 
                             border border-gray-400 dark:border-gray-700
                             hover:border-gray-500 dark:hover:border-gray-600
                             flex items-center justify-center
                             hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600
                             hover:text-white transition-all duration-300
                             group"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Additional Info Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 
                       dark:from-blue-950/20 dark:to-purple-950/20
                       border border-blue-200 dark:border-blue-800"
            >
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                Looking for collaboration?
              </h4>
              <p className="max-w-md text-md leading-relaxed text-gray-500 dark:text-gray-400">
                I'm always interested in hearing about new projects and opportunities. 
                Let's create something amazing together!
              </p>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={onSubmit} className="space-y-6">
              {/* Name and Email Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full p-3.5 outline-none border border-gray-400 dark:border-gray-700
                             rounded-xl bg-white dark:bg-gray-900/50
                             text-gray-800 dark:text-white
                             focus:border-blue-500 dark:focus:border-blue-500
                             focus:ring-2 focus:ring-blue-500/20
                             transition-all duration-300"
                  />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    required
                    className="w-full p-3.5 outline-none border border-gray-400 dark:border-gray-700
                             rounded-xl bg-white dark:bg-gray-900/50
                             text-gray-800 dark:text-white
                             focus:border-blue-500 dark:focus:border-blue-500
                             focus:ring-2 focus:ring-blue-500/20
                             transition-all duration-300"
                  />
                </motion.div>
              </div>

              {/* Subject */}
              <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry"
                  required
                  className="w-full p-3.5 outline-none border border-gray-400 dark:border-gray-700
                           rounded-xl bg-white dark:bg-gray-900/50
                           text-gray-800 dark:text-white
                           focus:border-blue-500 dark:focus:border-blue-500
                           focus:ring-2 focus:ring-blue-500/20
                           transition-all duration-300"
                />
              </motion.div>

              {/* Message */}
              <motion.div whileFocus={{ scale: 1.01 }} className="space-y-2">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  rows="6"
                  name="message"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full p-4 outline-none border border-gray-400 dark:border-gray-700
                           rounded-xl bg-white dark:bg-gray-900/50
                           text-gray-800 dark:text-white
                           focus:border-blue-500 dark:focus:border-blue-500
                           focus:ring-2 focus:ring-blue-500/20
                           transition-all duration-300 resize-none"
                ></textarea>
              </motion.div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 flex items-center justify-center gap-3
                         bg-gradient-to-r from-blue-600 to-purple-600
                         text-white font-semibold rounded-xl
                         hover:from-blue-700 hover:to-purple-700
                         hover:shadow-2xl hover:shadow-blue-500/30 dark:hover:shadow-blue-500/20
                         transition-all duration-500
                         ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Result Message */}
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`p-4 rounded-xl flex items-center gap-3 ${
                    isSuccess
                      ? 'bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800'
                      : 'bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800'
                  }`}
                >
                  {isSuccess && <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400" />}
                  <p className={`text-sm font-Ovo ${
                    isSuccess 
                      ? 'text-green-700 dark:text-green-300' 
                      : 'text-red-700 dark:text-red-300'
                  }`}>
                    {result}
                  </p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;