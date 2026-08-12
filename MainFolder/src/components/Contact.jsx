import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Parallax translation for the big text
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "30%"]);

  return (
    <section ref={ref} id="contact" className="bg-[#0a0a0a] w-full min-h-screen relative overflow-hidden flex items-end pt-32 pb-0 md:pb-0 border-t border-gray-900">
      {/* Huge Background Text */}
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-start items-center overflow-hidden pointer-events-none z-0 pt-16 md:pt-12"
      >
        <h1
          className="text-[25vw] leading-[0.75] font-black text-white uppercase tracking-tighter select-none scale-y-[1.6] origin-top"
          style={{ fontFamily: "'Impact', 'Arial Black', sans-serif" }}
        >
          Contact
        </h1>
      </motion.div>

      {/* Form Card Overlay */}
      <div className="relative z-10 w-full flex justify-end items-end">
        <div
          data-aos="fade-up"
          className="bg-[#661010] w-full md:w-[85%] lg:w-[75%] p-8 md:p-16 text-white flex flex-col justify-between shadow-[0_0_50px_rgba(102,16,16,0.5)]"
        >
          <div className="flex flex-col md:flex-row justify-between w-full mb-12 md:mb-20">
            <div className="text-xs font-bold tracking-[0.2em] uppercase opacity-90">
              Reach Me
            </div>
            <div className="text-sm md:text-base font-medium flex flex-col items-start md:items-end gap-1 mt-4 md:mt-0 text-white/90">
              <p className="font-bold text-lg text-white">Vishnuvardhan Balineni</p>
              <p><a href="mailto:vishnubalinenI3@gmail.com" className="hover:text-black transition-colors">vishnubalinenI3@gmail.com</a> | +91 7396132709</p>
              <p className="flex gap-4 mt-2">
                <a href="https://www.linkedin.com/in/vishnuvardhan-chinta-a7560a257/" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-black transition-colors">LinkedIn</a>
                <a href="https://github.com/vishnu-balineni" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-black transition-colors">GitHub</a>
                <a href="https://leetcode.com/u/Vishnuvardhan_180425/" target="_blank" rel="noreferrer" className="underline underline-offset-2 hover:text-black transition-colors">LeetCode</a>
              </p>
            </div>
          </div>

          <form
            className="flex flex-col gap-12 md:gap-16 w-full"
            onSubmit={(e) => {
              e.preventDefault();
              const fn = document.getElementById('firstName').value;
              const ln = document.getElementById('lastName').value;
              const email = document.getElementById('email').value;
              const msg = document.getElementById('message').value;
              const text = `Hi Vishnuvardhan, I am ${fn} ${ln}.\nEmail: ${email}\n\n${msg}`;
              window.open(`https://wa.me/917396132709?text=${encodeURIComponent(text)}`, '_blank');
            }}
          >
            <div className="flex flex-col md:flex-row gap-12 md:gap-20 w-full">
              {/* Left Column */}
              <div className="flex-1 flex flex-col gap-10">
                <div className="relative">
                  <input
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    autoComplete="off"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none [&:-webkit-autofill]:bg-transparent [&:-webkit-autofill]:text-white [&:-webkit-autofill]:shadow-[0_0_0_1000px_#661010_inset]"
                  />
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="lastName"
                    placeholder="Last Name"
                    autoComplete="off"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none [&:-webkit-autofill]:bg-transparent [&:-webkit-autofill]:text-white [&:-webkit-autofill]:shadow-[0_0_0_1000px_#661010_inset]"
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    placeholder="Email"
                    autoComplete="off"
                    className="w-full bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium rounded-none [&:-webkit-autofill]:bg-transparent [&:-webkit-autofill]:text-white [&:-webkit-autofill]:shadow-[0_0_0_1000px_#661010_inset]"
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="flex-1 flex flex-col">
                <div className="relative h-full flex flex-col">
                  <textarea
                    id="message"
                    placeholder="Type your message here"
                    autoComplete="off"
                    className="w-full h-full min-h-[120px] bg-transparent border-b border-white/40 pb-3 text-lg focus:outline-none focus:border-white transition-colors placeholder-white font-medium resize-none rounded-none [&:-webkit-autofill]:bg-transparent [&:-webkit-autofill]:text-white [&:-webkit-autofill]:shadow-[0_0_0_1000px_#661010_inset]"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row gap-12 mt-4">
              {/* Left text */}
              <div className="flex-1 flex items-start gap-4 text-sm font-medium text-white/90">
                <input
                  type="checkbox"
                  id="permission"
                  className="mt-1 w-4 h-4 rounded-sm border-white/40 bg-transparent text-white focus:ring-white focus:ring-offset-0 focus:ring-offset-transparent cursor-pointer"
                  style={{ accentColor: "white" }}
                />
                <label htmlFor="permission" className="cursor-pointer max-w-[280px] leading-snug">
                  I give permission to contact me at this email address.
                </label>
              </div>

              {/* Right text & button */}
              <div className="flex-1 flex flex-col items-start sm:items-end justify-end mt-6 sm:mt-0">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full border border-white/40 text-white font-bold flex items-center justify-center gap-3 hover:bg-black hover:border-black transition-all duration-300 group whitespace-nowrap"
                >
                  Send
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;
