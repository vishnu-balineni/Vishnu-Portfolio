import React from 'react';
import stackImage from '../assets/about/profile.jpeg';
import aiBrainImage from '../assets/about/corecs.png';
import aiAgentImage from '../assets/about/rag.png';
import aiLlmImage from '../assets/about/llm.png';
import mernStackImage from '../assets/about/mern.png';

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">

        {/* Left Side: ID Badge and Skills */}
        <div className="flex flex-col items-center w-full md:w-80 lg:w-96 shrink-0 mt-12 md:mt-0">

          <div className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black -translate-x-1/2 z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded-sm border border-gray-400 -translate-x-1/2 z-10"></div>

            {/* Badge - Single Frame Design */}
            <div className="w-72 md:w-80 rounded-3xl shadow-2xl z-20 border-[16px] border-gray-900 bg-gray-900 overflow-hidden relative">
              <img
                src={stackImage}
                alt="Profile"
                className="w-full h-full object-cover block m-0 p-0"
                style={{ display: 'block' }}
              />
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div className="flex-1 text-white mt-8 md:mt-0 relative z-20">

          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">Hello!</h2>
          <p className="text-lg font-bold mb-6 leading-relaxed max-w-3xl text-red-50">
            Hi, my name is <span className="text-black text-xl font-black mx-1 tracking-wide uppercase">Vishnuvardhan Balineni</span>, a B.Tech Computer Science graduate in 2027 from IIIT Nuzvid with a CGPA of 9.1.
          </p>
          <p className="text-lg font-bold mb-8 leading-relaxed max-w-3xl text-red-50">
            I have a strong foundation in AI/LLM systems, Agentic AI, and scalable full-stack development. While I bring valuable internship experience, I am eagerly looking for an opportunity as a fresher. I am highly motivated, ready to learn quickly, and completely dedicated to proving my worth if given the chance to contribute to your team.
          </p>

          <div className="mb-10">
            <a href="/Vishnu_Resume.pdf" target="_blank" rel="noreferrer" className="inline-block bg-black text-white px-8 py-3 rounded-full font-bold shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:bg-gray-900 hover:scale-105 transition-all">
              View My Resume
            </a>
          </div>
          {/* Horizontal Skills Row (Transparent & Large) */}
          <div className="flex items-center gap-6 md:gap-10 mt-8 flex-wrap">
            <div data-aos="zoom-in" data-aos-delay="600" className="w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-2xl p-2 md:p-3 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <img src={aiLlmImage} alt="AI LLM" className="max-w-full max-h-full object-contain" />
            </div>
            <div data-aos="zoom-in" data-aos-delay="450" className="w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-2xl p-2 md:p-3 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <img src={aiAgentImage} alt="AI Agent" className="max-w-full max-h-full object-contain" />
            </div>
            <div data-aos="zoom-in" data-aos-delay="750" className="w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-2xl p-2 md:p-3 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <img src={mernStackImage} alt="MERN Stack" className="max-w-full max-h-full object-contain" />
            </div>
            <div data-aos="zoom-in" data-aos-delay="300" className="w-16 h-16 md:w-24 md:h-24 bg-white/10 rounded-2xl p-2 md:p-3 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <img src={aiBrainImage} alt="AI Brain" className="max-w-full max-h-full object-contain" />
            </div>
          </div>

        </div>
      </div>

      {/* Full Width Sections below About */}
      <div className="max-w-6xl mx-auto mt-20 relative z-20">

        <div className="bg-white text-black p-6 md:p-10 rounded-[2rem] shadow-2xl mb-12 relative border border-gray-200 w-full">
          <h3 className="text-xl md:text-2xl font-black mb-4">A Note to Hiring Managers & Engineers</h3>
          <div className="italic text-sm md:text-base font-medium text-gray-800 space-y-4">
            <p>As a fresher, I don't claim to know everything—and I don't think anyone does. What I do bring is curiosity, consistency, and the ability to learn quickly. I enjoy understanding systems from first principles and working across the data layer, memory layer, and agent orchestration of AI applications while continuously expanding my knowledge.</p>
            <p>I believe great engineering comes from learning, building, and collaborating with people who challenge you to improve. If given the opportunity, I'll bring ownership, persistence, adaptability, and my full effort every single day. My goal isn't just to write code—it's to become the kind of engineer that teammates trust and can rely on.</p>
            <p>If you're looking for someone who is eager to learn, quick to adapt, and committed to growing into a strong AI and software engineer, I'd be grateful for the opportunity to contribute to your team and learn from experienced mentors.</p>
            <p>I'm fortunate to have already secured a placement offer, so my motivation isn't simply to find a job—it's to work with exceptional teams, solve meaningful problems, and accelerate my growth by contributing wherever I can.</p>
          </div>
        </div>

        {/* Detailed Skills Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* AI Engineering */}
          <div data-aos="fade-up" className="bg-black/20 p-6 rounded-3xl border border-white/20 hover:bg-black/30 transition-colors shadow-lg">
            <h4 className="text-xl font-black mb-4 text-white">Generative AI & LLMs</h4>
            <div className="flex flex-wrap gap-2">
              {['LangChain', 'LangGraph', 'RAG', 'Prompt Engineering', 'AI Guardrails', 'LLM Workflows'].map(skill => (
                <span key={skill} className="bg-white text-black text-[11px] md:text-xs font-bold px-3 py-1.5 rounded-full">{skill}</span>
              ))}
            </div>
          </div>
          {/* Machine Learning & Deep Learning */}
          <div data-aos="fade-up" data-aos-delay="100" className="bg-black/20 p-6 rounded-3xl border border-white/20 hover:bg-black/30 transition-colors shadow-lg">
            <h4 className="text-xl font-black mb-4 text-white">Machine & Deep Learning</h4>
            <div className="flex flex-wrap gap-2">
              {['PyTorch', 'Keras', 'CNNs & ANNs', 'Data Processing', 'Pandas & NumPy', 'Scikit-learn'].map(skill => (
                <span key={skill} className="bg-transparent border border-white text-white text-[11px] md:text-xs font-bold px-3 py-1.5 rounded-full">{skill}</span>
              ))}
            </div>
          </div>
          {/* Backend & Databases */}
          <div data-aos="fade-up" data-aos-delay="200" className="bg-black/20 p-6 rounded-3xl border border-white/20 hover:bg-black/30 transition-colors shadow-lg">
            <h4 className="text-xl font-black mb-4 text-white">Full Stack & Databases</h4>
            <div className="flex flex-wrap gap-2">
              {['Java', 'Python', 'React', 'Spring Boot', 'REST APIs', 'PostgreSQL', 'ChromaDB', 'MySQL'].map(skill => (
                <span key={skill} className="bg-black text-white text-[11px] md:text-xs font-bold px-3 py-1.5 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.5)]">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" /></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z" /></svg>
      </div>
    </section>
  );
};

export default About;
