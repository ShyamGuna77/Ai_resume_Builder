import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="section bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to land your dream job?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful job seekers who have used ResumeAI to
            transform their careers.
          </p>
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-blue-50 group"
          >
            <span>Build My Resume Now</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <p className="mt-6 text-sm text-blue-200">
            No credit card required to get started
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
