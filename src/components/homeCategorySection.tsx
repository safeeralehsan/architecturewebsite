import Link from 'next/link'
import { useState } from 'react'

export default function HomeCategorySection() {
    const [hoveredOverCategory, setHoveredOverCategory] = useState<string>("")


    return (
        <div className="h-screen w-full bg-black grid grid-cols-3 gap-0 overflow-hidden">
            <Link href="../projects">
                <div
                    className={`relative flex flex-col justify-center items-center h-full cursor-pointer 
                        ${hoveredOverCategory === "Commercial" ? '' : 'overflow-hidden'}
                        ${hoveredOverCategory === "Residential" || hoveredOverCategory === "Architecture" ?
                            'z-40 opacity-10 transition-opacity duration-500' :
                            'transition-opacity duration-500'}
                    `}
                >
                    <img
                        src="/images/featuredProjects/cafe_dolce.jpg"
                        className="absolute top-0 left-0 z-0 min-w-[100vw] object-cover"
                    />
                    <div className="absolute top-0 left-0 z-20 h-full w-screen bg-black opacity-50" />
                    <p className="relative z-20 bg-transparent text-white font-bold text-2xl tracking-wide">Commercial</p>
                    <p className="relative z-20 bg-transparent text-white font-light text-l">Interior Design</p>
                    <div className="absolute top-0 left-0 z-30 h-full w-full bg-transparent"
                        onMouseEnter={() => setHoveredOverCategory("Commercial")}
                        onMouseLeave={() => setHoveredOverCategory("")}
                    />
                </div>
            </Link>

            <Link href="../projects">
                <div
                    className={`relative flex flex-col justify-center items-center h-full cursor-pointer
                    ${hoveredOverCategory === "Residential" ? '' : 'overflow-hidden'}
                    ${hoveredOverCategory === "Commercial" || hoveredOverCategory === "Architecture" ?
                            'z-40 opacity-10 transition-opacity duration-500' :
                            'transition-opacity duration-500'}
                            `}
                >
                    <img
                        src="/images/featuredProjects/super_villain_dining.jpg"
                        className="absolute top-0 left-0 z-0 min-w-[100vw] object-cover -translate-x-[34vw]"
                    />
                    <div className="absolute top-0 left-0 z-20 h-full w-screen bg-black opacity-50 -translate-x-[34vw]" />
                    <p className="relative z-20 bg-transparent text-white font-bold text-2xl tracking-wide">Residential</p>
                    <p className="relative z-20 bg-transparent text-white font-light text-l">Interior Design</p>
                    <div className="absolute top-0 left-0 z-30 h-full w-full bg-transparent"
                        onMouseEnter={() => setHoveredOverCategory("Residential")}
                        onMouseLeave={() => setHoveredOverCategory("")}
                    />
                </div>
            </Link>

            <Link href="../projects">
                <div
                    className={`relative flex flex-col justify-center items-center h-full cursor-pointer
                    ${hoveredOverCategory === "Architecture" ? '' : 'overflow-hidden'}
                    ${hoveredOverCategory === "Commercial" || hoveredOverCategory === "Residential" ?
                            'z-40 opacity-10 transition-opacity duration-500' :
                            'transition-opacity duration-500'}
                    `}
                >
                    <img
                        src="/images/featuredProjects/regal_verde_masterbath.jpg"
                        className="absolute top-0 right-0 z-0 min-w-[100vw] object-cover"
                    />
                    <div className="absolute top-0 right-0 z-20 h-full w-screen bg-black opacity-50" />
                    <p className="relative z-20 bg-transparent text-white font-bold text-2xl tracking-wide">Architecture</p>
                    <p className="relative z-20 bg-transparent text-white font-light text-l invisible">Interior Design</p>
                    <div className="absolute top-0 left-0 z-30 h-full w-full bg-transparent"
                        onMouseEnter={() => setHoveredOverCategory("Architecture")}
                        onMouseLeave={() => setHoveredOverCategory("")}
                    />
                </div>
            </Link>

        </div >
    )
}