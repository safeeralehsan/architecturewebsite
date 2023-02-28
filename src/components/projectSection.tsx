import Loading from "@/components/loading";
import { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { projects } from "@/utils/projects";

export default function ProjectsSection() {
    const [areProjectsLoading, setAreProjectsLoading] = useState(true);

    const projectsContainer: Variants = {
        hidden: {
            opacity: 1
        },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 1.5 }
        }
    };

    const projectTiles: Variants = {
        hidden: {
            opacity: 0,
            y: 150,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, type: "tween" }
        }
    }


    useEffect(() => {
        setTimeout(() => setAreProjectsLoading(false), 3000)
    }, [])

    return (
        <>
            <div className={`absolute z-50 right-0 h-full bg-black ${areProjectsLoading ? 'w-full' : 'w-1/2 transition-all duration-[4000ms]'}`}>
                {areProjectsLoading ?
                    <Loading
                        bgColor="black"
                    /> :
                    <>
                        <div className="w-full h-full flex items-center justify-center">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 2 }}
                                className="text-5xl text-white opacity-100"
                            >
                                WeDesign Studio
                            </motion.span>
                        </div>
                    </>
                }
            </div>
            <motion.div
                variants={projectsContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: "some" }}
                className={`absolute z-0 left-0 h-full w-1/2 grid grid-cols-3 gap-0 overflow-scroll scrollbar-hide justify-start content-start
                    ${areProjectsLoading ? 'hidden' : ''}
                `}
            >
                {
                    projects.map((project) => {
                        return (
                            <motion.div
                                variants={projectTiles}
                                whileHover={{
                                    scale: 1.02,
                                    filter: "brightness(1.1)"
                                }}
                                className={`relative w-full aspect-square m-0 brightness-75 cursor-pointer`}
                            >
                                <Image
                                    src={project.imageURL}
                                    alt={project.name}
                                    fill
                                />
                            </motion.div>
                        )
                    })
                }

            </motion.div>
        </>
    )
}