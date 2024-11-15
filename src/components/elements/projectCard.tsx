import React from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Github, Link } from "lucide-react"
import LinkHref from "next/link"
import Image from "next/image"

export interface Project {
    title: string
    description: string
    images: string
    githubLink: string
    liveLink: string
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <Card className="border-[#90E2D0] bg-transparent shadow-none w-full" id="portfolio">
            <CardContent className="space-y-4 p-4 flex justify-center gap-6 md:justify-between flex-wrap items-center">
                <div className="text-xl max-w-2xl space-y-2">
                    <h1 className="font-bold border-b-2 py-2 border-[#90E2D0]">{project.title}</h1>
                    <p className="text-primary/80 opacity-80 font-medium">{project.description}</p>
                </div>
                <Image src={`/images/${project.images}.png`} alt={project.title} width={350} height={300} className="rounded-lg w-60 p-2 md:w-96" />
            </CardContent>
            <CardFooter className="flex justify-center gap-9">
                <LinkHref className="border pt-2 px-8 ease-in transition-all hover:bg-primary md:px-20 rounded bg-[#DAFAF2]" href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github width={50} height={50} className="hover:scale-110 ease-in transition-all hover:bg-primary" />
                </LinkHref>
                <LinkHref className="border pt-2 px-8 ease-in transition-all hover:bg-primary md:px-20  rounded bg-[#DAFAF2]" href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <Link width={50} height={50} className="hover:scale-110 ease-in transition-all hover:bg-primary" />
                </LinkHref>
            </CardFooter>
        </Card>
    )
}

export default ProjectCard;