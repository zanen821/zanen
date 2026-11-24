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
  banner: { src: string; alt: string };
  socials: { label: string; href: string; icon: string }[];
  info: Info[];
  buttons: { label: string; href: string }[];
  sections: Section[]; // 之後的區塊(經歷、專案…)加在這裡
  ui: { light: string; dark: string; stack: string; highlights: string; visit: string; code: string; switchLabel: string; switchHref: string };
};

const socials = [
  { label: "GitHub", href: "https://github.com/zanen821", icon: "simple-icons:github" },
  { label: "Instagram", href: "https://instagram.com/your-id", icon: "simple-icons:instagram" },
];

export const contentByLocale: Record<Locale, Content> = {
  en: {
    lang: "en", name: "Your Name", tags: ["Tag One", "Tag Two", "Tag Three"],
    intro: "Hi, I'm Your Name — write two or three sentences about what you study and build.",
    banner: { src: "/banner.svg", alt: "Banner" }, socials,
    info: [
      { label: "Email", value: "you@example.com", href: "mailto:you@example.com" },
      { label: "Bio", items: ["Your University - Department", "Role or achievement", "Another role"] },
    ],
    buttons: [{ label: "Blog", href: "#" }, { label: "Resume", href: "#" }],
    sections: [],
    ui: { light: "Switch to light theme", dark: "Switch to dark theme", stack: "// stack", highlights: "// highlights", visit: "Visit", code: "Source", switchLabel: "中文", switchHref: "/zh-tw" },
  },
  "zh-TW": {
    lang: "Zanen", name: "贊恩", tags: ["鋼琴", "西洋棋", "多準則決策"],
    intro: "嗨，我是贊恩，目前研究領域是多準則決策，也對資料科學、決策科學感興趣，我喜歡彈動漫鋼琴還有下西洋棋。",
    banner: { src: "/banner.svg", alt: "橫幅" }, socials,
    info: [
      { label: "信箱", value: "you@example.com", href: "mailto:you@example.com" },
      { label: "簡介", items: ["你的大學 - 系所", "職務或成就", "另一個職務"] },
    ],
    buttons: [{ label: "repo", href: "#" }, { label: "resume", href: "#" }],
    sections: [],
    ui: { light: "切換為淺色主題", dark: "切換為深色主題", stack: "// 技術", highlights: "// 重點", visit: "前往", code: "原始碼", switchLabel: "EN", switchHref: "/" },
  },
};
