export type Locale = "en" | "zh-TW";
export type Entry = { title: string; sub?: string; meta?: string; href?: string };
export type Project = {
  name: string; summary: string; description: string;
  stack: string[]; highlights: string[]; href?: string; github?: string;
};
export type Section =
  | { type: "list"; id: string; title: string; items: Entry[] }
  | { type: "groups"; id: string; title: string; groups: { label: string; items: Entry[] }[] }
  | { type: "projects"; id: string; title: string; items: Project[] };
export type Info = { label: string; value?: string; href?: string; items?: string[] };
export type Content = {
  lang: string; name: string; tags: string[]; intro: string;
  socials: { label: string; href: string; icon: string }[];
  info: Info[];
  buttons: { label: string; href: string }[];
  photo: { src: string; srcDark: string; alt: string };
  nav: { label: string; href: string }[];
  pages: { projects: Section[]; experience: Section[] };
  ui: { light: string; dark: string; stack: string; highlights: string; visit: string; code: string; switchLabel: string; switchHref: string };
};

const socials = [
  { label: "GitHub", href: "https://github.com/zanen821", icon: "simple-icons:github" },
  { label: "Instagram", href: "https://instagram.com/zanen_821", icon: "simple-icons:instagram" },
  { label: "Gmail", href: "mailto:easoneason821@gmail.com", icon: "simple-icons:gmail" }
];

export const contentByLocale: Record<Locale, Content> = {
  en: {
    lang: "en", name: "Zanen", tags: ["Piano", "Chess player", "MCDM"],
    intro: "Hi, I’m Zanen. I served as the Vice President of the Piano Club at YunTech, where I organized a wide variety of events. My current research focus is Multi-Criteria Decision Making (MCDM), and I also have a keen interest in data science, decision science, and system development. In my spare time, I enjoy playing anime music on the piano and playing chess. I’m currently preparing for entrance exams—I really hope to get into a top-tier university!",
    photo: { src:"/b.png", srcDark:"/w.png", alt:"個人icon" }, socials,
    info: [
      { label: "Email", value: "easoneason821@gmail.com", href: "mailto:easoneason821@gmail.com" },
      { label: "Bio", items: ["Yuntech - Industrial Engineering Management", "Yuntech Piano Club - Vice President", "Prospective Examinee"] },
    ],
    buttons: [{ label: "Blog", href: "#" }, { label: "Resume", href: "#" }],
    nav: [
    { label: "Home", href: "/" },
    { label: "Repos", href: "/projects" },
    { label: "Experience", href: "/experience" },],
    pages: {
    projects: [
    { type: "projects", id: "repos", title: "Repos", items: [
      { name: "repo 名稱", summary: "一行摘要", description: "詳細說明",
        stack: ["Python"], highlights: ["重點"],
        href: "https://網站(可省略)", github: "https://github.com/zanen821/repo名稱" },
     ] },
    ],
    experience: [
      { type: "list", id: "experience", title: "Experience", items: [
      { title: "YunTech Piano Club", sub: "Vice President", meta: "2025 – 2026" },
      { title: "Freshman Orientation Gala", sub: "Event Co-organizer", meta: "2025/09/02" },
      { title: "Student Club Fair", sub: "Club Representative", meta: "2025/09/10" },
      { title: "Piano Club Welcome Party", sub: "Event Staff", meta: "2025/09/10" },
      { title: "First-Semester Opening Gathering", sub: "Event Lead", meta: "2025/09/24" },
      { title: "Campus Carnival", sub: "Event Staff", meta: "2025/12/06" },
      { title: "Piano Club Fall Semester Concert", sub: "Event Lead", meta: "2025/12/10" },
      { title: "Second-Semester Opening Gathering", sub: "Event Staff", meta: "2026/03/04" },
      { title: "Piano Club Trip", sub: "Event Staff", meta: "2026/04/11" },
      { title: "Piano Club Spring Semester Concert", sub: "Event Staff", meta: "2026/05/20" },
      { title: "Club Leadership Election", sub: "Event Lead", meta: "2026/05/27" },
      { title: "Club Leadership Training", sub: "Event Lead", meta: "2026/06/27" }
        ] },],
},
    ui: { light: "Switch to light theme", dark: "Switch to dark theme", stack: "// stack", highlights: "// highlights", visit: "Visit", code: "Source", switchLabel: "中文", switchHref: "/zh-tw" },
  },

  "zh-TW": {
    lang: "zh-TW", name: "Zanen", tags: ["鋼琴", "西洋棋玩家", "多準則決策"],
    intro: "嗨，我是Zanen，我擔任過雲科鋼琴社副社長，舉辦了各種大大小小的活動，目前研究領域是多準則決策，也對資料科學、決策科學、系統開發感興趣，我喜歡彈動漫鋼琴還有下西洋棋，現在是準考生，好想上頂大啊.....",
    photo: { src:"/b.png", srcDark:"/w.png", alt:"個人icon" }, socials,
    info: [
      { label: "信箱", value: "easoneason821@gmail.com", href: "mailto:easoneason821@gmail.com" },
      { label: "簡介", items: ["雲林科技大學 - 工業工程與管理系", "雲科鋼琴社 - 副社長", "準考生"] },
    ],
    buttons: [{ label: "repo", href: "#" }, { label: "resume", href: "#" }],
    nav: [
    { label: "主頁", href: "/zh-tw" },
    { label: "專案", href: "/zh-tw/projects" },
    { label: "經歷", href: "/zh-tw/experience" },],
    pages: {
      projects: [
        { type: "projects", id: "repos", title: "Repos", items: [
        { name: "repo 名稱", summary: "一行摘要", description: "詳細說明",
      stack: ["Python"], highlights: ["重點"],
      href: "https://網站(可省略)", github: "https://github.com/zanen821/repo名稱" },] },
  ],
  experience: [
    { type: "list", id: "experience", title: "Experience", items: [
      { title: "職稱", sub: "單位", meta: "2025 – now" },
      { title: "雲科鋼琴社", sub: "副社長", meta: "2025 – 2026" },
      { title: "開展營晚會表演", sub: "活動副召", meta: "2025/09/02" },
      { title: "社團博覽會", sub: "社團博覽會", meta: "2025/09/10" },
      { title: "鋼琴社迎新", sub: "活動工人", meta: "2025/09/10" },
      { title: "上學期期初社大", sub: "活動總召", meta: "2025/09/24"},     
      { title: "園遊會", sub: "活動工人", meta: "2025/12/06" },
      { title: "鋼琴社上學期期末音樂會", sub: "活動總召", meta: "2025/12/10"},
      { title: "下學期期初社大", sub: "活動工人", meta: "2026/03/04"},
      { title: "社遊", sub: "活動工人", meta: "2026/04/11"},
      { title: "鋼琴社下學期期末音樂會", sub: "活動工人", meta: "2026/05/20"},
      { title: "幹部改選", sub: "活動總召", meta: "2026/05/27"},
      { title: "幹部訓練", sub: "活動總召", meta: "2026/06/27"}
    ] },
    // 還可以再加 certifications、competitions、talks 等區塊
  ],
},
    ui: { light: "切換為淺色主題", dark: "切換為深色主題", stack: "// 技術", highlights: "// 重點", visit: "前往", code: "原始碼", switchLabel: "EN", switchHref: "/" },
  },
};
