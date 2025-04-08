import React from "react";
import {
  Sparkles,
  Target,
  BarChart,
  Clock,
  Shield,
  PenTool,
  Zap,
  Award,
} from "lucide-react";

const features = [
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "AI-Powered Content",
    description:
      "Our AI creates professional bullet points and descriptions tailored to your experience and target job.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "ATS Optimization",
    description:
      "Get past Applicant Tracking Systems with keyword optimization and industry-standard formatting.",
  },
  {
    icon: <PenTool className="h-6 w-6" />,
    title: "Professional Templates",
    description:
      "Choose from dozens of HR-approved templates designed for various industries and experience levels.",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Quick & Easy",
    description:
      "Create a polished resume in minutes, not hours, with our intuitive interface and guided process.",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Privacy First",
    description:
      "Your data is encrypted and never shared with third parties. You control what happens with your information.",
  },
  {
    icon: <BarChart className="h-6 w-6" />,
    title: "Performance Insights",
    description:
      "Get feedback on how well your resume matches the job requirements and suggestions for improvement.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Multi-Format Export",
    description:
      "Download your resume as PDF, DOCX, or plain text to meet any application requirement.",
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Expert-Backed",
    description:
      "Built with input from HR professionals and hiring managers to maximize your chances of success.",
  },
];

const Features = () => {
  return (
    <section id="features" className="section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Everything you need to create standout resumes that get results
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-background rounded-xl shadow-md p-6 card-hover border border-blue-400"
            >
              <div className="text-blue-600 mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
