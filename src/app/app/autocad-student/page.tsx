import type { Metadata } from "next";
import AdSense from "@/components/AdSense";

export const metadata: Metadata = {
  title: "오토캐드(AutoCAD) 학생용 3년 무료 다운로드 가이드",
  description: "비싼 오토캐드(AutoCAD), 대학생이라면 3년 동안 정품을 완전 무료로 사용할 수 있습니다. 교육용 라이선스 발급 및 다운로드 방법을 확인하세요.",
  icons: {
    icon: "https://www.google.com/s2/favicons?domain=autodesk.co.kr&sz=128"
  }
};

export default function AutoCADStudentDownload() {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <section className="bg-slate-800/40 rounded-3xl p-8 shadow-sm border border-slate-700/50 flex flex-col md:flex-row gap-8 items-start md:items-center">
        <div className="w-24 h-24 bg-red-700 text-white rounded-3xl flex items-center justify-center text-5xl font-bold flex-shrink-0">
          A
        </div>
        <div className="flex-1">
          <div className="inline-block bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full mb-3">설계 필수 프로그램</div>
          <h1 className="text-3xl font-bold text-white mb-2">오토캐드 학생용 (무료)</h1>
          <p className="text-lg text-slate-300 mb-4">개발사: Autodesk | 카테고리: 3D/설계 | 라이선스: 무료 (학생 인증 시)</p>
          <div className="flex gap-4 text-sm text-slate-400">
            <span>⭐️ 4.8 (공대/건축과 필수)</span>
            <span>⬇️ 2,000만+ 다운로드</span>
          </div>
        </div>
        <div className="w-full md:w-auto min-w-[300px]">
           <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-slate-800/60 rounded-3xl p-8 text-center border border-slate-700/50">
        <h2 className="text-2xl font-bold text-white mb-4">대학생/교직원 전용 100% 무료 라이선스</h2>
        <p className="text-slate-300 mb-8">수십만 원에 달하는 오토캐드 정품을 불법 다운로드 하지 마세요! 학생증 하나면 정품을 평탄하게 무료로 씁니다.</p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://www.autodesk.co.kr/education/edu-software/overview" target="_blank" rel="nofollow noopener" className="bg-red-700 hover:bg-red-800 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
            오토데스크 교육용 페이지로 이동
          </a>
        </div>
        <div className="mt-8">
          <AdSense slot="3763277922" />
        </div>
      </section>

      <section className="bg-slate-800/40 rounded-3xl p-8 shadow-sm border border-slate-700/50 prose prose-blue max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4 mt-0">🎓 학생용 무료 라이선스 받는 완벽 가이드</h2>
        <p className="text-slate-300 leading-relaxed mb-6">오토데스크(Autodesk)는 학생과 교사들에게 모든 프로그램을 무료로 제공합니다. 단, 자격 증명 심사가 조금 까다로울 수 있으니 아래 절차를 꼭 확인하세요.</p>
        <ul className="space-y-3 mb-8 text-slate-300">
          <li><strong>1. 계정 생성:</strong> 학교에서 발급받은 이메일(<code>@학교이름.ac.kr</code> 등)을 사용하여 오토데스크 계정을 새로 만듭니다.</li>
          <li><strong>2. 서류 준비:</strong> 학생증 스캔본이나 재학증명서를 폰으로 찍어 준비합니다. (이름, 학교명, 날짜가 뚜렷하게 보여야 합니다.)</li>
          <li><strong>3. 파일 업로드:</strong> 교육용 엑세스 권한 얻기 페이지에서 서류를 업로드하면, 보통 몇 시간~하루 이내에 승인 메일이 도착합니다.</li>
          <li><strong>4. 다운로드:</strong> 승인이 완료되면 AutoCAD 등 모든 오토데스크 프로그램을 무료로 설치할 수 있습니다!</li>
        </ul>
      </section>
    </div>
  );
}
