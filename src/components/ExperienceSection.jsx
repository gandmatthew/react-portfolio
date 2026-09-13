import { ArrowLeft, ExternalLink } from "lucide-react"

const experiences = [
    {
        id: 1,
        company: "Extron Electronics",
        location: "Anaheim, CA",
        title: "Software Engineer",
        image: "/experiences/experience2.png",
        description: `At Extron, I am part of the Driver Development team, where I develop device drivers for audiovisual (AV) equipment such as Samsung TVs and Epson projectors.
        Additionally, I maintain two internal tools: a Python library for searching and managing driver packages, and a device emulator used to debug drivers`,
        tags: ["Python", "C", "C#", ".NET", "RS-232", "TCP", "UDP", "HTTP", "Avalonia UI", "Perforce", "Wireshark", "Postman"],
        website: "https://www.extron.com/download/control-system-drivers",
        start: "July 2024",
        end: "Present"
    },
    {
        id: 2,
        company: "theCoderSchool",
        location: "Cerritos, CA",
        title: "Programming Instructor",
        image: "/experiences/experience1.png",
        description: "Coached students aged 8–17 to build engaging projects using Java, JavaScript, and Python",
        tags: ["Java", "JavaScript", "Python"],
        website: false,
        start: "July 2021",
        end: "July 2022"
    },
]


export const ExperienceSection = () => {
    return (
        <section
            id="experience"
            className="py-24 px-4 relative">
            <div className="container mx-auto max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Experience
                </h2>

                <div className="grid grid-cols-1 gap-24 items-center">
                    {experiences.map((exp, key) => (
                        <div className="space-y-4">
                            <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                                <div className="h-80 overflow-hidden">
                                    <img src={exp.image} alt={exp.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>

                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {exp.tags.map((tag) => (
                                            <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-200">{tag}</span>
                                        ))}
                                    </div>
                                    <h3 className="flex justify-start text-xl font-semibold mb-1">{exp.title}</h3>
                                    <h3 className="flex justify-between text-lg font-semibold mb-1">
                                        <span>{exp.company} &mdash; {exp.location}</span>
                                        <span>{exp.start} &mdash; {exp.end}</span>
                                    </h3>
                                    <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                    <p className="text-left text-muted-foreground text-sm mb-4">
                                        {exp.description}
                                    </p>
                                    <div className="flex justify-between items-center">
                                        {exp.website ? (
                                            <div className="flex space-x-3">
                                                <a target="_blank" rel="noopener noreferrer" href={exp.website} className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors duration-300">
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