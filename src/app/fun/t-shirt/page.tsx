import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YBD T-shirt 주문 | Fun | Yebadong',
  description: '1990년대 예바동 공식 티셔츠 주문 공지 - 역사적 기록물',
};

export default function TShirtPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-blue-800">
              👕 YBD T-shirt 주문
            </h1>
            <div className="text-lg text-gray-600 mb-6">
              <p className="bg-yellow-100 inline-block px-4 py-2 rounded-lg border border-yellow-300">
                📅 <strong>기한:</strong> 4월 4일 금요일까지
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            
            {/* 주문 정보 */}
            <div className="bg-blue-100 p-6 rounded-lg mb-6 border-l-4 border-blue-500">
              <h2 className="text-xl font-bold text-blue-800 mb-4">💰 가격 정보</h2>
              <div className="space-y-2 text-blue-700">
                <p><strong>기본 가격:</strong> 장당 13,000원</p>
                <p><strong>우편 주문:</strong></p>
                <ul className="ml-6 space-y-1">
                  <li>• 등기소포: +1,500원</li>
                  <li>• 그냥소포: +1,000원</li>
                </ul>
                <p className="text-sm text-gray-600">반팔 면티셔츠입니다.</p>
              </div>
            </div>

            {/* 디자인 */}
            <div className="bg-purple-100 p-6 rounded-lg mb-6 border-l-4 border-purple-500">
              <h2 className="text-xl font-bold text-purple-800 mb-4">🎨 디자인</h2>
              <div className="text-purple-700">
                <p className="mb-2">디자인을 보고 싶으시면 다음 링크를 참고하세요:</p>
                <div className="space-x-4">
                  <span className="inline-block bg-purple-200 px-3 py-1 rounded text-sm">
                    <a href="http://bioneer.kaist.ac.kr/~icshin/ybd_logo.html" className="text-purple-800 hover:underline">앞면</a>
                  </span>
                  <span className="inline-block bg-purple-200 px-3 py-1 rounded text-sm">
                    <a href="http://bioneer.kaist.ac.kr/~icshin/back.html" className="text-purple-800 hover:underline">뒷면</a>
                  </span>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  ※ 링크는 역사적 기록으로 현재는 접속되지 않을 수 있습니다.
                </p>
              </div>
            </div>

            {/* 신청 방법 */}
            <div className="bg-green-100 p-6 rounded-lg mb-6 border-l-4 border-green-500">
              <h2 className="text-xl font-bold text-green-800 mb-4">📧 신청 방법</h2>
              
              <div className="space-y-4 text-green-700">
                <div>
                  <h3 className="font-semibold text-lg mb-2">1. 메일 신청</h3>
                  <p className="mb-2">
                    <strong>메일 주소:</strong> 
                    <code className="bg-gray-200 px-2 py-1 rounded text-sm ml-2">
                      yebadong-owner@cclab.kaist.ac.kr
                    </code>
                  </p>
                  <p className="mb-2"><strong>제목:</strong> "T-shirt 신청"</p>
                  
                  <div className="bg-gray-50 p-4 rounded border-2 border-dashed border-gray-300 font-mono text-sm">
                    <p className="font-bold mb-3">다음 양식을 작성해서 보내주세요:</p>
                    <div className="space-y-2">
                      <p>이름 : ________________</p>
                      <p>T-shirt의 갯수 : ______ 개</p>
                      <p>size : ______ (보통 T shirt의 사이즈입니다. 예, 100, 105 등)</p>
                      <p>T-shirt를 받는 방법 : 직접 또는 우편(등기소포, 보통소포)</p>
                      <p>주소: (우편으로 받고 싶은 경우에만 적어주세요)</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-2">2. 입금</h3>
                  <p className="mb-3">신청하신 분의 성함과 입금된 금액을 체크해서 정확한 T-shirt의 갯수를 주문하겠습니다.</p>
                  
                  <div className="bg-yellow-50 p-4 rounded border border-yellow-300">
                    <h4 className="font-semibold text-yellow-800 mb-2">💳 계좌 정보</h4>
                    <div className="space-y-1 text-sm">
                      <p><strong>한일은행:</strong> 270-022086-12-001</p>
                      <p><strong>외환은행:</strong> 274-18-04622-3</p>
                      <p><strong>예금주:</strong> 전 승훈</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 가격 분석 */}
            <div className="bg-orange-100 p-6 rounded-lg border-l-4 border-orange-500">
              <h2 className="text-xl font-bold text-orange-800 mb-4">💡 티셔츠 가격 분석</h2>
              
              <div className="text-orange-700 space-y-4 leading-relaxed">
                <p>
                  티셔츠의 앞면에 들어가는 로고는 색상이 많아서 중저가 티셔츠로는 주문을 할 수 없었습니다. 
                  그래서, <strong>Photo Design</strong>이란 업체에서 프린트를 맡기게 되었습니다. 
                  그 가격이 한장당 <strong className="text-red-600">7,000원</strong>입니다.
                </p>
                
                <p>
                  뒷면 로고는 색상을 적게 선택해서 티셔츠를 사오는 곳에서 만들었습니다. 
                  가격이 <strong className="text-blue-600">5,800원</strong>입니다. 일단 티셔츠에 뒷면만 찍어온 다음, 
                  Photo Design에 맡겨서 앞면을 프린트할려고 생각하고 있습니다.
                </p>
                
                <div className="bg-orange-50 p-4 rounded border border-orange-200">
                  <p>
                    원래 Photo Design에 앞뒷면을 모두 부탁하려고 했는데, 워낙 가격이 비싸서, 
                    위와 같은 <em className="text-green-600 font-semibold">꽁수</em>를 생각해냈습니다. 
                    그래도 가격이 조금 비싸죠?
                  </p>
                  <p className="mt-2 font-semibold text-orange-800">
                    원래 취지가 이쁜 티셔츠를 입어보기 위한 거니까요. 지금 바로 신청해주세요. 😊
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* 역사적 의미 */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">📜 역사적 의미</h2>
            <div className="leading-relaxed space-y-3">
              <p>
                이 글은 1990년대 중반 예바동 커뮤니티에서 제작한 공식 티셔츠 주문 공지입니다. 
                당시 인터넷 커뮤니티가 오프라인 굿즈를 제작하던 모습을 보여주는 귀중한 기록물입니다.
              </p>
              <p>
                13,000원이라는 가격은 당시 기준으로 상당히 고가였으며, 멀티컬러 프린팅 기술의 한계로 
                인해 앞면과 뒷면을 다른 업체에서 제작해야 했던 상황도 엿볼 수 있습니다.
              </p>
              <p className="text-yellow-300 font-semibold">
                💝 예바동 멤버들의 소속감과 자부심을 나타내는 상징적인 아이템이었습니다.
              </p>
            </div>
          </div>

          {/* 네비게이션 */}
          <div className="text-center">
            <a 
              href="/fun" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-500 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Fun 섹션으로 돌아가기
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
