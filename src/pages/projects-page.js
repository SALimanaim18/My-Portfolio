import React, { useState , useEffect} from "react";
import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar";
import { FaGithub } from "react-icons/fa"; 

export default function ProjectsPage() {
  const { t } = useTranslation();
  const projectsList = t("projects.list", { returnObjects: true });
  const [selectedProject, setSelectedProject] = useState(projectsList[0]);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (selectedProject.mediaType === "images" && selectedProject.mediaUrls) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % selectedProject.mediaUrls.length);
      }, 3000); // change toutes les 3 secondes
      return () => clearInterval(interval);
    }
  }, [selectedProject]);

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
              {selectedProject.github && (
    <a
      href={selectedProject.github}
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-4 right-4 flex items-center gap-2 text-gray-700 hover:text-black font-semibold"
    >
      <FaGithub size={20} /> View Project on GitHub
    </a>
  )}
  <br></br>
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
            {/* Placeholder image/video */}
<div className="w-full bg-white rounded-xl flex items-center justify-center mt-4 overflow-hidden relative">
  {selectedProject.mediaType === "images" && selectedProject.mediaUrls && selectedProject.mediaUrls.length > 0 ? (
    <>
      <img
        src={process.env.PUBLIC_URL + selectedProject.mediaUrls[currentImage]}
        alt={selectedProject.name}
        className="w-full object-cover rounded-xl transition-all duration-500"
      />
      {/* Boutons slider */}
      <button
        onClick={() => setCurrentImage((currentImage - 1 + selectedProject.mediaUrls.length) % selectedProject.mediaUrls.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
      >
        ‹
      </button>
      <button
        onClick={() => setCurrentImage((currentImage + 1) % selectedProject.mediaUrls.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80"
      >
        ›
      </button>
    </>
  ) : selectedProject.mediaType === "video" && selectedProject.mediaUrl ? (
    <video
      src={process.env.PUBLIC_URL + selectedProject.mediaUrl}
      controls
      className="rounded-xl max-w-full max-h-[500px] w-auto h-auto"
    >
      Votre navigateur ne supporte pas la lecture de vidéo.
    </video>
  ) : (
    <p className="text-gray-500 font-medium text-lg">Demo indisponible</p>
  )}
</div>

         
          </div>
        </main>
      </div>
    </div>
  );
}
