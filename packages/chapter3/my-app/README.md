# 프로젝트 개요
- React 프로젝트에서 SEO 대응을 위한 최소 작업 대응

## 개발환경 세팅
- (여기에 개발 환경 세팅을 위해 필요한 작업 적기)

### 타이틀
```<title>웹 페이지 제목</title>``` : 네이버 15자 내외 / 구글 50-60자

### 메타태그
```<meta name="description" content="웹 페이지 내용 요약" />``` : 네이버 45자 이내 / 구글 웹 320자 모바일 120자

```<meta name="keywords" content="검색 키워드 나열" />``` : 한 때는 검색엔진에 중요한 역할을 했지만, 악용 사례가 많아 현재는 작은 검색엔진들만 참고하고 있다.

```<meta name="robots" content="웹 크롤러 허용 범위 설정" />```

    * index : 페이지 읽기 허용
    * noindex : 페이지 읽기 비허용
    * follow : 페이지 내 링크 이동 허용
    * nofollow : 페이지 내 링크 이동 비허용
    로봇 메타 태그 미지정 시 크롤링 시 페이지 자동 순회. 사실상 noindex/nofollow 일때만 사용.

### OG(Open Graph) : 콘텐츠 미리보기
```
<meta property="og:type" content="website" />
<meta property="og:title" content="콘텐츠 제목" />
<meta property="og:description" content="콘텐츠 내용 요약" />
<meta property="og:image" content="표시되는 이미지" />
<meta property="og:url" content="이동 링크" />
```

### 트위터 
```
<meta name="twitter:card" content="트위터 카드 타입(요약정보, 사진, 비디오)" /> 
<meta name="twitter:title" content="콘텐츠 제목" /> 
<meta name="twitter:description" content="웹페이지 설명" /> 
<meta name="twitter:image" content="표시되는 이미지 " />
```

### 모바일 앱
- IOS :
  ```
    <meta property="al:ios:url" content="ios 앱 URL" />
    <meta property="al:ios:app_store_id" content="ios 앱스토어 ID" /> 
    <meta property="al:ios:app_name" content="ios 앱 이름" />
  ```
- Android :
  ```
    <meta property="al:android:url" content="안드로이드 앱 URL" />
    <meta property="al:android:app_name" content="안드로이드 앱 이름" />
    <meta property="al:android:package" content="안드로이드 패키지 이름" /> 
    <meta property="al:web:url" content="안드로이드 앱 URL" />
  ```

### 캐노니컬 태그
사이트 내 URL 주소는 다르지만 동일한 내용의 중복된 페이지가 있을 때 페이지에 코드를 삽입하여 검색엔진에 대표가 되는 URL 주소를 알려주는 역할을 하는 태그입니다.
캐노니컬 태그 미적용시 : 
- 작업자 의도와 다르게 크롤링 가능
- 동일 페이지 주소가 여려개 있을 경우 검색엔진 패널티 받을 수 있음
```<link rel="canonical" href="대표 링크" />```
[구글 캐노니컬 가이드 바로가기 >](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls?hl=ko&visit_id=638477533140695839-4008125504&rd=1)

### Favicon
- favicon.ico : 파비콘의 시초. 모든 브라우저 적용 가능함. ico 파일은 한 파일 안에 여러 사이즈 이미지를 저장 가능함. 일반적인 에디터로 ico 파일 못만듬. png파일을 파비콘 편집기로 원하는 사이즈를 포함한 ico 파일 변환 가능함. 최소 16x16(일반적인 브라우저), 32x32(safari 나중에 읽기 사이드바), 48x48(윈도우즈 사이트) 사이즈를 포함시켜야함. 모바일에서 ico파일을 읽어내지 못함.
- Android: ```<link rel=”icon” type=”image/png” sizes=”192x192” href=”/favicon-192x192.png”>```
- IOS: ```<link rel=”apple-touch-icon” sizes=”180x180” href=”/apple-touch-icon-180x180.png”>```
- ico 파일 없을 경우 404 회피 방법 : ```<link rel="shortcut icon" href="data:image/x-icon" type="image/x-icon" />```

### Menifest.json
- name : 홈 화면에서 보여질 아이콘 이름.
- short_name : 공간이 부족해 위의 아이콘 이름을 전부 표시할 수 없을 시 사용됨.
- icons : 홈화면에 추가할때 사용할 이미지. density(기기의 pixel density에 맞춰 어떤 아이콘이 사용될지 결정. default는 1.0임)
- start_url : 웹앱 실행시 시작되는 url 주소.
- display : 디스플레이 유형. fullscreen, minimul-ui, standalone, browser 중 설정.
- theme_color : 상단 툴바의 색상 지정.
- background_color : 스플래시 화면 배경 색상 지정.
- orientation :  특정 방향을 강제로 지정. any, landscape, portrait 중 설정.

## [작업 전] SEO 스코어 분석 
- 스코어 분석에 사용한 서비스: (링크 적기, 예: https://www.seobility.net/en/seocheck/)

### [작업 전] 개선점
- 스코어 개선을 위해 필요한 작업 1
- 스코어 개선을 위해 필요한 내용 2
- 스코어 개선을 위해 필요한 내용 3
