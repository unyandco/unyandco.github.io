import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Award, 
  Target, 
  Heart,
  CheckCircle,
  Calendar
} from "lucide-react";

const AboutSection = () => {
  const qualifications = [
    "Chartered Accountant (CA)",
    "Bachelor of Commerce",
    "Certified Public Accountant",
    "Advanced Taxation Certificate"
  ];

  const achievements = [
    "10+ Years Professional Experience",
    "500+ Successful Client Engagements", 
    "Expert in Financial Planning",
    "Tax Optimization Specialist"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'Times, "Times New Roman", serif' }}>
            About 
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Crimson Text, serif' }}>
            Dedicated to providing exceptional financial services with integrity, 
            expertise, and a personal touch that makes all the difference.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Professional Story */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <Heart className="w-6 h-6 text-accent mr-3" />
                My Professional Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4" style={{ fontFamily: 'Crimson Text, serif' }}>
                With over a decade of experience in the accounting and finance industry, 
                I have dedicated my career to helping individuals and businesses navigate 
                the complex world of financial management. My passion lies in transforming 
                financial challenges into opportunities for growth and success.
              </p>
              <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: 'Crimson Text, serif' }}>
                I believe that every client deserves personalized attention and tailored 
                solutions. Whether you're a small business owner looking to optimize your 
                operations or an individual seeking comprehensive tax planning, I'm here 
                to guide you every step of the way.
              </p>
            </div>

            {/* Mission */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <Target className="w-6 h-6 text-accent mr-3" />
                My Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed" style={{ fontFamily: 'Crimson Text, serif' }}>
                To provide exceptional accounting and financial services that empower 
                my clients to make informed decisions, achieve their goals, and build 
                lasting financial security. I strive to be more than just an accountant 
                – I aim to be your trusted financial advisor and strategic partner.
              </p>
            </div>

            {/* Qualifications */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <GraduationCap className="w-6 h-6 text-accent mr-3" />
                Qualifications
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {qualifications.map((qualification, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{qualification}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats and Achievements */}
          <div className="space-y-6">
            {/* Professional Stats */}
            <Card className="bg-gradient-card border-border/50 shadow-elegant">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                  <Award className="w-5 h-5 text-accent mr-2" />
                  Professional Achievements
                </h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-accent mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Experience Timeline */}
            <Card className="bg-gradient-card border-border/50 shadow-elegant">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                  <Calendar className="w-5 h-5 text-accent mr-2" />
                  Experience Timeline
                </h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-accent/30 pl-4 pb-4">
                    <div className="text-sm text-accent font-medium">2020 - Present</div>
                    <div className="text-foreground font-medium">Independent Practice</div>
                    <div className="text-sm text-muted-foreground">Providing comprehensive CA services</div>
                  </div>
                  <div className="border-l-2 border-accent/30 pl-4 pb-4">
                    <div className="text-sm text-accent font-medium">2016 - 2020</div>
                    <div className="text-foreground font-medium">Senior Accountant</div>
                    <div className="text-sm text-muted-foreground">Leading audit and tax teams</div>
                  </div>
                  <div className="border-l-2 border-accent/30 pl-4">
                    <div className="text-sm text-accent font-medium">2014 - 2016</div>
                    <div className="text-foreground font-medium">Junior Associate</div>
                    <div className="text-sm text-muted-foreground">Building foundational expertise</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="text-center">
              <Button variant="accent" size="lg" className="w-full">
                Let's Work Together
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;