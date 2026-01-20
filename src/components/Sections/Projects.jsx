import { Link } from "react-router-dom";

export const Projects = () => {
    const projects = [
        {
            title: "Bank Management System",
            description: "Developed a console-based Bank Management System in C using Code::Blocks, enabling account creation, balance inquiry, deposits, withdrawals, and account deletion. Utilized file handling for data persistence and designed a user-friendly interface for seamless navigation.",
            technologies: ["C", "Code::Blocks"],
            link: "https://github.com/Koushik-77/Bank-Management",
            problemStatement: "Traditional banking systems often have complex interfaces that are difficult for beginners. This system simplifies basic banking operations with a clean console interface while maintaining data integrity through file storage.",
            demolink:"bank"
        },
        {
            title: "Resume Builder",
            description: "Chef Claude AI is like having your own personal chef in your pocket! Just tell it what ingredients you have, and it uses a smart AI model from Hugging Face to whip up recipe ideas tailored just for you. Whether you’re trying to use up leftovers or experiment with something new, Chef Claude AI is here to help you make tasty meals without any stress.",
            technologies: ["HTML", "CSS", "JavaScript", "Git"],
            link: "https://github.com/Koushik-77/Resume-Generator",
            problemStatement: "Many users struggle with resume formatting. This project simplifies the process by providing an easy-to-use, template-based resume builder.",
            demolink:"resumebuilder"
        },
        {
            title: "Chef Claude Ai",
            description: "Developed a personal website for creating and customizing resumes with an interactive UI and responsive design.Implemented responsive design principles to ensure optimal viewing across devices, and added form validation to guide users through the resume creation process. Users can input details, preview, and download resumes in PDF format.",
            technologies: ["React (Vite)", "JavaScript", "AWS", "Git", "AI Integration"],
            link: "https://github.com/Koushik-77/Chef-Claude-AI",
            problemStatement: "Many users struggle with resume formatting. This project simplifies the process by providing an easy-to-use, template-based resume builder.",
            demolink:"chefclaude"
        },
        {
            title: "QuizApp",
            description: "Built a backend-driven quiz application to understand core Spring Boot concepts like REST APIs, controllers, services, repositories, and database integration. Implemented CRUD operations for questions, quiz creation logic, and score calculation based on user responses.",
            technologies: ["Java", "Spring Boot", "REST APIs", "PostgreSQL.", "Postman"],
            link: "https://github.com/Koushik-77/QuizApp",
            problemStatement: "To learn and gain hands-on experience with Spring Boot by building a real-world backend application.",
            demolink: "quizapp"
        }

    ];

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Featured Projects
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <div 
                            key={index}
                            className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-6 hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)]"
                        >
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-300 mb-4 leading-relaxed">
                                {project.description}
                            </p>
                            
                            {project.problemStatement && (
                                <div className="mb-4 p-3 bg-blue-900/10 border border-blue-400/20 rounded-lg">
                                    <h4 className="text-sm font-semibold text-blue-300 mb-1">Problem Solved:</h4>
                                    <p className="text-xs text-blue-200/80">{project.problemStatement}</p>
                                </div>
                            )}
                            
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                    <span 
                                        key={techIndex}
                                        className="bg-blue-500/10 text-blue-400 text-xs py-1 px-3 rounded-full hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                            >
                                View Project
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>

                            {project.demolink==="chefclaude" &&<Link 
                                to="/chef"
                                className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors ml-4"
                                >
                                Demo
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}