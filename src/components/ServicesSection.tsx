import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  Shield, 
  Users, 
  PieChart,
  BookOpen,
  Briefcase
} from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Audit & Assurance",
    description: "Expert audit services that ensure compliance, enhance transparency, and empower informed decision-making.",
    features: ["Statutory & Tax Audits", "Internal & Special Purpose Audits", "Due Diligence & Process Reviews"]
  },
  {
    icon: FileText,
    title: "Direct Tax",
    description: "Comprehensive tax solutions from strategic planning to compliance and representation tailored for both domestic and international needs.",
    features: ["Tax Planning & Return Filing", "International Tax & Transfer Pricing (3CEB)", "TDS & Withholding Tax (Incl. Cross-Border)", "Tax Assessments & Litigation Support"]
  },
  {
    icon: TrendingUp,
    title: "GST & Compliance",
    description: "End-to-end GST support—from registration to returns, advisory, and representation—ensuring smooth compliance and peace of mind.",
    features: ["GST Registration & Return Filing", "GSTR-9 & 9C Filing Support", "Input Reconciliation & Compliance Checks", "GST Advisory & Refund Assistance", "Litigation & Notice Handling"]
  },
  {
    icon: Shield,
    title: "Management Consultancy & Outsourcing",
    description: "Comprehensive business support—from process design and accounting to payroll, compliance, and asset verification.",
    features: ["Process Design & Implementation", "Accounting, Bookkeeping & Advisory", "Payroll Processing & Statutory Filings", "IND AS Conversion & Reconciliations", "Stock & Fixed Asset Verifications", "Audit Support & Compliance Assistance"]
  },
  {
    icon: Users,
    title: "Incorporation & Secretarial Compliance",
    description: "End-to-end support for business setup and ongoing secretarial compliance—ensuring smooth regulatory adherence and expert legal guidance.",
    features: ["Company & LLP Incorporation", "Secretarial Filings & Compliance Reviews", "Corporate Law Advisory & Representation", "Winding-Up Support", "Partnership, AOP, BOI & Society Registration", "Other Related Legal Services"]
  },
  {
    icon: PieChart,
    title: "Financial Reporting & Advisory",
    description: "Insightful financial reporting and strategic guidance to help you analyze performance, control costs, and drive better business decisions.",
    features: ["Financial Statement Preparation", "MIS & Custom Management Reporting", "Budgeting, Forecasting & Cost Optimization", "Ind AS Advisory & Compliance", "Performance Analysis & Strategic Insights"]
  }
];

const ServicesSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'Times, "Times New Roman", serif' }}>
            Our 
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Expert-led accounting, tax, and advisory solutions—tailored to elevate your business, ensure compliance, and drive sustainable growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 border-border/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:shadow-glow transition-smooth">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-smooth" style={{ fontFamily: 'Times, "Times New Roman", serif' }}>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed" style={{ fontFamily: '"Crimson Text", serif' }}>
                  {service.description}
                </CardDescription>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center" style={{ fontFamily: '"Crimson Text", serif' }}>
                      <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-card p-8 rounded-2xl shadow-elegant border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4" style={{ fontFamily: 'Times, "Times New Roman", serif' }}>
              Need Customized Solutions?
            </h3>
            <p className="text-muted-foreground mb-6" style={{ fontFamily: '"Crimson Text", serif' }}>
              Every business is unique. Let's discuss how I can tailor my services 
              to meet your specific requirements and help you achieve your financial goals.
            </p>
            <Button 
              variant="accent" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              style={{ fontFamily: '"Crimson Text", serif' }}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;