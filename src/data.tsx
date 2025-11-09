interface MenuArray {
  id: number;
  name: string;
  to: string;
}

interface TimelineData {
  year: number;
  fact: string
}

 interface EraData {
  title: string;
  fact: string;
  events: { name: string; info: string }[];
  tech: string[];
  screenshot?: string;
  gif?: string;
}



export const menuArray: Array<MenuArray> = [
  { id: 1, name: "Home", to: "/" },
  { id: 2, name: "Timeline", to: "/timeline" },
  { id: 3, name: "Gallery", to: "/gallery" },
  { id: 4, name: "About", to: "/about" },
];

export const timelineData: Array<TimelineData> = [
  {
    year: 1969,
    fact: "Two computers (UCLA and Stanford) exchanged data over ARPANET. The first word sent: LO.",
  },
  {
    year: 1983,
    fact: "ARPANET officially switched to TCP/IP protocols.",
  },
  {
    year: 1990,

    fact: "What happened: Tim Berners-Lee launched the first website: http://info.cern.ch. The Internet became accessible not only to scientists.",
  },
  {
    year: 1993,
    fact: "The first graphical browser with image support.",
  },
  {
    year: 1995,
    fact: "Brendan Eich created JavaScript in 10 days at Netscape.",
  },
  {
    year: 2004,
    fact: "Larry Page and Sergey Brin launched PageRank.",
  },
  {
    year: 2007,
    fact: "Steve Jobs demonstrated a full-featured browser on a phone.",
  },
];



export const eras: Record<string, EraData> = {
  '1969': {
    title: 'ARPANET',
    fact: 'Первое сообщение: "LO"',
    events: [
      { name: '29 октября', info: 'UCLA → SRI' },
      { name: 'IMP', info: 'Первый роутер' },
    ],
    tech: ['50 kbit/s', 'ASCII', 'Terminal'],
  },
  '1995': {
    title: 'JavaScript',
    fact: 'Создан за 10 дней',
    events: [
      { name: 'Netscape 2', info: 'Февраль' },
      { name: 'Dancing Baby', info: '3D GIF' },
    ],
    tech: ['<blink>', '<marquee>', 'Comic Sans'],
    gif: '/gifs/dancing-baby.gif',
  },
  '1998': {
    title: 'Google',
    fact: 'Запущен в гараже',
    events: [
      { name: 'Google', info: '4 сентября' },
      { name: 'GeoCities', info: '1M сайтов' },
    ],
    tech: ['HTML 4', 'CSS 1', 'Flash'],
    screenshot: '/screenshots/google-1998.png',
  },
};