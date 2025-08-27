import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
    return (
        <section id="portfolio" className="py-12 px-6">
            <h2 className="text-3xl font-bold text-center mt-12 mb-8">Mes Projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}

