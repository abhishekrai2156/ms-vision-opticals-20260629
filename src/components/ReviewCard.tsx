import React from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export interface ReviewProps {
  name: string;
  text: string;
  rating?: number;
}

export default function ReviewCard({ name, text, rating = 5 }: ReviewProps) {
  return (
    <Card className="h-full border-none shadow-sm hover:shadow-md transition-shadow bg-background/50 backdrop-blur-sm">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex text-secondary mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? "fill-secondary text-secondary" : "text-muted-foreground"}
            />
          ))}
        </div>
        <p className="text-foreground/80 flex-grow mb-6 italic">"{text}"</p>
        <div className="flex items-center gap-3 mt-auto">
          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-serif text-primary font-bold">
            {name.charAt(0)}
          </div>
          <div>
            <h4 className="font-semibold text-foreground text-sm">{name}</h4>
            <p className="text-xs text-muted-foreground">Google Review</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
