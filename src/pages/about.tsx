import pic from "@/assets/pic.jpg";
import MetaHelmet from "@/components/meta-helmet";
import { Layout } from "@/components/sections/layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";
import { metaConfigs } from "@/lib/constants";
import { useTranslation } from "react-i18next";

export default function AboutPage() {
  const { t } = useTranslation();
  // const skills = [
  //   { name: "React", level: 90 },
  //   { name: "Node.js", level: 85 },
  //   { name: "TypeScript", level: 80 },
  //   { name: "React Native", level: 80 },
  //   { name: "SQL", level: 75 },
  //   { name: "MongoDB", level: 75 },
  //   { name: "Next.js", level: 65 },
  // ];

  const valuesList = t("pages.about.values.list", {
    returnObjects: true,
  }) as string[];

  const skillsList = t("pages.about.skills.list", {
    returnObjects: true,
  }) as string[];

  return (
    <>
      <MetaHelmet {...metaConfigs.about} />
      <Layout>
        <div className="py-24 bg-background">
          <div className="container mx-auto px-6 space-y-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
              {t("pages.about.title")}
            </h1>
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <p className="text-xl mb-4">
                      {t("pages.about.description.experience")}
                    </p>
                    <p className="text-muted-foreground">
                      {t("pages.about.description.stack")}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle>{t("pages.about.values.title")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                      {valuesList.map((v, index) => (
                        <li key={v + index}>{v}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-4">
                      {t("pages.about.skills.title")}
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {skillsList.map((skill, index) => (
                        <li key={index} className="flex items-center">
                          <Badge variant="secondary" className="mr-2">
                            ✓
                          </Badge>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6 lg:order-last order-first">
                <div className="relative">
                  <img
                    src={pic}
                    alt="Portrait du développeur"
                    width={500}
                    height={500}
                    className="object-cover rounded-lg shadow-lg lg:w-auto w-full"
                  />
                  <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground p-4 rounded-lg shadow-lg">
                    <p className="font-semibold">
                      {t("pages.about.badge.experience")}
                    </p>
                    <p className="text-sm">{t("pages.about.badge.title")}</p>
                  </div>
                </div>
              </div>
            </div>
            {/* <Card>
              <CardHeader>
                <CardTitle>{t("pages.about.technical")}</CardTitle>
              </CardHeader>
              <CardContent>
                {skills.map((skill, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between items-center">
                      <span>{skill.name}</span>
                      <Progress value={skill.level} className="w-1/2" />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card> */}
          </div>
        </div>
      </Layout>
    </>
  );
}
