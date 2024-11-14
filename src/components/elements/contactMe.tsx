"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"
import { ChangeEvent, useState } from "react"
import { useTranslations } from "next-intl";
type FormData = {
    fullName: string,
    email: string,
    message: string
}
export default function ContactMeSection() {
    const [formData, setFormData] = useState({ fullName: '', email: '', message: '' })
    const [isSubmitted, setIsSubmitted] = useState(false)
    const t = useTranslations("contact")
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData: FormData) => ({
            ...prevData,  // Spread previous state
            [name]: value  // Update the specific field
        }));
        console.log(formData)
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitted(true)
    };
    return (
        <div className=" mx-auto py-4 bg-green-50">
            <Card className="mx-auto container bg-transparent border-none shadow-none">
                <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-8 justify-center items-center">
                        {
                            isSubmitted ?
                                <div className="text-center font-bold w-full p-4 text-white bg-[#0e9384]">
                                    <p className="w-80 m-auto">
                                        {t('thanks')}
                                    </p>
                                </div>
                                :
                                <div className="bg-white p-5 h-fit rounded">
                                    <CardHeader className="px-0 pt-0">
                                        <CardTitle className="text-3xl font-bold mb-6 text-green-800">CONTACT ME</CardTitle>
                                    </CardHeader>
                                    <form
                                        onSubmit={handleSubmit}
                                        className="space-y-4" id="contact">
                                        <div>
                                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                                                {t("fullname")}
                                            </label>
                                            <Input id="fullName" required className="w-full bg-green-100" />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                {t("email")}
                                            </label>
                                            <Input id="email" required type="email" className="w-full bg-green-100" />
                                        </div>
                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                                {t("message")}
                                            </label>
                                            <Textarea id="message" required className="w-full bg-green-100" rows={4} />
                                        </div>
                                        <Button className="w-full md:w-auto bg-green-700 hover:bg-green-800">
                                            <Send className="w-4 h-4 mr-2" />
                                            {t('sendMessage')}
                                        </Button>
                                    </form>
                                </div>
                        }

                        <div>
                            <img
                                src="/images/contactme.png"
                                alt="Contact illustration"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
