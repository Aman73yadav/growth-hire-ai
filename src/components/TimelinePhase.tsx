import { CheckCircle2 } from "lucide-react";

interface TimelinePhaseProps {
  week: string;
  title: string;
  tasks: string[];
  index: number;
}

export const TimelinePhase = ({ week, title, tasks, index }: TimelinePhaseProps) => {
  return (
    <div 
      className="relative pl-8 pb-8 border-l-2 border-primary/30 last:border-transparent animate-slide-in"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
        <div className="w-3 h-3 rounded-full bg-background"></div>
      </div>
      
      <div className="bg-card rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            {week}
          </span>
          <h3 className="text-xl font-bold text-foreground">{title}</h3>
        </div>
        
        <ul className="space-y-2">
          {tasks.map((task, i) => (
            <li key={i} className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle2 className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
              <span>{task}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
