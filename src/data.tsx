interface MenuArray {
  id: number;
  name: string;
  to: string;
}

interface TimelineData {
  year: number;
  fact: string;
}

interface EraData {
  title: string;
  img?: string;
  img2?: string;
  sound?: { name: string; src: string };
  fact: string;
  events?: { name: string; info: string }[];
  tech: string[];
  screenshot?: string;
  gif?: string;
  error?: string;
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
    year: 1995,
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
    year: 2006,
    fact: "Steve Jobs demonstrated a full-featured browser on a phone.",
  },
];

export const eras: Record<string, EraData> = {
  "1969": {
    title: "ARPANET",
    img: "/машика.png",
    img2: "/кнопки.png",
    fact: 'Первое сообщение в сети ARPANET (предшественнике интернета) было словом “LO”. Оно должно было быть словом “LOGIN”, но система рухнула после отправки первых двух букв. Это случилось 29 октября 1969 года, когда компьютер в UCLA связывался с компьютером в Стэнфорде.',
    sound: {
      name: "300 baud modem sound (1969)",
      src: "/public/24c17d23d9a9f23.mp3",
    },
   
    tech: [
      "50 kbit/s",
      "IMP (Honeywell DDP-516)",
      "ASCII 7-bit character set",
      "Network Control Protocol (NCP)",
      "No DNS, no IP, no WWW",
    ],
    error: "UCLA Terminal Ready. Connecting to SRI... Attempting to send: LOGIN Sent: L Sent: O*** SYSTEM ERROR: IMP FAILURE ***Transmission halted after 2 characters. Connection lost."
  },
  "1995": {
    title: "JavaScript",
    fact: "Создан за 10 дней",
    events: [
      { name: "Netscape 2", info: "Февраль" },
      { name: "Dancing Baby", info: "3D GIF" },
    ],
    tech: ["<blink>", "<marquee>", "Comic Sans"],
    gif: "/gifs/dancing-baby.gif",
  },
  "1998": {
    title: "Google",
    fact: "Запущен в гараже",
    events: [
      { name: "Google", info: "4 сентября" },
      { name: "GeoCities", info: "1M сайтов" },
    ],
    tech: ["HTML 4", "CSS 1", "Flash"],
    screenshot: "/screenshots/google-1998.png",
  },
};
