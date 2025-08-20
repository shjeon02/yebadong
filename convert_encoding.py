#!/usr/bin/env python3
import sys

def convert_file(input_file, output_file):
    """EUC-KR에서 UTF-8로 변환 (에러 무시)"""
    try:
        # EUC-KR로 읽기 시도
        with open(input_file, 'r', encoding='euc-kr', errors='ignore') as f:
            content = f.read()
        
        # meta charset을 UTF-8로 변경
        content = content.replace('charset=EUC-KR', 'charset=UTF-8')
        
        # UTF-8로 저장
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(content)
            
        print(f"✅ 성공: {input_file} → {output_file}")
        return True
        
    except Exception as e:
        print(f"❌ 실패: {input_file} - {e}")
        return False

if __name__ == "__main__":
    # Session 19 변환
    convert_file("yebadong old/html/concert/19.html", "yebadong old/html/concert/19-utf8-converted.html")
    
    # Session 21 변환
    convert_file("yebadong old/html/concert/21.html", "yebadong old/html/concert/21-utf8-converted.html")
