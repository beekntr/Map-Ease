import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Building2,
  Users,
  GraduationCap,
  Hospital,
  ShoppingCart,
  ArrowRight,
  CheckCircle,
  Target,
  Clock,
  Shield,
  BarChart3,
} from "lucide-react";
import { Link } from "react-router-dom";

const Solutions = () => {
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
              <Link to="/solutions" className="text-primary font-medium">
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
        <div className="text-center space-y-6 mb-16">
          <Badge
            variant="secondary"
            className="bg-mapease-100 text-mapease-700"
          >
            <Target className="w-3 h-3 mr-1" />
            Industry Solutions
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Tailored{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Solutions
            </span>{" "}
            for Every Industry
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Map Ease adapts to your specific industry needs, providing
            customized navigation solutions that enhance visitor experience and
            operational efficiency.
          </p>
        </div>

        {/* Primary Solutions */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-4">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl">Corporate Campuses</CardTitle>
              <CardDescription>
                Transform your corporate environment with intelligent navigation
                that helps employees and visitors navigate efficiently.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Employee directory integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Meeting room booking & navigation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Parking space guidance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Visitor check-in automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Emergency evacuation routes</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t">
                <h4 className="font-semibold mb-2">Perfect for:</h4>
                <p className="text-sm text-muted-foreground">
                  Large office complexes, tech campuses, manufacturing
                  facilities, and multi-building corporate headquarters.
                </p>
              </div>
              <Link to="/demo">
                <Button className="w-full bg-gradient-to-r from-primary to-primary/80">
                  View Corporate Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mb-4">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl">Educational Campuses</CardTitle>
              <CardDescription>
                Help students, faculty, and visitors navigate complex university
                and college campuses with ease and confidence.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Class schedule integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Event & lecture hall finder</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Accessibility route planning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Campus tour automation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Multi-language support</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t">
                <h4 className="font-semibold mb-2">Perfect for:</h4>
                <p className="text-sm text-muted-foreground">
                  Universities, colleges, research institutions, and large
                  educational complexes with multiple buildings.
                </p>
              </div>
              <Link to="/demo">
                <Button className="w-full bg-gradient-to-r from-accent to-accent/80">
                  View Education Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-2 border-mapease-200 bg-gradient-to-br from-mapease-50 to-mapease-100 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-gradient-to-br from-mapease-500 to-mapease-600 rounded-2xl flex items-center justify-center mb-4">
                <Hospital className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-xl">Healthcare Facilities</CardTitle>
              <CardDescription>
                Reduce patient stress and improve operational efficiency with
                intelligent navigation for hospitals and medical centers.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Key Features:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Appointment-based navigation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Patient flow optimization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Emergency route planning</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>HIPAA-compliant tracking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Visitor restriction zones</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t">
                <h4 className="font-semibold mb-2">Perfect for:</h4>
                <p className="text-sm text-muted-foreground">
                  Hospitals, medical centers, clinics, and large healthcare
                  campuses requiring secure navigation.
                </p>
              </div>
              <Link to="/demo">
                <Button className="w-full bg-gradient-to-r from-mapease-500 to-mapease-600">
                  View Healthcare Demo
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Secondary Solutions */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            More Industry Solutions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <ShoppingCart className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-lg">Retail & Malls</CardTitle>
                <CardDescription className="text-sm">
                  Guide shoppers to stores, products, and amenities with
                  personalized shopping experiences.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle className="text-lg">Convention Centers</CardTitle>
                <CardDescription className="text-sm">
                  Help attendees navigate events, exhibitions, and conference
                  rooms efficiently.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Shield className="w-12 h-12 text-mapease-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Government Buildings</CardTitle>
                <CardDescription className="text-sm">
                  Secure navigation with access control integration for
                  government facilities.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <BarChart3 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <CardTitle className="text-lg">Manufacturing</CardTitle>
                <CardDescription className="text-sm">
                  Safety-focused navigation for workers and visitors in
                  industrial environments.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        {/* ROI Section */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12 mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Proven ROI Across Industries
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">
                      40% Reduction in Navigation Time
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Visitors reach destinations faster with optimized routing
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">
                      60% Fewer Help Desk Inquiries
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Self-service navigation reduces staff workload
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-mapease-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">
                      25% Improvement in Visitor Satisfaction
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Enhanced experience leads to better feedback scores
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <h3 className="font-semibold">
                      3-Month Average Payback Period
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Quick return on investment through operational savings
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-semibold mb-6 text-center">
                Customer Success Story
              </h3>
              <blockquote className="text-muted-foreground mb-4">
                "Map Ease transformed our 50-building campus navigation. We've
                seen a 70% reduction in late arrivals to meetings and our
                visitor satisfaction scores increased dramatically."
              </blockquote>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">JD</span>
                </div>
                <div>
                  <div className="font-semibold">John Davis</div>
                  <div className="text-sm text-muted-foreground">
                    Facilities Manager, TechCorp
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Find the Perfect Solution for Your Industry
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let our experts show you how Map Ease can be customized for your
            specific industry needs and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                Schedule Industry Demo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/get-started">
              <Button variant="outline" size="lg">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
