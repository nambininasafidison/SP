import { Layout } from "@/components/sections/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
// import ReCAPTCHA from "react-google-recaptcha";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  // const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [status, setStatus] = useState("");
  const { t } = useTranslation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // const handleCaptchaChange = (token: string | null) => {
  //   setCaptchaToken(token);
  // };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // if (!captchaToken) {
    //   setStatus({t("others.captcha")});
    //   return;
    // }

    try {
      const response = await emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        { ...formData },
        import.meta.env.VITE_PUBLIC_KEY
      );
      console.log(response);

      setStatus(t("others.success"));
      setFormData({ name: "", email: "", message: "" });
      // setCaptchaToken(null);
    } catch (error) {
      setStatus(t("others.error"));
      console.error("Erreur lors de l'envoi :", error);
    }
  };

  return (
    <Layout>
      <div className="py-24 bg-background min-h-screen flex flex-col justify-evenly">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
            {t("pages.contact.title")}
          </h1>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-xl mb-6 text-muted-foreground">
                {t("pages.contact.description")}
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

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name" className="block mb-2">
                  {t("pages.contact.form.name")}
                </Label>
                <Input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="email" className="block mb-2">
                  {t("pages.contact.form.email")}
                </Label>
                <Input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <Label htmlFor="message" className="block mb-2">
                  {t("pages.contact.form.message")}
                </Label>
                <Textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></Textarea>
              </div>
              {/* <ReCAPTCHA
                sitekey="YOUR_SITE_KEY"
                onChange={handleCaptchaChange}
              /> */}

              <Button type="submit" className="px-6 py-3">
                {t("pages.contact.form.submit")}
              </Button>

              {status && <p className="mt-4 text-primary">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}
