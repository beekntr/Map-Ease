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
  Navigation,
  Building2,
  Users,
  Clock,
  Shield,
  Smartphone,
  Monitor,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Target,
  Globe,
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-mapease-50/30">
      {/* Navigation Header */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Map Ease
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </a>
              <a
                href="#solutions"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Solutions
              </a>
              <a
                href="#pricing"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </a>
              <Button variant="outline" size="sm">
                Login
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge
                variant="secondary"
                className="bg-mapease-100 text-mapease-700 hover:bg-mapease-200"
              >
                <Zap className="w-3 h-3 mr-1" />
                Indoor Navigation Made Simple
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                Navigate Any{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Business Venue
                </span>{" "}
                with Ease
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Transform how people navigate your campus, office, or large
                business venue with our intelligent indoor mapping system.
                Provide turn-by-turn directions and real-time location tracking.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Book Demo
              </Button>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-muted-foreground">
                  14-day free trial
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm text-muted-foreground">
                  No credit card required
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="bg-gradient-to-br from-mapease-100 to-mapease-200 rounded-2xl p-8 lg:p-12">
              <div className="bg-white rounded-xl shadow-xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">Campus Navigation</h3>
                  <Badge variant="secondary">Live</Badge>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 p-3 bg-mapease-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm">You are here: Main Entrance</span>
                  </div>
                  <div className="flex items-center space-x-3 p-3 bg-background rounded-lg border">
                    <Navigation className="w-4 h-4 text-primary" />
                    <span className="text-sm">
                      Directions to: Conference Room B
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-mapease-100 p-2 rounded text-center">
                      <Building2 className="w-4 h-4 mx-auto mb-1 text-mapease-600" />
                      <span className="text-xs">Building A</span>
                    </div>
                    <div className="bg-primary/10 p-2 rounded text-center">
                      <MapPin className="w-4 h-4 mx-auto mb-1 text-primary" />
                      <span className="text-xs">You're Here</span>
                    </div>
                    <div className="bg-accent/10 p-2 rounded text-center">
                      <Target className="w-4 h-4 mx-auto mb-1 text-accent" />
                      <span className="text-xs">Destination</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="bg-mapease-100 text-mapease-700"
            >
              Features
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Everything You Need for{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Indoor Navigation
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive mapping solution provides all the tools you need
              to help visitors navigate your complex business venues with
              confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 bg-background/60 backdrop-blur">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center mb-4">
                  <Navigation className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Turn-by-Turn Directions</CardTitle>
                <CardDescription>
                  Provide precise, step-by-step navigation instructions with
                  visual cues and landmarks.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-background/60 backdrop-blur">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Real-Time Location</CardTitle>
                <CardDescription>
                  Track visitor locations in real-time with precise indoor
                  positioning technology.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-background/60 backdrop-blur">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-mapease-500 to-mapease-600 rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Multi-Building Support</CardTitle>
                <CardDescription>
                  Navigate across multiple buildings and floors with seamless
                  transitions.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-background/60 backdrop-blur">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Mobile & Web Apps</CardTitle>
                <CardDescription>
                  Access maps and directions from any device with responsive web
                  and mobile apps.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-background/60 backdrop-blur">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Visitor Management</CardTitle>
                <CardDescription>
                  Integrate with visitor check-in systems and provide
                  personalized experiences.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-0 bg-background/60 backdrop-blur">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Enterprise Security</CardTitle>
                <CardDescription>
                  Bank-level security with role-based access control and data
                  privacy compliance.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge
              variant="secondary"
              className="bg-mapease-100 text-mapease-700"
            >
              Solutions
            </Badge>
            <h2 className="text-3xl lg:text-5xl font-bold">
              Perfect for Every{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Business Venue
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mb-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Corporate Campuses</CardTitle>
                <CardDescription>
                  Help employees and visitors navigate large corporate
                  facilities with multiple buildings, parking areas, and
                  amenities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Employee directory integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Meeting room booking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Parking guidance</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/20 bg-gradient-to-br from-accent/5 to-accent/10">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Educational Campuses</CardTitle>
                <CardDescription>
                  Guide students, faculty, and visitors through complex
                  university and college campuses with ease and precision.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Class schedule integration</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Event location finder</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Accessibility routes</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-mapease-200 bg-gradient-to-br from-mapease-50 to-mapease-100">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-mapease-500 to-mapease-600 rounded-2xl flex items-center justify-center mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Large Venues</CardTitle>
                <CardDescription>
                  Perfect for convention centers, hospitals, shopping malls, and
                  other large public or commercial venues.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Emergency evacuation routes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Multi-language support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Crowd flow analytics</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold">500+</div>
              <div className="text-primary-foreground/80">Venues Mapped</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold">1M+</div>
              <div className="text-primary-foreground/80">Monthly Users</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold">99.9%</div>
              <div className="text-primary-foreground/80">Uptime</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl lg:text-5xl font-bold">4.9</div>
              <div className="text-primary-foreground/80 flex items-center justify-center space-x-1">
                <Star className="w-5 h-5 fill-current" />
                <span>User Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-8 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-bold">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Venue Navigation?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Join hundreds of organizations that trust Map Ease to guide their
              visitors and improve their venue experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              No setup fees • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Map Ease
                </span>
              </div>
              <p className="text-muted-foreground">
                Making indoor navigation simple and accessible for everyone.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Product</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    API
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Terms
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Status
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Map Ease. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
