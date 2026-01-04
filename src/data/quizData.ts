export interface Question {
  id: string;
  question: string;
  answer: string;
  patchNotesUrl: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  questions: Question[];
}

export const categories: Category[] = [
  {
    id: "esports",
    name: "Киберспорт 2025",
    icon: "🏆",
    questions: [
      { id: "e1", question: "В какой стране и городе прошел гранд-финал PGC 2025?", answer: "Таиланд, Бангкок", patchNotesUrl: "https://pubg.com/en/news/pgc-2025-destination" },
      { id: "e2", question: "Сколько турниров серии PGS (PUBG Global Series) было проведено в течение 2025 года?", answer: "4 турнира (PGS 3, 4, 5, 6)", patchNotesUrl: "https://pubg.com/en/news/pubg-esports-2025-roadmap" },
      { id: "e3", question: "Какая команда стала чемпионом PGC 2025, совершив сенсацию в финале?", answer: "FULL SENSE (или Twisted Minds)", patchNotesUrl: "https://pubg.com/en/news/pgc-2025-winners" },
      { id: "e4", question: "С кем из «наших» игроков (СНГ) играл в одной команде легендарный TGLTN в рамках Twitch Rivals 2025?", answer: "Recrent", patchNotesUrl: "https://twitch.tv/recrent" },
      { id: "e5", question: "Какая неожиданная «наша» команда с русскими ребятами выступила на PGC 2025 и заняла крутое 6-е место?", answer: "Nemiga Gaming", patchNotesUrl: "https://pubg.com/en/news/pgc-2025-final-rankings" },
    ],
  },
  {
    id: "weapons",
    name: "Оружие и Тактика",
    icon: "🔫",
    questions: [
      { id: "w1", question: "Какой штурмовой винтовке (AR) в патче 36.1 снизили урон с 41 до 40 единиц?", answer: "AUG", patchNotesUrl: "https://pubg.com/en/patch-notes/36-1" },
      { id: "w2", question: "Какой пик (левый или правый) дает преимущество в PUBG и почему?", answer: "Правый (Right-hand peek). Камера на правом плече, поэтому персонаж меньше высовывается из-за укрытия", patchNotesUrl: "https://pubg.com/en/news/dev-letter-gunplay-tactics" },
      { id: "w3", question: "Какое «тихое» оружие получило бафф урона и скорости пули, став полноценной метой в 2025?", answer: "VSS (Винторез)", patchNotesUrl: "https://pubg.com/en/patch-notes/35-1" },
      { id: "w4", question: "Какой модуль для ствола стал популярнее компенсатора в 2025 году?", answer: "Muzzle Brake (Дульный тормоз)", patchNotesUrl: "https://pubg.com/en/patch-notes/36-1" },
      { id: "w5", question: "Какую уникальную пассивную способность получили все ПП (SMG) в 2025 году?", answer: "Бонус к мобильности: теперь с ними бегаешь так же быстро, как с кулаками", patchNotesUrl: "https://pubg.com/en/patch-notes/33-1" },
    ],
  },
  {
    id: "maps_personal",
    name: "Карты и История",
    icon: "🗺️",
    questions: [
      { id: "m1", question: "На какой карте ВПЕРВЫЕ в истории PUBG появилась разрушаемость ландшафта (возможность копать)?", answer: "Рондо (Rondo)", patchNotesUrl: "https://pubg.com/en/patch-notes/29-1" },
      { id: "m2", question: "Как назывался зимний ивент 2025 года на Эрангеле с метелями и замерзшей водой?", answer: "Erangel Subzero", patchNotesUrl: "https://pubg.com/en/news/erangel-winter-2025" },
      { id: "m3", question: "Сколько компьютерных клубов мы суммарно посетили в 2025 году, чтобы поиграть в PUBG?", answer: "3", patchNotesUrl: "https://pubg.com/patch-notes" },
      { id: "m4", question: "Используя какой супер-девайс мы «карали» Каракин, пока его не убрали из игры окончательно?", answer: "Дрон (Tactical Gear: Drone)", patchNotesUrl: "https://pubg.com/en/patch-notes/tactical-gear-removal" },
      { id: "m5", question: "Сколько карт официально находится в активном пуле Рангового режима в конце 2025 года?", answer: "5 карт", patchNotesUrl: "https://pubg.com/en/news/ranked-season-38-rotation" },
    ],
  },
  {
    id: "mechanics",
    name: "Механики и Патчи",
    icon: "⚙️",
    questions: [
      { id: "mc1", question: "На какой новый игровой движок PUBG официально начал переходить в 2025 году?", answer: "Unreal Engine 5", patchNotesUrl: "https://pubg.com/en/news/pubg-2025-roadmap" },
      { id: "mc2", question: "Сколько крупных номерных обновлений (патчей) вышло за весь 2025 год?", answer: "12 (с 33.1 по 39.1)", patchNotesUrl: "https://pubg.com/patch-notes" },
      { id: "mc3", question: "Какую фишку интерфейса для гранат, которая раньше была только в «обычках», официально добавили в Ранговый режим в 2025?", answer: "Таймер замаха гранаты (Throwable Cooking Timer UI)", patchNotesUrl: "https://pubg.com/en/patch-notes/36-1" },
      { id: "mc4", question: "Какую систему воскрешения (Recall) окончательно интегрировали во все Ранговые матчи в 2025 году?", answer: "Blue Chip Recall (Синие чипы)", patchNotesUrl: "https://pubg.com/en/patch-notes/36-1" },
      { id: "mc5", question: "Функция «Паркур 2.0»: что теперь можно сделать с дверью, если нажать клавишу H на бегу?", answer: "Выбить плечом", patchNotesUrl: "https://pubg.com/en/news/parkour-2-0-update" },
    ],
  },
  {
    id: "lifestyle",
    name: "Коллабы и Рофлы",
    icon: "🎯",
    questions: [
      { id: "x1", question: "С каким брендом элитных авто прошла самая масштабная коллаборация 2025 года?", answer: "Porsche", patchNotesUrl: "https://pubg.com/en/news/collaboration-porsche-2025" },
      { id: "x2", question: "Песню какого исполнителя мы слушали в машинах в ту самую легендарную катку и слушаем до сих пор?", answer: "G-Dragon", patchNotesUrl: "https://pubg.com/patch-notes" },
      { id: "x3", question: "Какой тактический гаджет (детектор) был полностью удален из игры в 2025 году из-за жалоб на «легальный чит»?", answer: "Детектор синих чипов (Blue Chip Detector)", patchNotesUrl: "https://pubg.com/patch-notes" },
      { id: "x4", question: "Какое аниме стало темой коллаборации и скинов в октябре 2025 года?", answer: "Chainsaw Man (Человек-бензопила)", patchNotesUrl: "https://pubg.com/en/news/anime-collab-october" },
      { id: "x5", question: "Какое безумное явление из интернета стало темой специального Halloween-режима в конце 2025 года?", answer: "Skibidi Toilet (Скибиди-туалеты)", patchNotesUrl: "https://pubg.com/en/news/pubg-x-skibidi-toilet" },
    ],
  },
];

export const pointValues = [100, 200, 300, 400, 500];
