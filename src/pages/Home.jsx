import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { ExperienceSection } from "../components/ExperienceSection"
import { ProjectSection } from "../components/ProjectSection"

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <Navbar/>
            
            <main>
                <HeroSection />
                <ExperienceSection/>
                <ProjectSection/>
            </main>
        </div>
    )
}