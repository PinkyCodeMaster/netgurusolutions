'use client';

import { CheckCircle2, Clock, ArrowRight } from 'lucide-react';

const steps = [
  { label: 'Planning', status: 'completed', icon: CheckCircle2 },
  { label: 'Network Design', status: 'completed', icon: CheckCircle2 },
  { label: 'Pre-Registration', status: 'current', icon: Clock },
  { label: 'Construction', status: 'upcoming', icon: ArrowRight },
  { label: 'Launch', status: 'upcoming', icon: ArrowRight },
];

export function ProgressIndicator() {

  return (
    <div className="py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className={`flex flex-col items-center ${index < steps.length - 1 ? 'flex-1' : ''
                }`}>
                <div className={`rounded-full p-1 ${step.status === 'completed' ? 'text-green-500' :
                  step.status === 'current' ? 'text-primary' :
                    'text-muted-foreground'
                  }`}>
                  <step.icon className="h-5 w-5" />
                </div>
                <span className="text-sm mt-1">{step.label}</span>
              </div>
              {index < steps.length - 1 && (
                <div className={`h-0.5 w-full mx-2 ${step.status === 'completed' ? 'bg-green-500' : 'bg-muted-foreground/30'
                  }`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}