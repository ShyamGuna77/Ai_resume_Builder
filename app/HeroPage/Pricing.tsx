
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for trying out the basics",
    features: [
      "1 resume template",
      "Basic AI suggestions",
      "PDF downloads",
      "7-day storage",
    ],
    buttonText: "Get Started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    description: "Everything you need for your job search",
    features: [
      "All 30+ templates",
      "Advanced AI optimization",
      "Multiple formats (PDF, DOCX, TXT)",
      "Cover letter creation",
      "Unlimited storage",
      "Priority support",
    ],
    buttonText: "Get Pro",
    highlighted: true,
  },
  {
    name: "Teams",
    price: "$29",
    period: "/month",
    description: "For career coaches and agencies",
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Client management",
      "White-label options",
      "API access",
      "Dedicated account manager",
    ],
    buttonText: "Contact Sales",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Choose the perfect plan for your resume needs with no hidden fees
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl overflow-hidden ${
                plan.highlighted
                  ? "ring-2 ring-blue-500 shadow-lg"
                  : "border border-gray-200 shadow-md "
              }`}
            >
              {plan.highlighted && (
                <div className="bg-blue-500 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="p-6 bg-background">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-foreground">{plan.period}</span>
                  )}
                </div>
                <p className="text-foreground mb-6">{plan.description}</p>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-200 flex items-center justify-center mt-0.5">
                        <Check className="h-3 w-3 text-blue-600" />
                      </div>
                      <p className="ml-3 text-foreground text-sm">{feature}</p>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full hover:bg-blue-600 ${
                    plan.highlighted ? "bg-blue-600 hover:bg-blue-700" : ""
                  }`}
                  variant={plan.highlighted ? "default" : "outline"}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 text-foreground">
          <p>
            All plans include a 14-day money-back guarantee. No questions asked.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;