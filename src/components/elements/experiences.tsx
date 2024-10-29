import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const experiences = [
    {
        company: "ARAB WATE DOS",
        logo: "arab.png",
        role: "Full-Stack Developer",
        period: "9, 2024 – Present",
        description: "Built And Maintained Robust Web Applications Using Laravel For The Back End And React.Js For The Front End, Creating Seamless, User-Focused Applications.",
    },
    {
        company: "SMARTGENX",
        logo: "smart.png",
        role: "Front-End Developer",
        period: "9, 2024 – Present",
        description: "Developed And Maintained Interactive, Responsive, And Accessible Web Applications Using Modern JavaScript Frameworks Like React.Js And Next.Js,",
    },
]

export default function ExperiencesSection() {
    return (
        <div className="py-4 bg-teal-50 text-teal-900 ">
            <div className="container mx-auto px-8">
                <h2 className="text-3xl font-bold text-center mb-12 text-[#275D52]">EXPERIENCES</h2>
                <div className="mx-auto grid md:grid-cols-2 gap-8">
                    {experiences.map((exp, index) => (
                        <Card key={index} className="border-none shadow-lg">
                            <CardHeader className="bg-[#275D52] text-white p-4">
                                <div className="flex justify-between items-center">
                                    <CardTitle className="text-xl font-bold">{exp.company}</CardTitle>
                                    <img src={'/images/' + exp.logo} alt={`${exp.company} logo`} className="h-10 w-" />
                                </div>
                            </CardHeader>
                            <CardContent className="bg-[#0E9384] text-white p-6">
                                <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
                                <p className="text-sm mb-4">{exp.period}</p>
                                <p className="text-sm leading-relaxed">{exp.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}