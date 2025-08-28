// Artrock Index 추출 스크립트
const fs = require('fs');
const path = require('path');

// 원본 HTML 파일 읽기
const htmlFilePath = '/Users/shjeon/Documents/Project/yebadong/yebadong old/html/misc/artrock-utf8.htm';
const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');

// HTML에서 <pre> 태그 내용 추출
const preMatch = htmlContent.match(/<pre>([\s\S]*?)<\/pre>/);
if (!preMatch) {
  console.error('pre 태그를 찾을 수 없습니다.');
  process.exit(1);
}

const preContent = preMatch[1];

// 라인별로 분할
const lines = preContent.split('\n');

// 인덱스 항목을 저장할 배열
const indexItems = [];

// 현재 섹션을 추적
let currentSection = '';

// 각 라인 처리
for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  
  // 빈 라인이나 HTML 태그가 포함된 라인 건너뛰기
  if (!line || line.includes('<') || line.includes('&nbsp;') || line.includes('이 경우는') || line.includes('유용하게') || line.includes('혹시')) {
    continue;
  }
  
  // 섹션 헤더 감지 (한국, 숫자, A, B, C 등)
  if (line === '한국' || line === '숫자' || line.match(/^[A-Z]$/)) {
    currentSection = line;
    continue;
  }
  
  // 실제 인덱스 항목 처리
  if (line.length > 10 && !line.startsWith('영국') && !line.startsWith('이태리') && !line.startsWith('특집') && !line.startsWith('에세이') && !line.startsWith('민속음악') && !line.startsWith('재즈') && !line.startsWith('재킷') && !line.startsWith('좌담회') && !line.startsWith('차트') && !line.startsWith('현대음악') && !line.startsWith('인터뷰')) {
    
    // 공백으로 구분된 항목들 파싱
    const parts = line.split(/\s+/);
    
    if (parts.length >= 4) {
      // 마지막 3개가 호수와 페이지 정보
      const page = parts[parts.length - 1];
      const issue = parts[parts.length - 2];
      const type = parts[parts.length - 3];
      
      // 아티스트명과 앨범명 분리 (나머지 부분)
      const contentParts = parts.slice(0, parts.length - 3);
      
      let artist = '';
      let album = '';
      
      // 아티스트명과 앨범명 구분 (첫 번째 긴 공백 또는 탭으로 구분)
      const originalLine = lines[i];
      const tabIndex = originalLine.indexOf('\t');
      const multiSpaceIndex = originalLine.search(/\s{2,}/);
      
      if (tabIndex > 0 || multiSpaceIndex > 0) {
        const splitIndex = tabIndex > 0 ? tabIndex : multiSpaceIndex;
        const beforeSplit = originalLine.substring(0, splitIndex).trim();
        const afterSplit = originalLine.substring(splitIndex).trim();
        
        artist = beforeSplit;
        
        // 앨범명, 타입, 호수, 페이지 추출
        const remainingParts = afterSplit.split(/\s+/);
        if (remainingParts.length >= 3) {
          const albumParts = remainingParts.slice(0, remainingParts.length - 3);
          album = albumParts.join(' ');
        }
      } else {
        // 탭이나 긴 공백이 없는 경우, 첫 번째 단어를 아티스트로 처리
        artist = contentParts[0] || '';
        album = contentParts.slice(1).join(' ');
      }
      
      // 유효한 데이터인지 검증
      if (artist && type && issue && page && issue.match(/^\d+$/) && page.match(/^\d+$/)) {
        indexItems.push({
          artist: artist.replace(/,\s*$/, ''), // 끝의 쉼표 제거
          album: album || '',
          type: type,
          issue: issue.padStart(2, '0'), // 2자리로 패딩
          page: page.padStart(3, '0'),   // 3자리로 패딩
          section: currentSection || 'Unknown'
        });
      }
    }
  }
}

// 결과를 JavaScript 배열 형태로 출력
console.log('// 추출된 Artrock Index 데이터');
console.log('const artrockIndex = [');

indexItems.forEach((item, index) => {
  const comma = index < indexItems.length - 1 ? ',' : '';
  console.log(`  { artist: "${item.artist}", album: "${item.album}", type: "${item.type}", issue: "${item.issue}", page: "${item.page}", section: "${item.section}" }${comma}`);
});

console.log('];');

console.log(`\n// 총 ${indexItems.length}개 항목 추출됨`);

// 섹션별 통계
const sectionStats = {};
indexItems.forEach(item => {
  sectionStats[item.section] = (sectionStats[item.section] || 0) + 1;
});

console.log('\n// 섹션별 통계:');
Object.entries(sectionStats).forEach(([section, count]) => {
  console.log(`// ${section}: ${count}개`);
});
