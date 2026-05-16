import type { PricingPlan } from "@/shared/types/pricing";

export const mockPlans: PricingPlan[] = [
  {
    id: "free",
    name: "베타 무료 체험",
    price: 0,
    priceLabel: "0원",
    description: "너드수학이 처음이라면 여기서 시작하세요. 초기 진단과 핵심 용어 학습 일부를 무료로 경험할 수 있습니다.",
    features: [
      "영어 수학 용어 진단 1회",
      "핵심 용어 학습 샘플",
      "오답 원인 분류 체험",
    ],
    ctaLabel: "무료로 시작하기",
    highlighted: false,
  },
  {
    id: "beta",
    name: "베타 참여권",
    price: 49000,
    priceLabel: "49,000원",
    description: "2~4주 베타 프로그램에 참여해 진단, 학습, 리포트를 모두 경험해보세요.",
    features: [
      "영어 수학 용어 진단",
      "맞춤형 용어 학습",
      "오답 원인 분석 리포트",
      "베타 피드백 반영 혜택",
    ],
    ctaLabel: "베타 참여 신청",
    highlighted: true,
  },
  {
    id: "monthly",
    name: "월 구독",
    price: 79000,
    priceLabel: "79,000원",
    description: "매월 진단, 학습, 리포트를 통해 꾸준히 영어 수학 해석력을 키워나갑니다.",
    features: [
      "매월 영어 수학 진단",
      "지속적인 용어 학습",
      "월간 학습 리포트",
      "이전 리포트 비교 분석",
    ],
    ctaLabel: "구독 시작하기",
    highlighted: false,
  },
  {
    id: "premium",
    name: "프리미엄 관리형",
    price: 149000,
    priceLabel: "149,000원",
    description: "학부모 리포트와 개별 피드백까지 포함된 가장 완성도 높은 플랜입니다.",
    features: [
      "월 구독 전체 포함",
      "학부모 전용 리포트",
      "개별 학습 피드백",
      "다음 학습 추천 경로",
    ],
    ctaLabel: "프리미엄 신청",
    highlighted: false,
  },
];
