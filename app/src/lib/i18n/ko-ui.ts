/**
 * English -> Korean translations for renderer (React) UI strings.
 *
 * Like the menu map in `./ko`, keys are the exact English source strings so
 * that English output is unchanged and any string without an entry falls back
 * to English. `__DARWIN__` Title Case / non-darwin lower case variants are both
 * listed where they differ.
 *
 * This dictionary is grown incrementally as more of the UI is localized.
 */
export const koUiText: ReadonlyMap<string, string> = new Map([
  // Preferences / Settings dialog
  ['Settings', '설정'],
  ['Options', '옵션'],
  ['Accounts', '계정'],
  ['Integrations', '통합'],
  ['Appearance', '모양'],
  ['Notifications', '알림'],
  ['Prompts', '확인 메시지'],
  ['Advanced', '고급'],
  ['Accessibility', '접근성'],
  ['Save', '저장'],

  // Appearance tab
  ['Loading system theme', '시스템 테마를 불러오는 중'],
  ['Theme', '테마'],
  ['Light', '라이트'],
  ['Dark', '다크'],
  ['System', '시스템'],
  ['Formatting', '서식'],
  ['Date Format', '날짜 형식'],
  ['Date format', '날짜 형식'],
  ['Time Format', '시간 형식'],
  ['Time format', '시간 형식'],
  ['Number Format', '숫자 형식'],
  ['Number format', '숫자 형식'],
  ['Prefer absolute dates over relative', '상대 날짜 대신 절대 날짜 사용'],
  ['Diff', '차이'],
  ['Tab Size', '탭 크기'],
  ['Tab size', '탭 크기'],

  // Notifications tab
  ['Enable notifications', '알림 사용'],
  [
    'Allows the display of notifications when high-signal events take place in the current repository.',
    '현재 저장소에서 중요한 이벤트가 발생하면 알림을 표시합니다.',
  ],

  // Accessibility tab
  ['Underline links', '링크에 밑줄 표시'],
  [
    'When enabled, GitHub Desktop will underline links in commit messages, comments, and other text fields. This can help make links easier to distinguish.',
    'GitHub Desktop가 커밋 메시지, 댓글 및 기타 텍스트 필드에서 링크에 밑줄을 표시합니다. 이렇게 하면 링크를 더 쉽게 구분할 수 있습니다.',
  ],
  ['This is an example link', '예시 링크입니다'],
  ['Show check marks in the diff', '차이에 체크 표시 보기'],
  [
    'When enabled, check marks will be displayed along side the line numbers and groups of line numbers in the diff when committing. When disabled, the line number controls will be less prominent.',
    '사용하면 커밋 시 차이의 줄 번호와 줄 번호 그룹 옆에 체크 표시가 나타납니다. 사용 안 함으로 설정하면 줄 번호 컨트롤이 덜 두드러지게 표시됩니다.',
  ],

  // Advanced tab
  ['Background updates', '백그라운드 업데이트'],
  ['Show status icons in the repository list', '저장소 목록에 상태 아이콘 표시'],
  [
    'These icons indicate which repositories have local or remote changes, and require the periodic fetching of repositories that are not currently selected.',
    '이 아이콘은 어떤 저장소에 로컬 또는 원격 변경 사항이 있는지 나타내며, 현재 선택되지 않은 저장소를 주기적으로 가져와야 합니다.',
  ],
  [
    'Turning this off will not stop the periodic fetching of your currently selected repository, but may improve overall app performance for users with many repositories.',
    '이 기능을 끄더라도 현재 선택된 저장소의 주기적 가져오기는 중지되지 않지만, 저장소가 많은 사용자의 경우 전반적인 앱 성능이 향상될 수 있습니다.',
  ],
  ['Usage', '사용 정보'],
  ['Network and credentials', '네트워크 및 자격 증명'],
  ['Use system OpenSSH (recommended)', '시스템 OpenSSH 사용 (권장)'],
  ['Use Git Credential Manager', 'Git Credential Manager 사용'],

  // Prompts (confirmations) tab
  ['Show a confirmation dialog before...', '다음 작업 전에 확인 대화 상자 표시...'],
  ['Removing repositories', '저장소 제거'],
  ['Discarding changes', '변경 사항 취소'],
  ['Discarding changes permanently', '변경 사항 영구 취소'],
  ['Discarding stash', '임시 저장 취소'],
  ['Checking out a commit', '커밋 체크아웃'],
  ['Force pushing', '강제 푸시'],
  ['Undo commit', '커밋 실행 취소'],
  [
    'Overriding commit message with generated message',
    '생성된 메시지로 커밋 메시지 덮어쓰기',
  ],
  ['Removing worktrees', '워크트리 제거'],
  ['Committing changes hidden by filter', '필터로 숨겨진 변경 사항 커밋'],
  ['If I have changes and I switch branches...', '변경 사항이 있는 상태에서 브랜치를 전환하면...'],
  ['Ask me where I want the changes to go', '변경 사항을 어디로 보낼지 물어보기'],
  ['Always bring my changes to my new branch', '항상 변경 사항을 새 브랜치로 가져오기'],
  [
    'Always stash and leave my changes on the current branch',
    '항상 변경 사항을 임시 저장하고 현재 브랜치에 남기기',
  ],
  ['Commit Length', '커밋 길이'],
  ['Show commit length warning', '커밋 길이 경고 표시'],

  // Git tab
  ['Author', '작성자'],
  ['Default branch', '기본 브랜치'],
  ['Hooks', '후크'],
  ['Load Git hook environment variables from shell', '셸에서 Git 후크 환경 변수 로드'],
  [
    'When enabled, GitHub Desktop will attempt to load environment variables from your shell when executing Git hooks. This is useful if your Git hooks depend on environment variables set in your shell configuration files, a common practice for version managers such as nvm, rbenv, asdf, etc.',
    'GitHub Desktop가 Git 후크를 실행할 때 셸에서 환경 변수를 로드합니다. nvm, rbenv, asdf 등 버전 관리자를 사용할 때처럼 셸 구성 파일에 설정된 환경 변수에 Git 후크가 의존하는 경우 유용합니다.',
  ],
  ['Shell to use when loading environment', '환경을 로드할 때 사용할 셸'],
  ['Cache Git hook environment variables', 'Git 후크 환경 변수 캐시'],
  [
    'Cache hook environment variables to improve performance. Disable if your hooks rely on frequently changing environment variables.',
    '후크 환경 변수를 캐시하여 성능을 향상시킵니다. 자주 변경되는 환경 변수에 후크가 의존한다면 사용 안 함으로 설정하세요.',
  ],
  ['Default branch name for new repositories', '새 저장소의 기본 브랜치 이름'],

  // Accounts tab
  ['Add GitHub Enterprise account', 'GitHub Enterprise 계정 추가'],
  ['Sign Out', '로그아웃'],
  ['Sign out', '로그아웃'],
  ['Sign Into GitHub.com', 'GitHub.com에 로그인'],
  ['Sign into GitHub.com', 'GitHub.com에 로그인'],
  ['Sign Into GitHub Enterprise', 'GitHub Enterprise에 로그인'],
  ['Sign into GitHub Enterprise', 'GitHub Enterprise에 로그인'],
  [
    'Sign in to your GitHub.com account to access your repositories.',
    'GitHub.com 계정에 로그인하여 저장소에 액세스하세요.',
  ],
  [
    'If you are using GitHub Enterprise at work, sign in to it to get access to your repositories.',
    '직장에서 GitHub Enterprise를 사용 중이라면 로그인하여 저장소에 액세스하세요.',
  ],

  // Integrations tab
  ['Applications', '애플리케이션'],
  ['External Editor', '외부 편집기'],
  ['External editor', '외부 편집기'],
  ['Shell', '셸'],
  ['Configure Custom Editor…', '사용자 지정 편집기 구성…'],
  ['Configure custom editor…', '사용자 지정 편집기 구성…'],
  ['Configure Custom Shell…', '사용자 지정 셸 구성…'],
  ['Configure custom shell…', '사용자 지정 셸 구성…'],
  ['No editors found.', '편집기를 찾을 수 없습니다.'],
  ['No other editors found.', '다른 편집기를 찾을 수 없습니다.'],

  // Copilot tab
  ['Models', '모델'],
  ['Providers', '제공자'],
  [
    'Sign in to an account with a Copilot license to configure Copilot settings.',
    'Copilot 설정을 구성하려면 Copilot 라이선스가 있는 계정으로 로그인하세요.',
  ],
  ['Sign In', '로그인'],
  ['Checking Copilot access…', 'Copilot 액세스 확인 중…'],
  [
    'Copilot features in GitHub Desktop require a GitHub Copilot license.',
    'GitHub Desktop의 Copilot 기능을 사용하려면 GitHub Copilot 라이선스가 필요합니다.',
  ],
  ['View Copilot plans', 'Copilot 요금제 보기'],
  [
    'A Copilot license is available for your account, but "Copilot in GitHub Desktop" is disabled in your Copilot feature settings.',
    '계정에 Copilot 라이선스가 있지만 Copilot 기능 설정에서 "Copilot in GitHub Desktop"이 비활성화되어 있습니다.',
  ],
  ['Open Copilot feature settings', 'Copilot 기능 설정 열기'],
  ['Loading available models…', '사용 가능한 모델을 불러오는 중…'],
  ['No Copilot models available.', '사용 가능한 Copilot 모델이 없습니다.'],
  ['Commit Message Generation', '커밋 메시지 생성'],
  ['Commit message generation', '커밋 메시지 생성'],
  [
    'Learn more about generating commit messages.',
    '커밋 메시지 생성에 대해 자세히 알아보기.',
  ],
  ['Conflict Resolution', '충돌 해결'],
  ['Conflict resolution', '충돌 해결'],
  [
    'Model changes apply to future conflict resolutions.',
    '모델 변경 사항은 향후 충돌 해결에 적용됩니다.',
  ],
  [
    'Always Use Copilot When Conflicts Are Detected',
    '충돌이 감지되면 항상 Copilot 사용',
  ],
  [
    'Always use Copilot when conflicts are detected',
    '충돌이 감지되면 항상 Copilot 사용',
  ],
  [
    'Add a custom provider to use your own API keys with OpenAI-compatible endpoints, Azure, Anthropic, or local providers like Ollama.',
    '사용자 지정 제공자를 추가하여 OpenAI 호환 엔드포인트, Azure, Anthropic 또는 Ollama 같은 로컬 제공자에서 자신의 API 키를 사용하세요.',
  ],
  ['Add Provider…', '제공자 추가…'],
  ['Add provider…', '제공자 추가…'],
  ['Local', '로컬'],

  // App body — Changes/History sidebar + commit form
  ['Changes', '변경 사항'],
  ['History', '기록'],
  ['Stashed Changes', '임시 저장된 변경 사항'],
  ['Summary (required)', '요약 (필수)'],
  ['Summary', '요약'],
  ['Description', '설명'],
  ['Commit summary', '커밋 요약'],
  ['Commit description', '커밋 설명'],
  ['Commit', '커밋'],
  ['Committing', '커밋 중'],
  ['Amend', '수정'],
  ['Amending', '수정 중'],

  // Toolbar — push / pull / fetch
  ['Publish repository', '저장소 게시'],
  ['Publish this repository to GitHub', '이 저장소를 GitHub에 게시'],
  ['Publish branch', '브랜치 게시'],
  ['Publish this branch to GitHub', '이 브랜치를 GitHub에 게시'],
  ['Publish this branch to the remote', '이 브랜치를 원격에 게시'],
  ['Rebase in progress', '리베이스 진행 중'],
  ['Cannot publish detached HEAD', '분리된 HEAD는 게시할 수 없습니다'],
  ['Hang on…', '잠시만요…'],
  ['Never fetched', '가져온 적 없음'],
  ['Last fetched', '마지막 가져오기'],
  ['Push, pull, fetch options', '푸시, 풀, 가져오기 옵션'],
  ['Pull, push, or fetch', '풀, 푸시 또는 가져오기'],

  // Toolbar — repository / branch dropdowns
  ['Current Repository', '현재 저장소'],
  ['Current repository', '현재 저장소'],
  ['Current Branch', '현재 브랜치'],
  ['Current branch', '현재 브랜치'],
  ['Currently on a detached HEAD', '현재 분리된 HEAD 상태입니다'],
  ['Detached HEAD', '분리된 HEAD'],
  ['Rebasing branch', '브랜치 리베이스 중'],
  ['Current branch dropdown button', '현재 브랜치 드롭다운 버튼'],

  // No local changes (empty state)
  ['No local changes', '로컬 변경 사항 없음'],
  [
    'There are no uncommitted changes in this repository. Here are some friendly suggestions for what to do next.',
    '이 저장소에는 커밋되지 않은 변경 사항이 없습니다. 다음에 할 만한 몇 가지 제안입니다.',
  ],
  ['View your stashed changes', '임시 저장한 변경 사항 보기'],
  ['View stash', '임시 저장 보기'],
  ['Publish your repository to GitHub', '저장소를 GitHub에 게시'],
  [
    'This repository is currently only available on your local machine. By publishing it on GitHub you can share it, and collaborate with others.',
    '이 저장소는 현재 로컬 컴퓨터에서만 사용할 수 있습니다. GitHub에 게시하면 공유하고 다른 사람과 협업할 수 있습니다.',
  ],
  ['Publish your branch', '브랜치 게시'],

  // Branches foldout + branch dialogs
  ['Branches', '브랜치'],
  ['Pull Requests', '풀 리퀘스트'],
  ['Pull requests', '풀 리퀘스트'],
  ['New Branch', '새 브랜치'],
  ['New branch', '새 브랜치'],
  ['Create a Branch', '브랜치 생성'],
  ['Create a branch', '브랜치 생성'],
  ['Create Branch', '브랜치 생성'],
  ['Create branch', '브랜치 생성'],
  ['Create branch based on…', '다음을 기준으로 브랜치 생성…'],
  ['Name', '이름'],
  ['Delete Branch', '브랜치 삭제'],
  ['Delete branch', '브랜치 삭제'],
  ['Delete', '삭제'],
  ['Rename Branch', '브랜치 이름 바꾸기'],
  ['Rename branch', '브랜치 이름 바꾸기'],

  // Clone repository dialog
  ['Clone a Repository', '저장소 복제'],
  ['Clone a repository', '저장소 복제'],
  ['Clone', '복제'],

  // Welcome flow
  [
    'GitHub Desktop is a seamless way to contribute to projects on GitHub and GitHub Enterprise. Sign in below to get started with your existing projects.',
    'GitHub Desktop은 GitHub 및 GitHub Enterprise의 프로젝트에 손쉽게 기여할 수 있는 방법입니다. 아래에서 로그인하여 기존 프로젝트를 시작하세요.',
  ],
  ['Sign in to GitHub.com', 'GitHub.com에 로그인'],
  ['Sign in to GitHub Enterprise', 'GitHub Enterprise에 로그인'],
  ['New to GitHub?', 'GitHub이 처음이신가요?'],
  ['Create your free account.', '무료 계정을 만드세요.'],
  ['Skip this step', '이 단계 건너뛰기'],

  // No repositories view (Let's get started)
  ["Let's get started!", '시작해 볼까요!'],
  [
    'Add a repository to GitHub Desktop to start collaborating',
    '협업을 시작하려면 GitHub Desktop에 저장소를 추가하세요',
  ],
  ['Return to In Progress Tutorial', '진행 중인 튜토리얼로 돌아가기'],
  ['Return to in progress tutorial', '진행 중인 튜토리얼로 돌아가기'],
  ['Create a Tutorial Repository…', '튜토리얼 저장소 만들기…'],
  ['Create a tutorial repository…', '튜토리얼 저장소 만들기…'],
  ['Clone a Repository from the Internet…', '인터넷에서 저장소 복제…'],
  ['Clone a repository from the Internet…', '인터넷에서 저장소 복제…'],
  ['Create a New Repository on your Local Drive…', '로컬 드라이브에 새 저장소 만들기…'],
  ['Create a New Repository on your local drive…', '로컬 드라이브에 새 저장소 만들기…'],
  ['Add an Existing Repository from your Local Drive…', '로컬 드라이브에서 기존 저장소 추가…'],
  ['Add an Existing Repository from your local drive…', '로컬 드라이브에서 기존 저장소 추가…'],
  ['ProTip!', '꿀팁!'],
  [
    'You can drag & drop an existing repository folder here to add it to Desktop',
    'Desktop에 추가하려면 기존 저장소 폴더를 여기로 끌어다 놓을 수 있습니다',
  ],

  // Cloneable repository list
  ['Filter your repositories', '저장소 필터링'],
  ['Your Repositories', '내 저장소'],
  ['Your repositories', '내 저장소'],

  // Add local repository dialog
  ['Add Local Repository', '로컬 저장소 추가'],
  ['Add local repository', '로컬 저장소 추가'],
  ['Local Path', '로컬 경로'],
  ['Local path', '로컬 경로'],
  ['repository path', '저장소 경로'],
  ['Choose…', '선택…'],
  ['Add Repository', '저장소 추가'],
  ['Add repository', '저장소 추가'],

  // No local changes — suggested actions
  [
    'Open the repository page on GitHub in your browser',
    '브라우저에서 GitHub 저장소 페이지 열기',
  ],
  ['Open the repository in your external editor', '외부 편집기에서 저장소 열기'],

  // Changes list
  ['Filter', '필터'],

  // Commit context menu (history)
  ['Amend Commit…', '커밋 수정…'],
  ['Amend commit…', '커밋 수정…'],
  ['Undo Commit…', '커밋 실행 취소…'],
  ['Undo commit…', '커밋 실행 취소…'],
  ['Reset to Commit…', '커밋으로 재설정…'],
  ['Reset to commit…', '커밋으로 재설정…'],
  ['Checkout Commit', '커밋 체크아웃'],
  ['Checkout commit', '커밋 체크아웃'],
  ['Reorder Commit', '커밋 순서 변경'],
  ['Reorder commit', '커밋 순서 변경'],
  ['Revert Changes in Commit', '커밋의 변경 사항 되돌리기'],
  ['Revert changes in commit', '커밋의 변경 사항 되돌리기'],
  ['Create Branch from Commit', '커밋에서 브랜치 생성'],
  ['Create branch from commit', '커밋에서 브랜치 생성'],
  ['Create Tag…', '태그 생성…'],
  ['Cherry-pick Commit…', '커밋 체리픽…'],
  ['Cherry-pick commit…', '커밋 체리픽…'],
  ['Copy SHA', 'SHA 복사'],
  ['Copy Tags', '태그 복사'],
  ['Copy tags', '태그 복사'],
  ['Copy Tag', '태그 복사'],
  ['Copy tag', '태그 복사'],
  ['View on GitHub', 'GitHub에서 보기'],
  ['View on GitHub Enterprise', 'GitHub Enterprise에서 보기'],

  // History / compare
  ['Select Branch to Compare…', '비교할 브랜치 선택…'],
  ['Select branch to compare…', '비교할 브랜치 선택…'],
  ['No Branches to Compare', '비교할 브랜치 없음'],
  ['No branches to compare', '비교할 브랜치 없음'],

  // Relative time
  ['just now', '방금 전'],

  // File context menu (changed files)
  ['File Does Not Exist on Disk', '디스크에 파일이 없습니다'],
  ['File does not exist on disk', '디스크에 파일이 없습니다'],
  ['Reveal in Finder', 'Finder에 표시'],
  ['Show in Explorer', '탐색기에 표시'],
  ['Show in your File Manager', '파일 관리자에 표시'],
  ['Open with Default Program', '기본 프로그램으로 열기'],
  ['Open with default program', '기본 프로그램으로 열기'],
  ['Copy File Path', '파일 경로 복사'],
  ['Copy file path', '파일 경로 복사'],
  ['Copy Relative File Path', '상대 파일 경로 복사'],
  ['Copy relative file path', '상대 파일 경로 복사'],
  ['Copy Paths', '경로 복사'],
  ['Copy paths', '경로 복사'],
  ['Copy Relative Paths', '상대 경로 복사'],
  ['Copy relative paths', '상대 경로 복사'],
  ['Open in External Editor', '외부 편집기에서 열기'],
  ['Open in external editor', '외부 편집기에서 열기'],
  ['Open in Shell', '셸에서 열기'],
  ['Open in shell', '셸에서 열기'],

  // Branch list groups
  ['Default Branch', '기본 브랜치'],
  ['Recent Branches', '최근 브랜치'],
  ['Recent branches', '최근 브랜치'],
  ['Other Branches', '기타 브랜치'],
  ['Other branches', '기타 브랜치'],

  // Repository list + context menu
  ['Add', '추가'],
  ['Copy Repo Name', '저장소 이름 복사'],
  ['Copy repo name', '저장소 이름 복사'],
  ['Copy Repo Path', '저장소 경로 복사'],
  ['Copy repo path', '저장소 경로 복사'],
  ['Create Alias', '별칭 만들기'],
  ['Create alias', '별칭 만들기'],
  ['Change Alias', '별칭 변경'],
  ['Change alias', '별칭 변경'],
  ['Remove Alias', '별칭 제거'],
  ['Remove alias', '별칭 제거'],
  ['Show Worktrees', '워크트리 표시'],
  ['Show worktrees', '워크트리 표시'],
  ['New Worktree…', '새 워크트리…'],
  ['New worktree…', '새 워크트리…'],
  ['Remove…', '제거…'],
  ['Remove', '제거'],
  ['Clone Repository…', '저장소 복제…'],
  ['Clone repository…', '저장소 복제…'],
  ['Create New Repository…', '새 저장소 만들기…'],
  ['Create new repository…', '새 저장소 만들기…'],
  ['Add Existing Repository…', '기존 저장소 추가…'],
  ['Add existing repository…', '기존 저장소 추가…'],

  // Branch context menu
  ['Rename…', '이름 바꾸기…'],
  ['Copy Branch Name', '브랜치 이름 복사'],
  ['Copy branch name', '브랜치 이름 복사'],
  ['View Branch on GitHub', 'GitHub에서 브랜치 보기'],
  ['View Pull Request on GitHub', 'GitHub에서 풀 리퀘스트 보기'],
  ['Checkout in New Worktree…', '새 워크트리에서 체크아웃…'],
  ['Checkout in new worktree…', '새 워크트리에서 체크아웃…'],
  ['Delete…', '삭제…'],

  // Remove repository dialog
  ['Remove Repository', '저장소 제거'],
  ['Remove repository', '저장소 제거'],
  [
    'The repository will be removed from GitHub Desktop:',
    'GitHub Desktop에서 저장소가 제거됩니다:',
  ],
  ['Recycle Bin', '휴지통'],
  ['Trash', '휴지통'],

  // Sign in dialogs
  ['Sign in Using Your Browser', '브라우저로 로그인'],
  ['Sign in using your browser', '브라우저로 로그인'],
  ['Sign in', '로그인'],
  [
    "Your browser will redirect you back to GitHub Desktop once you've signed in. If your browser asks for your permission to launch GitHub Desktop, please allow it.",
    '로그인하면 브라우저가 GitHub Desktop으로 다시 이동합니다. 브라우저가 GitHub Desktop 실행 권한을 물어보면 허용해 주세요.',
  ],
  ['Continue With Browser', '브라우저로 계속'],
  ['Continue with browser', '브라우저로 계속'],
  ['Continue', '계속'],
  ['Enterprise address', 'Enterprise 주소'],

  // Create repository dialog
  ['Create a New Repository', '새 저장소 만들기'],
  ['Create a new repository', '새 저장소 만들기'],
  ['repository name', '저장소 이름'],
  ['Initialize this repository with a README', '이 저장소를 README로 초기화'],
  ['Git Ignore', 'Git 무시 파일'],
  ['Git ignore', 'Git 무시 파일'],
  ['License', '라이선스'],
  ['None', '없음'],
  ['Create Repository', '저장소 만들기'],
  ['Create repository', '저장소 만들기'],

  // Clone repository (URL/generic tab) + sign in CTA
  ['Sign In', '로그인'],
  ['URL or username/repository', 'URL 또는 사용자명/저장소'],
  [
    'Repository URL or GitHub username and repository',
    '저장소 URL 또는 GitHub 사용자명/저장소',
  ],

  // Start tutorial dialog
  ['Start tutorial', '튜토리얼 시작'],

  // Create branch dialog (base branch options)
  [
    "The default branch in your repository. Pick this to start on something new that's not dependent on your current branch.",
    '저장소의 기본 브랜치입니다. 현재 브랜치에 의존하지 않는 새로운 작업을 시작하려면 이것을 선택하세요.',
  ],
  [
    'The currently checked out branch. Pick this if you need to build on work done on this branch.',
    '현재 체크아웃된 브랜치입니다. 이 브랜치에서 한 작업을 이어가야 한다면 이것을 선택하세요.',
  ],

  // Switch branch (stash) dialog
  ['Switch Branch', '브랜치 전환'],
  ['Switch branch', '브랜치 전환'],
  [
    'You have changes on this branch. What would you like to do with them?',
    '이 브랜치에 변경 사항이 있습니다. 어떻게 하시겠습니까?',
  ],
  [
    'Your in-progress work will be stashed on this branch for you to return to later',
    '진행 중인 작업이 이 브랜치에 임시 저장되어 나중에 돌아올 수 있습니다',
  ],
  [
    'Your in-progress work will follow you to the new branch',
    '진행 중인 작업이 새 브랜치로 따라갑니다',
  ],
  [
    'Your current stash will be overwritten by creating a new stash',
    '새 임시 저장을 만들면 현재 임시 저장이 덮어써집니다',
  ],

  // Diff options popover
  ['Diff Settings', 'Diff 설정'],
  ['Diff Options', 'Diff 옵션'],
  ['Diff display', 'Diff 표시'],
  ['Unified', '통합'],
  ['Split', '분할'],
  ['Whitespace', '공백'],
  ['Hide Whitespace Changes', '공백 변경 숨기기'],
  ['Hide whitespace changes', '공백 변경 숨기기'],
  [
    'Interacting with individual lines or hunks will be disabled while hiding whitespace.',
    '공백을 숨기는 동안에는 개별 줄이나 hunk와의 상호작용이 비활성화됩니다.',
  ],

  // No pull requests view
  ["Sorry, I can't find that pull request!", '해당 풀 리퀘스트를 찾을 수 없습니다!'],
  ['Hang tight', '잠시만 기다려 주세요'],
  ["You're all set!", '모두 준비됐어요!'],
  ['Loading pull requests as fast as I can!', '풀 리퀘스트를 최대한 빨리 불러오는 중!'],

  // Commit message menus
  ['Remove Co-Authors', '공동 작성자 제거'],
  ['Remove co-authors', '공동 작성자 제거'],
  ['Add Co-Authors', '공동 작성자 추가'],
  ['Add co-authors', '공동 작성자 추가'],
  ['Generate Commit Message with Copilot', 'Copilot으로 커밋 메시지 생성'],
  ['Generate commit message with Copilot', 'Copilot으로 커밋 메시지 생성'],
  ['Bypass Commit Hooks', '커밋 훅 우회'],
  ['Bypass Commit hooks', '커밋 훅 우회'],
  ['Add Signed-off-by Trailer', 'Signed-off-by 트레일러 추가'],
  ['Add Signed-off-by trailer', 'Signed-off-by 트레일러 추가'],
  ['Allow Empty Commit', '빈 커밋 허용'],
  ['Allow empty commit', '빈 커밋 허용'],

  // Committing-as avatar popover
  ['Open Git Settings', 'Git 설정 열기'],
  ['Open git settings', 'Git 설정 열기'],
  ['Unknown user', '알 수 없는 사용자'],

  // Common dialog actions
  ['Cancel', '취소'],
  ['Ok', '확인'],
])
