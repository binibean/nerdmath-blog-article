import { mockPlans } from "@/features/pricing/mockPlans";
import { PricingList } from "@/features/pricing/components/PricingList";
import {
  pageWrapper,
  pageTitle,
  pageTitleAccent,
  pageSubtitle,
  notice,
} from "@/features/pricing/pricing.css";

export const metadata = {
  title: "가격 안내 | 너드수학",
  description: "너드수학 베타 프로그램 가격을 확인하세요.",
};

export default function PricingPage() {
  return (
    <main className={pageWrapper}>
      <h1 className={pageTitle}>
        Nerd<span className={pageTitleAccent}>Math</span> 가격 안내
      </h1>
      <p className={pageSubtitle}>
        지금은 가설 검증 단계입니다. 아래 플랜 중 관심 있는 것을 선택해주세요.
      </p>
      <PricingList plans={mockPlans} />
      <p className={notice}>
        현재 베타 운영 중으로 실제 결제는 진행되지 않습니다.
        <br />
        버튼 클릭은 참여 의사 확인 용도로만 사용됩니다. 상담이 필요하시면 문의해주세요.
      </p>
    </main>
  );
}
