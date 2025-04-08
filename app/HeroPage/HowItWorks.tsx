import React from "react";
import { FileText, Edit, ArrowDown, Download, FileCheck } from "lucide-react";

const steps = [
  {
    icon: <FileText className="h-10 w-10 text-blue-600" />,
    title: "Upload Your Information",
    description:
      "Import your existing resume or start from scratch with our easy-to-use forms.",
  },
  {
    icon: <Edit className="h-10 w-10 text-blue-600" />,
    title: "Our AI Gets to Work",
    description:
      "The AI analyzes your experience and the job description to create optimized content.",
  },
  {
    icon: <FileCheck className="h-10 w-10 text-blue-600" />,
    title: "Choose Your Template",
    description:
      "Select from dozens of professionally designed templates that match your industry.",
  },
  {
    icon: <Download className="h-10 w-10 text-blue-600" />,
    title: "Download & Apply",
    description:
      "Get your polished resume in PDF, Word, or TXT format, ready to submit to employers.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Create a professional resume in minutes with our simple four-step
            process
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 border-blue-200">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-background border border-blue-600 rounded-xl p-6 shadow-md card-hover">
                <div className="bg-blue-65 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-foreground">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowDown className="h-8 w-8 text-blue-300 transform rotate-270" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
