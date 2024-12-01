import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Brain,
  Linkedin,
  Stethoscope,
  ChevronDown,
  ScrollText,
  Building2,
  Heart,
  TestTubes,
  Code,
  BookOpen,
  Microscope,
  Laptop,
  School,
  Award,
  Beaker,
  Users,
  GraduationCap as GradIcon,
} from 'lucide-react';
import { TabPanel } from './components/TabPanel';
import { ExperienceCard } from './components/ExperienceCard';
import { PublicationsList } from './components/PublicationsList';
import { ResearchCard } from './components/ResearchCard';
import { EducationCard } from './components/EducationCard';
import { SkillCard } from './components/SkillCard';

function App() {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const tabs = ['Education', 'Experience', 'Research', 'Volunteer', 'Skills'];

  const experiences = [
    {
      title: 'Medical Scribe',
      company: 'Inova Fairfax Medical Campus, Emergency Department',
      period: 'Sept. 2024 - Present',
      description:
        'Providing comprehensive medical documentation support in emergency medicine settings.',
      icon: <Stethoscope className="w-6 h-6" />,
    },
    {
      title: 'Research Engineer',
      company: 'Department of Bioengineering, George Mason University',
      period: 'Aug. 2023 - Present',
      description:
        'Leading cutting-edge research in bioengineering and deep learning applications.',
      icon: <Microscope className="w-6 h-6" />,
    },
    {
      title: 'Adjunct Professor',
      company: 'Department of Bioengineering, George Mason University',
      period: 'Aug. 2023 - May 2024',
      description:
        'Teaching advanced bioengineering courses and mentoring students.',
      icon: <BookOpen className="w-6 h-6" />,
    },
    {
      title: 'Graduate Research Assistant',
      company: 'Department of Bioengineering, George Mason University',
      period: 'Aug. 2022 - Aug. 2023',
      description:
        'Conducted advanced research in bioengineering applications.',
      icon: <TestTubes className="w-6 h-6" />,
    },
    {
      title: 'Undergraduate Research Assistant',
      company: 'Department of Bioengineering, George Mason University',
      period: 'May 2021 - Aug. 2022',
      description: 'Assisted in research projects and laboratory experiments.',
      icon: <Beaker className="w-6 h-6" />,
    },
    {
      title: 'Student Researcher',
      company: 'George Mason University',
      period: 'Nov. 2019 - Aug. 2022',
      description: 'Conducted independent research projects in bioengineering.',
      icon: <Microscope className="w-6 h-6" />,
    },
    {
      title: 'Tutor',
      company: 'CoderKids Inc',
      period: 'Sept. 2019 - Jan. 2020',
      description: 'Taught programming fundamentals to young students.',
      icon: <Code className="w-6 h-6" />,
    },
  ];

  const volunteerWork = [
    {
      title: 'Volunteer',
      organization: 'Dulles Plane Pull',
      period: 'Sept. 2022 - Present',
      description:
        'Assisted with the annual Special Olympics of Virginia Event: Dulles Plane Pull -- facilitating Airport Tours for visitors on the Passenger Movers at Dulles International Airport.',
      icon: <Heart className="w-6 h-6" />,
    },
    {
      title: 'Volunteer Dental Assistant',
      organization: 'Mira Dental Care',
      period: 'June 2019 - May 2022',
      description:
        'Supported dental team in providing patient care (such as acquiring x-ray and chairside assisting in procedures.',
      icon: <Heart className="w-6 h-6" />,
    },
    {
      title: '2nd Lieutenant',
      organization: 'Arlington Squadron of the Civil Air Patrol - United States Air Force Auxiliary',
      period: 'Aug. 2018 - Aug. 2022',
      description: 'Mentoring students in STEM subjects and career guidance.',
      icon: <GradIcon className="w-6 h-6" />,
    },
    {
      title: 'Volunteer',
      organization: 'Dar al-Hijrah Islamic Center',
      period: 'June 2013 - Present',
      description:
        'Dedicating 1700+ hours in contributing to events to fostering community engagement and unity.',
      icon: <Users className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20 animate-gradient" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]" />
        </div>

        <div
          className={`relative z-10 text-center px-4 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 p-1 animate-glow">
            <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center">
              <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
                AQ
              </span>
            </div>
          </div>
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text animate-glow">
            Amad Qureshi
          </h1>
          <div className="flex items-center justify-center space-x-3 text-gray-300 mb-6">
            <GraduationCap className="w-6 h-6 text-cyan-400" />
            <span className="text-2xl">Research Engineer & Educator</span>
          </div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Bridging Healthcare and Technology through Deep Learning Research
          </p>

          <div className="mt-16">
            <ChevronDown className="w-8 h-8 mx-auto text-cyan-400 animate-bounce" />
          </div>
        </div>
      </header>

      {/* Tabs Section */}
      <section className="py-20 px-4 bg-[#0c0c14]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-12 border-b border-gray-800 overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={`px-8 py-4 text-lg font-medium transition-all duration-300 relative
                  ${
                    activeTab === index
                      ? 'text-cyan-400'
                      : 'text-gray-400 hover:text-gray-300'
                  }`}
              >
                {tab}
                {activeTab === index && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500" />
                )}
              </button>
            ))}
          </div>

          <div className="animate-slideUp">
            <TabPanel value={activeTab} index={0}>
              <div className="grid gap-6">
                <EducationCard
                  degree="MS, Bioengineering"
                  institution="George Mason University"
                  year="2023"
                  icon={<GraduationCap className="w-6 h-6" />}
                />
                <EducationCard
                  degree="BS, Bioengineering"
                  institution="George Mason University"
                  year="2017"
                  icon={<School className="w-6 h-6" />}
                />
              </div>
            </TabPanel>

            <TabPanel value={activeTab} index={1}>
              <div className="grid gap-6">
                {experiences.map((exp, index) => (
                  <ExperienceCard key={index} {...exp} />
                ))}
              </div>
            </TabPanel>

            <TabPanel value={activeTab} index={2}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
                    Research Collaborations
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {[
                      {
                        name: 'GMU',
                        image:
                          'https://www.logo-designer.co/storage/2024/04/2024-george-mason-university-new-logo-design.png',
                      },
                      {
                        name: 'UCLA',
                        image:
                          'https://johnbowens.com/wp-content/uploads/doheny-eye-institue-ucla-stein-eye-institute-logo.jpg',
                      },
                      {
                        name: 'NIH',
                        image:
                          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK2WVKk4Zp4QQkLbfrE74skbVM34_GG1bWRA&s',
                      },
                      {
                        name: 'INOVA',
                        image:
                          'https://www.inovanewsroom.org/wp-content/uploads/2023/09/Rebrand-press-release-FB-preview.png',
                      },
                    ].map((org) => (
                      <div key={org.name} className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <img
                          src={org.image}
                          alt={org.name}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                          <span className="text-2xl font-bold text-white">
                            {org.name}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <PublicationsList />
              </div>
            </TabPanel>

            <TabPanel value={activeTab} index={3}>
              <div className="grid gap-6">
                {volunteerWork.map((work, index) => (
                  <ExperienceCard key={index} {...work} />
                ))}
              </div>
            </TabPanel>

            <TabPanel value={activeTab} index={4}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SkillCard
                  title="Deep Learning"
                  icon={<Brain className="w-6 h-6" />}
                />
                <SkillCard title="Python" icon={<Code className="w-6 h-6" />} />
                <SkillCard
                  title="MATLAB"
                  icon={<Laptop className="w-6 h-6" />}
                />
                <SkillCard
                  title="Teaching"
                  icon={<BookOpen className="w-6 h-6" />}
                />
                <SkillCard
                  title="Research"
                  icon={<TestTubes className="w-6 h-6" />}
                />
                <SkillCard
                  title="EMR"
                  icon={<ScrollText className="w-6 h-6" />}
                />
                <SkillCard
                  title="Chairside Dental Assisting"
                  icon={<Heart className="w-6 h-6" />}
                />
              </div>
            </TabPanel>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer className="bg-[#080810] py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 text-transparent bg-clip-text">
            Let's Connect
          </h2>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition-all px-8 py-3 rounded-full transform hover:scale-105"
          >
            <Linkedin className="w-5 h-5" />
            <span>Connect on LinkedIn</span>
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
