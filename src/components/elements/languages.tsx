import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import Image from "next/image";

const skills = {
    languages: ["JavaScript", "PHP", "C#", "typeScript"],
    frameworks: ["Laravel", "ASP.NET", "NextJS"],
    databases: ["MySQL", "MongoDB", "SQLServer", "Postgres"],
};

const SkillBadge = ({ name }: { name: string }) => {
    const iconMap: { [key: string]: string } = {
        JavaScript: "js",
        typeScript: "ts",
        PHP: "php",
        "C#": "cc",
        Laravel: "Laravel",
        "ASP.NET": "Asp",
        NextJS: "next",
        MySQL: "mysql",
        MongoDB: "mongo",
        SQLServer: "sqlserver",
        Postgres: "postgre",
    };

    return (
        <div className="p-3 w-32 h-16 flex gap-2 justify-center items-center rounded bg-[#C2F6E9] hover:bg-primary/20 transition-colors">
            {name}
            <Image src={`/images/` + iconMap[name] + '.png'} alt={iconMap[name]} width={30} height={30} className="mr-1 font-bold" />
        </div>
    );
};

export default function SkillsSection() {
    const t = useTranslations("skills");

    return (
        <div className="w-full mx-auto space-y-6 bg-languages bg-cover">
            <div className="container mx-auto px-8 py-6">
                <Card className="bg-transparent border-0 shadow-none">
                    <CardHeader className="px-0">
                        <CardTitle className="text-2xl font-bold text-primary">
                            {t("languages")}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap justify-center md:justify-end gap-2 p-0">
                        {skills.languages.map((lang, index) => (
                            <SkillBadge key={`${lang}-${index}`} name={lang} />
                        ))}
                    </CardContent>
                </Card>
                <hr className="mt-3" />

                <Card className="bg-transparent border-0 shadow-none">
                    <CardHeader className="px-0">
                        <CardTitle className="text-2xl font-bold text-primary">
                            {t("frameworks")}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-wrap justify-center md:justify-end gap-2 p-0">
                        {skills.frameworks.map((framework, index) => (
                            <SkillBadge key={`${framework}-${index}`} name={framework} />
                        ))}
                    </CardContent>
                </Card>
                <hr className="mt-3" />

                <Card className="bg-transparent border-0 shadow-none">
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
                <hr className="mt-3" />
            </div>
        </div>
    );
}
