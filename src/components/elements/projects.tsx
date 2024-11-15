'use client'
import { Button } from "@/components/ui/button"
import ProjectCard from '@/components/elements/projectCard'
import { projects } from "@/components/projects"
import { useLocale } from "next-intl"
import { useState } from "react"
import { Project } from "@/components/elements/projectCard"
import { useTranslations } from "next-intl"

export default function ProjectsSection() {
    const locale = useLocale()
    const lang = locale === 'en' ? 'en' : 'ar'
    const [showAll, setShowAll] = useState(false)
    const handleToggleView = () => setShowAll((prev) => !prev);
    const t = useTranslations('projects')
    return (
        <div className="min-h-screen bg-teal-50 text-teal-900 flex flex-col ">
            <div className="container mx-auto px-8 py-6">
                <h2 className="text-3xl font-bold text-center text-primary mb-6">{t('title')}</h2>
                <div className="flex flex-col gap-2">
                    {projects[lang].slice(0, showAll ? projects[lang].length : 2).map((project: Project, index: number) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
                <div className="flex justify-center mt-8">
                    <Button
                        variant="outline"
                        className="text-primary border-primary hover:bg-primary hover:scale-105 ease-in transition-all"
                        onClick={handleToggleView}
                    >
                        {showAll ? "View Less" : "View More"}
                    </Button>
                </div>
            </div>
        </div>
    )
}
