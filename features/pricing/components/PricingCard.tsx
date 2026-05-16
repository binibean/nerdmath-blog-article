import type { PricingPlan } from "@/shared/types/pricing";
import {
  pricingCard,
  pricingCardHighlighted,
  highlightBadge,
  planName,
  planPrice,
  planPriceUnit,
  planDescription,
  featureList,
  featureItem,
  featureCheck,
  ctaButton,
  ctaButtonPrimary,
} from "@/features/pricing/pricing.css";

interface Props {
  plan: PricingPlan;
}

export function PricingCard({ plan }: Props) {
  const cardClass = plan.highlighted ? pricingCardHighlighted : pricingCard;
  const buttonClass = plan.highlighted ? ctaButtonPrimary : ctaButton;

  return (
    <div className={cardClass}>
      {plan.highlighted && (
        <span className={highlightBadge}>추천 플랜</span>
      )}
      <p className={planName}>{plan.name}</p>
      <div>
        <span className={planPrice}>{plan.priceLabel}</span>
        {plan.price > 0 && <span className={planPriceUnit}>/ 월</span>}
      </div>
      <p className={planDescription}>{plan.description}</p>
      <ul className={featureList}>
        {plan.features.map((feature) => (
          <li key={feature} className={featureItem}>
            <span className={featureCheck}>✓</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button type="button" className={buttonClass}>
        {plan.ctaLabel}
      </button>
    </div>
  );
}
