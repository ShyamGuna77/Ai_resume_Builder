import React from "react";
import { Button } from "@/components/ui/button";
import { FileText, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative pt-20 lg:pt-24 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 lg:pt-16 pb-16 lg:pb-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 space-y-8 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full text-blue-700 mb-4">
              <Sparkles size={18} className="mr-2" />
              <span className="text-sm font-medium">
                AI-Powered Resume Builder
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Create <span className="text-gradient">stunning resumes</span>{" "}
              with AI assistance
            </h1>

            <p className="text-xl text-foreground max-w-2xl">
              Craft professional, ATS-friendly resumes in minutes. Our AI
              analyzes job descriptions and optimizes your resume to get more
              interviews.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group bg-blue-700 text-slate-100">
                <Link href="/resume/create">
                  <span>Build My Resume</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>

            <div className="pt-6 flex items-center text-sm text-foreground">
              <svg
                className="h-5 w-5 text-green-500 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <span>No credit card required • Free plan available</span>
            </div>
          </div>

          <div className="w-full lg:w-1/2 animate-fade-up">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur-xl opacity-30"></div>
              <div className="relative glass-card rounded-xl p-4 md:p-8">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="p-4 border-b border-gray-200 bg-gray-50 flex items-center">
                    <FileText className="h-5 w-5 text-blue-600 mr-2" />
                    <span className="font-medium text-black">
                      Your Professional Resume
                    </span>
                  </div>
                  <div className="p-5 space-y-4">
                    <div className="h-8 bg-gray-200 rounded-md w-2/3 animate-pulse"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded-md w-full"></div>
                      <div className="h-4 bg-gray-200 rounded-md w-5/6"></div>
                      <div className="h-4 bg-gray-200 rounded-md w-4/6"></div>
                    </div>
                    <div className="pt-2">
                      <div className="h-6 bg-gray-200 rounded-md w-1/3"></div>
                      <div className="mt-2 space-y-2">
                        <div className="h-4 bg-gray-200 rounded-md w-full"></div>
                        <div className="h-4 bg-gray-200 rounded-md w-full"></div>
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="h-6 bg-gray-200 rounded-md w-1/3"></div>
                      <div className="mt-2 space-y-2">
                        <div className="h-4 bg-gray-200 rounded-md w-full"></div>
                        <div className="h-4 bg-gray-200 rounded-md w-3/4"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-blue-600 rounded-xl transform rotate-12 opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
