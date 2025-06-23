import React from 'react';

const IntroPage = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Introducing YeBaDong
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            예바동을 소개합니다
          </p>
        </div>

        <div className="prose prose-lg max-w-3xl mx-auto text-gray-700">
          <h2>🎸 예바동은 어떤 곳인가요?</h2>
          <p>
            안녕하세요! 인터넷 아트락 동호회 <strong>예바동</strong>은 1994년 4월 7일에 시작되어, 프로그레시브 락(아트락)을 사랑하는 사람들의 소중한 소통의 장이 되어 왔습니다.
          </p>
          <p>
            초기 메일링 리스트 기반의 활동을 넘어, 이제는 페이스북 그룹을 통해 더 많은 분들과 함께하고 있습니다. 전 세계 아트락 팬들과 교류하고 싶으시다면 아래 절차를 참고하여 예바동 페이스북 그룹에 참여해 주세요.
          </p>

          <h2>📬 페이스북 그룹 가입 방법</h2>
          <p>
            예바동은 Facebook 그룹을 통해 운영되고 있습니다. 가입은 누구나 가능하며, 아트락을 사랑하는 모든 분들을 진심으로 환영합니다!
          </p>
          
          <h3>1️⃣ Facebook 계정 만들기</h3>
          <p>
            계정이 없으시다면, 먼저 <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">facebook.com</a>에서 무료 계정을 만들어 주세요. 이름, 이메일(또는 휴대폰 번호), 비밀번호만 입력하면 간단하게 생성할 수 있습니다.
          </p>
          
          <h3>2️⃣ 예바동 그룹 가입하기</h3>
          <p>
            아래 링크를 클릭해 예바동 그룹을 찾아보세요.
          </p>
          <p className="text-center">
            <a 
              href="https://www.facebook.com/groups/337670826283451" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 no-underline"
            >
              👉 예바동 페이스북 그룹 바로가기
            </a>
          </p>
          <p>
            '가입하기(Join Group)' 버튼을 클릭한 후, 간단한 가입 질문에 답변해 주시면 관리자 승인 후 활동하실 수 있습니다. 다양한 아트락 이야기와 추천, 소식을 함께 나눠요!
          </p>

          <h2>🤝 함께해요!</h2>
          <p>
            예바동은 20년 넘게 비영리로 운영되는 순수 동호회입니다. 아트락을 사랑하고, 그 열정을 나누고 싶은 모든 분들을 언제나 기다리고 있겠습니다.
          </p>
          <p>감사합니다.</p>
        </div>
      </div>
    </div>
  );
};

export default IntroPage; 