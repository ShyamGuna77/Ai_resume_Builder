import React from "react";
import { Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    content:
      "I was struggling to get interviews until I used ResumeAI. Within a week of sending out my new resume, I had three interview requests!",
    author: "Sarah Chen",
    role: "Marketing Specialist",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    content:
      "The AI suggestions were spot-on for my industry. It helped me highlight achievements I wouldn't have thought to include. Highly recommend!",
    author: "David Wilson",
    role: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    content:
      "As someone changing careers, I was lost on how to present my transferable skills. ResumeAI made it simple and I landed my dream job!",
    author: "Michelle Rodriguez",
    role: "Project Manager",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Thousands of job seekers have found success with our AI-powered
            resume builder
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 shadow-md card-hover border border-blue-600"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-foreground mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="rounded-full mr-4 object-cover"
                  width={48} height={48} // Adjusted to a reasonable size
                  layout="fixed"
                />
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
