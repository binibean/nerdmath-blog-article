import { BetaForm } from "@/features/beta/components/BetaForm";
import { pageWrapper, pageTitle, pageSubtitle } from "@/features/beta/beta.css";

export const metadata = {
  title: "베타 신청 | 너드수학",
  description: "너드수학 베타 프로그램 참여 신청 폼입니다.",
};

export default function BetaPage() {
  return (
    <main className={pageWrapper}>
      <h1 className={pageTitle}>베타 신청하기</h1>
      <p className={pageSubtitle}>
        아래 항목을 작성해주시면 너드수학 베타 프로그램 준비에 큰 도움이 됩니다.
        <br />
        현재는 실제 저장 없이 운영되며, 신청 후 가격 안내 페이지로 이동합니다.
      </p>
      <BetaForm />
    </main>
  );
}
