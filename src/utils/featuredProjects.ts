export type project = {
    name: string,
    image: string
}

export type featuredProjects = { 
    1: project,
    2: project,
    3: project
}

export const featuredProjects: featuredProjects = {
    1 : {
        name: "Cafe Dolce",
        image: "/images/featuredProjects/cafe_dolce.jpg",
    },
    2 : {
        name: "Super Villain Dining",
        image: "/images/featuredProjects/super_villain_dining.jpg",
    },
    3 : {
        name: "Regal Verde Master Bath",
        image: "/images/featuredProjects/regal_verde_masterbath.jpg",
    },
}