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
    greeting: { zh: '嗨，我是劉育均。', en: "Hi, I'm Yu-Chun Liu (Esther)." },
    title: {
      zh: '從系統實作，走到問題定義與分析。',
      en: 'From building systems to defining and analyzing problems.',
    },
    lead: {
      zh: '我偏好資料處理、資料分析、資料庫與系統整合，也有企業內部系統的實作經驗。下一步希望把工程能力，延伸到研究方法、問題定義與實驗分析。',
      en: 'I care most about data processing, analysis, databases, and system integration, with hands-on experience building internal enterprise systems. I want to take that engineering practice into research methods, problem formulation, and experimental analysis.',
    },
    affiliation: {
      zh: '國立臺灣師範大學 資訊工程學系 · 四年級',
      en: 'NTNU CSIE · Senior',
    },
    roles: {
      zh: '資料處理 · 資料分析 · 資料庫 · 系統整合',
      en: 'Data processing · Analysis · Databases · System integration',
    },
    cta: { zh: '看看作品', en: 'See my work' },
    photo: { zh: '照片稍後放這裡', en: 'Photo coming soon' },
  },
  about: {
    eyebrow: { zh: 'About', en: 'About' },
    title: {
      zh: '把實際系統裡的問題，整理成可以分析的問題',
      en: 'I turn messy system problems into questions I can analyze',
    },
    body: {
      zh: '我目前就讀國立臺灣師範大學資訊工程學系四年級。大學期間在嘉泰興參與官網與多項內部系統，也做過資料庫課程專題與視障輔助相關的視覺專題。我比較喜歡的工作是：把資料整理清楚、把流程設計好、再把系統接到真正會被使用的地方。',
      en: 'I am a senior in Computer Science and Information Engineering at National Taiwan Normal University. During undergrad I helped build the company website and several internal systems at JTX, and completed a database course project plus a computer-vision project for visually impaired users. I like the work of cleaning data, designing workflows, and connecting systems to real use.',
    },
    traitsTitle: { zh: '我在意的事', en: 'What I care about' },
    traits: [
      {
        zh: '資料處理與分析',
        en: 'Data processing and analysis',
        desc: {
          zh: '先看懂資料長什麼樣子，再決定系統該怎麼做。',
          en: 'Understand the data first, then decide how the system should work.',
        },
      },
      {
        zh: '資料庫與規則設計',
        en: 'Databases and rules',
        desc: {
          zh: '角色、權限、流程與限制要寫清楚，系統才穩。',
          en: 'Roles, permissions, and constraints need to be explicit for a system to hold.',
        },
      },
      {
        zh: '系統整合',
        en: 'System integration',
        desc: {
          zh: '讓網站、內部工具和現場流程接在一起，而不是各做各的。',
          en: 'Connect websites, internal tools, and on-site workflows—instead of leaving them as separate pieces.',
        },
      },
      {
        zh: '問題定義',
        en: 'Problem formulation',
        desc: {
          zh: '希望把工程實作，延伸到研究方法與實驗分析。',
          en: 'I want to extend engineering work into research methods and experimental analysis.',
        },
      },
    ],
    journeyTitle: { zh: '到現在為止', en: 'How I got here' },
    journey: [
      { year: '2023', label: { zh: '進入師大資工', en: 'Started NTNU CS' } },
      { year: '2024', label: { zh: '加入嘉泰興，開始企業系統開發', en: 'Joined JTX and started building internal systems' } },
      { year: '2025', label: { zh: '參與 WMS 與企業官網', en: 'Worked on WMS and the company website' } },
      { year: '2026', label: { zh: '完成 LMS；啟動自建 HRM；完成視障與資料庫專題實作', en: 'Shipped LMS; started HRM; completed vision and database projects' } },
      { year: 'Now', label: { zh: 'HRM 持續開發，準備把實作延伸到研究', en: 'HRM in progress; taking systems work toward research' } },
    ],
  },
  projects: {
    eyebrow: { zh: 'Selected Work', en: 'Selected Work' },
    title: { zh: '代表作品', en: 'Selected work' },
    lead: {
      zh: '重點放在企業系統、視障專題、資料庫專題，以及可公開的作品連結。',
      en: 'The focus is industry systems, the vision project, the database project, and public artifacts.',
    },
    jump: [
      { href: '#project-vision', zh: '視障專題', en: 'Vision project' },
      { href: '#project-campus', zh: '資料庫專題', en: 'Database project' },
      { href: '#project-lms', zh: '標籤管理系統', en: 'Label system' },
      { href: '#project-hr', zh: '人資管理系統', en: 'HR system' },
    ],
    academicTitle: { zh: '學術專題', en: 'Academic projects' },
    industryTitle: { zh: '企業實務', en: 'Industry systems' },
    othersTitle: { zh: '其他企業系統', en: 'Other industry work' },
    cases: [
      {
        id: 'vision',
        accent: true,
        category: { zh: '大三專題 · 資訊專題研究（一）', en: 'Junior project · Research Topics in CS (I)' },
        name: { zh: '視障智慧輔助系統', en: 'Intelligent Visual Aid System for the Blind' },
        period: { zh: '指導：李忠謀教授', en: 'Advisor: Prof. Lee, G.' },
        lead: {
          zh: '以 Raspberry Pi 與 ResNet18 判斷前方左／中／右區域是否可通行（Safe / Blocked），再以語音給出直走、往左前、往右前或停止。問題從物件偵測改寫成通行判斷，以兼顧準確率與嵌入式即時性。',
          en: 'A Raspberry Pi system that uses ResNet18 to classify left / center / right regions as Safe or Blocked, then speaks walk / left / right / stop. We reframed object detection as walkability classification for accuracy and real-time edge inference.',
        },
        stack: ['Python', 'PyTorch', 'ResNet18', 'Raspberry Pi 4B', 'Picamera2'],
        tags: {
          zh: ['通行區域判斷', '重疊切割',],
          en: ['Walkability', 'Overlapping crops'],
        },
        blocks: [
          {
            label: { zh: '研究問題', en: 'Research question' },
            body: {
              zh: '傳統導盲杖只能感測接觸範圍，導盲犬成本高且難以普及；高階 GPU 方案又不便攜帶。如何在低成本嵌入式裝置上，即時判斷前方哪個方向可通行，並用語音回饋？',
              en: 'Canes only sense contact range; guide dogs are costly and scarce; GPU-heavy systems are hard to carry. How can a low-cost embedded device decide which forward direction is walkable and speak the result in real time?',
            },
          },
          {
            label: { zh: '系統流程', en: 'Pipeline' },
            items: [
              { zh: 'Camera 擷取前方影像', en: 'Capture a front-facing frame' },
              { zh: '重疊切割為左 0–0.45、中 0.25–0.75、右 0.55–1.00', en: 'Overlap-crop into left 0–0.45, center 0.25–0.75, right 0.55–1.00' },
              { zh: 'ResNet18 將各區分為 Safe / Blocked', en: 'ResNet18 classifies each region as Safe / Blocked' },
              { zh: '決策模組產生導航建議並語音輸出', en: 'A decision module produces a navigation cue and speaks it' },
            ],
          },
          {
            label: { zh: '我的負責內容', en: 'My contribution' },
            body: {
              zh: '資料蒐集、模型訓練、測試驗證與報告撰寫。另一組員負責系統設計、程式開發、系統整合與海報。',
              en: 'Data collection, model training, evaluation, and report writing. Another teammate owned system design, coding, integration, and the poster.',
            },
          },
          {
            label: { zh: '資料集與方法', en: 'Dataset and method' },
            items: [
              { zh: '原始影像 1104 張 → 切割後 3312 張（Blocked 2370 / Safe 942）', en: '1,104 raw images → 3,312 cropped patches (Blocked 2,370 / Safe 942)' },
              { zh: '早期 YOLO + MiDaS 在 Pi 上太慢，改為區域通行分類以提升效率', en: 'Early YOLO + MiDaS was too slow on Pi; we switched to region walkability classification' },
            ],
          },
          {
            label: { zh: '成功／失敗與分析', en: 'Cases and analysis' },
            items: [
              { zh: '成功例：左／中 Blocked、右 Safe → 正確建議往右', en: 'Success: left/center Blocked, right Safe → correctly suggested right' },
              { zh: '失敗例：拍攝角度偏高，三區皆誤判為 Blocked → 錯誤建議停止；實際可直走', en: 'Failure: high camera angle mislabeled all regions as Blocked → stop; the path was walkable' },
              { zh: '失敗例：右側光線偏暗被誤判為 Blocked；實際應為 Safe', en: 'Failure: the darker right region was mislabeled as Blocked; it should have been Safe' },
              { zh: '低光源使輪廓與紋理變弱；鏡頭偏高時路面可通行區域佔比過小', en: 'Low light weakens contours; a high camera angle shrinks the walkable road in frame' },
              { zh: 'Blocked 約為 Safe 兩倍，模型偏傾向預測 Blocked', en: 'Blocked is ~2× Safe, so the model biases toward Blocked' },
            ],
          },
        ],
        metrics: [
          { value: '86.1%', label: { zh: 'Accuracy', en: 'Accuracy' } },
          { value: '77.27%', label: { zh: 'Precision', en: 'Precision' } },
          { value: '72.34%', label: { zh: 'Recall', en: 'Recall' } },
          { value: '74.73%', label: { zh: 'F1', en: 'F1' } },
        ],
        figures: [
          {
            src: 'docs/ivas-success.jpg',
            caption: {
              zh: '成功辨識：左／中 Blocked、右 Safe → 建議往右',
              en: 'Successful recognition: left/center Blocked, right Safe → turn right',
            },
          },
          {
            src: 'docs/ivas-fail.jpg',
            caption: {
              zh: '失敗例：拍攝角度偏高，三區皆判為 Blocked 而建議停止；實際可直走',
              en: 'Failure: high camera angle labeled all regions as Blocked → stop; the path was walkable',
            },
          },
          {
            src: 'docs/ivas-light.jpg',
            caption: {
              zh: '失敗例：右側光線偏暗被誤判為 Blocked；實際應為 Safe',
              en: 'Failure: the darker right region was mislabeled as Blocked; it should have been Safe',
            },
          },
        ],
        links: {
          demo: 'https://drive.google.com/file/d/1U4d9AlGtM8g3eshOWk25JOM9Ode1nWQ0/view?usp=drive_link',
          github: 'https://github.com/Esther1223/ivas',
          report: 'docs/vision-aid-report.pdf',
          poster: 'docs/vision-aid-poster.pdf',
        },
      },
      {
        id: 'campus',
        accent: true,
        category: { zh: '資料庫課程專題', en: 'Database course project' },
        name: { zh: '校園空間租借系統', en: 'Campus Space Reservation System' },
        period: { zh: '資料庫課程專題', en: 'Database course project' },
        lead: {
          zh: '用資料庫整合校園空間的查詢、預約、審核、付款與紀錄，避免人工流程造成的不一致與重複預約。前後端以 Laravel、Vue.js、MySQL 實作；我負責使用者註冊登入、角色權限、空間資料管理，以及使用紀錄與管理查詢。',
          en: 'A database-backed campus booking system for query, reservation, approval, payment, and records—reducing inconsistency and double-booking. Built with Laravel, Vue.js, and MySQL; I owned registration / login, roles and permissions, room data management, and usage / admin queries.',
        },
        stack: ['MySQL', 'Laravel', 'Vue.js', 'ER / Schema Design'],
        tags: {
          zh: ['ER Model', '角色權限', '空間管理'],
          en: ['ER model', 'Roles', 'Room management'],
        },
        blocks: [
          {
            label: { zh: '專題目的', en: 'Goal' },
            body: {
              zh: '校園空間借用以人工或分散系統處理時，管理方式不一致、容易預約失敗。本系統以資料庫統一管理使用者、角色、單位、空間、時段、預約、審核與付款。',
              en: 'Campus booking was manual or fragmented, so policies conflicted and bookings failed. This system unifies users, roles, units, rooms, slots, reservations, approvals, and payments in one database.',
            },
          },
          {
            label: { zh: '我的負責功能', en: 'My responsibilities' },
            items: [
              { zh: '使用者註冊與登入', en: 'User registration and login' },
              { zh: '角色與權限管理', en: 'Role and permission management' },
              { zh: '空間資料管理', en: 'Room / space data management' },
              { zh: '使用紀錄與管理查詢', en: 'Usage records and admin queries' },
            ],
          },
          {
            label: { zh: '角色與權限', en: 'Roles and permissions' },
            items: [
              { zh: '學生：查詢；可預約一般教室／會議室', en: 'Student: query; book classrooms / meeting rooms' },
              { zh: '教授：查詢；可預約教室／會議室／實驗室', en: 'Professor: query; book classrooms / meeting rooms / labs' },
              { zh: '行政人員：可預約，並審核申請與處理費用', en: 'Admin staff: book, approve requests, and handle fees' },
              { zh: '系統管理員：維護空間、單位、時段價格與權限設定', en: 'System admin: maintain rooms, units, slot prices, and permissions' },
            ],
          },
          {
            label: { zh: '主要資料表', en: 'Core tables' },
            items: [
              { zh: 'user、role、user_role、affiliation', en: 'user, role, user_role, affiliation' },
              { zh: 'room、time_slot、allow_aff', en: 'room, time_slot, allow_aff' },
              { zh: 'reservation、approve、payment', en: 'reservation, approve, payment' },
            ],
          },
          {
            label: { zh: '空間／單位／審核／預約／付款規則', en: 'Key rules' },
            items: [
              { zh: '同空間同日期同時段僅能有一筆成功預約；最小單位一小時', en: 'Only one successful booking per room / date / slot; minimum unit is one hour' },
              { zh: '單位開放：本單位／allow_aff 特定單位／open_access_all 全部單位', en: 'Unit access: own unit / allow_aff list / open_access_all' },
              { zh: 'need_approval 為真則先待審核；通過後其他同槽待審核自動失敗', en: 'If need_approval, start pending; on approve, other pending requests for the same slot fail' },
              { zh: '僅成功預約佔用時段；取消後立即釋出', en: 'Only successful reservations occupy a slot; cancel releases it immediately' },
              { zh: '總務處等收費場地：時間 × 時段價格；不滿一小時以一小時計', en: 'Paid venues: hours × slot price; under one hour rounds up to one hour' },
            ],
          },
        ],
        metrics: [],
        figures: [
          {
            standalone: true,
            src: 'docs/database-er.png',
            caption: {
              zh: 'E-R Diagram：使用者、角色、單位、空間、時段、預約、審核與付款',
              en: 'E-R diagram: users, roles, units, rooms, slots, reservations, approvals, and payments',
            },
          },
          {
            src: 'docs/database-image-1.png',
            caption: { zh: '儀表板：預約、審核與本月統計', en: 'Dashboard: reservations, approvals, and monthly stats' },
          },
          {
            src: 'docs/database-image-2.png',
            caption: { zh: '空間管理：容量、費率與審核設定', en: 'Room management: capacity, rates, and approval settings' },
          },
          {
            src: 'docs/database-image-3.png',
            caption: { zh: '建立預約：空間、日期與可預約時段', en: 'Create reservation: room, date, and available slots' },
          },
          {
            src: 'docs/database-image-4.png',
            caption: { zh: '我的預約：狀態與取消', en: 'My reservations: status and cancel' },
          },
          {
            src: 'docs/database-image-5.png',
            caption: { zh: '審核管理：核准／拒絕待審申請', en: 'Approvals: accept / reject pending requests' },
          },
          {
            src: 'docs/database-image-6.png',
            caption: { zh: '付款管理：金額與付款狀態', en: 'Payments: amount and payment status' },
          },
        ],
        links: {
          demo: null,
          github: 'https://github.com/Esther1223/database-project',
          report: null,
          poster: null,
        },
      },
      {
        id: 'lms',
        accent: true,
        category: { zh: '嘉泰興 · 代表專案', en: 'JTX · featured' },
        name: { zh: '企業標籤管理系統（LMS）', en: 'Label Management System (LMS)' },
        period: { zh: '2026', en: '2026' },
        lead: {
          zh: '企業內部標籤系統：處理客戶由 SAP、船務等來源匯出的 Excel／CSV，依各客戶規則驗證後再進入標籤產出。分工不是前後端切開，而是垂直切——同事負責標籤列印一條龍（ZPL／編輯器／預覽／產出），我負責匯入、客戶、範本與頁面流程。上線後標籤列印時間至少減少一半。',
          en: 'An internal label system that validates customer Excel / CSV from SAP and shipping sources, then feeds label production. Work was split vertically—not frontend vs backend: a colleague owned the full print line (ZPL / editor / preview / output); I owned import, customers, templates, and page flow. After launch, label printing time fell by at least half.',
        },
        stack: ['Python', 'Vue.js', 'Docker', 'ZPL'],
        tags: {
          zh: ['異質資料匯入', '客戶規則', '垂直分工'],
          en: ['Heterogeneous import', 'Customer rules', 'Vertical ownership'],
        },
        blocks: [
          {
            label: { zh: '背景', en: 'Context' },
            body: {
              zh: '現場標籤列印與出貨資料整理耗時。不同客戶從 SAP、船務等系統匯出格式不一的 Excel／CSV，需要先依客戶規則驗證，再進入標籤版面與列印。',
              en: 'Label printing and shipping-data prep were slow. Customers exported differently shaped Excel / CSV from SAP and shipping systems, so data had to be validated by customer rules before layout and print.',
            },
          },
          {
            label: { zh: '分工', en: 'Division of work' },
            items: [
              {
                zh: '同事：標籤列印垂直線——後端 ZPL（套印、旋轉、CJK 點陣、條碼）＋前端編輯器、預覽、產出頁',
                en: 'Colleague : the print vertical—backend ZPL (overlay, rotation, CJK bitmap, barcodes) plus frontend editor, preview, and output',
              },
              {
                zh: '我：匯入／客戶／範本頁、欄位規則組裝、版面與 Docker；會碰 ZPL，但多半是接資料與畫面，不是列印引擎',
                en: 'Me: import / customer / template pages, field rules assembly, layout, and Docker; I touch ZPL mostly via data and UI, not the print engine',
              },
            ],
          },
          {
            label: { zh: '成果', en: 'Outcome' },
            body: {
              zh: '系統已上線；標籤列印時間至少減少一半，異質出貨資料驗證與客戶範本流程可維護。',
              en: 'In production: label printing time fell by at least half, with maintainable heterogeneous validation and customer-template flows.',
            },
          },
        ],
        metrics: [
          { value: '≥50%', label: { zh: '列印時間減少', en: 'Less printing time' } },
          { value: '0→1', label: { zh: '從需求到上線', en: 'Requirements to production' } },
        ],
        figures: [
          {
            src: 'docs/lms-image-1.png',
            caption: { zh: '資料匯入：欄位規則、必填與驗證後再寫入', en: 'Data import: column rules, required fields, validate before write' },
          },
          {
            src: 'docs/lms-image-2.png',
            caption: { zh: '列印匯出：資料組裝、標籤預覽與 ZPL', en: 'Print export: data assembly, label preview, and ZPL' },
          },
          {
            src: 'docs/lms-image-3.png',
            caption: { zh: '範本編輯器：動態欄位與直／橫向預覽', en: 'Template editor: dynamic fields and portrait / landscape preview' },
          },
        ],
        links: { demo: null, github: null, report: null, poster: null },
      },
      {
        id: 'hr',
        accent: true,
        category: { zh: '嘉泰興 · 代表專案', en: 'JTX · featured' },
        name: { zh: '人資管理系統（HRM）', en: 'HR Management System (HRM)' },
        period: { zh: '2026-08 — 現在', en: 'Aug 2026 — Present' },
        lead: {
          zh: '自建 HRM（出勤＋算薪）：FastAPI + Vue 3 + PostgreSQL + Redis，Flutter 行動端。2026-08-11 起建置，目前仍在開發／維護。已能跑通員工主檔 → 打卡／請假 → 日結 → 計薪關帳 → 薪資單 PDF。',
          en: 'A self-built HRM for attendance and payroll: FastAPI + Vue 3 + PostgreSQL + Redis, with a Flutter mobile app. Started 2026-08-11 and still in active development. Already runs employee master → punch / leave → daily close → payroll close → payslip PDF.',
        },
        stack: ['FastAPI', 'Vue 3', 'PostgreSQL', 'Redis', 'Flutter', 'Docker'],
        tags: {
          zh: ['出勤＋算薪', '仍在開發', '行動打卡'],
          en: ['Attendance + payroll', 'Active development', 'Mobile punch'],
        },
        blocks: [
          {
            label: { zh: '背景', en: 'Context' },
            body: {
              zh: '公司需要自建人資系統，涵蓋人事、班別／行事曆、出勤日結、請假簽核、月薪計算與薪資單，並支援 App 打卡（GPS／BSSID）與補登。',
              en: 'The company needed a self-built HR system covering personnel, shifts / calendar, daily attendance close, leave approval, monthly payroll, payslips, and app punches (GPS / BSSID) with make-up requests.',
            },
          },
          {
            label: { zh: '技術', en: 'Stack' },
            items: [
              { zh: '後端：Python 3.12+ / FastAPI、SQLAlchemy 2、Alembic、JWT、Pydantic', en: 'Backend: Python 3.12+ / FastAPI, SQLAlchemy 2, Alembic, JWT, Pydantic' },
              { zh: '資料：PostgreSQL；Redis 作日結／算薪 job 佇列', en: 'Data: PostgreSQL; Redis for daily-close / payroll job queues' },
              { zh: '前端：Vue 3 + TypeScript + Vite + Naive UI + Pinia', en: 'Web: Vue 3 + TypeScript + Vite + Naive UI + Pinia' },
              { zh: 'App：Flutter（登入、打卡、裝置綁定、行事曆、請假、補登）', en: 'App: Flutter (login, punch, device bind, calendar, leave, make-up)' },
              { zh: '其他：Docker Compose；薪資單 PDF（ReportLab）', en: 'Also: Docker Compose; payslip PDF (ReportLab)' },
            ],
          },
          {
            label: { zh: '負責內容', en: 'My role' },
            items: [
              { zh: '帳號與權限', en: 'Accounts and permissions' },
              { zh: '請假與簽核', en: 'Leave requests and approval' },
              { zh: '打卡據點、場外打卡審核、漏打補登', en: 'Punch sites, off-site review, missed-punch make-up' },
              { zh: '把直屬／部門／上級主管與禁止自審、GPS／Wi-Fi／場外打卡轉成資料結構與規則', en: 'Encode manager hierarchy, no-self-approve, and GPS / Wi-Fi / off-site punch rules' },
            ],
          },
          {
            label: { zh: '時程與階段', en: 'Timeline and phases' },
            items: [
              { zh: '2026-08-11 3 repo 初始化；仍在開發／維護（約一個月）', en: 'Three repos initialized 2026-08-11; still in development (~one month)' },
              { zh: '已落地：人事、班別、日結、請假、月薪、薪資單 PDF、App 打卡／補登／請假', en: 'Shipped: personnel, shifts, daily close, leave, monthly pay, payslip PDF, app punch / make-up / leave' },
            ],
          },
          {
            label: { zh: '成果', en: 'Outcome' },
            body: {
              zh: '尚無上線營運數字（仍在內建開發）。已能跑通核心發薪鏈；repo 可量化規模如下。',
              en: 'No post-launch ops metrics yet (still in-house). The core payroll chain already runs; repo-scale numbers below.',
            },
          },
        ],
        metrics: [
          { value: '86', label: { zh: '3 repo commits', en: 'Commits across 3 repos' } },
          { value: '104', label: { zh: 'API endpoints', en: 'API endpoints' } },
          { value: '91', label: { zh: 'pytest', en: 'pytest cases' } },
          { value: '31', label: { zh: 'Domain models', en: 'Domain models' } },
          { value: '18', label: { zh: 'migrations', en: 'Migrations' } },
        ],
        figures: [
          {
            src: 'docs/hr-image-1.png',
            caption: { zh: '總覽：待簽核、薪資單與常用動作', en: 'Overview: pending approvals, payslip, and quick actions' },
          },
          {
            src: 'docs/hr-image-2.png',
            caption: { zh: '行事曆：工作日／休息日／國定假', en: 'Calendar: workdays / rest days / holidays' },
          },
          {
            src: 'docs/hr-image-3.png',
            caption: { zh: '請假申請：假別、代理人與時段', en: 'Leave request: type, substitute, and time range' },
          },
        ],
        links: { demo: null, github: null, report: null, poster: null },
      },
    ],
    others: [
      {
        name: { zh: 'WMS 倉儲管理系統', en: 'WMS · Warehouse Management' },
        period: { zh: '2025 — 現在', en: '2025 — Present' },
        subtitle: { zh: 'Warehouse Management System', en: 'Warehouse Management System' },
        body: {
          zh: '企業內部倉儲系統：入庫、出庫、揀貨、標籤與 ERP 串接。從 2025 做到現在，持續依現場需求調整流程。',
          en: 'An internal warehouse system covering inbound, outbound, picking, labels, and ERP integration. In iteration since 2025 to match on-site workflows.',
        },
        stack: ['Vue.js', 'PHP', 'Docker'],
        tags: {
          zh: ['倉儲流程', '系統整合'],
          en: ['Warehouse flow', 'Integration'],
        },
        links: { demo: null, github: null },
      },
      {
        name: { zh: '企業官網', en: 'Company Website' },
        period: { zh: '2025 — 現在', en: '2025 — Present' },
        subtitle: { zh: 'Corporate Website', en: 'Corporate Website' },
        body: {
          zh: '從 2025 至今持續開發與維護公司官網，處理頁面、功能調整與使用體驗。',
          en: 'Building and maintaining the company website since 2025—pages, feature updates, and UX.',
        },
        stack: ['WordPress', 'PHP', 'JavaScript'],
        tags: {
          zh: ['網站開發', '內容維護'],
          en: ['Web development', 'Content'],
        },
        links: { demo: null, github: null },
      },
    ],
  },
  experience: {
    eyebrow: { zh: 'Experience', en: 'Experience' },
    title: { zh: '工作與實戰經驗', en: 'Where I built these skills' },
    items: [
      {
        dates: { zh: '2024-09 — 現在', en: 'Sep 2024 — Present' },
        org: { zh: '嘉泰興股份有限公司', en: 'JTX Corporation' },
        role: { zh: '軟體工程師', en: 'Software Engineer' },
        points: [
          {
            zh: '參與公司官網與多項內部系統，代表專案為企業標籤管理系統與自建 HRM（出勤＋算薪）。',
            en: 'Worked on the company website and internal systems; featured projects are LMS and a self-built HRM for attendance and payroll.',
          },
          {
            zh: 'LMS：我負責匯入／客戶／範本；同事負責標籤列印垂直線（ZPL／編輯器／產出）。',
            en: 'LMS: I owned import / customers / templates; a colleague owned the print vertical (ZPL / editor / output).',
          },
          {
            zh: 'HRM：FastAPI + Vue 3 + PostgreSQL + Redis + Flutter',
            en: 'HRM: FastAPI + Vue 3 + PostgreSQL + Redis + Flutter',
          },
          {
            zh: 'LMS 上線後標籤列印時間至少減少一半。',
            en: 'After LMS launched, label printing time fell by at least half.',
          },
        ],
      },
      {
        dates: { zh: '2026-01 — 2026-02', en: 'Jan 2026 — Feb 2026' },
        org: { zh: '艾思程式教育', en: 'Ace Programming Education' },
        role: { zh: 'Scratch 講師', en: 'Scratch Instructor' },
        points: [
          {
            zh: '透過 OSEP Scratch 擴充套件設計實作活動，帶領學員完成遊戲與 AI 視覺辨識小專題。',
            en: 'Designed hands-on Scratch / OSEP activities so students could finish games and small AI vision projects.',
          },
          {
            zh: '以互動教學與個別除錯指導為主，而不是只示範操作。',
            en: 'Taught through interaction and one-on-one debugging, not only live demos.',
          },
        ],
      },
    ],
  },
  stack: {
    eyebrow: { zh: 'Skills', en: 'Skills' },
    title: { zh: '技術能力', en: 'Technical skills' },
    lead: {
      zh: '以下是實際在系統裡用過的技術。',
      en: 'These are the tools I have actually used in shipped systems.',
    },
    groups: [
      {
        title: { zh: 'Frontend', en: 'Frontend' },
        items: ['Vue.js', 'TypeScript', 'WordPress', 'Flutter'],
      },
      {
        title: { zh: 'Backend', en: 'Backend' },
        items: ['Python', 'FastAPI', 'PHP'],
      },
      {
        title: { zh: 'Data', en: 'Data' },
        items: ['SQL', 'PostgreSQL', 'MariaDB / MySQL', 'Redis'],
      },
      {
        title: { zh: 'Workflow', en: 'Workflow' },
        items: ['Git', 'Docker'],
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
      zh: '資訊工程學系 · 四年級',
      en: 'Computer Science & Information Engineering · Senior',
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
      zh: '教學與帶領經驗',
      en: 'Teaching and leadership',
    },
    body: {
      zh: '這些不是主軸，但可以補充我怎麼帶人、怎麼把一件事從規劃做到現場完成。',
      en: 'Secondary to the technical work, but useful evidence of planning, teaching, and getting a group through a live event.',
    },
    items: [
      {
        label: { zh: 'Teaching', en: 'Teaching' },
        title: { zh: 'Scratch 講師', en: 'Scratch instructor' },
        desc: {
          zh: '帶學生完成遊戲或 AI 視覺辨識小專題，並用個別除錯的方式教。',
          en: 'Helped students finish games or small AI vision projects, teaching mainly through one-on-one debugging.',
        },
      },
      {
        label: { zh: 'Leadership', en: 'Leadership' },
        title: { zh: '偏鄉英語營總召', en: 'Rural English camp lead' },
        desc: {
          zh: '負責營隊整體規劃、分工與現場執行。',
          en: 'Owned overall planning, division of work, and on-site execution.',
        },
      },
      {
        label: { zh: 'Leadership', en: 'Leadership' },
        title: { zh: '宿營活動股長', en: 'Overnight camp activities lead' },
        desc: {
          zh: '規劃宿營活動流程，並帶同學把活動做完。',
          en: 'Planned the activity flow and led peers through the event.',
        },
      },
      {
        label: { zh: 'Leadership', en: 'Leadership' },
        title: { zh: '資工營隊輔股長', en: 'CS camp counselor lead' },
        desc: {
          zh: '帶領隊輔、照顧學員，並處理活動現場狀況。',
          en: 'Led counselors, supported students, and handled on-site issues.',
        },
      },
      {
        label: { zh: 'Leadership', en: 'Leadership' },
        title: { zh: '資工營總籌暨總務', en: 'CS camp organizer and logistics' },
        desc: {
          zh: '規劃時程、後勤與跨組協調，並即時處理現場問題。',
          en: 'Planned the schedule, logistics, and cross-team coordination, and handled issues on site.',
        },
      },
    ],
  },
  contact: {
    eyebrow: { zh: 'Contact', en: 'Contact' },
    title: {
      zh: '歡迎和我聯絡',
      en: 'Get in touch',
    },
  },
  footer: {
    note: {
      zh: '把工程實作，延伸到問題定義與分析。',
      en: 'From building systems to defining problems.',
    },
  },
}

export const links = {
  email: 'mailto:liucherry1223@gmail.com',
  emailLabel: 'liucherry1223@gmail.com',
  github: 'https://github.com/Esther1223',
  githubLabel: 'github.com/Esther1223',
}
