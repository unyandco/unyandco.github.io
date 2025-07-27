import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  Linkedin,
  MessageSquare
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import liLogo from "@/assets/LI-In-Bug.png";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // EmailJS configuration - You'll need to replace these with your actual values
  const EMAILJS_SERVICE_ID = 'your_service_id';
  const EMAILJS_TEMPLATE_ID = 'your_template_id';
  const EMAILJS_PUBLIC_KEY = 'your_public_key';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Temporary solution - just show success message
    // Replace this with EmailJS when you have the credentials
    if (EMAILJS_SERVICE_ID === 'your_service_id') {
      // Show temporary success message
      setTimeout(() => {
        toast({
          title: "Message Received!",
          description: "Thank you for your inquiry. I'll get back to you within 24 hours. (Note: This is a demo - please contact directly via email/phone)",
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setIsSubmitting(false);
      }, 1000);
      return;
    }

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_name: 'UNY & CO', // Your name/company
        },
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your inquiry. I'll get back to you within 24 hours.",
        });
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact us directly via email or phone.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6" style={{ fontFamily: 'Times, "Times New Roman", serif' }}>
            Get In 
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: '"Crimson Text", serif' }}>
            Expert-led accounting, tax, and advisory solutions—tailored to elevate your business, ensure compliance, and drive sustainable growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-gradient-card border-border/50 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-xl text-foreground flex items-center" style={{ fontFamily: '"Crimson Text", serif' }}>
                  <MessageSquare className="w-5 h-5 text-accent mr-2" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground" style={{ fontFamily: '"Crimson Text", serif' }}>Email</div>
                    <div className="text-foreground font-medium" style={{ fontFamily: '"Crimson Text", serif' }}>nikhilreddy.ujjelli@outlook.com</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground" style={{ fontFamily: '"Crimson Text", serif' }}>Phone</div>
                    <div className="text-foreground font-medium" style={{ fontFamily: '"Crimson Text", serif' }}>+91 99595 79695</div>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground" style={{ fontFamily: '"Crimson Text", serif' }}>Office</div>
                    <a 
                      href="https://maps.google.com/?q=17.3960162,78.3742665"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground font-medium hover:text-primary transition-colors cursor-pointer"
                      style={{ fontFamily: '"Crimson Text", serif' }}
                    >
                      Plot No 24, Manikonda Jagir, Rajendra Nagar, Hyderabad, Telangana - 500089
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-muted-foreground" style={{ fontFamily: '"Crimson Text", serif' }}>Hours</div>
                    <div className="text-foreground font-medium" style={{ fontFamily: '"Crimson Text", serif' }}>Mon-Fri: 10AM-7PM</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                      <img 
                        src={liLogo} 
                        alt="LinkedIn Logo" 
                        className="w-6 h-6 mr-1 object-contain"
                      />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-card border-border/50 shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground" style={{ fontFamily: '"Crimson Text", serif' }}>Send Me a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What can I help you with?"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please describe your needs or questions in detail..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="accent" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground" style={{ fontFamily: '"Crimson Text", serif' }}>
                    <strong>Response Time:</strong> I typically respond to all inquiries within 24 hours during business days. 
                    For urgent matters, please call directly.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;