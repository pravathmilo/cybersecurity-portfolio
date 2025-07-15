// src/pages/Index.tsx
import React from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Terminal } from "@/components/terminal";
import { ProjectCard } from "@/components/project-card";
import { SkillCard } from "@/components/skill-card";
import { SectionHeader } from "@/components/section-header";
import { CyberBadge } from "@/components/ui/cyber-badge";
import { Button } from "@/components/ui/button";
import {
  Code,
  Server,
  Wifi,
  Lock,
  Home,
  MessageSquare,
  FileCode,
  Database,
  Shield,
  ScrollText,
  Terminal as TerminalIcon,
} from "lucide-react";

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cyber-dark via-cyber-darker to-cyber-black text-white relative">
      <div className="matrix-background" />
      <div className="grid-pattern" />
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="container mx-auto px-4 min-h-[calc(100vh-4rem)] pt-16 flex flex-col justify-center"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                <span className="block font-mono relative overflow-hidden">
                  
                  <span className="absolute inset-0 bg-cyber-dark/30 animate-scanline" />
                </span>
                <span className="block text-cyber-blue cyber-text-shadow">
                  Pravath
                </span>
              </h1>
              <p className="text-xl text-gray-400 animate-fade-in">
                Building secure systems through offensive security testing
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <CyberBadge variant="blue">Python</CyberBadge>
              <CyberBadge variant="green">Java</CyberBadge>
              <CyberBadge variant="red">C++</CyberBadge>
              <CyberBadge variant="purple">Kali Linux</CyberBadge>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="block">
                <Button
                  className="bg-cyber-blue hover:bg-cyber-bright-blue text-black"
                  size="lg"
                >
                  View Projects
                </Button>
              </a>
              <a href="#contact" className="block">
                <Button
                  variant="outline"
                  className="border-cyber-blue text-cyber-blue hover:bg-cyber-blue/10"
                  size="lg"
                >
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-cyber-blue to-cyber-purple opacity-75 blur" />
            <Terminal
              className="relative"
              text={
                "$ nmap -sS -sV target.com\n" +
                "Starting Nmap scan...\n" +
                "Port 80/tcp open\n" +
                "Port 443/tcp open\n" +
                "Service detection completed\n" +
                "Vulnerabilities found: 3"
              }
              speed={50}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-cyber-darker">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader
            title="Featured Projects"
            subtitle="Recent cybersecurity projects and research"
          />
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Cybersecurity Home Lab"
              description="A beginner-friendly cybersecurity home lab setup using VirtualBox, Kali Linux, and vulnerable machines to practice real world hacking and cybersecurity."
              icon={<Shield className="h-5 w-5" />}
              badges={["VirtualBox", "Kali Linux", "Metasploitable 2"]}
              imageUrl="/home-lab.png"
            />
            <ProjectCard
              title="Twitter Spam Detection"
              description="Developed a Twitter-like platform with automated content moderation to detect and prevent cyberbullying through predefined keyword analysis."
              icon={<MessageSquare className="h-5 w-5" />}
              badges={["JavaScript", "HTML/CSS", "Apache Tomcat"]}
              imageUrl="/twitter.png"
            />
            <ProjectCard
              title="IoT Home Automation"
              description="Created a fully automated home system using various IoT sensors, from automated plant watering to smart doors and lighting controls."
              icon={<Home className="h-5 w-5" />}
              badges={["Python", "Arduino", "IoT Sensors"]}
              imageUrl="/iot.jpg"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader
            title="Technical Skills"
            subtitle="Programming languages, tools, and technologies"
          />
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <SkillCard
              title="Programming Languages"
              icon={<Code className="h-5 w-5" />}
              level={4}
              variant="blue"
            />
            <SkillCard
              title="Penetration Testing"
              icon={<Lock className="h-5 w-5" />}
              level={3}
              variant="red"
            />
            <SkillCard
              title="Network Analysis"
              icon={<Wifi className="h-5 w-5" />}
              level={4}
              variant="purple"
            />
            <SkillCard
              title="Operating Systems"
              icon={<TerminalIcon className="h-5 w-5" />}
              level={5}
              variant="green"
            />
            <SkillCard
              title="Databases"
              icon={<Database className="h-5 w-5" />}
              level={3}
              variant="blue"
            />
            <SkillCard
              title="Scripting"
              icon={<FileCode className="h-5 w-5" />}
              level={4}
              variant="red"
            />
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-cyber-darker">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader
            title="Certifications"
            subtitle="Professional certifications and achievements"
          />
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-cyber-blue/30 bg-cyber-dark/50 p-6 space-y-4">
              <div className="flex items-center gap-3 justify-center">
                <ScrollText className="h-6 w-6 text-cyber-blue" />
                <h3 className="text-xl font-bold">Red Hat System Administration</h3>
              </div>
              <p className="text-gray-400">By Lovely Professional University</p>
              <p className="text-cyber-blue">July 2024</p>
            </div>
            <div className="rounded-lg border border-cyber-blue/30 bg-cyber-dark/50 p-6 space-y-4">
              <div className="flex items-center gap-3 justify-center">
                <Server className="h-6 w-6 text-cyber-green" />
                <h3 className="text-xl font-bold">Cloud Computing</h3>
              </div>
              <p className="text-gray-400">By NPTEL</p>
              <p className="text-cyber-green">November 2024</p>
            </div>
            <div className="rounded-lg border border-cyber-blue/30 bg-cyber-dark/50 p-6 space-y-4">
              <div className="flex items-center gap-3 justify-center">
                <Code className="h-6 w-6 text-cyber-purple" />
                <h3 className="text-xl font-bold">Generative AI Certification</h3>
              </div>
              <p className="text-gray-400">By Coursera (Stanford University)</p>
              <p className="text-cyber-purple">May 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-cyber-darker">
        <div className="flex justify-center">
          <div className="max-w-2xl px-4 text-center space-y-8">
            <SectionHeader
              title="About Me"
              subtitle="Background and experience in cybersecurity"
              align="center"
            />
            <p className="text-gray-300">
              I am a passionate cybersecurity student specializing in penetration testing and ethical hacking. With a strong foundation in offensive security techniques, I help organizations identify and remediate security vulnerabilities before they can be exploited by malicious actors.
            </p>
            <p className="text-gray-300">
              My journey in cybersecurity began with a fascination for understanding how systems work and how they can be secured against threats. This curiosity led me to pursue formal education in computer science with a focus on security, complemented by industry certifications and continuous practical learning.
            </p>
            <p className="text-gray-300">
              I approach security testing methodically, combining automated tools with manual analysis to uncover vulnerabilities that automated scans might miss. Beyond simply finding flaws, I pride myself on providing clear documentation and actionable remediation recommendations.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 text-center">
          <SectionHeader
            title="Get In Touch"
            subtitle="Interested in working together? Let's connect."
            align="center"
          />

          <div className="mt-8 mx-auto max-w-md">
            <div className="rounded-lg border border-cyber-blue/30 bg-cyber-dark/80 p-6 shadow-lg">
              <form
                action="https://formspree.io/f/xblynjdv"
                method="POST"
                className="space-y-4"
              >
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-md border border-gray-700 bg-cyber-darker px-4 py-2 text-white focus:border-cyber-blue focus:outline-none focus:ring-1 focus:ring-cyber-blue"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-md border border-gray-700 bg-cyber-darker px-4 py-2 text-white focus:border-cyber-blue focus:outline-none focus:ring-1 focus:ring-cyber-blue"
                    placeholder="Your email"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    minLength={1}
                    className="w-full rounded-md border border-gray-700 bg-cyber-darker px-4 py-2 text-white focus:border-cyber-blue focus:outline-none focus:ring-1 focus:ring-cyber-blue"
                    placeholder="Your message"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-cyber-blue hover:bg-cyber-bright-blue text-black py-2 rounded-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
