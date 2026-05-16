import type { PricingPlan } from "@/shared/types/pricing";
import { PricingCard } from "./PricingCard";
import { pricingGrid } from "@/features/pricing/pricing.css";

interface Props {
  plans: PricingPlan[];
}

export function PricingList({ plans }: Props) {
  return (
    <ul className={pricingGrid}>
      {plans.map((plan) => (
        <li key={plan.id}>
          <PricingCard plan={plan} />
        </li>
      ))}
    </ul>
  );
}
