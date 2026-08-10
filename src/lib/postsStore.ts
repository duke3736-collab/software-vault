export interface CommentItem {
  id: string;
  nickname: string;
  avatarColor: string;
  content: string;
  passwordHash: string;
  createdAt: string;
}

export interface PostItem {
  id: string;
  title: string;
  appId: string;
  appName?: string;
  nickname: string;
  avatarColor: string;
  category: '자유톡' | '익명톡' | '질문/해결' | '설치 오류' | '육아톡' | '러브톡';
  content: string;
  ctaText?: string;
  ctaUrl?: string;
  views: number;
  likes: number;
  liked?: boolean;
  passwordHash: string;
  createdAt: string;
  comments: CommentItem[];
}

export const DEMO_POSTS_STORE: PostItem[] = [
  {
    id: 'demo1',
    title: '지역난방공사 주가 전망 및 목표주가 확인하기',
    appId: 'claude-pc',
    appName: 'Claude (클로드) PC버전',
    nickname: '익명',
    avatarColor: 'bg-blue-600',
    category: '자유톡',
    content: `버튼을 누르면 이번 주 상승 종목과 목표주가 시나리오를 확인할 수 있습니다.
확인된 자료를 조건별로 정리하며 수익을 보장하지 않습니다.

지역난방공사 주가 전망 및 목표주가 확인하기 지역난방공사는 코스피 상장사이며 종목코드는 071320이다. 기업개요는 기업규모 종사는 1985년 집단에너지사업법에 의거하여 설립된 집단에너지 전문 공기업으로, 2010년 유가증권시장에 상장하였음. 비상장 종속회사 2개사를 보유하고 있으며, 한국지역난방기술(주), 노올그린에너지(주) 등 8개 비상장 계열회사를 두고 있음.

동사는 집단에너지사업(지역냉난방사업), 전기사업, 신재생에너지사업을 영위하고 있으며, 총 19개 사업장에서 1,918천호의 공동주택과 3,003개소 건물에 냉난방을 공급하고 있음. 출처 : 에프앤가이드 이 설명을 실제 투자 판단에 사용하려면 사업보고서의 사업부분, 주요 제품과 서비스, 고객 구성, 생산능력과 집행 구조를 함께 대조해야 한다. 기업개요는 출발점일 뿐이며 한 문장으로 이익의 질이나 장기 성장성을 단정하지 않는다.

지역난방공사 주가 전망 및 목표주가 확인하기 실제 상승 이력은 2026.08.10 KRX 장 마감 기준 자료에서 확인된다. 종가는 71,100원, 전일 대비 상승폭은 6,600원, 등락률은 약 +10.23%로 집계됐다. 상승 종목 목록과 개별 종목 시세가 동시에 상승을 표시한 경우만 대상으로 삼았다. 다만 하루 상승은 장기 추세를 보장하지 않으므로 장중 고가 대비 종가 위치와 다음 거래일 거래대금을 함께 확인해야 한다.`,
    ctaText: '👉 이번주 상승종목 및 목표주가 바로보기',
    ctaUrl: 'https://software.weknews.com/app/claude-pc',
    views: 24,
    likes: 15,
    liked: false,
    passwordHash: '1234',
    createdAt: '2026.08.10 14:06:46',
    comments: [
      {
        id: 'c1',
        nickname: '친절한 자영업자 210',
        avatarColor: 'bg-emerald-500',
        content: '좋은 정보 감사합니다! 이번 주 전망 참고해야겠네요.',
        passwordHash: '1234',
        createdAt: '2026.08.10 14:15:20',
      },
    ],
  },
  {
    id: 'demo2',
    title: '칼무리 초경량 무설치 캡처 툴 꿀팁 및 활용 가이드',
    appId: 'kalmuri',
    appName: '칼무리',
    nickname: '익명',
    avatarColor: 'bg-yellow-600',
    category: '자유톡',
    content: `칼무리는 단 하나의 파일로 작동하는 대한민국 대표 초경량 화면 캡처 프로그램입니다. 

설치가 전혀 필요 없기 때문에 시스템 레지스트리를 꼬이게 만들지 않고, USB 메모리 등에 넣어서 가지고 다니기에 가장 완벽합니다.

전체 화면 캡처뿐만 아니라 웹페이지 스크롤 전체 캡처, 마우스 포인터 색상 추출 기능까지 알차게 들어있어서 디자인 작업이나 문서 작성 시 대단히 유용합니다.`,
    ctaText: '👉 칼무리 무설치 공식 다운로드 바로가기',
    ctaUrl: 'https://software.weknews.com/app/kalmuri',
    views: 182,
    likes: 38,
    liked: false,
    passwordHash: '1234',
    createdAt: '2026.08.10 12:30:11',
    comments: [],
  },
  {
    id: 'demo3',
    title: 'Claude PC버전 데스크톱 앱 실행 및 백신 오진 오류 해결법',
    appId: 'claude-pc',
    appName: 'Claude (클로드) PC버전',
    nickname: '익명',
    avatarColor: 'bg-purple-600',
    category: '질문/해결',
    content: `최근 챗GPT를 넘어선 코딩 및 문서 요약 성능으로 주목받는 Claude의 PC 공식 프로그램이 출시되었습니다.

다운로드 후 실행 시 V3나 알약 백신에서 알 수 없는 파일로 경고가 뜨는 경우가 있는데, 이는 신규 디지털 서명 오진으로 백신 예외 설정에 등록 후 안심하고 실행하시면 정상적으로 작동합니다.`,
    ctaText: '👉 클로드 PC버전 공식 최신링크 바로보기',
    ctaUrl: 'https://software.weknews.com/app/claude-pc',
    views: 310,
    likes: 42,
    liked: false,
    passwordHash: '1234',
    createdAt: '2026.08.10 11:10:00',
    comments: [],
  },
  {
    id: 'demo4',
    title: '안카메라 구버전 로그인 없는 무설치 버전 다운로드 및 사용법',
    appId: 'ancamera-old',
    appName: '안카메라 구버전',
    nickname: '익명',
    avatarColor: 'bg-blue-500',
    category: '자유톡',
    content: `안카메라 최신버전은 회원가입과 광고가 추가되어 무거워진 반면, v3.x 구버전은 로그인이나 설치 절차 없이 더블클릭만으로 즉시 작동하는 최적의 캡처 툴입니다.`,
    ctaText: '👉 안카메라 구버전 무설치 다운로드 바로보기',
    ctaUrl: 'https://software.weknews.com/app/ancamera-old',
    views: 95,
    likes: 19,
    liked: false,
    passwordHash: '1234',
    createdAt: '2026.08.10 09:20:45',
    comments: [],
  },
];

