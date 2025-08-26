function Projects() {
    const projets = [
        { id: 1, title: "Projet 1", description: "Description du projet 1" },
        { id: 2, title: "Projet 2", description: "Description du projet 2" },
    ];

    return (
        <section id="projects" className="p-6">
            <h2 className="text-3xl font-bold mb-4">Mes Projets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projets.map((p) => (
                    <div key={p.id} className="p-4 border rounded shadow">
                        <h3 className="font-semibold">{p.title}</h3>
                        <p>{p.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
