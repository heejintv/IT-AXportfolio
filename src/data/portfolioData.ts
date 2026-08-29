import { KeyMetric, SkillCategory, Certification, ProjectItem, ExperienceItem } from '../types';

export const PERSONAL_INFO = {
  name: '정희진',
  nameEn: 'Jung Hee-jin',
  role: 'AI · 업무 자동화(AX) 엔지니어',
  targetAudience: '채용 담당자 및 IT/AX 기술 면접관',
  headline: '단순 반복을 넘어, 데이터 정합성을 보장하는 AX 솔루션을 구축합니다.',
  subHeadline: '안녕하세요, 정희진입니다. 시스템 로직에 대한 깊은 이해와 AI·Python 구현력을 바탕으로 오류 없이 안정적인 기업 업무 자동화 파이프라인을 설계합니다.',
  tagline: '시스템 로직에 대한 깊은 이해와 AI·Python 구현력을 바탕으로 오류 없이 안정적인 기업 업무 자동화 파이프라인을 설계하며, 현업 시스템과 신기술(AI·자동화)을 가장 빠르고 안정적으로 연결합니다.',
  positioning: '현업 시스템과 신기술(AI·자동화)을 가장 빠르게 연결해 주는 실전형 AX 엔지니어',
  contact: {
    email: 'el00043171@gmail.com',
    location: 'Seoul, Republic of Korea',
  }
};

