/* =====================================================
   Kanji Master - Phase 2
   Mock-data Kanji (10 chữ mẫu - sẽ mở rộng lên 2136 sau)

   QUY TẮC DATA (bắt buộc):
   - meaning.ja : nghĩa Tiếng Nhật (kèm gloss tiếng Việt)
   - meaning.en : nghĩa Tiếng Anh
   - examples   : câu ví dụ PHẢI có Furigana theo cú pháp 漢字[かんじ]
                  (js/furigana.js sẽ chuyển thành thẻ <ruby> khi hiển thị)
   ===================================================== */

window.KANJI_DATA = [
  {
    id: "kyuu",
    kanji: "休",
    strokes: 6,
    jlpt: "N5",
    radicals: [
      { radical: "亻", meaning: "Nhân (người)" },
      { radical: "木", meaning: "Mộc (cây)" }
    ],
    onyomi: ["キュウ"],
    kunyomi: ["やす(む)", "やす(み)"],
    meaning: {
      ja: "休み（やすみ）- Nghỉ ngơi",
      en: "Rest / Day off"
    },
    mnemonic: "Một NGƯỜI (亻) đứng tựa vào CÂY (木) để NGHỈ NGƠI.",
    examples: [
      {
        jp: "今日[きょう]は学校[がっこう]を休[やす]みます。",
        en: "Today I take a day off from school."
      },
      {
        jp: "少[すこ]し休[やす]みましょう。",
        en: "Let's rest a little."
      }
    ]
  },
  {
    id: "moku",
    kanji: "木",
    strokes: 4,
    jlpt: "N5",
    radicals: [{ radical: "木", meaning: "Mộc (cây)" }],
    onyomi: ["モク", "ボク"],
    kunyomi: ["き"],
    meaning: {
      ja: "木（き）- Cây, gỗ",
      en: "Tree / Wood"
    },
    mnemonic: "Hình một cái CÂY có thân, cành xòe ra hai bên và rễ bên dưới.",
    examples: [
      {
        jp: "庭[にわ]に大[おお]きい木[き]があります。",
        en: "There is a big tree in the garden."
      }
    ]
  },
  {
    id: "jin",
    kanji: "人",
    strokes: 2,
    jlpt: "N5",
    radicals: [{ radical: "人", meaning: "Nhân (người)" }],
    onyomi: ["ジン", "ニン"],
    kunyomi: ["ひと"],
    meaning: {
      ja: "人（ひと）- Con người",
      en: "Person / Human"
    },
    mnemonic: "Hình một NGƯỜI đang bước đi, hai nét là hai chân.",
    examples: [
      {
        jp: "あの人[ひと]は先生[せんせい]です。",
        en: "That person is a teacher."
      }
    ]
  },
  {
    id: "nichi",
    kanji: "日",
    strokes: 4,
    jlpt: "N5",
    radicals: [{ radical: "日", meaning: "Nhật (mặt trời)" }],
    onyomi: ["ニチ", "ジツ"],
    kunyomi: ["ひ", "か"],
    meaning: {
      ja: "日（ひ）- Mặt trời, ngày",
      en: "Sun / Day"
    },
    mnemonic: "Hình MẶT TRỜI được vẽ vuông lại, nét ngang giữa là vệt sáng.",
    examples: [
      {
        jp: "日曜日[にちようび]に映画[えいが]を見[み]ます。",
        en: "I watch a movie on Sunday."
      }
    ]
  },
  {
    id: "getsu",
    kanji: "月",
    strokes: 4,
    jlpt: "N5",
    radicals: [{ radical: "月", meaning: "Nguyệt (mặt trăng)" }],
    onyomi: ["ゲツ", "ガツ"],
    kunyomi: ["つき"],
    meaning: {
      ja: "月（つき）- Mặt trăng, tháng",
      en: "Moon / Month"
    },
    mnemonic: "Hình MẶT TRĂNG lưỡi liềm, hai nét trong là bóng trên bề mặt trăng.",
    examples: [
      {
        jp: "今夜[こんや]は月[つき]がきれいですね。",
        en: "The moon is beautiful tonight."
      }
    ]
  },
  {
    id: "san",
    kanji: "山",
    strokes: 3,
    jlpt: "N5",
    radicals: [{ radical: "山", meaning: "Sơn (núi)" }],
    onyomi: ["サン"],
    kunyomi: ["やま"],
    meaning: {
      ja: "山（やま）- Núi",
      en: "Mountain"
    },
    mnemonic: "Hình ba đỉnh NÚI nhô lên, đỉnh giữa cao nhất.",
    examples: [
      {
        jp: "富士山[ふじさん]は日本[にほん]で一番[いちばん]高[たか]い山[やま]です。",
        en: "Mt. Fuji is the highest mountain in Japan."
      }
    ]
  },
  {
    id: "sen",
    kanji: "川",
    strokes: 3,
    jlpt: "N5",
    radicals: [{ radical: "川", meaning: "Xuyên (sông)" }],
    onyomi: ["セン"],
    kunyomi: ["かわ"],
    meaning: {
      ja: "川（かわ）- Sông",
      en: "River"
    },
    mnemonic: "Ba nét dọc là ba dòng nước của con SÔNG đang chảy.",
    examples: [
      {
        jp: "夏[なつ]に川[かわ]で泳[およ]ぎます。",
        en: "I swim in the river in summer."
      }
    ]
  },
  {
    id: "gaku",
    kanji: "学",
    strokes: 8,
    jlpt: "N5",
    radicals: [
      { radical: "冖", meaning: "Mịch (mái nhà)" },
      { radical: "子", meaning: "Tử (đứa trẻ)" }
    ],
    onyomi: ["ガク"],
    kunyomi: ["まな(ぶ)"],
    meaning: {
      ja: "学ぶ（まなぶ）- Học",
      en: "Study / Learning"
    },
    mnemonic: "ĐỨA TRẺ (子) ngồi dưới MÁI NHÀ (冖) chăm chỉ HỌC bài.",
    examples: [
      {
        jp: "大学[だいがく]で日本語[にほんご]を学[まな]びます。",
        en: "I study Japanese at university."
      }
    ]
  },
  {
    id: "kou",
    kanji: "校",
    strokes: 10,
    jlpt: "N5",
    radicals: [
      { radical: "木", meaning: "Mộc (cây)" },
      { radical: "交", meaning: "Giao (giao lưu)" }
    ],
    onyomi: ["コウ"],
    kunyomi: [],
    meaning: {
      ja: "学校（がっこう）- Trường học",
      en: "School"
    },
    mnemonic: "Nơi có nhiều CÂY (木) để mọi người GIAO LƯU (交) - đó là TRƯỜNG HỌC.",
    examples: [
      {
        jp: "学校[がっこう]は八時[はちじ]に始[はじ]まります。",
        en: "School starts at eight o'clock."
      }
    ]
  },
  {
    id: "shoku",
    kanji: "食",
    strokes: 9,
    jlpt: "N5",
    radicals: [
      { radical: "𠆢", meaning: "Nhân (người - biến thể)" },
      { radical: "良", meaning: "Lương (tốt)" }
    ],
    onyomi: ["ショク"],
    kunyomi: ["た(べる)"],
    meaning: {
      ja: "食べる（たべる）- Ăn",
      en: "Eat / Food"
    },
    mnemonic: "NGƯỜI (𠆢) ngồi trước món ăn NGON (良) thì phải ĂN thôi!",
    examples: [
      {
        jp: "朝[あさ]ご飯[はん]を食[た]べました。",
        en: "I ate breakfast."
      }
    ]
  }
];
