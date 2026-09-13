import { ExternalLink } from "lucide-react"

const projects = [
    {
        id: 1,
        name: "Wyze Storage",
        image: "/experiences/experience2.png",
        description: "Developed Python and C drivers for customers audiovisual (AV) equipment using RS-232, TCP/UDP, and HTTP protocols to provide automation and control in commercial buildings",
        tags: ["Python", "C", "C#", ".NET", "RS-232", "TCP", "UDP", "HTTP", "Avalonia UI", "Perforce", "Wireshark", "Postman"],
        website: "https://www.extron.com/download/control-system-drivers"
    },
    {
        id: 2,
        name: "Wyze Storage",
        image: "/experiences/experience2.png",
        description: "Developed Python and in commercial buildings",
        tags: ["Python", "C"],
        website: "https://www.extron.com/download/control-system-drivers"
    },
    {
        id: 3,
        name: "Wyze Storage",
        image: "/experiences/experience2.png",
        description: "Developed Python and C drivers for customers audiovisual (AV) equipment using RS-232, TCP/UDP, and HTTP protocols to provide automation and control in commercial buildings",
        tags: ["Python", "C", "C#", ".NET"],
        website: "https://www.extron.com/download/control-system-drivers"
    },
]


export const ProjectSection = () => {
    return (
        <section
            id="projects"
            className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Projects
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-24 items-center">
                    {projects.map((project, key) => (
                        <div className="space-y-4">
                            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                                <div className="h-48 overflow-hidden">
                                    <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>

                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map((tag) => (
                                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-200">{tag}</span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">
                                        {project.description}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        {project.website ? (
                                            <div className="flex space-x-3">
                                                <a target="_blank" rel="noopener noreferrer" href={project.website} className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-300">
                                                    <ExternalLink /> View My Work
                                                </a>
                                            </div>
                                        ) : (null)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}