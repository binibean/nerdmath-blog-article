import Link from "next/link";
import {
  hero,
  title,
  titleAccent,
  subtitle,
  ctaGroup,
  ctaPrimary,
  ctaSecondary,
} from "@/features/landing/landing.css";

export function HeroSection() {
  return (
    <section className={hero}>
      <h1 className={title}>
        Nerd<span className={titleAccent}>Math</span>
      </h1>
      <p className={subtitle}>
        영어 수학 문제, 계산보다 해석에서 막히고 있지 않나요?
        <br />
        수학 실력이 아니라 영어 표현이 문제일 수 있습니다.
      </p>
      <div className={ctaGroup}>
        <Link href="/beta" className={ctaPrimary}>
          베타 신청하기
        </Link>
        <Link href="/articles" className={ctaSecondary}>
          블로그 보러가기
        </Link>
      </div>
    </section>
  );
}
