import React from 'react';

const projects = [
  {
    title: "Self-Healing RAG Pipeline",
    subtitle: "Generative AI | LangGraph | RAG",
    description: "Built an advanced RAG system with self-correction capabilities using LangGraph. Designed a critic agent and cyclical retry logic with query reformulation for reliable QA.",
    tech: ["Python", "LangChain", "LangGraph", "ChromaDB", "Vector Embeddings"],
    link: "https://github.com/vishnu-balineni/self-healing-rag-pipeline",
    color: "bg-black text-white"
  },
  {
    title: "LLM Guardrails Gateway",
    subtitle: "Generative AI | LLM Safety | Middleware",
    description: "Built a middleware layer for LLMs to enforce safety, compliance, and structured output validation. Implemented input guardrails and a YAML-based policy engine.",
    tech: ["Python", "FastAPI", "LangChain", "Pydantic", "LLMs"],
    link: "https://github.com/vishnu-balineni/llm-guardrails-gateway",
    color: "bg-[#ff2a2a] text-white"
  },
  {
    title: "Multi-Model Emotion Detection",
    subtitle: "Deep Learning | CNN | NLP",
    description: "Built a CNN-based emotion recognition system achieving 85% accuracy. Processed 10,000+ images with augmentation and feature engineering.",
    tech: ["Python", "TensorFlow", "Keras", "CNN", "NumPy", "Pandas"],
    link: "https://github.com/vishnu-balineni/Multi_Model_Emotion_Detection",
    color: "bg-gray-100 text-black"
  },
  {
    title: "HRMS Tool",
    subtitle: "Enterprise HR Management System",
    description: "Developed full-stack HRMS supporting 500+ employees. Engineered RBAC system with 6 role hierarchies and optimized backend microservices.",
    tech: ["React", "Spring Boot", "MySQL", "JWT", "REST APIs"],
    link: "https://github.com/SRAYAPANENI/HRMS_Tool_Frontend_Reols",
    color: "bg-black text-white"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0a0a0a] py-32 px-6 md:px-12 w-full font-sans border-t border-gray-900">
      <div className="max-w-6xl mx-auto">
        <div data-aos="fade-up" className="mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 tracking-tight">
            Selected <span className="text-transparent [-webkit-text-stroke:2px_#ff2a2a]">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl font-medium">
            A showcase of my recent work in AI systems, Agentic architectures, and full-stack web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`${project.color} rounded-3xl p-8 flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-500 shadow-2xl relative overflow-hidden`}
            >
              {/* Optional background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-bl-full pointer-events-none transform group-hover:scale-110 transition-transform duration-500"></div>

              <div>
                <div className="text-sm font-bold uppercase tracking-widest mb-2 opacity-70">
                  {project.subtitle}
                </div>
                <h3 className="text-3xl font-black mb-6 tracking-tight">
                  {project.title}
                </h3>
                <p className="opacity-90 leading-relaxed font-medium mb-8 text-sm md:text-base">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((t, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs font-bold rounded-full bg-white/20 backdrop-blur-md border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.link} 
                  className="inline-flex items-center gap-2 font-bold group/link"
                >
                  <span>View Project</span>
                  <svg 
                    className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
