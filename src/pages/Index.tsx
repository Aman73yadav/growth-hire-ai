import { Button } from "@/components/ui/button";
import { PainPointCard } from "@/components/PainPointCard";
import { TimelinePhase } from "@/components/TimelinePhase";
import { 
  Search, 
  Users, 
  Database, 
  Brain, 
  Zap, 
  TrendingUp,
  Target,
  Rocket
} from "lucide-react";
import heroImage from "@/assets/hero-recruitment-tech.jpg";

const Index = () => {
  const painPoints = [
    {
      icon: Search,
      title: "Manual Candidate Sourcing & Screening",
      description: "Recruiters spend 60-70% of their time manually searching resumes, screening profiles across platforms, and filtering unqualified candidates—leading to slow hiring cycles and missed opportunities."
    },
    {
      icon: Users,
      title: "Fragmented Communication & Data Silos",
      description: "Candidate data scattered across emails, spreadsheets, WhatsApp, and third-party ATS tools creates confusion, duplicate work, and poor candidate experience with no centralized visibility."
    },
    {
      icon: Database,
      title: "Heavy Dependency on Third-Party Tools",
      description: "Over-reliance on job boards, LinkedIn Recruiter, and external ATS platforms increases costs, limits customization, and creates vendor lock-in with no control over proprietary data."
    }
  ];

  const timelinePhases = [
    {
      week: "Week 1",
      title: "Foundation & Research",
      tasks: [
        "Finalize tech stack (React, Node.js, PostgreSQL, AI models)",
        "Design database schema for candidates, jobs, and interactions",
        "Set up development environment and version control",
        "Create wireframes for core modules (Dashboard, Candidate DB, Matching)"
      ]
    },
    {
      week: "Week 2",
      title: "Core Development - Phase 1",
      tasks: [
        "Build candidate database with AI-powered parsing (resume upload → structured data)",
        "Develop smart matching algorithm (job requirements → candidate skills)",
        "Create recruiter dashboard with real-time analytics",
        "Implement basic search and filter functionality"
      ]
    },
    {
      week: "Week 3",
      title: "Core Development - Phase 2",
      tasks: [
        "Build automated communication system (email/SMS templates, scheduling)",
        "Integrate AI screening assistant (preliminary candidate qualification)",
        "Develop interview coordination module",
        "Create client portal for job posting and candidate review"
      ]
    },
    {
      week: "Week 4",
      title: "Testing, Refinement & Launch",
      tasks: [
        "End-to-end testing with real recruitment scenarios",
        "Performance optimization and security hardening",
        "User training documentation and onboarding flows",
        "Beta launch with 2-3 pilot clients for feedback"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent"></div>
        
        <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6">
                <Rocket className="w-4 h-4" />
                <span className="text-sm font-semibold">Tech-Powered Recruitment Revolution</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Transforming Hiring with
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> AI & Automation</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                A comprehensive recruitment platform that eliminates manual work, unifies data, and reduces third-party dependency—built for India's top hiring company.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                  <Target className="w-5 h-5 mr-2" />
                  View Solution
                </Button>
                <Button size="lg" variant="outline">
                  Download Deck
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-up">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src={heroImage} 
                alt="AI-powered recruitment technology" 
                className="relative rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Current Challenges in Recruitment
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three critical inefficiencies slowing down modern hiring
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {painPoints.map((point, index) => (
              <PainPointCard key={index} {...point} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
                The Solution: TalentFlow AI
              </h2>
              <p className="text-xl text-muted-foreground">
                An all-in-one intelligent recruitment operating system
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-xl border border-border">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <Brain className="w-8 h-8 text-secondary" />
                    What We're Building
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-foreground">TalentFlow AI</strong> is a proprietary, end-to-end recruitment platform that automates sourcing, matching, and communication while consolidating all candidate and client data in one intelligent system.
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                    <Zap className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-bold text-foreground mb-2">AI-Powered Intelligence</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Resume parsing & candidate scoring</li>
                      <li>• Smart job-candidate matching</li>
                      <li>• Automated initial screening</li>
                    </ul>
                  </div>
                  
                  <div className="p-6 rounded-xl bg-secondary/5 border border-secondary/20">
                    <Database className="w-8 h-8 text-secondary mb-3" />
                    <h4 className="font-bold text-foreground mb-2">Unified Data Hub</h4>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Centralized candidate database</li>
                      <li>• Real-time pipeline tracking</li>
                      <li>• Integrated communication logs</li>
                    </ul>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <TrendingUp className="w-8 h-8 text-accent" />
                    Key Differentiators
                  </h3>
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="text-center p-4 rounded-lg bg-muted/50">
                      <div className="text-3xl font-bold text-primary mb-1">70%</div>
                      <div className="text-sm text-muted-foreground">Time Saved</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted/50">
                      <div className="text-3xl font-bold text-secondary mb-1">90%</div>
                      <div className="text-sm text-muted-foreground">Cost Reduction</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted/50">
                      <div className="text-3xl font-bold text-accent mb-1">Zero</div>
                      <div className="text-sm text-muted-foreground">External Tools</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              4-Week Development Roadmap
            </h2>
            <p className="text-xl text-muted-foreground">
              From concept to beta launch in one month
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {timelinePhases.map((phase, index) => (
              <TimelinePhase key={index} {...phase} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Transform Recruitment?
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join India's journey towards smarter, faster, and more efficient hiring
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                Schedule Demo
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Contact Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-card border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 TalentFlow AI • Recruitment Technology Innovation</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
