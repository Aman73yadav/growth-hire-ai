import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  metrics?: {
    label: string;
    value: string;
  };
}

const testimonials: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    role: "Head of HR",
    company: "TechVision Solutions",
    content: "TalentFlow AI reduced our time-to-hire by 60%. The AI-powered matching is incredibly accurate, and we've seen a 40% improvement in candidate quality. The automation freed up our team to focus on building relationships rather than manual screening.",
    rating: 5,
    metrics: {
      label: "Time Saved",
      value: "60%"
    }
  },
  {
    name: "Priya Sharma",
    role: "Talent Acquisition Lead",
    company: "InnovateCorp India",
    content: "The centralized dashboard is a game-changer. We eliminated dependency on 5 different tools and cut our recruitment software costs by 75%. The real-time analytics help us make data-driven hiring decisions instantly.",
    rating: 5,
    metrics: {
      label: "Cost Reduction",
      value: "75%"
    }
  },
  {
    name: "Amit Patel",
    role: "Recruitment Manager",
    company: "NextGen Enterprises",
    content: "Outstanding platform! The automated communication and interview scheduling saved our team 20+ hours per week. Candidate experience improved dramatically, and our offer acceptance rate increased by 35%.",
    rating: 5,
    metrics: {
      label: "Hours Saved Weekly",
      value: "20+"
    }
  },
  {
    name: "Sneha Reddy",
    role: "VP of Operations",
    company: "Digital Dynamics",
    content: "We've scaled from 50 to 200+ hires annually without adding recruitment staff. The AI screening is phenomenal—it learns our preferences and gets smarter over time. ROI was evident within the first month.",
    rating: 5,
    metrics: {
      label: "Hiring Growth",
      value: "4x"
    }
  },
  {
    name: "Karthik Iyer",
    role: "Founder & CEO",
    company: "StartupHub Ventures",
    content: "As a fast-growing startup, we needed a recruitment solution that could scale with us. TalentFlow AI delivered beyond expectations. The platform is intuitive, and the support team is exceptional.",
    rating: 5,
    metrics: {
      label: "Satisfaction Rate",
      value: "100%"
    }
  }
];

export const TestimonialsCarousel = () => {
  return (
    <div className="relative">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <Card className="h-full p-6 bg-card border-border hover:shadow-lg transition-all duration-300 flex flex-col">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-10 h-10 text-primary/20" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-accent text-accent"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                  "{testimonial.content}"
                </p>

                {/* Metrics */}
                {testimonial.metrics && (
                  <div className="mb-6 p-4 rounded-lg bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10">
                    <div className="text-center">
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {testimonial.metrics.value}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {testimonial.metrics.label}
                      </div>
                    </div>
                  </div>
                )}

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <Avatar className="h-12 w-12 bg-gradient-to-br from-primary to-secondary">
                    <AvatarFallback className="bg-transparent text-primary-foreground font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-muted-foreground font-medium">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-4 bg-card border-border hover:bg-muted" />
        <CarouselNext className="hidden md:flex -right-4 bg-card border-border hover:bg-muted" />
      </Carousel>

      {/* Mobile Swipe Indicator */}
      <div className="md:hidden text-center mt-4">
        <p className="text-xs text-muted-foreground">
          Swipe to see more testimonials →
        </p>
      </div>
    </div>
  );
};
