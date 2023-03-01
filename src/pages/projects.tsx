import ProjectsSection from "@/components/projectSection";
import { motion } from "framer-motion";
import WavyText from "@/components/wavytext";
import Link from "next/link";

export default function Projects() {

    return (
        <div className="relative h-screen w-full overflow-hidden bg-black">
            <div className="w-full pl-10 pt-8">

                <Link href="./">
                    <span className="inline-block">
                        <motion.img
                            src='/images/wedesignlogo.png'
                            className='w-20 pb-5 cursor-pointer'
                            whileTap={{ scale: 0.9 }}
                        />
                    </span>
                </Link>
                <span className="inline-block ml-5">
                    <WavyText
                        text="PROJECTS"
                        lowerLetterByPixels={50}
                        bringLettersUpto={0}
                        tailwindclasses="text-4xl text-white font-bold ml-5 cursor-pointer"
                        duration={0.1}
                        childrenTransitionDuration={0.5}
                        delayChildrenBy={0.5}
                    />
                </span>
            </div>
            <div className="relative h-full w-full">
                <ProjectsSection />
            </div>
        </div>
    )
}