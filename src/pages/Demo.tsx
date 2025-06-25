import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Calendar,
  Clock,
  Users,
  Building2,
  CheckCircle,
  ArrowRight,
  Video,
  Phone,
  MessageSquare,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Demo = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    venueType: "",
    venueSize: "",
    timeSlot: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Demo scheduled! We'll contact you at ${formData.email} to confirm your appointment.`,
    );
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-mapease-50/30">
      {/* Navigation Header */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Map Ease
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/features"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </Link>
              <Link
                to="/solutions"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Solutions
              </Link>
              <Link
                to="/pricing"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </Link>
              <Link to="/login">
                <Button variant="outline" size="sm">
                  Login
                </Button>
              </Link>
              <Link to="/get-started">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center space-y-6 mb-12">
          <Badge
            variant="secondary"
            className="bg-mapease-100 text-mapease-700"
          >
            <Video className="w-3 h-3 mr-1" />
            Personalized Demo
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            See Map Ease{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              In Action
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Schedule a personalized demo with our team to see how Map Ease can
            transform navigation at your venue. We'll customize the demo to your
            specific needs and use cases.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Demo Form */}
          <Card className="border-0 bg-background/60 backdrop-blur shadow-xl">
            <CardHeader>
              <CardTitle className="text-2xl">Schedule Your Demo</CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24
                hours to schedule your personalized demo.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) =>
                        handleInputChange("firstName", e.target.value)
                      }
                      placeholder="John"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) =>
                        handleInputChange("lastName", e.target.value)
                      }
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Work Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="john.doe@company.com"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                      placeholder="Your Company"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="venueType">Venue Type *</Label>
                    <Select
                      value={formData.venueType}
                      onValueChange={(value) =>
                        handleInputChange("venueType", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select venue type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="corporate">
                          Corporate Campus
                        </SelectItem>
                        <SelectItem value="education">
                          Educational Institution
                        </SelectItem>
                        <SelectItem value="healthcare">
                          Healthcare Facility
                        </SelectItem>
                        <SelectItem value="retail">Retail/Mall</SelectItem>
                        <SelectItem value="convention">
                          Convention Center
                        </SelectItem>
                        <SelectItem value="government">
                          Government Building
                        </SelectItem>
                        <SelectItem value="manufacturing">
                          Manufacturing
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="venueSize">Venue Size</Label>
                    <Select
                      value={formData.venueSize}
                      onValueChange={(value) =>
                        handleInputChange("venueSize", value)
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="small">
                          Small (Under 50,000 sq ft)
                        </SelectItem>
                        <SelectItem value="medium">
                          Medium (50,000 - 500,000 sq ft)
                        </SelectItem>
                        <SelectItem value="large">
                          Large (500,000+ sq ft)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="timeSlot">Preferred Time Slot</Label>
                  <Select
                    value={formData.timeSlot}
                    onValueChange={(value) =>
                      handleInputChange("timeSlot", value)
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select preferred time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="morning">
                        Morning (9:00 AM - 12:00 PM)
                      </SelectItem>
                      <SelectItem value="afternoon">
                        Afternoon (12:00 PM - 5:00 PM)
                      </SelectItem>
                      <SelectItem value="flexible">Flexible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">
                    Tell us about your venue and requirements
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    placeholder="Describe your venue, current navigation challenges, and what you'd like to see in the demo..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                  size="lg"
                >
                  Schedule Demo
                  <Calendar className="w-4 h-4 ml-2" />
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to our Privacy Policy.
                  We'll only use your information to contact you about the demo.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Demo Benefits */}
          <div className="space-y-8">
            <Card className="border-0 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Video className="w-6 h-6 text-primary" />
                  <span>What to Expect</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Customized Demonstration</h4>
                    <p className="text-sm text-muted-foreground">
                      We'll tailor the demo to your specific venue type and use
                      cases
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Live Q&A Session</h4>
                    <p className="text-sm text-muted-foreground">
                      Ask questions and get answers from our navigation experts
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Implementation Roadmap</h4>
                    <p className="text-sm text-muted-foreground">
                      Learn about timeline, requirements, and next steps
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium">Custom Proposal</h4>
                    <p className="text-sm text-muted-foreground">
                      Receive a tailored proposal with pricing for your venue
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-accent/5 to-accent/10">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="w-6 h-6 text-accent" />
                  <span>Demo Details</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Duration:</span>
                    <br />
                    <span className="text-muted-foreground">45-60 minutes</span>
                  </div>
                  <div>
                    <span className="font-medium">Format:</span>
                    <br />
                    <span className="text-muted-foreground">Video call</span>
                  </div>
                  <div>
                    <span className="font-medium">Follow-up:</span>
                    <br />
                    <span className="text-muted-foreground">
                      Custom proposal
                    </span>
                  </div>
                  <div>
                    <span className="font-medium">Cost:</span>
                    <br />
                    <span className="text-muted-foreground">Free</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-mapease-50 to-mapease-100">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-6 h-6 text-mapease-600" />
                  <span>Alternative Options</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() =>
                      alert("Self-guided demo would open in a new window")
                    }
                  >
                    <Video className="w-4 h-4 mr-2" />
                    Watch Self-Guided Demo
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start"
                    onClick={() => alert("Phone call scheduled!")}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Schedule Phone Call
                  </Button>
                  <Link to="/get-started" className="block">
                    <Button variant="outline" className="w-full justify-start">
                      <ArrowRight className="w-4 h-4 mr-2" />
                      Start Free Trial Instead
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Customers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 bg-background/60 backdrop-blur">
              <CardContent className="p-6">
                <blockquote className="text-muted-foreground mb-4">
                  "The demo showed exactly how Map Ease would solve our
                  navigation challenges. Implementation was seamless!"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">SM</span>
                  </div>
                  <div>
                    <div className="font-semibold">Sarah Miller</div>
                    <div className="text-sm text-muted-foreground">
                      Facilities Director, Stanford University
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background/60 backdrop-blur">
              <CardContent className="p-6">
                <blockquote className="text-muted-foreground mb-4">
                  "Best sales demo I've seen. They understood our needs and
                  showed exactly how their solution would work."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-mapease-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">RJ</span>
                  </div>
                  <div>
                    <div className="font-semibold">Robert Johnson</div>
                    <div className="text-sm text-muted-foreground">
                      IT Manager, Mayo Clinic
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background/60 backdrop-blur">
              <CardContent className="p-6">
                <blockquote className="text-muted-foreground mb-4">
                  "The team was incredibly knowledgeable and the demo was
                  perfectly tailored to our corporate campus needs."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-mapease-500 to-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">EW</span>
                  </div>
                  <div>
                    <div className="font-semibold">Emily Watson</div>
                    <div className="text-sm text-muted-foreground">
                      Head of Operations, Microsoft
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
