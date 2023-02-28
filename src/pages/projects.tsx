import ProjectsSection from "@/components/projectSection";
import WavyText from "@/components/wavytext";
import Link from "next/link";

export default function Projects() {

    return (
        <div className="relative h-screen w-full overflow-hidden bg-black">
            <div className="w-full pl-10 pt-8">
                <Link href="./">
                    <WavyText
                        text="PROJECTS"
                        lowerLetterByPixels={50}
                        bringLettersUpto={10}
                        tailwindclasses="text-5xl text-white font-bold ml-5 cursor-pointer"
                        duration={0.1}
                        childrenTransitionDuration={0.5}
                        delayChildrenBy={0.5}
                    />
                </Link>
            </div>
            <div className="relative h-full w-full">
                <ProjectsSection />
            </div>
        </div>
    )
}