import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "너드수학 | 영어 수학 문제 해석 학습",
  description:
    "수학 실력이 아니라 영어 해석 때문에 막히고 있지 않나요? 너드수학이 원인을 찾아드립니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
