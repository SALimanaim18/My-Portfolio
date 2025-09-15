import React from 'react';
import { useTranslation } from 'react-i18next';
import { BsCircleFill } from 'react-icons/bs';

export default function Skills() {
  const { t } = useTranslation();

  const skillsData = [
    {
      category: t('skills.programmingLanguages.title'),
      items: ['Java', 'Python', 'PHP', 'C#', 'C++', 'JavaScript (ES6)']
    },
    {
      category: t('skills.frameworks.title'),
      items: [
        'Back-end: Spring, Django, ASP.NET, Symfony, Laravel, Flask',
        'Front-end: ReactJS, HTML, CSS, Bootstrap, TailwindCSS'
      ]
    },
    {
      category: t('skills.databases.title'),
      items: ['MySQL', 'SQL Server', 'Oracle (PL/SQL)', 'MongoDB (NoSQL)']
    },
    {
      category: t('skills.tools.title'),
      items: [
        'IntelliJ IDEA, Android Studio, Visual Studio, VS Code, Git, GitHub, GitLab, SonarQube'
      ]
    },
    {
      category: t('skills.modeling.title'),
      items: ['UML, GanttProject, Jira, Agile (Scrum)']
    },
    {
      category: t('skills.os.title'),
      items: ['Windows Server, Linux/Unix']
    }
  ];

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-20 bg-[rgba(93,79,72,0.05)] flex flex-col items-center justify-center"
    >
      {/* Titre */}
      <h2
        className="text-4xl md:text-5xl font-extrabold mb-12 relative inline-block animate-slide-up"
        style={{ color: 'rgba(93, 79, 72, 0.9)' }}
      >
        {t('skills.title')}
        <span className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-[#87CEEB] via-[#413e9eff] to-[rgba(129,108,97,0.9)] rounded-full animate-gradient-bg"></span>
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-5xl">
        {skillsData.map((skill, idx) => (
          <div
            key={idx}
            className="p-4 bg-white rounded-xl shadow-md
              border-l-4 border-[rgba(65,62,158,0.6)]
              hover:scale-105 hover:shadow-lg hover:border-[#87CEEB]
              transform transition-all duration-500 animate-fade-in-up"
            style={{ animationDelay: `${idx * 150}ms` }}
          >
            <div className="flex items-center mb-2">
              <BsCircleFill className="text-[#87CEEB] mr-2 text-xs md:text-sm animate-bobble" />
              <h3 className="text-base md:text-lg font-semibold text-[#413e9eff]">
                {skill.category}
              </h3>
            </div>
            <ul className="list-disc list-inside text-gray-800 space-y-1 text-sm">
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
