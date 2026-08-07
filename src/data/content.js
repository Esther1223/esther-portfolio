export const copy = {
  nav: {
    about: { zh: '關於', en: 'About' },
    projects: { zh: '專案', en: 'Projects' },
    experience: { zh: '經歷', en: 'Experience' },
    stack: { zh: '技術', en: 'Skills' },
    education: { zh: '學歷', en: 'Education' },
    beyond: { zh: '更多', en: 'Beyond' },
    contact: { zh: '聯絡', en: 'Contact' },
  },
  hero: {
    greeting: { zh: '嗨，我是 Esther。', en: "Hi, I'm Esther." },
    title: {
      zh: '喜歡把想法做成真正能使用的產品。',
      en: 'I enjoy turning ideas into products people can actually use.',
    },
    lead: {
      zh: '我喜歡把複雜的問題，一步一步變成簡單好用的系統。',
      en: 'I enjoy turning complex problems into simple and useful software.',
    },
    roles: {
      zh: '軟體工程師 · 企業系統 / 網站 · AI 協作開發 · 教學',
      en: 'Software Engineer · Systems / Web · AI-assisted building · Teaching',
    },
    cta: { zh: '看看作品', en: 'See my work' },
    photo: { zh: '照片稍後放這裡', en: 'Photo coming soon' },
  },
  about: {
    eyebrow: { zh: 'About', en: 'About' },
    title: {
      zh: '用技術解決實際的問題',
      en: 'I use technology to solve real problems',
    },
    body: {
      zh: '我喜歡把複雜的需求拆解成簡單、容易使用的系統。無論是企業內部工具、網站，或是各種應用，我都希望做出真正能解決問題的產品。除了功能完成之外，我也很重視使用流程是否直覺，以及程式是否容易維護。',
      en: 'I like breaking complex requirements into simple, easy-to-use systems. Whether it is an internal tool, a website, or any applications, I hope to build products that actually solve problems. Beyond shipping features, I care about whether the flow feels intuitive—and whether the code is easy to maintain.',
    },
    traitsTitle: { zh: '我在意的事', en: 'What I care about' },
    traits: [
      {
        zh: '使用者體驗',
        en: 'User experience',
        desc: { zh: '不是漂亮，而是好用。', en: 'Not about looking pretty—about being easy to use.' },
      },
      {
        zh: '清楚的程式架構',
        en: 'Clear code structure',
        desc: {
          zh: '讓功能容易擴充與維護。',
          en: 'So features are easy to extend and maintain.',
        },
      },
      {
        zh: '持續學習',
        en: 'Continuous learning',
        desc: {
          zh: '透過 AI 協作，把系統或小東西做出來。',
          en: 'I collaborate with AI to build systems—and small things.',
        },
      },
      {
        zh: '團隊合作',
        en: 'Collaboration',
        desc: {
          zh: '喜歡一起討論，把想法做出來。',
          en: 'I enjoy discussing ideas together and building them out.',
        },
      },
    ],
    journeyTitle: { zh: '到現在為止', en: 'How I got here' },
    journey: [
      { year: '2023', label: { zh: '進入師大資工', en: 'Started NTNU CS' } },
      { year: '2024', label: { zh: '開始接觸軟體開發 ', en: 'Started software development' } },
      { year: '2025', label: { zh: '開始做 WMS 與企業官網', en: 'Started WMS and company website' } },
      { year: '2026', label: { zh: '完成 LMS 系統', en: 'Shipped the LMS system' } },
      { year: 'Now', label: { zh: '持續學習、持續做', en: 'Keep learning. Keep building.' } },
    ],
  },
  projects: {
    eyebrow: { zh: 'Featured Projects', en: 'Featured Projects' },
    title: { zh: '代表作品', en: 'Projects I want to share' },
    note: {
      zh: '更多作品與 Demo 連結會陸續補上。',
      en: 'More demos and case studies coming soon.',
    },
    items: [
      {
        accent: true,
        name: { zh: 'WMS 倉儲管理系統', en: 'WMS · Warehouse Management' },
        period: { zh: '2025 — 現在', en: '2025 — Present' },
        subtitle: {
          zh: 'Warehouse Management System',
          en: 'Warehouse Management System',
        },
        body: {
          zh: '企業內部倉儲系統：涵蓋入庫、出庫、揀貨、標籤與 ERP 串接。從 2025 做到現在，持續依現場需求調整流程，讓倉庫作業更順。',
          en: 'An internal warehouse system covering inbound, outbound, picking, labels, and ERP integration. I have been building and iterating on it since 2025 to fit real warehouse workflows.',
        },
        stack: ['Vue.js', 'PHP', 'Docker'],
        tags: {
          zh: ['倉儲流程', '前後端', '持續維運'],
          en: ['Warehouse flow', 'Full-stack', 'Ongoing'],
        },
        links: { demo: null, github: null, case: null },
      },
      {
        accent: true,
        name: { zh: 'LMS 標籤管理系統', en: 'LMS · Label Management' },
        period: { zh: '2026', en: '2026' },
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
        name: { zh: '企業官網', en: 'Company Website' },
        period: { zh: '2025 — 現在', en: '2025 — Present' },
        subtitle: {
          zh: 'Corporate Website',
          en: 'Corporate Website',
        },
        body: {
          zh: '從 2025 至今持續開發與維護公司官網，處理頁面、功能調整與使用體驗，讓對外呈現更穩定清楚。',
          en: 'I have been building and maintaining the company website since 2025—pages, feature updates, and UX—so the public site stays clear and reliable.',
        },
        stack: ['WordPress', 'PHP', 'JavaScript'],
        tags: {
          zh: ['網站開發', '內容維護', '體驗優化'],
          en: ['Web development', 'Content updates', 'UX polish'],
        },
        links: { demo: null, github: null, case: null },
      },
    ],
  },
  experience: {
    eyebrow: { zh: 'Experience', en: 'Experience' },
    title: { zh: '工作與實戰經驗', en: 'Where I built these skills' },
    items: [
      {
        dates: { zh: '2024-09 — 現在', en: 'Sep 2024 — Present' },
        org: { zh: '嘉泰興股份有限公司 · JTX', en: 'JTX Corporation' },
        role: { zh: '軟體工程師', en: 'Software Engineer' },
        points: [
          {
            zh: '從 2025 起參與 WMS 倉儲管理系統與企業官網開發維護；2026 與同事完成 LMS 標籤管理系統。',
            en: 'Since 2025, built and maintained WMS and the company website; in 2026, co-built the LMS label management system.',
          },
          {
            zh: '以 Docker 建立一致化開發環境，協助部署、測試與版本管理。',
            en: 'Set up consistent Docker environments for deployment, testing, and version control.',
          },
          {
            zh: 'LMS 從需求分析到部署，實際縮短標籤列印時間至少一半。',
            en: 'Took LMS from requirements to deployment, cutting label printing time by at least half.',
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
  stack: {
    eyebrow: { zh: 'Skills', en: 'Skills' },
    title: { zh: '我常用的工具', en: 'Tools I work with' },
    lead: {
      zh: '我沒有追求會最多技術，而是選擇適合問題的工具。',
      en: 'I do not chase the longest tech list—I choose tools that fit the problem.',
    },
    groups: [
      {
        title: { zh: 'Frontend', en: 'Frontend' },
        items: ['Vue', 'WordPress', 'Responsive UI'],
      },
      {
        title: { zh: 'Backend', en: 'Backend' },
        items: ['Python', 'PHP', 'MySQL', 'PostgreSQL'],
      },
      {
        title: { zh: 'AI 協作', en: 'AI Collaboration' },
        items: ['Cursor', 'ChatGPT', 'AI Agents'],
      },
      {
        title: { zh: 'Workflow', en: 'Workflow' },
        items: ['Git', 'Docker', 'Jira', 'Agile'],
      },
    ],
  },
  education: {
    eyebrow: { zh: 'Education', en: 'Education' },
    title: { zh: '學歷', en: 'Education' },
    school: {
      zh: '國立臺灣師範大學',
      en: 'National Taiwan Normal University',
    },
    dept: {
      zh: '資訊工程學系',
      en: 'Computer Science & Information Engineering',
    },
    years: { zh: '2023 — 2027', en: '2023 — 2027' },
    meta: [
      { zh: 'GPA 3.825 / 4.3', en: 'GPA 3.825 / 4.3' },
      { zh: 'TOEIC 850', en: 'TOEIC 850' },
    ],
  },
  beyond: {
    eyebrow: { zh: 'Beyond Engineering', en: 'Beyond Engineering' },
    title: {
      zh: '寫程式之外，我也喜歡帶人與分享',
      en: 'Beyond code: teaching, leading, and sharing',
    },
    body: {
      zh: '除了寫程式，我也常透過教學、營隊與跨組合作，練習怎麼把事情講清楚、帶大家一起完成。',
      en: 'Besides coding, I practice explaining clearly and getting things done with people—through teaching, camps, and cross-team work.',
    },
    items: [
      {
        label: { zh: 'Teaching', en: 'Teaching' },
        title: { zh: 'Scratch / AI 視覺辨識講師', en: 'Scratch / AI Vision Instructor' },
        desc: {
          zh: '帶領學員完成遊戲與 AI 視覺辨識專題，並個別協助除錯。',
          en: 'Led game and AI vision projects, with one-on-one debugging support.',
        },
      },
      {
        label: { zh: 'Leadership', en: 'Leadership' },
        title: { zh: '師大資工高中生夏令營總籌', en: 'NTNU CS Summer Camp Organizer' },
        desc: {
          zh: '規劃四天活動流程、後勤與日程，協調跨組團隊並即時處理現場問題。',
          en: 'Planned a four-day camp, coordinated logistics, and handled on-site issues across teams.',
        },
      },
    ],
  },
  contact: {
    eyebrow: { zh: 'Contact', en: 'Contact' },
    title: {
      zh: '歡迎和我聊聊',
      en: "Let's chat",
    },
    body: {
      zh: '如果你對我的作品有興趣，或想聊聊軟體開發、用 AI 一起做東西、合作機會，都歡迎和我聯絡。',
      en: 'If you are interested in my work, or want to talk about software development, building with AI, or collaboration opportunities, feel free to reach out.',
    },
  },
  footer: {
    note: {
      zh: '持續學習，持續打造有價值的產品。',
      en: 'Keep learning. Keep building.',
    },
  },
}

export const links = {
  email: 'mailto:liucherry1223@gmail.com',
  emailLabel: 'liucherry1223@gmail.com',
  github: 'https://github.com/Esther1223',
  githubLabel: 'github.com/Esther1223',
}
