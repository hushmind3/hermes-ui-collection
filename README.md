# Hermes UI Collection

Hermes Desktop의 **화면 전체**를 바꾸는 UI 전용 테마 플러그인입니다. 백엔드·게이트웨이·모델·기억·스킬은 건드리지 않습니다.

## 테마

| 테마 | 분위기 | 서체 |
|---|---|---|
| **Tide** | 쿨한 블루, 둥근 카드, 또렷한 사이드바 | Gothic A1 · Space Grotesk |
| **Mint** | 민트 그린, 얇은 격자, 각진 카드 | IBM Plex Sans KR · DM Serif Display |
| **Frost** | 반투명 유리, 공기처럼 가벼운 표면 | Sunflower · Inter Tight |

세 테마 모두 **색만 바꾸지 않습니다.** 같은 앱이라고 바로 알아보기 어려울 정도로 다음이 함께 바뀝니다.

- 사이드바 배경·구분선, 현재 페이지 표시(솔리드/라인), 아이콘 타일
- 상단 탭 모양(필 / 밑줄 / 유리 알약), 탭 스트립 배경
- 버튼 곡률·그라데이션·그림자, 입력창·검색창·단축키 칩
- 채팅 입력창(컴포저) 곡률·테두리·포커스 링
- 빈 채팅의 워드마크 서체와 그라데이션
- 본문 서체(테마마다 완전히 다른 글꼴), 제목 자간
- 아이콘 글리프: Codicon을 Lucide 라인 아이콘 세트로 교체
- 사용자 말풍선, 인라인 코드, 코드 블록, 링크 색
- 상태바, 스크롤바, 선택 영역

테마는 **설정 → 모양**에서 고르거나, 사이드바의 **UI 테마** 페이지에서 미리 보고 적용할 수 있습니다.

## 설치

### 앱에서 설치 (권장)

Hermes Desktop → **기능(Capabilities) → Plugins → Install from Git** 에서 아래 URL을 넣습니다.

```
https://github.com/hushmind3/hermes-ui-collection
```

설치 후 Plugins 목록에서 **Hermes UI Collection** 데스크톱 플러그인을 **켜기** 하면 됩니다. 그다음:

- 설정 → **모양**에서 Tide / Mint / Frost 선택
- 또는 사이드바의 **UI 테마** 페이지에서 미리보고 적용

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

개발 중에는:

```bash
npm install
npm run build    # src/ → plugin.js
npm run watch    # 저장할 때마다 빌드
```

## 업데이트와의 관계

이 플러그인은 앱을 수정하지 않고 `@hermes/plugin-sdk`의 테마 기여(`THEMES_AREA`)로만 동작합니다. Hermes Desktop을 업데이트해도 플러그인 폴더는 그대로 남고, 앱이 플러그인을 다시 읽습니다.

화면을 잡는 선택자는 앱이 공개한 훅(`data-slot`, `data-tree-*`, `data-sidebar`, `data-role`)과 테마 토큰(`--ui-*`)만 씁니다. 나중에 앱이 특정 훅의 이름을 바꾸면 그 부분만 기본 스타일로 돌아가고, 플러그인이 앱 실행을 막거나 깨뜨리지는 않습니다.

## 구조

- `대시보드` 페이지: 봇·그룹·모델 현황과 빠른 작업
- `UI 테마` 페이지: Tide / Mint / Frost 미리보기·적용

```
plugin.js      # 테마 3개 + UI 테마 페이지 + 사이드바 항목 (미리 빌드됨)
src/           # 테마·크롬 CSS·아이콘 생성 소스
install.sh     # ~/.hermes/desktop-plugins 로 복사
```

## 테마 추가

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
