import { useState, useEffect } from 'react';
import { Github, ExternalLink, ChevronDown, Sun, Moon, Linkedin } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A e-commerce platform for beauty services with a modern design",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "Tailwind CSS", "Vite"],
    github: "https://github.com/ZoTaD/Glamm",
    live: "https://glammestetica.netlify.app/"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    tech: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/ZoTaD/mern-app",
    live: "https://demo.com"
  },
  {
    title: "Coming Soon",
    description: "",
    image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80&w=800",
    tech: ["React", "OpenWeather API", "ChartJS"],
    github: "https://github.com",
    live: "https://tasks.blonix.pro/"
  }
];

const skills = [
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
  }
];

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark:bg-gray-900' : 'bg-gray-50'}`}>
      {/* Theme Toggle and Social Links */}
      <div className="fixed top-4 right-4 flex items-center gap-4 z-20">
        <a 
          href="https://github.com/ZoTaD" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          <Github className="text-gray-700 dark:text-gray-300" size={24} />
        </a>
        <a 
          href="https://www.linkedin.com/in/nick-rg/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
        >
          <Linkedin className="text-gray-700 dark:text-gray-300" size={24} />
        </a>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300 hover:bg-gray-300 dark:hover:bg-gray-600"
          aria-label="Toggle theme"
        >
          {darkMode ? <Sun className="text-yellow-500" size={24} /> : <Moon className="text-gray-700" size={24} />}
        </button>
      </div>

      {/* Hero Section */}
      <header className="relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=2400"
            alt="Programming background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-blue-800 dark:to-indigo-900 text-white">
          <div className="container mx-auto px-6 py-32">
            <h1 className="text-5xl font-bold mb-4">Nicolás Rodriguez Grundy</h1>
            <h2 className="text-3xl font-semibold mb-6">Full Stack Developer</h2>
            <p className="text-xl mb-8 max-w-2xl">
              Passionate about creating elegant solutions to complex problems through code.
              Specialized in modern web technologies and scalable applications.
            </p>
            <a href="#projects" className="inline-flex items-center">
              <span className="text-lg mr-2">View My Work</span>
              <ChevronDown className="animate-bounce" />
            </a>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-20 container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={project.github} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                    <Github size={20} />
                  </a>
                  <a href={project.live} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center dark:text-white">Technical Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-24 h-24 p-4 rounded-xl bg-white dark:bg-gray-700 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <img
                    src={skill.logo}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="mt-3 text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer 
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-8 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Nicolás Rodriguez Grundy. Built with React and Tailwind CSS.</p>
        </div>
      </footer>*/}
    </div>
  );
}

export default App;