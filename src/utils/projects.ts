export type projectDetails = {
    name: string,
    imageURL: string,
    description?: string,
    mainImage?: string,
    verticalImage1?: string,
    verticalImage2?: string
}

export const projects: projectDetails[] = [
    {
        name: "Project 1",
        imageURL: "/images/projects/project1.jpg"
    },
    {
        name: "Project 2",
        imageURL: "/images/projects/project2.jpg"
    },
    {
        name: "Project 3",
        imageURL: "/images/projects/project3.jpg"
    },
    {
        name: "Project 4",
        imageURL: "/images/projects/project4.jpg"
    },
    {
        name: "Cafe Dolce",
        imageURL: "/images/projects/project5.jpg",
        description: "Our goal was to create a space that not only looks stunning, but also provides a comfortable and inviting atmosphere for guests. We achieved this by selecting a muted color palette with accents of gold and marble. The combination of soft lighting and strategically placed artwork creates a warm and inviting ambiance that is perfect for a luxury cafe experience.\n\nThe seating arrangements were carefully selected to ensure that guests can enjoy the space comfortably. The luxurious and comfortable chairs are upholstered in high-quality materials, providing both style and comfort. The use of booths and tables creates a sense of intimacy, perfect for those who want to enjoy a quiet conversation or a private meeting.\n\nWe paid particular attention to the design of the coffee bar, as this is the centerpiece of any cafe. The bar is crafted from the finest materials and features a sleek design that is both functional and aesthetically pleasing. We ensured that the bar is equipped with the latest equipment to guarantee that the coffee served is of the highest quality.\n\nAt WeDesign Studio, we pride ourselves on our ability to create bespoke designs that are tailored to our clients' specific needs. We are thrilled to have been able to create a luxurious and inviting space for Cafe Dolce that will be enjoyed by guests for years to come.",
        mainImage: "/images/projects/cafe_dolce/main_image.jpg",
        verticalImage1: "/images/projects/cafe_dolce/vertical_image_1.jpg",
        verticalImage2: "/images/projects/cafe_dolce/vertical_image_2.jpg",
    },
    {
        name: "Project 6",
        imageURL: "/images/projects/project6.jpg"
    },
    {
        name: "Project 7",
        imageURL: "/images/projects/project7.jpg"
    },
    {
        name: "Project 8",
        imageURL: "/images/projects/project8.jpg"
    },
    {
        name: "Project 9",
        imageURL: "/images/projects/project9.jpg"
    },
    {
        name: "Project 19",
        imageURL: "/images/projects/project9.jpg"
    },
]