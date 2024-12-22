import pic from "@/assets/pic.jpg";
import { Layout } from "@/components/sections/layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function AboutPage() {
  const skills = [
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "TypeScript", level: 75 },
    { name: "SQL", level: 70 },
    { name: "MongoDB", level: 65 },
  ];

  return (
    <Layout>
      <div className="py-24 bg-background">
        <div className="container mx-auto px-6 space-y-5">
          <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            À propos de moi
          </h1>
          <div className="grid lg:grid-cols-2 gap-12 items-start min-h-screen">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <p className="text-xl mb-4">
                    Je suis un développeur Full Stack passionné avec plus de 2
                    ans d'expérience dans la création d'applications web et
                    mobiles innovantes.
                  </p>
                  <p className="text-muted-foreground">
                    Spécialisé en JavaScript, React, Node.js, et les
                    technologies cloud, je m'efforce de créer des solutions
                    élégantes et performantes qui répondent aux besoins des
                    utilisateurs et des entreprises.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Mes valeurs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Apprentissage continu et veille technologique</li>
                    <li>
                      Qualité du code et bonnes pratiques de développement
                    </li>
                    <li>Collaboration et communication efficace en équipe</li>
                    <li>Résolution créative de problèmes</li>
                    <li>Attention aux détails et à l'expérience utilisateur</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">
                    Compétences clés
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {[
                      "Développement frontend (React, Next.js)",
                      "Backend (Node.js, Express)",
                      "Développement mobile (React Native)",
                      "Bases de données (SQL, NoSQL)",
                      "Déploiement cloud",
                      "UI/UX Design",
                    ].map((skill, index) => (
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
                  <p className="font-semibold">2+ ans d'expérience</p>
                  <p className="text-sm">Développeur Full Stack</p>
                </div>
              </div>
            </div>
          </div>
          <div className="min-h-screen flex flex-col justify-evenly">
            <Card>
              <CardHeader>
                <CardTitle>Compétences techniques</CardTitle>
              </CardHeader>
              <CardContent>
                {skills.map((skill, index) => (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="w-full" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
