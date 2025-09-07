// my-portfolio/src/Portfolio.jsx
import { motion } from "framer-motion";
import {
  Briefcase,
  User,
  Mail,
  Palette,
  Book,
  Globe,
  GraduationCap,
  ExternalLink,
} from "lucide-react";

/** Minimal local UI components (no shadcn, no alias) */
function Button({ className = "", children, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-2xl px-6 py-3 font-bold transition hover:opacity-90 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
function Card({ className = "", children, ...props }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/10 bg-black/70 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
function CardContent({ className = "", children, ...props }) {
  return (
    <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export default function PortfolioMockup() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-950 text-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between p-6 shadow-md bg-black/70 backdrop-blur sticky top-0 z-50 border-b border-purple-500/30">
        <h1 className="text-2xl font-bold tracking-tight text-cyan-400 drop-shadow-lg">
          Akash Kumar
        </h1>
        <nav className="space-x-6 text-base font-medium">
          {[
            "About",
            "Experience",
            "Skills",
            "Education",
            "Languages",
            "Portfolio",
            "Work",
            "Contact",
          ].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-purple-400 transition"
            >
              {link}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-400 drop-shadow-[0_0_20px_rgba(255,0,255,0.6)]"
        >
          Akash Kumar
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="max-w-2xl text-lg text-gray-300 mb-6"
        >
          Graphic Designer | Photoshop | Illustrator | Figma | After Effects | InDesign
        </motion.p>
        <Button className="text-lg bg-gradient-to-r from-cyan-400 to-pink-500 text-black shadow-[0_0_20px_rgba(255,0,255,0.5)]">
          View My Work
        </Button>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 px-6 bg-black/40 border-t border-b border-purple-500/20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 text-cyan-400 drop-shadow">
            About Me
          </h3>
          <p className="text-lg text-gray-300">
            I am a skilled graphic designer with over five years of experience, proficient
            in Adobe Photoshop, Illustrator, InDesign, Figma, and After Effects. My diverse
            expertise allows me to create captivating website banners, social media posts,
            impactful print materials, and engaging videos.
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <h3 className="text-3xl font-bold text-center mb-12 text-purple-400">
          Work Experience
        </h3>
        <div className="max-w-4xl mx-auto space-y-8">
          {[
            {
              role: "Graphic Designer",
              company: "Qubo (Hero Electricix)",
              time: "Apr 2023 – Present",
              color: "from-cyan-500/20 to-black",
            },
            {
              role: "Graphic Designer",
              company: "Byju’s Exam Prep",
              time: "Dec 2021 – Apr 2023",
              color: "from-purple-500/20 to-black",
            },
            {
              role: "Intern to Sr. Executive Designer",
              company: "Moglix Pvt. Ltd",
              time: "Nov 2019 – Dec 2021",
              color: "from-pink-500/20 to-black",
            },
          ].map((exp, i) => (
            <div
              key={i}
              className={`bg-gradient-to-r ${exp.color} p-6 rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.1)]`}
            >
              <h4 className="font-semibold text-xl text-cyan-300">
                {exp.company}{" "}
                <span className="text-gray-400 text-sm">({exp.time})</span>
              </h4>
              <p className="text-gray-200">{exp.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-6 bg-black/40 border-t border-b border-purple-500/20"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 text-pink-400">Expertise In</h3>
          <div className="flex justify-center gap-6 flex-wrap">
            {[
              { icon: <Palette className="w-5 h-5 text-cyan-400" />, label: "Photoshop" },
              { icon: <User className="w-5 h-5 text-purple-400" />, label: "Illustrator" },
              { icon: <Briefcase className="w-5 h-5 text-pink-400" />, label: "Figma" },
              { icon: <Book className="w-5 h-5 text-green-400" />, label: "After Effects" },
              { icon: <Book className="w-5 h-5 text-yellow-400" />, label: "InDesign" },
            ].map((skill, i) => (
              <div
                key={i}
                className="flex items-center gap-2 bg-black/60 border border-purple-500/30 shadow-[0_0_15px_rgba(255,0,255,0.3)] rounded-2xl px-4 py-2"
              >
                {skill.icon} <span>{skill.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6">
        <h3 className="text-3xl font-bold text-center mb-12 text-cyan-400">Education</h3>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { degree: "B.A. in Arts", school: "Delhi University", year: "2016 – 2019" },
            {
              degree: "Diploma in Graphic Design",
              school: "Arena Animation",
              year: "2017 – 2019",
            },
          ].map((edu, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-black/50 border border-purple-500/30 p-4 rounded-2xl shadow-[0_0_10px_rgba(0,255,255,0.2)]"
            >
              <GraduationCap className="w-6 h-6 text-pink-400" />
              <div>
                <h4 className="font-semibold text-lg text-cyan-300">{edu.degree}</h4>
                <p className="text-gray-400">
                  {edu.school} <span className="text-sm">({edu.year})</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Languages Section */}
      <section
        id="languages"
        className="py-20 px-6 bg-black/40 border-t border-b border-purple-500/20"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 text-purple-400">Languages</h3>
        </div>
        <div className="flex justify-center gap-6 flex-wrap">
          {["English", "Hindi"].map((lang, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-5 py-2 bg-black/70 border border-cyan-500/30 rounded-2xl shadow-[0_0_10px_rgba(255,0,255,0.3)]"
            >
              <Globe className="w-5 h-5 text-cyan-400" /> <span>{lang}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Behance Portfolio */}
      <section id="portfolio" className="py-20 px-6">
        <h3 className="text-3xl font-bold text-center mb-12 text-pink-400">
          Behance Portfolio
        </h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((i) => (
            <motion.a
              key={i}
              href="https://www.behance.net/akashkumar6"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="block group"
            >
              <Card className="shadow-[0_0_15px_rgba(255,0,255,0.3)] border border-purple-500/30">
                <img
                  src={`https://picsum.photos/600/400?blur=3&random=${i + 10}`}
                  alt="Behance Project"
                  className="w-full h-48 object-cover opacity-90 group-hover:opacity-100 transition"
                />
                <CardContent className="p-4 flex justify-between items-center">
                  <h4 className="font-semibold text-lg text-cyan-300">
                    Behance Project {i}
                  </h4>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-pink-400" />
                </CardContent>
              </Card>
            </motion.a>
          ))}
        </div>
      </section>

      {/* Work Showcase */}
      <section
        id="work"
        className="py-20 px-6 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"
      >
        <h3 className="text-3xl font-bold text-center mb-12 text-cyan-400">My Work</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="shadow-[0_0_15px_rgba(0,255,255,0.4)] border border-cyan-500/30">
                <img
                  src={`https://picsum.photos/600/400?random=${i}`}
                  alt="Work Sample"
                  className="w-full h-48 object-cover opacity-90 hover:opacity-100 transition"
                />
                <CardContent>
                  <h4 className="font-semibold text-lg text-purple-300 mb-2">
                    Project {i}
                  </h4>
                  <p className="text-sm text-gray-400">
                    Description of the project showcasing creative skills and tools used.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 px-6 bg-black/40 border-t border-purple-500/30"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 text-pink-400">Let’s Work Together</h3>
          <p className="text-lg text-gray-300 mb-6">
            Got a project in mind? I’d love to help bring it to life.
          </p>
          <Button className="text-lg flex items-center gap-2 mx-auto bg-gradient-to-r from-cyan-400 to-pink-500 text-black shadow-[0_0_20px_rgba(255,0,255,0.5)]">
            <Mail className="w-5 h-5" /> mails2akr@gmail.com
          </Button>
          <p className="text-gray-400 mt-4">📍 New Delhi | 📞 +91 8700875455</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gradient-to-r from-cyan-500 to-pink-500 text-sm text-black font-semibold">
        © {new Date().getFullYear()} Akash Kumar. All rights reserved.
      </footer>
    </div>
  );
}
