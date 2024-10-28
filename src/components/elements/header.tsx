"use client"
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { setCookies } from "@/lib/actions";
import { Facebook, Github, Instagram, Languages, Link2 } from 'lucide-react';
import { useTranslations, useLocale } from "next-intl";

const Header = () => {
    const t = useTranslations();
    const locale = useLocale();
    const router = useRouter();
    const handleLanguageChange = async () => {
        const days = 60 * 60 * 24 * 7 // 7 days
        if (locale == 'ar') {
            await setCookies('locale', 'en', days)
        } else {
            await setCookies('locale', 'ar', days)
        }
        router.refresh()
    }

    return (
        <div className="min-h-screen bg-teal-50 text-teal-900 flex flex-col">
            <header className="container mx-auto px-4 py-6 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <Image src={"/images/logo.png"} alt={t('logo_alt')} width={50} height={50} />
                </div>
                <nav className="hidden md:flex gap-3 space-x-6">
                    <a href="#services" className="text-teal-700 hover:text-teal-900">{t('nav.services')}</a>
                    <a href="#portfolio" className="text-teal-700 hover:text-teal-900">{t('nav.portfolio')}</a>
                    <a href="#about" className="text-teal-700 hover:text-teal-900">{t('nav.about_me')}</a>
                    <a href="#contact" className="text-teal-700 hover:text-teal-900">{t('nav.contact')}</a>
                </nav>
                <div className="flex items-center space-x-4">
                    <Languages onClick={() => handleLanguageChange()} className="text-teal-700 cursor-pointer hover:text-teal-900" />
                </div>
            </header>

            <main className="flex-grow container mx-auto px-4 py-12 flex flex-col md:flex-row items-center justify-between">
                <div className="md:w-3/4 space-y-8 m-auto">
                    <h1 className="text-lg md:text-4xl text-center w-full text-teal-700">
                        {t('intro.greeting')}, <span className="inline-block animate-wave">👋</span> {t('intro.name')}
                    </h1>
                    <p className="text-sm md:text-lg text-teal-600">
                        {t('intro.description')}
                    </p>
                    <a href="/cv.pdf" download className="inline-block">
                        <Button className="bg-teal-500 hover:bg-teal-600 text-white">
                            {t('buttons.download_cv')}
                        </Button>
                    </a>

                </div>
            </main>

            <div className="fixed hidden md:block right-0 top-1/2 transform -translate-y-1/2 bg-teal-100 p-2 rounded-l-lg">
                <div className="flex flex-col space-y-4">
                    <Link href="#" className="text-teal-700 hover:text-teal-900"><Github /></Link>
                    <Link href="#" className="text-teal-700 hover:text-teal-900"><Link2 /></Link>
                    <Link href="#" className="text-teal-700 hover:text-teal-900"><Instagram /></Link>
                    <Link href="#" className="text-teal-700 hover:text-teal-900"><Facebook /></Link>
                </div>
            </div>
        </div>

    )
}

export default Header;