export const KEY_METRICS: KeyMetric[] = [
  {
    id: 'award',
    label: '2025 캡스톤디자인 경진대회',
    value: '금상 수상',
    subtext: '뇌종양 의료 영상 분할 AI 모델 개발',
    badge: '🏆 최종 금상',
    highlight: true,
  },
  {
    id: 'custom-trainer',
    label: 'AI 모델 커스텀 최적화',
    value: 'Custom Trainer',
    subtext: '의료 영상 특화 손실함수 & 데이터 증강 파이프라인 구축',
    badge: '⚡ 핵심 모델링 주도',
    highlight: true,
  },
  {
    id: 'workflow-automation',
    label: '워크플로우 & 데이터 제어',
    value: '비즈니스 로직 설계',
    subtext: '중복 방지·권한 검증 및 동적 폼 자동화 로직 구현',
    badge: '🛡️ 프로세스 자동화',
  },
  {
    id: 'credentials',
    label: '보유 공인 자격',
    value: 'SQLD + ADsP',
    subtext: 'SQL 개발자 & 데이터분석 준전문가',
    badge: '📜 공인 데이터 역량',
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI Optimization & Data Modeling',
    description: '비정형 데이터 전처리, 데이터 증강 파이프라인 및 커스텀 트레이너 최적화',
    skills: [
      {
        name: 'Custom Trainer & Loss Function',
        details: '의료 영상 데이터 특성에 맞춘 손실함수 커스텀 튜닝 및 학습 파이프라인 최적화'
      },
      {
        name: 'Data Augmentation Pipeline',
        details: '데이터 불균형 및 과소 분할 극복을 위한 특화 증강 기법 및 전처리 설계'
      },
      {
        name: 'Python & PyTorch / nnU-Net v2',
        details: '딥러닝 모델 아키텍처 학습 제어 및 원격 GPU 체크포인트 학습 체계 구축'
      }
    ]
  },
  {
    title: 'Workflow & Process Automation',
    description: '업무 프로세스 자동화 및 정합성을 보장하는 비즈니스 검증 로직',
    skills: [
      {
        name: 'Validation & State Control',
        details: '중복 요청 사전 차단 유효성 검증, 역할 기반 권한 제어 및 상태 전이 로직 설계'
      },
      {
        name: 'Data Flow & REST API',
        details: '시스템 간 데이터 전달 인터페이스 설계 및 맞춤형 동적 폼 규격 처리'
      },
      {
        name: 'Database & Data Modeling',
        details: '관계형 데이터 모델링, 데이터 매핑 및 맞춤형 필터링 조회 로직 구현'
      }
    ]
  },
  {
    title: 'Data Analysis & Qualifications',
    description: '공인 데이터 분석 자격 및 버전 관리 협업 역량',
    skills: [
      {
        name: 'SQLD (SQL개발자)',
        details: '한국데이터산업진흥원 공인 자격 (데이터 모델링 및 SQL 최적 활용)'
      },
      {
        name: 'ADsP (데이터분석 준전문가)',
        details: '한국데이터산업진흥원 공인 자격 (데이터 분석 기획 및 데이터 마이닝)'
      },
      {
        name: 'Git & Linux CLI',
        details: '버전 관리 협업 워크플로우 및 리눅스 기반 원격 개발 환경 제어'
      }
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: 'SQLD (SQL 개발자)',
    organization: '한국데이터산업진흥원 (K-Data)',
    date: '자격 취득',
    description: '데이터 모델링의 이해, SQL 기본 및 활용, 조인 및 서브쿼리 최적화 능력'
  },
  {
    name: 'ADsP (데이터분석 준전문가)',
    organization: '한국데이터산업진흥원 (K-Data)',
    date: '자격 취득',
    description: '데이터 이해, 데이터 분석 기획, 통계적 분석 및 데이터 마이닝 해석 능력'
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'brain-tumor-segmentation',
    title: '뇌종양 의료 영상 분할 AI 모델 개발 (2025 캡스톤디자인)',
    category: 'AI 모델링 & 데이터 파이프라인 최적화',
    badges: [
      '🏆 캡스톤디자인 경진대회 "금상" 수상',
      '⚡ Custom Trainer 구현 & 데이터 증강 주도',
      '📈 팀 앙상블 파이프라인 연계 (Dice 0.8926 달성)'
    ],
    techStack: [
      'Python',
      'PyTorch',
      'nnU-Net v2',
      'Custom Trainer',
      'Data Augmentation',
      'Linux/CUDA'
    ],
    coreImplementations: [
      {
        title: '커스텀 트레이너(Custom Trainer) 직접 구현 및 손실함수 최적화 [본인 주도]',
        description: '의료 영상(MRI)의 고유한 불균형 특성에 맞춰 손실함수 가중치 및 학습 스케줄러를 제어하는 Custom Trainer를 직접 개발하여 단일 모델의 수렴 안정성 확보'
      },
      {
        title: '특화 데이터 증강(Data Augmentation) 파이프라인 설계 [본인 주도]',
        description: '종양의 얇은 경계면과 미세 구조 손실을 방지하기 위해 노이즈, 회전, 스케일링 등 도메인 특화 증강 기법을 체계적으로 적용하여 데이터 다양성 및 모델 일반화 성능 극대화'
      },
      {
        title: '환경 표준화 및 원격 GPU 체크포인트 학습 체계 구축 [본인 주도]',
        description: 'OS 라이브러리 의존성 충돌을 가상환경 재구성을 통해 해결하고, 장시간 원격 GPU 학습 중 중단을 방지하는 체크포인트 자동 저장/복구 파이프라인 수립'
      },
      {
        title: '팀 3D+2D 앙상블 파이프라인 연계 및 금상 수상 성과 달성 [팀 협업]',
        description: '직접 구축한 커스텀 트레이너 기반 모델의 고도화된 예측력을 팀원의 앙상블 파이프라인과 유기적으로 결합하여 최종 분할 정밀도(Dice Score 0.8926) 달성 및 경진대회 금상 수상'
      }
    ],
    axLinkage: '비정형 데이터의 노이즈와 불균형 병목을 진단하고, 맞춤형 전처리·증강 및 커스텀 트레이너 최적화로 모델 성능 기초체력을 극대화하는 실전형 AI 엔지니어링 역량',
    paperDownloadAvailable: true
  },
  {
    id: 'snapbook-backend',
    title: 'SnapBook (인스타그램·채팅 기반 1:1 통합 예약/문의 서비스)',
    category: '워크플로우 자동화 & 비즈니스 로직 설계',
    serviceOverview: '네이버 예약 및 카카오톡으로 분산된 예약과 문의를 전용 1:1 채팅방에서 원스톱으로 처리하는 플랫폼',
    badges: [
      '⚡ 예약 워크플로우 자동화',
      '🛡️ 중복 예약 방지 & 권한 검증'
    ],
    techStack: [
      'Java',
      'Spring Boot',
      'JPA',
      'MySQL',
      'REST API'
    ],
    coreImplementations: [
      {
        category: '예약 생성 및 유효성 검증 자동화',
        title: '동일 시간대 중복 예약 검증 로직 및 매장별 설정 폼 규격 처리',
        description: '동일 시간대 중복 예약 발생을 사전에 차단하는 검증 로직을 구현하고, 매장별 설정 폼 규격에 맞춘 예약 데이터 전송 및 처리'
      },
      {
        category: '상태 관리 및 권한 검증 로직',
        title: '점주(OWNER) 권한 검증 기반 예약 수락/거절 및 채팅방 실시간 상태 카드 연동',
        description: '점주(OWNER) 권한 검증을 통과해야만 상태 전이가 이루어지도록 제어하고, 전용 1:1 채팅방 내 실시간 예약 상태 카드와 연동'
      },
      {
        category: '동적 예약 폼 자동 생성 및 관리',
        title: '신규 샵 기본 예약 폼 자동 생성 및 샵별 맞춤형 폼 조회/실시간 수정',
        description: '신규 샵 생성 시 기본 규격의 예약 폼 자동 생성 로직 개발, 샵별 특성에 맞춘 맞춤형 폼 조회 및 실시간 수정 기능 구현'
      },
      {
        category: '데이터 필터링 및 분리형 조회',
        title: '예약 불가 시간대 실시간 확인, 고객/점주 관점 조회 및 채팅방 매개 필터링',
        description: '특정 샵의 예약 불가 시간대를 실시간으로 확인하는 기능 및 채팅방(Shop-Customer 매핑)을 매개체로 한 맞춤형 데이터 필터링 조회 구현'
      },
      {
        category: '엔티티 및 계층형 구조 설계',
        title: '유지보수성과 확장성을 고려한 계층형 구조 설계',
        description: 'Controller - Service - Repository 계층을 분리하고, 엔티티 관계를 정밀하게 정의하여 비즈니스 데이터 흐름의 안정성 확보'
      }
    ],
    axLinkage: '시스템 간 데이터 흐름을 정밀하게 제어하고, 분산된 수작업 워크플로우를 하나로 통합하여 예외와 누락을 사전에 차단하는 프로세스 자동화 설계 역량',
    paperDownloadAvailable: false
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'programming-coaching',
    title: '중·고등학생 대상 프로그래밍 언어(C/Python) 및 알고리즘 지도',
    keyAchievements: [
      '비전공자 및 학습자 시선에서 추상적 문법과 논리적 흐름의 병목 지점을 파악',
      '직관적인 실습 예제와 단계별 학습 지도를 통해 프로그래밍 진입장벽 해소'
    ],
    axLinkage: 'IT가 낯선 현업 부서의 고충을 경청하고 눈높이에 맞춘 AX 솔루션을 제공하는 "상생의 동반자" 역량'
  }
];

