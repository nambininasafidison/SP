import { Layout } from "@/components/sections/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <Layout>
      <div className="py-24 bg-background min-h-screen flex flex-col justify-evenly">
        <div className="container mx-auto px-6 ">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
            Contactez-moi
          </h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-xl mb-6 text-muted-foreground">
                N'hésitez pas à me contacter pour discuter de votre projet ou
                pour toute question.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Mail className="h-6 w-6 mr-4 text-primary" />
                  <span className="text-accent-foreground">
                    nambininasafidison@outlook.com
                  </span>
                </li>
                <li className="flex items-center">
                  <Phone className="h-6 w-6 mr-4 text-primary" />
                  <span className="text-accent-foreground">
                    +261 34 78 398 61
                  </span>
                </li>
                <li className="flex items-center">
                  <MapPin className="h-6 w-6 mr-4 text-primary" />
                  <span className="text-accent-foreground">
                    Antananarivo, Madagascar
                  </span>
                </li>
              </ul>
            </div>
            <form className="space-y-6">
              <div>
                <Label htmlFor="name" className="block mb-2">
                  Nom
                </Label>
                <Input type="text" id="name" className="w-full px-4 py-2" />
              </div>
              <div>
                <Label htmlFor="email" className="block mb-2">
                  Email
                </Label>
                <Input type="email" id="email" className="w-full px-4 py-2" />
              </div>
              <div>
                <Label htmlFor="message" className="block mb-2 ">
                  Message
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 "
                ></Textarea>
              </div>
              <Button type="submit" className="px-6 py-3">
                Envoyer
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
