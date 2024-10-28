import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";

const skills = {
    languages: ["JavaScript", "PHP", "C#", "JavaScript"],
    frameworks: ["Laravel", "ASP.NET", "NextJS"],
    databases: ["MySQL", "MongoDB", "SQLServer", "NextJS"],
};

const SkillBadge = ({ name }: { name: string }) => {
    const iconMap: { [key: string]: string } = {
        JavaScript: "JS",
        PHP: "PHP",
        "C#": "C#",
        Laravel: "La",
        "ASP.NET": "ASP",
        NextJS: "Next",
        MySQL: "SQL",
        MongoDB: "Mongo",
        SQLServer: "SQL",
    };

    return (
        <div className="p-4 w-40 rounded bg-[#C2F6E9] hover:bg-primary/20 transition-colors">
            <span className="mr-1 font-bold">{iconMap[name] || name[0]}</span>
            {name}
        </div>
    );
};

export default function SkillsSection() {
    const t = useTranslations("skills");

    return (
        <div className="w-full mx-auto space-y-6 bg-languages">
            <div className="container mx-auto px-4 py-6">
                <Card className="bg-transparent border-0">
                    <CardHeader className="px-0">
                        <CardTitle className="text-2xl font-bold text-primary">
                            {t("languages")}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap justify-center md:justify-end gap-2">
                        {skills.languages.map((lang, index) => (
                            <SkillBadge key={`${lang}-${index}`} name={lang} />
                        ))}
                    </CardContent>
                </Card>

                <Card className="bg-transparent border-0">
                    <CardHeader className="px-0">
                        <CardTitle className="text-2xl font-bold text-primary">
                            {t("frameworks")}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap justify-center md:justify-end gap-2">
                        {skills.frameworks.map((framework, index) => (
                            <SkillBadge key={`${framework}-${index}`} name={framework} />
                        ))}
                    </CardContent>
                </Card>

                <Card className="bg-transparent border-0">
                    <CardHeader className="px-0">
                        <CardTitle className="text-2xl font-bold text-primary">
                            {t("databases")}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap justify-center md:justify-end gap-2 p-0">
                        {skills.databases.map((db, index) => (
                            <SkillBadge key={`${db}-${index}`} name={db} />
                        ))}
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
