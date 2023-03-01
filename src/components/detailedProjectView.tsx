import { projectDetails } from "@/utils/projects"
import { motion } from "framer-motion"
import Image from "next/image"

type Props = {
    project: projectDetails
}

export default function DetailedProjectView({ project }: Props) {
    return (
        <motion.div className="relative w-full h-full ml-1 overflow-scroll scrollbar-hide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            <div className="relative w-full aspect-video object-cover">
                <Image
                    src={project.mainImage ? project.mainImage : ''}
                    alt={project.name}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="p-10">
                <p className="text-3xl text-white font-bold">{project.name}</p>
                <p className="text-white font-light whitespace-pre-line mt-3">{project.description}</p>
            </div>
            <div className="relative w-full aspect-[20/16] mb-40 grid grid-cols-2 gap-2 px-10">
                <div className="relative h-full">
                    <Image
                        src={project.verticalImage1 ? project.verticalImage1 : ''}
                        alt={project.name}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="relative h-full">
                    <Image
                        src={project.verticalImage2 ? project.verticalImage2 : ''}
                        alt={project.name}
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </motion.div>
    )
}