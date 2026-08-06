export const copy = {
  nav: {
    about: { zh: '關於', en: 'About' },
    experience: { zh: '經歷', en: 'Experience' },
    projects: { zh: '專案', en: 'Projects' },
    stack: { zh: '技術', en: 'Stack' },
    teaching: { zh: '教學', en: 'Teaching' },
    contact: { zh: '聯絡', en: 'Contact' },
  },
  hero: {
    greeting: { zh: '嗨，我是 Esther。', en: "Hi, I'm Esther." },
    title: {
      zh: '打造讓人真正想用的 AI 產品。',
      en: 'I build AI-powered software that people enjoy using.',
    },
    lead: {
      zh: 'Designing thoughtful software with AI, code, and curiosity.',
      en: 'Designing thoughtful software with AI, code, and curiosity.',
    },
    roles: {
      zh: 'Software Engineer · AI Enthusiast · Educator',
      en: 'Software Engineer · AI Enthusiast · Educator',
    },
    cta: { zh: '探索作品', en: 'Explore my work' },
    photo: { zh: '照片稍後放這裡', en: 'Photo coming soon' },
  },
  about: {
    eyebrow: { zh: 'About', en: 'About' },
    title: {
      zh: '用技術解決人的問題',
      en: 'I use technology to solve human problems',
    },
    body: {
      zh: '我喜歡把複雜的問題拆解成容易使用的產品。無論是企業內部系統、AI 工具，還是教學平台，我都希望技術能真正幫助使用者——不只是功能做完，而是用起來舒服、說得清楚、願意再回來用。',
      en: 'I like turning complex problems into products people can actually use. Whether it is an internal system, an AI tool, or a teaching platform, I care about more than shipping features—I care that it feels clear, useful, and worth coming back to.',
    },
    traits: [
      {
        zh: 'Thoughtful',
        en: 'Thoughtful',
        desc: { zh: '先想清楚再用程式表達', en: 'Think first, then express it in code' },
      },
      {
        zh: 'Approachable',
        en: 'Approachable',
        desc: { zh: '溝通清楚，好協作', en: 'Clear communication, easy collaboration' },
      },
      {
        zh: 'Creative',
        en: 'Creative',
        desc: { zh: '在意體驗與細節', en: 'Obsessed with experience and details' },
      },
      {
        zh: 'Curious',
        en: 'Curious',
        desc: { zh: '持續探索 AI 與新工具', en: 'Always exploring AI and new tools' },
      },
    ],
  },
  experience: {
    eyebrow: { zh: 'Experience', en: 'Experience' },
    title: { zh: '從產品到教學的實戰經驗', en: 'From products to teaching' },
    items: [
      {
        dates: { zh: '2024-09 — 現在', en: 'Sep 2024 — Present' },
        org: { zh: '嘉泰興股份有限公司 · JTX', en: 'JTX Corporation' },
        role: { zh: '軟體工程師', en: 'Software Engineer' },
        points: [
          {
            zh: '參與企業官網與 5+ 項內部系統開發維護，使用 WordPress、PHP、Python、Vue.js。',
            en: 'Built and maintained the company website and 5+ internal systems with WordPress, PHP, Python, and Vue.js.',
          },
          {
            zh: '以 Docker 建立一致化開發環境，協助部署、測試與版本管理。',
            en: 'Set up consistent Docker environments for deployment, testing, and version control.',
          },
          {
            zh: '與同事共同完成 LMS 從需求分析到部署，縮短標籤列印時間至少一半。',
            en: 'Co-built LMS end-to-end, reducing label printing time by at least half.',
          },
        ],
      },
      {
        dates: { zh: '2026-01 — 2026-02', en: 'Jan 2026 — Feb 2026' },
        org: { zh: '艾思程式教育', en: 'Ace Programming Education' },
        role: { zh: '講師', en: 'Instructor' },
        points: [
          {
            zh: '透過 OSEP Scratch 擴充套件設計實作活動，帶領學員完成遊戲與 AI 視覺辨識專題。',
            en: 'Designed hands-on Scratch/OSEP activities for games and AI vision projects.',
          },
          {
            zh: '以互動教學與個別除錯指導，協助學員認識 AI 並解決程式問題。',
            en: 'Guided learners through interactive teaching and debugging to understand AI.',
          },
        ],
      },
    ],
  },
  projects: {
    eyebrow: { zh: 'Selected Projects', en: 'Selected Projects' },
    title: { zh: '真正有人會用的產品', en: 'Products people actually use' },
    note: {
      zh: '更多作品與 Demo 連結會陸續補上。',
      en: 'More demos and case studies coming soon.',
    },
    items: [
      {
        accent: true,
        name: { zh: '智慧午餐', en: 'Smart Lunch' },
        subtitle: {
          zh: 'Lunch Ordering Platform',
          en: 'Lunch Ordering Platform',
        },
        body: {
          zh: '讓訂餐、投票與管理更直覺的午餐平台——把日常流程做成真正能運作的產品。',
          en: 'A lunch platform that makes ordering, voting, and admin workflows simpler—built as a real product, not just a homework demo.',
        },
        stack: ['Python', 'Vue', 'PostgreSQL'],
        tags: {
          zh: ['投票系統', '後台管理', '數據分析'],
          en: ['Voting System', 'Admin Dashboard', 'Analytics'],
        },
        links: { demo: null, github: null, case: null },
      },
      {
        accent: true,
        name: { zh: 'LMS 標籤管理系統', en: 'LMS · Label Management' },
        subtitle: {
          zh: 'Label Management System',
          en: 'Label Management System',
        },
        body: {
          zh: '企業內部 0→1 系統：從需求、設計、開發、測試到部署，實際減少列印標籤時間至少一半。',
          en: 'An internal 0→1 system from requirements to deployment that cut label printing time by at least half.',
        },
        stack: ['Python', 'Vue.js', 'Docker'],
        tags: {
          zh: ['需求分析', '全端開發', '部署上線'],
          en: ['Requirements', 'Full-stack', 'Production'],
        },
        links: { demo: null, github: null, case: null },
      },
      {
        accent: false,
        name: { zh: '企業官網與內部系統', en: 'Website & Internal Systems' },
        subtitle: {
          zh: 'Product & Operations',
          en: 'Product & Operations',
        },
        body: {
          zh: '參與官方網站與多套內部系統的功能開發、測試與維運，關注穩定度與使用體驗。',
          en: 'Feature development, testing, and maintenance across the official site and multiple internal systems.',
        },
        stack: ['WordPress', 'PHP', 'Vue.js', 'Python'],
        tags: {
          zh: ['前後端', 'Bug 修復', '體驗優化'],
          en: ['Full-stack', 'Bug fixes', 'UX polish'],
        },
        links: { demo: null, github: null, case: null },
      },
    ],
  },
  stack: {
    eyebrow: { zh: 'Tech Stack', en: 'Tech Stack' },
    title: { zh: '我常用的工具箱', en: 'Tools I work with' },
    groups: [
      {
        title: { zh: 'Frontend', en: 'Frontend' },
        items: ['Vue', 'JavaScript', 'WordPress', 'Responsive UI'],
      },
      {
        title: { zh: 'Backend', en: 'Backend' },
        items: ['Python', 'PHP', 'MySQL', 'PostgreSQL'],
      },
      {
        title: { zh: 'AI', en: 'AI' },
        items: ['YOLO', 'OpenCV', 'Gemini', 'AI Agents'],
      },
      {
        title: { zh: 'Workflow', en: 'Workflow' },
        items: ['Git', 'Docker', 'Jira', 'Agile'],
      },
    ],
  },
  teaching: {
    eyebrow: { zh: 'Teaching', en: 'Teaching' },
    title: { zh: '喜歡把知識講清楚', en: 'I enjoy making knowledge click' },
    body: {
      zh: '教學對我來說不是附帶興趣，而是另一種產品思維：怎麼拆步驟、怎麼示範、怎麼讓對方真正上手。',
      en: 'Teaching is not a side interest—it is another form of product thinking: how to break steps down, demonstrate clearly, and help someone actually get it.',
    },
    items: [
      {
        title: { zh: 'Scratch / AI 視覺辨識講師', en: 'Scratch / AI Vision Instructor' },
        desc: {
          zh: '帶領學員完成遊戲與 AI 視覺辨識專題，並個別協助除錯。',
          en: 'Led game and AI vision projects, with one-on-one debugging support.',
        },
      },
      {
        title: { zh: '師大資工高中生夏令營總籌', en: 'NTNU CS Summer Camp Organizer' },
        desc: {
          zh: '規劃四天活動流程、後勤與日程，協調跨組團隊並即時處理現場問題。',
          en: 'Planned a four-day camp, coordinated logistics, and handled on-site issues across teams.',
        },
      },
    ],
  },
  education: {
    school: {
      zh: '國立臺灣師範大學 · 資訊工程學系',
      en: 'NTNU · Computer Science & Information Engineering',
    },
    meta: { zh: '2023 — 2027 · GPA 3.825 / 4.3 · TOEIC 850', en: '2023 — 2027 · GPA 3.825 / 4.3 · TOEIC 850' },
  },
  contact: {
    eyebrow: { zh: 'Contact', en: 'Contact' },
    title: {
      zh: '一起打造下一個有人會用的產品',
      en: "Let's build something people will actually use",
    },
    body: {
      zh: '歡迎聊聊實習、合作、AI 專案，或任何想讓技術更有溫度的想法。',
      en: 'Open to chats about roles, collaboration, AI projects, or anything that makes tech more human.',
    },
  },
  footer: {
    note: {
      zh: 'Human-centered Software Engineer',
      en: 'Human-centered Software Engineer',
    },
  },
}

export const links = {
  email: 'mailto:liucherry1223@gmail.com',
  emailLabel: 'liucherry1223@gmail.com',
  github: 'https://github.com/Esther1223',
  githubLabel: 'github.com/Esther1223',
}
