import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Yebadong',
  description: '예바동 개인정보처리방침 - 사용자 개인정보 보호와 관련된 정책을 확인하세요.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            개인정보처리방침
          </h1>
          <p className="text-lg text-gray-600">
            예바동(Yebadong)은 사용자의 개인정보를 소중히 여기며 안전하게 보호합니다.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            <p>최종 업데이트: 2024년 12월</p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          {/* 1. 개요 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. 개요</h2>
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
              <p className="text-blue-800 mb-0">
                예바동(Yebadong)은 1994년부터 시작된 한국의 프로그레시브 록 커뮤니티로서, 
                사용자의 개인정보 보호를 최우선으로 생각합니다. 
                본 개인정보처리방침은 당사가 어떤 정보를 수집하고, 어떻게 사용하며, 
                어떻게 보호하는지에 대해 설명합니다.
              </p>
            </div>
          </section>

          {/* 2. 수집하는 개인정보 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. 수집하는 개인정보</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 자동으로 수집되는 정보</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li><strong>접속 기록</strong>: IP 주소, 브라우저 정보, 접속 시간, 방문 페이지</li>
              <li><strong>쿠키 정보</strong>: 사이트 이용 편의성 향상을 위한 기술적 쿠키</li>
              <li><strong>기기 정보</strong>: 운영체제, 화면 해상도, 언어 설정</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 사용자가 제공하는 정보</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
              <li><strong>방명록 작성</strong>: 닉네임, 이메일 주소(선택), 작성 내용</li>
              <li><strong>문의사항</strong>: 이메일 주소, 문의 내용</li>
              <li><strong>기타 상호작용</strong>: 댓글, 리뷰 등 사용자가 자발적으로 제공하는 정보</li>
            </ul>
          </section>

          {/* 3. 개인정보 이용 목적 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. 개인정보 이용 목적</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">서비스 제공</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• 웹사이트 기능 제공</li>
                  <li>• 방명록 관리</li>
                  <li>• 사용자 문의 응답</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">서비스 개선</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• 사이트 이용 패턴 분석</li>
                  <li>• 콘텐츠 개선 방향 결정</li>
                  <li>• 기술적 문제 해결</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 4. 개인정보 보유 및 이용기간 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. 개인정보 보유 및 이용기간</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-2 font-semibold">정보 유형</th>
                    <th className="text-left py-2 font-semibold">보유기간</th>
                    <th className="text-left py-2 font-semibold">근거</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  <tr className="border-b border-gray-200">
                    <td className="py-2">방명록 게시글</td>
                    <td className="py-2">삭제 요청 시까지</td>
                    <td className="py-2">서비스 제공</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2">접속 로그</td>
                    <td className="py-2">6개월</td>
                    <td className="py-2">보안 및 서비스 개선</td>
                  </tr>
                  <tr>
                    <td className="py-2">문의사항</td>
                    <td className="py-2">답변 완료 후 1년</td>
                    <td className="py-2">고객 서비스</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 5. 개인정보 제3자 제공 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. 개인정보 제3자 제공</h2>
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <p className="text-red-800 font-semibold mb-2">원칙적 금지</p>
              <p className="text-red-700 mb-4">
                예바동은 사용자의 개인정보를 외부에 제공하지 않습니다. 
                다만, 다음의 경우에는 예외로 합니다:
              </p>
              <ul className="text-red-700 space-y-1 text-sm">
                <li>• 사용자의 명시적 동의가 있는 경우</li>
                <li>• 법령에 의해 요구되는 경우</li>
                <li>• 생명, 신체의 안전을 위해 긴급히 필요한 경우</li>
              </ul>
            </div>
          </section>

          {/* 6. 개인정보 처리 위탁 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. 개인정보 처리 위탁</h2>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-3">현재 위탁 업체</h4>
              <table className="w-full text-sm text-blue-700">
                <thead>
                  <tr className="border-b border-blue-300">
                    <th className="text-left py-2">수탁업체</th>
                    <th className="text-left py-2">위탁업무</th>
                    <th className="text-left py-2">개인정보 항목</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-blue-200">
                    <td className="py-2">Vercel Inc.</td>
                    <td className="py-2">웹 호스팅 서비스</td>
                    <td className="py-2">접속 로그, IP 주소</td>
                  </tr>
                  <tr>
                    <td className="py-2">GitHub Inc.</td>
                    <td className="py-2">소스코드 관리</td>
                    <td className="py-2">기술적 로그만 해당</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* 7. 사용자 권리 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. 사용자의 권리</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">🔍 열람권</h4>
                <p className="text-sm text-green-700">
                  자신의 개인정보 처리 현황을 확인할 수 있습니다.
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">✏️ 정정권</h4>
                <p className="text-sm text-yellow-700">
                  잘못된 개인정보의 수정을 요구할 수 있습니다.
                </p>
              </div>
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">🗑️ 삭제권</h4>
                <p className="text-sm text-red-700">
                  개인정보의 삭제를 요구할 수 있습니다.
                </p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">⏸️ 처리정지권</h4>
                <p className="text-sm text-purple-700">
                  개인정보 처리 중단을 요구할 수 있습니다.
                </p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                권리 행사를 위해서는 <a href="mailto:admin@yebadong.org" className="text-blue-600 hover:underline">admin@yebadong.org</a>로 연락주세요.
              </p>
            </div>
          </section>

          {/* 8. 개인정보 보안 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. 개인정보 보안</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-gray-800 mb-3">보안 조치</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🔒</span>
                  <span><strong>HTTPS 암호화</strong>: 모든 데이터 전송은 SSL/TLS로 암호화됩니다.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🛡️</span>
                  <span><strong>접근 제한</strong>: 개인정보에 대한 접근은 최소한의 권한자로 제한됩니다.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2">📊</span>
                  <span><strong>정기 모니터링</strong>: 보안 상태를 정기적으로 점검합니다.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">🔄</span>
                  <span><strong>백업 및 복구</strong>: 안전한 데이터 백업 체계를 운영합니다.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* 9. 쿠키 정책 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. 쿠키 정책</h2>
            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-800 mb-3">쿠키 사용 목적</h4>
              <ul className="text-yellow-700 space-y-2 text-sm">
                <li>• <strong>필수 쿠키</strong>: 웹사이트 기본 기능 제공 (로그인 상태 유지 등)</li>
                <li>• <strong>분석 쿠키</strong>: 사이트 이용 통계 분석 (익명화됨)</li>
                <li>• <strong>기능 쿠키</strong>: 사용자 설정 기억 (테마, 언어 등)</li>
              </ul>
              <p className="text-yellow-700 text-sm mt-3">
                브라우저 설정을 통해 쿠키를 거부할 수 있으나, 이 경우 일부 기능이 제한될 수 있습니다.
              </p>
            </div>
          </section>

          {/* 10. 연락처 및 개정 */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. 연락처 및 개정사항</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">📧 개인정보 보호 책임자</h4>
                <div className="text-blue-700 space-y-1 text-sm">
                  <p><strong>이메일</strong>: admin@yebadong.org</p>
                  <p><strong>업무</strong>: 개인정보 관련 문의, 불만 처리, 피해 구제</p>
                  <p><strong>응답시간</strong>: 영업일 기준 3일 이내</p>
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">📅 개정사항 안내</h4>
                <div className="text-green-700 space-y-1 text-sm">
                  <p>• 개정 시 웹사이트 공지</p>
                  <p>• 중요 변경사항은 이메일 통지</p>
                  <p>• 개정 효력: 공지 후 7일</p>
                  <p>• 이의제기 기간: 공지 후 30일</p>
                </div>
              </div>
            </div>
          </section>

          {/* 부록 */}
          <section className="mb-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">📚 관련 법령 및 기관</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>
                  <h4 className="font-semibold mb-2">관련 법령</h4>
                  <ul className="space-y-1">
                    <li>• 개인정보보호법</li>
                    <li>• 정보통신망법</li>
                    <li>• 전자상거래법</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">구제 기관</h4>
                  <ul className="space-y-1">
                    <li>• 개인정보보호위원회 (privacy.go.kr)</li>
                    <li>• 개인정보 침해신고센터 (privacy.or.kr)</li>
                    <li>• 인터넷 주소자원 관리원 (isis.kisa.or.kr)</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 마지막 업데이트 */}
          <div className="text-center border-t border-gray-200 pt-8">
            <p className="text-sm text-gray-500">
              본 개인정보처리방침은 <strong>2024년 12월</strong>부터 적용됩니다.
            </p>
            <p className="text-xs text-gray-400 mt-2">
              예바동(Yebadong) - 한국 프로그레시브 록 커뮤니티 (1994년 창립)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
