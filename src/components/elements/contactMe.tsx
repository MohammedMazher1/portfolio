import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export default function ContactMeSection() {
    return (
        <div className=" mx-auto py-4 bg-green-50">
            <Card className="mx-auto container bg-transparent border-none shadow-none">
                <CardContent className="p-6">
                    <div className="grid md:grid-cols-2 gap-8 justify-center items-center">
                        <div className="bg-white p-5 h-fit rounded">
                            <CardHeader className="px-0 pt-0">
                                <CardTitle className="text-3xl font-bold mb-6 text-green-800">CONTACT ME</CardTitle>
                            </CardHeader>
                            <form className="space-y-4" id="contact">
                                <div>
                                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                                        Full Name
                                    </label>
                                    <Input id="fullName" className="w-full bg-green-100" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        Email
                                    </label>
                                    <Input id="email" type="email" className="w-full bg-green-100" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                        Message
                                    </label>
                                    <Textarea id="message" className="w-full bg-green-100" rows={4} />
                                </div>
                                <Button className="w-full md:w-auto bg-green-700 hover:bg-green-800">
                                    <Send className="w-4 h-4 mr-2" />
                                    Send Message
                                </Button>
                            </form>
                        </div>
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
