import React, { useState , useEffect} from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";

export default function ProjectsPage() {
  const { t } = useTranslation();
  const projectsList = t("projects.list", { returnObjects: true });
  const [selectedProject, setSelectedProject] = useState(projectsList[0]);


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      <div className="flex pt-24 px-6 max-w-7xl mx-auto gap-6">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-lg border-r p-6 sticky top-24 h-[calc(100vh-6rem)] rounded-2xl overflow-y-auto">
          <h2 className="text-xl font-bold mb-6 text-[rgba(93,79,72,0.9)]">
            {t("projects.title")}
          </h2>
          <ul className="space-y-4">
            {projectsList.map((project, idx) => (
              <li key={idx}>
                <button
                  onClick={() => setSelectedProject(project)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition ${
                    selectedProject.name === project.name
                      ? "bg-blue-900 text-white font-semibold shadow-inner"
                      : "hover:bg-gray-100 text-gray-800"
                  }`}
                >
                  {project.name}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Contenu */}
        <main className="flex-1 flex justify-center">
          <div className="bg-gradient-to-br from-white to-gray-100 rounded-3xl shadow-2xl p-10 w-full max-w-4xl flex flex-col gap-6 transition-transform transform hover:scale-[1.01]">
            <h3 className="text-3xl font-extrabold text-[rgba(93,79,72,0.9)] mb-2 text-center">
              {selectedProject.name}
            </h3>
            <p className="text-center text-gray-600 italic mb-4">
              <strong>{t("projects.technologies")}:</strong> {selectedProject.technologies}
            </p>
            <p className="text-gray-700 text-lg leading-relaxed text-justify">
              {selectedProject.description}
            </p>

            {/* Placeholder image/video */}
            <div className="w-full h-80 bg-gray-200 rounded-xl flex items-center justify-center text-gray-500 font-medium text-lg mt-4">
              Demo (Image/Video)
            </div>

            {/* GitHub Link */}
            {selectedProject.github && (
              <div className="mt-4 text-center">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-semibold hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
