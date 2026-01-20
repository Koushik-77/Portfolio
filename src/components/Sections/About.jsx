
export const About = () => {
    const frontendSkills = [
        "HTML", 
        "CSS", 
        "TailWind",
        "JavaScript",
    ];
    const backendSkills = [
        "SpringBoot", 
        "Java",
        "AWS",
        "MongoDB",
    ];
    
    return (
        <section 
            id="about" 
            className="min-h-screen flex items-center justify-center py-20"
        >
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>
                <div className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        A passionate developer who enjoys solving complex problems and building scalable web applications. 
                        I thrive on creating innovative solutions and continuously exploring new technologies to enhance efficiency and performance. 
                        With a strong foundation in Java, Spring Boot, AWS, and React, I'm always looking for opportunities to learn, grow, and make an impact through code.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all bg-white/5 hover:bg-white/10 backdrop-blur-sm">
                        <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            Education
                        </h3>
                        <div className="space-y-6">
                            <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-blue-400/80 before:ring-4 before:ring-blue-400/20">
                                <h4 className="text-lg font-semibold text-white">
                                    B.Tech in Computer Science
                                </h4>
                                <p className="text-sm text-blue-300/80 mb-2">
                                    CMR Institute of Technology (2022-2026)
                                </p>
                            </div>
                            <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-blue-400/80 before:ring-4 before:ring-blue-400/20">
                                <h4 className="text-lg font-semibold text-white mb-2">
                                    Relevant Coursework
                                </h4>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    <span className="text-xs py-1 px-2 rounded-full bg-blue-400/10 text-blue-300">Data Structures</span>
                                    <span className="text-xs py-1 px-2 rounded-full bg-blue-400/10 text-blue-300">Web Development</span>
                                    <span className="text-xs py-1 px-2 rounded-full bg-blue-400/10 text-blue-300">Cloud Computing</span>
                                    <span className="text-xs py-1 px-2 rounded-full bg-blue-400/10 text-blue-300">Computer Network</span>
                                    <span className="text-xs py-1 px-2 rounded-full bg-blue-400/10 text-blue-300">Operating Systems</span>
                                </div>
                            </div>
                        </div>
                </div>
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all bg-white/5 hover:bg-white/10 backdrop-blur-sm">
                        <h3 className="text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                            Experience
                        </h3>
                        <div className="space-y-6">
                            <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-blue-400/80 before:ring-4 before:ring-blue-400/20">
                                <h4 className="text-lg font-semibold text-white">
                                    Student (Part-time) | Smart Interviews
                                </h4>
                                <p className="text-sm text-blue-300/80 mb-2">
                                    Aug 2024 - Mar 2025 | Hyderabad, India (On Site)
                                </p>
                                <p className="text-gray-300 leading-relaxed">
                                    Gained in-depth knowledge of Java, Data Structures, and Algorithms, focusing on problem-solving and optimizing code efficiency.
                                </p>
                            </div>
                        </div>
                        <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-3 before:w-3 before:rounded-full before:bg-blue-400/80 before:ring-4 before:ring-blue-400/20">
                            <h4 className="text-lg font-semibold text-white">
                                DevOps Intern | EDUGENE
                            </h4>
                            <p className="text-sm text-blue-300/80 mb-2">
                                2024 - 2025 | Hyderabad, India (On Site/Remote)
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Worked on CI/CD pipelines, cloud deployment, and automation using AWS, Docker, and Git. Assisted in monitoring applications and improving deployment workflows.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};