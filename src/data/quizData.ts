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
    id: "weapons",
    name: "Оружие и снаряжение",
    icon: "🔫",
    questions: [
      { id: "w1", question: "Вопрос за 100 очков об оружии", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
      { id: "w2", question: "Вопрос за 200 очков об оружии", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
      { id: "w3", question: "Вопрос за 300 очков об оружии", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
      { id: "w4", question: "Вопрос за 400 очков об оружии", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
      { id: "w5", question: "Вопрос за 500 очков об оружии", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
    ],
  },
  {
    id: "maps",
    name: "Карты и локации",
    icon: "🗺️",
    questions: [
      { id: "m1", question: "Вопрос за 100 очков о картах", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
      { id: "m2", question: "Вопрос за 200 очков о картах", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
      { id: "m3", question: "Вопрос за 300 очков о картах", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
      { id: "m4", question: "Вопрос за 400 очков о картах", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
      { id: "m5", question: "Вопрос за 500 очков о картах", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
    ],
  },
  {
    id: "mechanics",
    name: "Механики и тактика",
    icon: "⚙️",
    questions: [
      { id: "mc1", question: "Вопрос за 100 очков о механиках", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
      { id: "mc2", question: "Вопрос за 200 очков о механиках", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
      { id: "mc3", question: "Вопрос за 300 очков о механиках", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
      { id: "mc4", question: "Вопрос за 400 очков о механиках", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
      { id: "mc5", question: "Вопрос за 500 очков о механиках", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
    ],
  },
  {
    id: "diy",
    name: "Сделаю сам позже",
    icon: "🛠️",
    questions: [
      { id: "d1", question: "Вопрос за 100 очков", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
      { id: "d2", question: "Вопрос за 200 очков", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
      { id: "d3", question: "Вопрос за 300 очков", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
      { id: "d4", question: "Вопрос за 400 очков", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
      { id: "d5", question: "Вопрос за 500 очков", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
    ],
  },
  {
    id: "updates",
    name: "Обновления",
    icon: "📦",
    questions: [
      { id: "u1", question: "Вопрос за 100 очков об обновлениях", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
      { id: "u2", question: "Вопрос за 200 очков об обновлениях", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
      { id: "u3", question: "Вопрос за 300 очков об обновлениях", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
      { id: "u4", question: "Вопрос за 400 очков об обновлениях", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
      { id: "u5", question: "Вопрос за 500 очков об обновлениях", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
    ],
  },
  {
    id: "misc",
    name: "Разное",
    icon: "🎯",
    questions: [
      { id: "x1", question: "Вопрос за 100 очков", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
      { id: "x2", question: "Вопрос за 200 очков", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
      { id: "x3", question: "Вопрос за 300 очков", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
      { id: "x4", question: "Вопрос за 400 очков", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
      { id: "x5", question: "Вопрос за 500 очков", answer: "Ответ на вопрос", patchNotesUrl: "https://pubg.com/patch-notes" },
    ],
  },
];

export const pointValues = [100, 200, 300, 400, 500];
