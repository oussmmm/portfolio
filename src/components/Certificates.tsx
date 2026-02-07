import { Award, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Certificates = () => {
  const certificates = [
    {
      title: "CCNA 1 (Introduction to Networks)",
      issuer: "Cisco Networking Academy",
      date: "23 May 2024",
      description: "Fundamental networking concepts, including network topologies, protocols, and device communication.",
      skills: ["LAN", "WAN", "OSI", "TCP/IP", "Communication protocols", "network troubleshooting", "Network devices", "Network topologies"],
      badge: true,
      image: "/portfolio/certificates/ccna1.jpg",
      pdfUrl: "/portfolio/certificates/ccna1pdf.pdf",
      badgeUrl: "https://www.credly.com/earner/earned/badge/239873de-96a6-4577-a4e1-237233d15fde",
    },

    {
      title: "CCNA 2 (Switching, Routing & Wireless Essentials)",
      issuer: "Cisco Networking Academy",
      date: "25 February 2025",
      description: "covering advanced network concepts, including switching, routing, and wireless network fundamentals for enterprise environments.",
      skills: [
        "Routing fundamentals",
        "Wireless networking basics",
        "Network security essentials",
        "LAN switching",
      ],
      badge: true,
      image: "/portfolio/certificates/ccna2.jpg",
      pdfUrl: "/portfolio/certificates/ccna2pdf.pdf",
      badgeUrl: "https://www.credly.com/earner/earned/badge/de86c944-bbcb-4cfa-9158-f437678ac42a",
    },

    {
      title: "CCNA 3 (Enterprise Networking, Security & Automation)",
      issuer: "Cisco Networking Academy",
      date: "19 December 2025",
      description: "focusing on enterprise networking, network security principles, and automation using modern network management tools.",
      skills: ["Virtualization", "Network Automation Basics", "Quality Of Service (QoS)", "Network Address Translation (NAT)", "Security Threat Mitigation", "Software Driven Networks"],
      badge: true,
      pdfUrl: "/portfolio/certificates/ccna3pdf.pdf",
      image: "/portfolio/certificates/ccna3.jpg",
      badgeUrl: "https://www.credly.com/earner/earned/badge/2aa9cda8-bea2-4052-a901-c2f7e34a3d77",
    },

    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "19 October 2025",
      description: "Comprehensive training on cybersecurity fundamentals and best protection practices",
      skills: [
        "Cybersecurity & Best Practices",
        "Networks & vulnerabilities",
        "Protection des données",
        "Détection des menaces",
        "IT security"
      ],

      badge: true,
      image: "/portfolio/certificates/introcyber.png",
      pdfUrl: "/portfolio/certificates/introcyberpdf.pdf",
      badgeUrl: "https://www.credly.com/earner/earned/badge/3d479e1e-8527-4067-91fc-891b593dc520",
    },

    {
      title: "Network Security",
      issuer: "Cisco Networking Academy",
      date: "21 January 2026",
      description: "Gaining foundational knowledge in network security, threat mitigation, and protection of data assets and network systems.",
      skills: [
        "AAA",
        "Cryptography",
        "Layer 2 Attacks",
        "Intrusion Prevention Systems",
        "Remote-access VPNs",
        "Zone-Based Policy Firewall",
      ],

      badge: true,
      image: "/portfolio/certificates/networksec.jpg",
      pdfUrl: "/portfolio/certificates/networksecpdf.pdf",
      badgeUrl: "https://www.credly.com/earner/earned/badge/a0f24b90-f523-4fd7-9b46-fa157a6092e9",
    },

    {
      title: "CyberOps Associate",
      issuer: "Cisco Networking Academy",
      date: "22 January 2026",
      description: "Gaining a broad understanding of security operations, including network monitoring, intrusion detection and analysis, and problem-solving through hands-on labs using Security Onion (ELK) and Cisco Packet Tracer.",
      skills: [
        "Attack Methods",
        "Cybersecurity",
        "Endpoint Threat Analysis",
        "Incident Response",
        "Malware Analysis",
        "Threat Detection",
        "SOC Metrics",
      ],

      badge: true,
      image: "/portfolio/certificates/cyberops.jpg",
      pdfUrl: "/portfolio/certificates/cyberopspdf.pdf",
      badgeUrl: "https://www.credly.com/earner/earned/badge/ed826e0c-1fd0-47ea-b0fe-62c58811fc98",
    },

  ];

  return (
    <section id="certificates" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Certificates & Qualifications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional certifications and continuing education
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-accent rounded-lg">
                    <Award className="w-6 h-6 text-accent-foreground" />
                  </div>
                  {cert.badge && (
                    <Badge variant="secondary" className="text-xs">
                      Online badge
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <CardTitle className="text-lg mb-2">{cert.title}</CardTitle>
                  <CardDescription className="flex flex-col gap-1">
                    <span className="font-medium text-primary">{cert.issuer}</span>
                    <span className="text-sm">{cert.date}</span>
                  </CardDescription>
                </div>

                {cert.image && (
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}

                <p className="text-sm text-muted-foreground">{cert.description}</p>

                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {cert.badge && (
                  <Button variant="default" size="sm" className="w-full" asChild>
                    <a href={cert.badgeUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View badge
                    </a>
                  </Button>
                )}

                {cert.pdfUrl && (
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View certificate (PDF)
                    </a>
                  </Button>
                )}

              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground">
            
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
