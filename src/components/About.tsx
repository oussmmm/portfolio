import { User, Mail, MapPin, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About me</h2>
          <div className="w-20 h-1 bg-primary mx-auto" />
        </div>


        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Profile Image */}
          <div className="animate-slide-up">
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/portfolio/photo_portfoliooo.png" 
                  alt="photo Oussama Eljed" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>


          {/* About Content */}
          <div className="animate-slide-up space-y-6">
            <h3 className="text-2xl font-bold">Welcome to my portfolio</h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Engineering student specializing in Networks and Telecommunications at ENIG, passionate about network architecture, systems security, and cybersecurity. Seeking a Final Year Project in networking, network security, or cybersecurity.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              
            </p>

            {/* Contact Info Cards */}
            <div className="grid gap-4 mt-8">
              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent rounded-lg">
                    <Mail className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">oussamaeljed21@gmail.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent rounded-lg">
                    <MapPin className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Localisation</p>
                    <p className="font-medium">Ariana - Tunisia</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* CV Download Button */}
            <div className="mt-8">
              <Button size="lg" className="w-full" asChild>
                <a href="/portfolio/Oussama_Eljed_CV.pdf" download="Oussama_Eljed_CV.pdf">
                  <Download className="w-5 h-5 mr-2" />
                  Download my CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