const STORAGE_KEY = 'sv_posts_master_db';

export function getStoredPosts(): PostItem[] {
  if (typeof window === 'undefined') return DEMO_POSTS_STORE;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(DEMO_POSTS_STORE));
    return DEMO_POSTS_STORE;
  }
  try {
    return JSON.parse(raw);
  } catch (e) {
    return DEMO_POSTS_STORE;
  }
}

export function savePosts(posts: PostItem[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
}

export function getPostById(id: string): PostItem | undefined {
  const posts = getStoredPosts();
  return posts.find(p => p.id === id);
}

export function addPost(newPost: Omit<PostItem, 'id' | 'views' | 'likes' | 'liked' | 'createdAt' | 'comments'>): PostItem {
  const posts = getStoredPosts();
  const created: PostItem = {
    ...newPost,
    id: 'post_' + Date.now(),
    views: 1,
    likes: 0,
    liked: false,
    createdAt: new Date().toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).replace(/\. /g, '.').replace(':', ':'),
    comments: [],
  };
  const updated = [created, ...posts];
  savePosts(updated);
  return created;
}

export function addComment(postId: string, comment: Omit<CommentItem, 'id' | 'createdAt'>): PostItem | undefined {
  const posts = getStoredPosts();
  const post = posts.find(p => p.id === postId);
  if (!post) return undefined;

  const newComment: CommentItem = {
    ...comment,
    id: 'c_' + Date.now(),
    createdAt: new Date().toLocaleString('ko-KR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    }).replace(/\. /g, '.'),
  };

  post.comments.push(newComment);
  savePosts(posts);
  return post;
}

export function incrementViews(postId: string): void {
  const posts = getStoredPosts();
  const post = posts.find(p => p.id === postId);
  if (post) {
    post.views += 1;
    savePosts(posts);
  }
}
