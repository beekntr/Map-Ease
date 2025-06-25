import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  MapPin,
  CheckCircle,
  ArrowRight,
  Zap,
  Star,
  Building,
  Users,
  Globe,
  Shield,
  HeadphonesIcon,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small venues and getting started",
      monthlyPrice: 99,
      annualPrice: 990,
      features: [
        "Up to 50,000 sq ft coverage",
        "Basic indoor navigation",
        "Mobile & web apps",
        "5 admin users",
        "Email support",
        "Basic analytics",
        "Standard integrations",
      ],
      notIncluded: [
        "Advanced analytics",
        "Custom branding",
        "API access",
        "Dedicated support",
      ],
      color: "mapease",
      popular: false,
    },
    {
      name: "Professional",
      description: "Best for medium to large venues",
      monthlyPrice: 299,
      annualPrice: 2990,
      features: [
        "Up to 500,000 sq ft coverage",
        "Advanced navigation & routing",
        "Real-time location tracking",
        "Unlimited admin users",
        "Priority support",
        "Advanced analytics dashboard",
        "Custom branding",
        "API access",
        "Visitor management integration",
        "Multi-building support",
      ],
      notIncluded: ["White-label solution", "On-premise deployment"],
      color: "primary",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      monthlyPrice: 799,
      annualPrice: 7990,
      features: [
        "Unlimited coverage area",
        "Enterprise-grade security",
        "Dedicated account manager",
        "24/7 phone support",
        "Custom integrations",
        "White-label solution",
        "On-premise deployment option",
        "Advanced user management",
        "SLA guarantees",
        "Priority feature requests",
        "Training & onboarding",
      ],
      notIncluded: [],
      color: "accent",
      popular: false,
    },
  ];

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
              <Link to="/pricing" className="text-primary font-medium">
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
            <Zap className="w-3 h-3 mr-1" />
            Simple, Transparent Pricing
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
            Choose the{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Perfect Plan
            </span>{" "}
            for Your Venue
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Start with a 14-day free trial. No credit card required. Scale as
            you grow with our flexible pricing options.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <span
            className={`font-medium ${!isAnnual ? "text-foreground" : "text-muted-foreground"}`}
          >
            Monthly
          </span>
          <Switch
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
            className="data-[state=checked]:bg-primary"
          />
          <span
            className={`font-medium ${isAnnual ? "text-foreground" : "text-muted-foreground"}`}
          >
            Annual
          </span>
          <Badge variant="secondary" className="bg-green-100 text-green-700">
            Save 17%
          </Badge>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative ${
                plan.popular
                  ? "border-2 border-primary shadow-xl scale-105"
                  : "border hover:shadow-lg"
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-base">
                  {plan.description}
                </CardDescription>
                <div className="pt-4">
                  <div className="text-4xl font-bold">
                    $
                    {isAnnual
                      ? Math.floor(plan.annualPrice / 12)
                      : plan.monthlyPrice}
                    <span className="text-lg text-muted-foreground font-normal">
                      /month
                    </span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-muted-foreground mt-1">
                      Billed annually (${plan.annualPrice}/year)
                    </p>
                  )}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start space-x-3 opacity-50"
                    >
                      <X className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground line-through">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <Link to="/get-started" className="block">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-gradient-to-r from-primary to-accent hover:opacity-90"
                        : ""
                    }`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Start Free Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Feature Comparison */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Feature Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-4 px-4 font-semibold">
                    Features
                  </th>
                  <th className="text-center py-4 px-4 font-semibold">
                    Starter
                  </th>
                  <th className="text-center py-4 px-4 font-semibold">
                    Professional
                  </th>
                  <th className="text-center py-4 px-4 font-semibold">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-muted/50">
                  <td className="py-3 px-4">Indoor Navigation</td>
                  <td className="text-center py-3 px-4">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="py-3 px-4">Real-time Tracking</td>
                  <td className="text-center py-3 px-4">
                    <X className="w-5 h-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="py-3 px-4">Advanced Analytics</td>
                  <td className="text-center py-3 px-4">
                    <X className="w-5 h-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="py-3 px-4">API Access</td>
                  <td className="text-center py-3 px-4">
                    <X className="w-5 h-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="py-3 px-4">24/7 Support</td>
                  <td className="text-center py-3 px-4">
                    <X className="w-5 h-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <X className="w-5 h-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="py-3 px-4">White-label Solution</td>
                  <td className="text-center py-3 px-4">
                    <X className="w-5 h-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <X className="w-5 h-5 text-muted-foreground mx-auto" />
                  </td>
                  <td className="text-center py-3 px-4">
                    <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="font-semibold">Can I change plans later?</h3>
              <p className="text-muted-foreground text-sm">
                Yes, you can upgrade or downgrade your plan at any time. Changes
                take effect immediately and we'll prorate the billing.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Is there a setup fee?</h3>
              <p className="text-muted-foreground text-sm">
                No setup fees for any plan. We also provide free onboarding
                assistance to help you get started quickly.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">
                What's included in the free trial?
              </h3>
              <p className="text-muted-foreground text-sm">
                Full access to Professional plan features for 14 days. No credit
                card required and no automatic billing.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Do you offer custom pricing?</h3>
              <p className="text-muted-foreground text-sm">
                Yes, for large enterprises or unique requirements, we offer
                custom pricing and features. Contact our sales team.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-12">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start your free trial today and see how Map Ease can transform
            navigation at your venue.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-started">
              <Button
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                Start Free Trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link to="/demo">
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
