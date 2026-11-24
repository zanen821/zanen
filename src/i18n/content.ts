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
  photo: { src: string; alt: string };
  socials: { label: string; href: string; icon: string }[];
  info: Info[];
  buttons: { label: string; href: string }[];
  sections: Section[]; // 之後的區塊(經歷、專案…)加在這裡
  ui: { light: string; dark: string; stack: string; highlights: string; visit: string; code: string; switchLabel: string; switchHref: string };
};

const socials = [
  { label: "GitHub", href: "https://github.com/zanen821", icon: "simple-icons:github" },
  { label: "Instagram", href: "https://instagram.com/your-id", icon: "simple-icons:instagram" },
  { label: "Gmail", href: "mailto:easoneason821@gmail.com", icon: "simple-icons:gmail" }
];

export const contentByLocale: Record<Locale, Content> = {
  en: {
    lang: "en", name: "Zanen", tags: ["Piano", "Chess player", "MCDM"],
    intro: "Hi, I'm Zanen — My current research focus is multi-criteria decision-making, and I also have an interest in data science and decision science. In my spare time, I enjoy playing anime music on the piano and playing chess.",
    photo: { src: "/w.png", alt: "Photo" }, socials,
    info: [
      { label: "Email", value: "easoneason821@gmail.com", href: "mailto:easoneason821@gmail.com" },
      { label: "Bio", items: ["Your University - Department", "Role or achievement", "Another role"] },
    ],
    buttons: [{ label: "Blog", href: "#" }, { label: "Resume", href: "#" }],
    sections: [],
    ui: { light: "Switch to light theme", dark: "Switch to dark theme", stack: "// stack", highlights: "// highlights", visit: "Visit", code: "Source", switchLabel: "中文", switchHref: "/zh-tw" },
  },
  "zh-TW": {
    lang: "zh-TW", name: "Zanen", tags: ["鋼琴", "西洋棋玩家", "多準則決策"],
    intro: "嗨，我是贊恩，目前研究領域是多準則決策，也對資料科學、決策科學感興趣，我喜歡彈動漫鋼琴還有下西洋棋。",
    photo: { src: "/w.png", alt: "Photo" }, socials,
    info: [
      { label: "信箱", value: "easoneason821@gmail.com", href: "mailto:easoneason821@gmail.com" },
      { label: "簡介", items: ["雲林科技大學", "職務或成就", "另一個職務"] },
    ],
    buttons: [{ label: "repo", href: "#" }, { label: "resume", href: "#" }],
    sections: [],
    ui: { light: "切換為淺色主題", dark: "切換為深色主題", stack: "// 技術", highlights: "// 重點", visit: "前往", code: "原始碼", switchLabel: "EN", switchHref: "/" },
  },
};
