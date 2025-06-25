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
  Smartphone,
  Shield,
  ArrowRight,
  CheckCircle,
  Zap,
  Clock,
  BarChart3,
  Wifi,
  Database,
  Globe,
  HeadphonesIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
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
              <Link to="/features" className="text-primary font-medium">
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
        <div className="text-center space-y-6 mb-16">
          <Badge
            variant="secondary"
            className="bg-mapease-100 text-mapease-700"
          >
            <Zap className="w-3 h-3 mr-1" />
            Complete Feature Set
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Powerful{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Features
            </span>{" "}
            for Every Need
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Map Ease provides everything you need to create exceptional indoor
            navigation experiences for your business venue.
          </p>
        </div>

        {/* Core Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Core Navigation Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 bg-background/60 backdrop-blur hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center mb-4">
                  <Navigation className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Smart Routing</CardTitle>
                <CardDescription>
                  AI-powered pathfinding with real-time optimization and
                  obstacle avoidance.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Dynamic route calculation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Accessibility-aware routing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Multi-floor navigation</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background/60 backdrop-blur hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <CardTitle>Precise Positioning</CardTitle>
                <CardDescription>
                  Sub-meter accuracy with indoor positioning using WiFi,
                  Bluetooth, and sensor fusion.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>1-3 meter accuracy</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>No hardware installation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Real-time tracking</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 bg-background/60 backdrop-blur hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-mapease-500 to-mapease-600 rounded-xl flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <CardTitle>3D Indoor Maps</CardTitle>
                <CardDescription>
                  Interactive 3D maps with detailed floor plans and
                  point-of-interest information.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Interactive 3D visualization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Custom POI management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Real-time updates</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Platform Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Platform & Integration
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-0 bg-background/60 backdrop-blur text-center p-6">
              <Smartphone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Mobile Apps</h3>
              <p className="text-sm text-muted-foreground">
                Native iOS & Android apps with offline support
              </p>
            </Card>

            <Card className="border-0 bg-background/60 backdrop-blur text-center p-6">
              <Globe className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Web Platform</h3>
              <p className="text-sm text-muted-foreground">
                Responsive web app accessible from any browser
              </p>
            </Card>

            <Card className="border-0 bg-background/60 backdrop-blur text-center p-6">
              <Database className="w-12 h-12 text-mapease-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">API Integration</h3>
              <p className="text-sm text-muted-foreground">
                RESTful APIs for custom integrations
              </p>
            </Card>

            <Card className="border-0 bg-background/60 backdrop-blur text-center p-6">
              <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Enterprise Security</h3>
              <p className="text-sm text-muted-foreground">
                SOC2, GDPR, and HIPAA compliant
              </p>
            </Card>
          </div>
        </div>

        {/* Advanced Features */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Advanced Capabilities
          </h2>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Analytics & Insights
                  </h3>
                  <p className="text-muted-foreground">
                    Comprehensive analytics on visitor flow, popular
                    destinations, and space utilization.
                  </p>
                  <ul className="mt-3 space-y-1 text-sm">
                    <li>• Heat maps and traffic patterns</li>
                    <li>• Dwell time analysis</li>
                    <li>• Custom reporting dashboards</li>
                  </ul>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Visitor Management
                  </h3>
                  <p className="text-muted-foreground">
                    Integrate with existing visitor management systems for
                    personalized experiences.
                  </p>
                  <ul className="mt-3 space-y-1 text-sm">
                    <li>• QR code check-ins</li>
                    <li>• Guest pre-registration</li>
                    <li>• Host notifications</li>
                  </ul>
                </div>
              </div>

              <div className="flex space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Wifi className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    IoT Integration
                  </h3>
                  <p className="text-muted-foreground">
                    Connect with smart building systems for enhanced
                    functionality.
                  </p>
                  <ul className="mt-3 space-y-1 text-sm">
                    <li>• Room booking integration</li>
                    <li>• Environmental monitoring</li>
                    <li>• Smart lighting control</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-mapease-100 to-mapease-200 rounded-2xl p-8">
              <div className="bg-white rounded-xl shadow-xl p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Feature Comparison
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium">Basic Navigation</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium">Real-time Tracking</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium">Analytics Dashboard</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium">API Access</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                    <span className="font-medium">24/7 Support</span>
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                </div>
                <Link to="/pricing" className="block mt-6">
                  <Button className="w-full bg-gradient-to-r from-primary to-accent">
                    View Pricing Plans
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Ready to See These Features in Action?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the power of Map Ease with a personalized demo or start
            your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/demo">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                Schedule Demo
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

export default Features;
