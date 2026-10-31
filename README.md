# Hermes UI Collection

Hermes Desktop의 **화면 전체**를 바꾸는 UI 전용 테마 플러그인입니다. 백엔드·게이트웨이·모델·기억·스킬은 건드리지 않습니다.

## 테마

| 테마 | 분위기 | 서체 |
|---|---|---|
| **Tide** | 깨끗한 화이트와 코발트 블루, 또렷한 사이드바 | SUIT |
| **Mint** | 화이트 바탕에 민트 그린 포인트, 차분한 정보 중심 | IBM Plex Sans KR · Manrope |
| **Frost** | 반투명 유리 표면과 가벼운 서체 | Noto Sans KR · Inter Tight |

세 테마 모두 **색만 바꾸지 않습니다.** 같은 앱이라고 바로 알아보기 어려울 정도로 다음이 함께 바뀝니다.

- 사이드바 배경·구분선, 현재 페이지 표시(솔리드/라인), 아이콘 타일
- 상단 탭 모양(필 / 밑줄 / 유리 알약), 탭 스트립 배경
- 버튼 곡률·그라데이션·그림자, 입력창·검색창·단축키 칩
- 채팅 입력창(컴포저) 곡률·테두리·포커스 링
- 빈 채팅의 워드마크 서체와 그라데이션
- 본문 서체(테마마다 완전히 다른 글꼴), 제목 자간
- 아이콘 글리프: Codicon을 Lucide 라인 아이콘 세트로 교체
- 사용자 말풍선, 인라인 코드, 코드 블록, 링크 색
- **봇 그룹 룸**: 그룹 전환 목록, 방 헤더, 메시지 카드, 입력창·보내기 버튼
- 상태바, 스크롤바, 선택 영역

## 사용법

### 테마 바꾸기

1. **설정 → 화면 → 테마**를 엽니다.
2. **Tide / Mint / Frost** 중 하나를 클릭합니다.
3. 같은 화면의 **라이트 / 다크 / 시스템**으로 모드를 고릅니다.

사이드바의 **UI 테마** 페이지에서도 세 테마를 미리 보고 바로 적용할 수 있습니다.

### 플러그인 켜기/끄기

**기능(Capabilities) → 플러그인(Plugins)** 에서 **Hermes UI Collection** 항목을 켜거나 끕니다. 끄면 앱은 원래 테마로 돌아갑니다.

### 테마가 안 보일 때

1. **기능 → 플러그인**에서 플러그인이 **켜져 있는지** 확인합니다.
2. ⌘K → **데스크톱 플러그인 다시 로드**(Reload desktop plugins)를 실행합니다.
3. 그래도 안 보이면 Hermes Desktop을 한 번 재시작합니다.

## 설치

### 앱에서 설치 (권장)

Hermes Desktop → **기능(Capabilities) → 플러그인(Plugins) → Git에서 설치(Install from Git)** 에서 아래 URL을 넣습니다.

```
https://github.com/hushmind3/hermes-ui-collection
```

설치 후 Plugins 목록에서 **Hermes UI Collection** 데스크톱 플러그인을 **켜기** 하면 됩니다. 그다음 **설정 → 화면 → 테마**에서 Tide / Mint / Frost를 고릅니다.

빌드나 터미널 작업은 필요 없습니다. `plugin.js`는 이미 빌드되어 레포에 포함되어 있습니다.

### 터미널로 설치 (대안)

플러그인 파일 하나만 복사하는 방법:

```bash
mkdir -p "$HOME/.hermes/desktop-plugins/hermes-ui-collection" \
  && curl -fsSL https://raw.githubusercontent.com/hushmind3/hermes-ui-collection/main/plugin.js \
     -o "$HOME/.hermes/desktop-plugins/hermes-ui-collection/plugin.js"
```

또는 이 저장소에서:

```bash
./install.sh
```

## 업데이트와의 관계

이 플러그인은 앱 번들 밖(`~/.hermes/desktop-plugins/hermes-ui-collection`)에 설치되고, `@hermes/plugin-sdk`의 테마 기여(`THEMES_AREA`)와 `customCSS`로만 동작합니다. Hermes Desktop을 업데이트해도 플러그인 폴더는 그대로 남고, 앱이 플러그인을 다시 읽습니다.

화면을 잡는 선택자는 앱이 공개한 훅(`data-slot`, `data-tree-*`, `data-sidebar`, `data-role`)과 테마 토큰(`--ui-*`)을 중심으로 씁니다. 봇 그룹 룸처럼 플러그인 쪽에 공개 훅이 없는 화면은 `section:has(> [role="log"])` 같은 구조 선택자로 잡습니다.

업데이트로 앱 내부 훅 이름이 바뀌면 **그 부분만 기본 스타일로 돌아갑니다.** 테마 선택·글꼴·색은 유지되고, 플러그인이 앱 실행을 막거나 데이터를 건드리지 않습니다. 문제가 생기면 플러그인을 끄거나 폴더를 지우면 바로 원복됩니다.

## 구조

- `대시보드` 페이지: 봇·그룹·모델 현황과 빠른 작업
- `UI 테마` 페이지: Tide / Mint / Frost 미리보기·적용

```
plugin.js      # 테마 3개 + UI 테마 페이지 + 사이드바 항목 (미리 빌드됨)
src/           # 테마·크롬 CSS·아이콘 생성 소스
install.sh     # ~/.hermes/desktop-plugins 로 복사
```

## 개발자용

```bash
npm install
npm run typecheck
npm run build    # src/ → plugin.js
npm run watch    # 저장할 때마다 빌드
```

### 테마 추가

`src/themes.ts`의 `OUR_THEMES` 배열에 `DesktopTheme` 객체를 하나 더 넣으면 됩니다. 색은 `colors`/`darkColors`, 모양은 `buildChrome()`의 파라미터로 지정합니다.

```js
const MY_THEME = {
  name: 'my-theme',
  label: 'My Theme',
  description: '나만의 테마',
  colors: { /* DesktopThemeColors */ },
  darkColors: { /* DesktopThemeColors */ },
  typography: { fontSans: '...', fontUrl: '...', fontMono: '...' },
  customCSS: myChromeCSS
}
```

## 라이선스

MIT. `src/icons.ts`의 아이콘은 [Lucide](https://lucide.dev)(ISC)에서 생성했습니다.
