import React from 'react';

const IntroPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-4xl font-bold mb-4">Introducing YeBaDong - 예바동을 소개합니다</h1>
      
      <div className="space-y-4">
        <p>안녕하세요. 인터넷 아트락 동호회 [예바동]은 1994년 4월 7일 인터넷 사용자들의 프로그레시브/아트락 모임으로 시작된 메일링리스트입니다. [예바동]은 [예술적인 락음악 동호회]의 약자로서 아트락을 사랑하는 인터넷 사용자들의 모임으로 하고자 합니다.</p>
        <p>현재 메일링 리스트의 주소는 <a href="mailto:yebadong@egroups.com" className="text-blue-400">yebadong@egroups.com</a>입니다. 아트락에 관한 새로운 소식이나 알고계시는 정보, 그리고 소개하고 싶은 음악에 대한 글들을 이 주소로 보내주시길 바랍니다. 현재 저희 메일링리스트는 <a href="news:han.arts.music.progressive" className="text-blue-400">han.arts.music.progressive</a> 뉴스그룹과 상호 연동되어 있습니다. 현재 회원 인원은 400여명이고, digest mail로 받아보실 수 있습니다.</p>
        <p>자세한 내용은 <a href="/faq" className="text-blue-400">FAQ</a> 를 참조해주십시오.</p>
      </div>

      <h2 className="text-3xl font-bold mt-8 mb-4">Subscribe to YeBaDong - 예바동에 가입하기</h2>
      <div className="space-y-4">
        <p>[예바동]은 순수한 비영리 아트락을 사랑하는 인터넷 사용자들의 메일링리스트로, 아트락을 사랑하는 모든 네티즌 여러분에게 개방되어 있습니다. 가입과 탈퇴는 e-mail 만으로 가능합니다.</p>
        <p><a href="mailto:yebadong-subscribe@kr.egroups.com" className="text-blue-400">yebadong-subscribe@kr.egroups.com</a>으로 편지를 하나 보내시면 자동 가입 됩니다.</p>
        <p><a href="mailto:yebadong-unsubscribe@kr.egroups.com" className="text-blue-400">yebadong-unsubscribe@kr.egroups.com</a>으로 편지를 하나 보내시면 자동 탈퇴됩니다.</p>
        <p>예바동 mailing list의 주소는 <a href="mailto:yebadong@egroups.com" className="text-blue-400">yebadong@egroups.com</a>입니다. 새로운 소식이나 알고 계시는 정보, 그리고 소개하고 싶은 음악에 대한 글을 이 주소로 보내어 주시길 바랍니다. 많은 참여 요청합니다!!! 감사합니다.</p>
        <p>가입이 어려우신가요? 그럼 <a href="/faq/faq1#9" className="text-blue-400">FAQ</a> 를 보세요.</p>
      </div>

      <div className="mt-8">
        <p><a href="/intro/greeting" className="text-blue-400">예바동에 가입인사</a> - 예바동에 가입하신 분들의 자신을 소개하는 글들입니다.</p>
        <p>홈페이지의 좌단에 있는 icon에 해당되는 내용은 <a href="/faq/ybd-faq4#14" className="text-blue-400">FAQ</a>를 참고하세요.</p>
      </div>
    </div>
  );
};

export default IntroPage; 