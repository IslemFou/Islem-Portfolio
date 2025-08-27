export default function ProjectCard({ project }) {
    return (
        <div className="rounded-2xl shadow-lg hover:shadow-xl transition">
            <iframe
                src={project.link}
                title={project.title}
                className="w-full h-48 rounded-t-2xl border-none"
            />
            <div className="p-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                    Ouvrir en plein écran
                </a>
            </div>
        </div>
    );
}
