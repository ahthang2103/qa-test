// Types
export type PlanStatus = 'planned' | 'in-progress' | 'completed';

export interface Plan {
  id: string;
  title: string;
  description: string;
  period: string;
  topics: string[];
  status: PlanStatus;
}

const statusStyles: Record<PlanStatus, string> = {
  planned: 'border border-black/20 text-black/50',
  'in-progress': 'border border-amber-400 text-amber-600',
  completed: 'border border-green-400 text-green-600',
};

interface PlanCardProps {
  plan: Plan;
  statusLabel: string;
}

export const PlanCard = ({ plan, statusLabel }: PlanCardProps) => {
  return (
    <div className="rounded-lg border border-black/10 p-5">
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold leading-snug">{plan.title}</h3>
        <span
          className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[plan.status]}`}
        >
          {statusLabel}
        </span>
      </div>

      <p className="mb-4 text-sm text-black/60">{plan.description}</p>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {plan.topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full bg-black/5 px-2.5 py-0.5 text-xs text-black/60"
            >
              {topic}
            </span>
          ))}
        </div>
        <span className="text-xs text-black/40">{plan.period}</span>
      </div>
    </div>
  );
};
