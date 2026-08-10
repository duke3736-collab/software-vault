import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "소프트웨어 커뮤니티 톡 | Software Vault 자유게시판",
  description: "칼무리, 클로드, 반디집 등 PC 소프트웨어 사용 팁과 오류 해결법을 유저들과 익명으로 자유롭게 공유하는 커뮤니티입니다.",
};

export default function CommunityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
