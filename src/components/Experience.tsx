import { Briefcase } from "lucide-react";
import { Card } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Network Security Intern",
      company: "OneTech Business Solutions",
      period: "Jul–Aug 2025",
      description: "Implementation of a secure Fortinet-based Hub-and-Spoke solution.",
      achievements: [
        "Virtualized lab deployment",
        "Hub-and-Spoke architecture",
        "Configuration of a secure Fortinet SD-WAN solution",
        "Implementation of IPsec tunnels with dynamic OSPF routing",
        "Full inter-site validation",
      ],
    },


    {
      title: "Networks & Telecommunications Intern",
      company: "Tunisie Télécom",
      period: "Aug 2024",
      description: "Hands-on exposure to access network operations and IP transmission technologies in a large-scale telecom environment.",
      achievements: [
        "Assisted in the configuration and monitoring of network equipment (switches, routers, DSLAMs)",
        "Discovering several concepts : ADSL, VDSL, Optical fiber, VLANs ",
        "Contributed to maintenance and troubleshooting of data links and customer services",
      ],
    },

  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Professional experiences</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className={`relative animate-slide-up ${
                    index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="p-6 ml-16 md:ml-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-accent rounded-lg">
                        <Briefcase className="w-6 h-6 text-accent-foreground" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-xl font-bold">{exp.title}</h3>
                          <span className="text-sm text-muted-foreground">{exp.period}</span>
                        </div>
                        <p className="text-primary font-medium mb-3">{exp.company}</p>
                        <p className="text-muted-foreground mb-4">{exp.description}</p>
                        <div className="space-y-2">
                          <p className="font-semibold text-sm">Key achievements :</p>
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
