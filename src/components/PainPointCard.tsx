import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface PainPointCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export const PainPointCard = ({ icon: Icon, title, description, index }: PainPointCardProps) => {
  return (
    <Card 
      className="p-6 bg-card border-border hover:shadow-lg transition-all duration-300 animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-secondary">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
};
