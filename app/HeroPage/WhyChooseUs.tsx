
import React from "react";
import { Check } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="section bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur-xl opacity-30"></div>
              <div className="relative glass-card rounded-xl p-6 md:p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background rounded-lg p-4 shadow-sm">
                    <div className="text-blue-600 font-bold text-4xl">85%</div>
                    <p className="text-foreground text-sm mt-1">
                      Higher interview rate
                    </p>
                  </div>
                  <div className="bg-background rounded-lg p-4 shadow-sm">
                    <div className="text-blue-600 font-bold text-4xl">12K+</div>
                    <p className="text-foreground text-sm mt-1">
                      Job seekers helped
                    </p>
                  </div>
                  <div className="bg-background rounded-lg p-4 shadow-sm">
                    <div className="text-blue-600 font-bold text-4xl">97%</div>
                    <p className="text-foreground text-sm mt-1">
                      Satisfaction rate
                    </p>
                  </div>
                  <div className="bg-background rounded-lg p-4 shadow-sm">
                    <div className="text-blue-600 font-bold text-4xl">3x</div>
                    <p className="text-foreground text-sm mt-1">
                      Faster resume creation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why job seekers choose ResumeAI
            </h2>
            <p className="text-lg text-foreground mb-8">
              In today  competitive job market, standing out is more
              important than ever. Our AI-powered resume builder gives you the
              edge you need to land your dream job.
            </p>

            <div className="space-y-4">
              {[
                "Built by HR experts with industry knowledge",
                "Personalized content tailored to specific job descriptions",
                "Proven templates that get past ATS systems",
                "Time-saving tools that create perfect resumes in minutes",
                "Regular updates based on hiring trends and feedback",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <Check className="h-4 w-4 text-green-600" />
                  </div>
                  <p className="ml-3 text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
