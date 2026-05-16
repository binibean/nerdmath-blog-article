export type PricingTier = "free" | "beta" | "monthly" | "premium";

export interface PricingPlan {
  id: PricingTier;
  name: string;
  price: number;
  priceLabel: string;
  description: string;
  features: string[];
  ctaLabel: string;
  highlighted: boolean;
}
