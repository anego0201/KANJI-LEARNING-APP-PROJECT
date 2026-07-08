/* =====================================================
   Kanji Master - Data JLPT N5 (80 chữ)

   QUY TẮC DATA (bắt buộc):
   - meaning ja : nghĩa Tiếng Nhật (kèm gloss tiếng Việt)
   - meaning en : nghĩa Tiếng Anh
   - examples   : câu ví dụ PHẢI có Furigana cú pháp 漢字[かんじ]

   id = chính chữ Kanji (tiến độ cũ được migrate trong storage.js)
   ===================================================== */

window.KANJI_N5 = (function () {
  "use strict";

  /** Helper rút gọn: k(kanji, bộ thủ, âm on, âm kun, nghĩa JA, nghĩa EN, mnemonic, ví dụ) */
  function k(kanji, radicals, on, kun, ja, en, mnemonic, examples) {
    return {
      id: kanji,
      kanji: kanji,
      jlpt: "N5",
      radicals: radicals.map(function (r) { return { radical: r[0], meaning: r[1] }; }),
      onyomi: on,
      kunyomi: kun,
      meaning: { ja: ja, en: en },
      mnemonic: mnemonic,
      examples: examples.map(function (e) { return { jp: e[0], en: e[1] }; })
    };
  }

  return [

  // ===== Số đếm & thời gian =====
  k("一", [["一", "Nhất (một)"]], ["イチ", "イツ"], ["ひと(つ)"],
    "一（いち）- Số một", "One",
    "MỘT nét ngang duy nhất - số MỘT.",
    [["リンゴを一[ひと]つください。", "Please give me one apple."]]),

  k("二", [["二", "Nhị (hai)"]], ["ニ"], ["ふた(つ)"],
    "二（に）- Số hai", "Two",
    "HAI nét ngang xếp chồng - số HAI.",
    [["猫[ねこ]を二匹[にひき]飼[か]っています。", "I have two cats."]]),

  k("三", [["三", "Tam (ba)"]], ["サン"], ["みっ(つ)"],
    "三（さん）- Số ba", "Three",
    "BA nét ngang xếp chồng - số BA.",
    [["三人[さんにん]で旅行[りょこう]します。", "The three of us will travel together."]]),

  k("四", [["囗", "Vi (vây quanh)"], ["儿", "Nhân (chân người)"]], ["シ"], ["よっ(つ)", "よん"],
    "四（よん）- Số bốn", "Four",
    "Cái hộp có hai chân bên trong - số BỐN.",
    [["家族[かぞく]は四人[よにん]です。", "My family has four people."]]),

  k("五", [["五", "Ngũ (năm)"]], ["ゴ"], ["いつ(つ)"],
    "五（ご）- Số năm", "Five",
    "Hình bàn tay xòe cách điệu - số NĂM.",
    [["毎日[まいにち]五時[ごじ]に起[お]きます。", "I wake up at five every day."]]),

  k("六", [["亠", "Đầu (nắp)"], ["八", "Bát (tám)"]], ["ロク"], ["むっ(つ)"],
    "六（ろく）- Số sáu", "Six",
    "Cái nắp trên số TÁM - đếm lùi hai bậc thành SÁU.",
    [["六人[ろくにん]の友達[ともだち]が来[き]ました。", "Six friends came."]]),

  k("七", [["七", "Thất (bảy)"]], ["シチ"], ["なな(つ)"],
    "七（なな）- Số bảy", "Seven",
    "Số 7 viết ngược - số BẢY.",
    [["一週間[いっしゅうかん]は七日[なのか]です。", "A week has seven days."]]),

  k("八", [["八", "Bát (tám)"]], ["ハチ"], ["やっ(つ)"],
    "八（はち）- Số tám", "Eight",
    "Hai nét tách ra như chia làm TÁM phần.",
    [["八時[はちじ]に朝[あさ]ご飯[はん]を食[た]べます。", "I eat breakfast at eight."]]),

  k("九", [["九", "Cửu (chín)"]], ["キュウ", "ク"], ["ここの(つ)"],
    "九（きゅう）- Số chín", "Nine",
    "Cánh tay gập lại như số 9 - số CHÍN.",
    [["九時[くじ]に学校[がっこう]が始[はじ]まります。", "School starts at nine."]]),

  k("十", [["十", "Thập (mười)"]], ["ジュウ"], ["とお"],
    "十（じゅう）- Số mười", "Ten",
    "Dấu cộng: 5 + 5 = MƯỜI.",
    [["十時[じゅうじ]に寝[ね]ます。", "I go to bed at ten."]]),

  k("百", [["一", "Nhất (một)"], ["白", "Bạch (trắng)"]], ["ヒャク"], [],
    "百（ひゃく）- Một trăm", "Hundred",
    "MỘT (一) tờ giấy TRẮNG (白) ghi số TRĂM.",
    [["この本[ほん]は八百円[はっぴゃくえん]です。", "This book is 800 yen."]]),

  k("千", [["丿", "Phiệt (nét phẩy)"], ["十", "Thập (mười)"]], ["セン"], ["ち"],
    "千（せん）- Một nghìn", "Thousand",
    "Nét phẩy trên số MƯỜI - nhân lên thành NGHÌN.",
    [["千円[せんえん]を貸[か]してください。", "Please lend me 1,000 yen."]]),

  k("万", [["万", "Vạn (mười nghìn)"]], ["マン", "バン"], [],
    "万（まん）- Mười nghìn, vạn", "Ten thousand",
    "Hình chữ 方 mất nắp - số VẠN (10.000).",
    [["この時計[とけい]は一万円[いちまんえん]です。", "This watch is 10,000 yen."]]),

  k("円", [["冂", "Quynh (khung)"], ["一", "Nhất (một)"]], ["エン"], ["まる(い)"],
    "円（えん）- Đồng Yên, hình tròn", "Yen / Circle",
    "Đồng xu TRÒN trong khung - đồng YÊN Nhật.",
    [["これは百円[ひゃくえん]です。", "This is 100 yen."]]),

  k("日", [["日", "Nhật (mặt trời)"]], ["ニチ", "ジツ"], ["ひ", "か"],
    "日（ひ）- Mặt trời, ngày", "Sun / Day",
    "Hình MẶT TRỜI được vẽ vuông lại, nét ngang giữa là vệt sáng.",
    [["日曜日[にちようび]に映画[えいが]を見[み]ます。", "I watch a movie on Sunday."]]),

  k("月", [["月", "Nguyệt (mặt trăng)"]], ["ゲツ", "ガツ"], ["つき"],
    "月（つき）- Mặt trăng, tháng", "Moon / Month",
    "Hình MẶT TRĂNG lưỡi liềm, hai nét trong là bóng trên bề mặt trăng.",
    [["今夜[こんや]は月[つき]がきれいですね。", "The moon is beautiful tonight."]]),

  k("時", [["日", "Nhật (mặt trời)"], ["寺", "Tự (chùa)"]], ["ジ"], ["とき"],
    "時（とき）- Thời gian, giờ", "Time / Hour",
    "MẶT TRỜI (日) trên CHÙA (寺) - chuông chùa điểm GIỜ.",
    [["今[いま]何時[なんじ]ですか。", "What time is it now?"]]),

  k("分", [["八", "Bát (chia)"], ["刀", "Đao (dao)"]], ["ブン", "フン"], ["わ(かる)", "わ(ける)"],
    "分（ふん）- Phút, chia, hiểu", "Minute / Divide / Understand",
    "Dùng DAO (刀) CHIA (八) đôi - chia nhỏ thời gian thành PHÚT.",
    [["駅[えき]まで十分[じゅっぷん]かかります。", "It takes ten minutes to the station."]]),

  k("半", [["八", "Bát (chia)"], ["十", "Thập (mười)"]], ["ハン"], ["なか(ば)"],
    "半（はん）- Một nửa", "Half",
    "Con bò bị chia đôi chính giữa - MỘT NỬA.",
    [["今[いま]九時半[くじはん]です。", "It is nine thirty now."]]),

  k("間", [["門", "Môn (cổng)"], ["日", "Nhật (mặt trời)"]], ["カン", "ケン"], ["あいだ"],
    "間（あいだ）- Khoảng, giữa", "Interval / Between",
    "MẶT TRỜI (日) lọt vào GIỮA hai cánh CỔNG (門).",
    [["夏休[なつやす]みの間[あいだ]、国[くに]へ帰[かえ]ります。", "During summer vacation, I return to my country."]]),

  k("年", [["年", "Niên (năm)"]], ["ネン"], ["とし"],
    "年（とし）- Năm", "Year",
    "Người gánh bó lúa - mỗi mùa gặt là một NĂM trôi qua.",
    [["今年[ことし]は日本[にほん]へ行[い]きます。", "This year I will go to Japan."]]),

  k("今", [["𠆢", "Nhân (người)"], ["一", "Nhất (một)"]], ["コン", "キン"], ["いま"],
    "今（いま）- Bây giờ", "Now",
    "Mái nhà che một khoảnh khắc - chính là BÂY GIỜ.",
    [["今[いま]勉強[べんきょう]しています。", "I am studying now."]]),

  k("毎", [["𠂉", "Nhân (người)"], ["母", "Mẫu (mẹ)"]], ["マイ"], [],
    "毎（まい）- Mỗi, hàng", "Every",
    "MẸ (母) chăm con MỖI ngày không nghỉ.",
    [["毎朝[まいあさ]コーヒーを飲[の]みます。", "I drink coffee every morning."]]),

  k("午", [["午", "Ngọ (trưa)"]], ["ゴ"], [],
    "午（ご）- Buổi trưa (giờ Ngọ)", "Noon",
    "Cây cọc đo bóng nắng - bóng ngắn nhất lúc TRƯA.",
    [["午後[ごご]三時[さんじ]に会[あ]いましょう。", "Let's meet at 3 p.m."]]),

  // ===== Vị trí & phương hướng =====
  k("上", [["上", "Thượng (trên)"]], ["ジョウ"], ["うえ", "あ(がる)", "のぼ(る)"],
    "上（うえ）- Trên", "Up / Above",
    "Chấm nằm TRÊN đường kẻ ngang.",
    [["机[つくえ]の上[うえ]に本[ほん]があります。", "There is a book on the desk."]]),

  k("下", [["下", "Hạ (dưới)"]], ["カ", "ゲ"], ["した", "さ(がる)", "くだ(る)"],
    "下（した）- Dưới", "Down / Below",
    "Chấm nằm DƯỚI đường kẻ ngang.",
    [["猫[ねこ]はテーブルの下[した]にいます。", "The cat is under the table."]]),

  k("中", [["口", "Khẩu (miệng)"], ["丨", "Cổn (nét sổ)"]], ["チュウ"], ["なか"],
    "中（なか）- Giữa, bên trong", "Middle / Inside",
    "Mũi tên xuyên đúng TÂM của tấm bia.",
    [["かばんの中[なか]に何[なに]がありますか。", "What is inside the bag?"]]),

  k("外", [["夕", "Tịch (buổi tối)"], ["卜", "Bốc (bói)"]], ["ガイ", "ゲ"], ["そと"],
    "外（そと）- Bên ngoài", "Outside",
    "Buổi TỐI (夕) đi xem bói (卜) phải ra NGOÀI.",
    [["外[そと]は寒[さむ]いです。", "It is cold outside."]]),

  k("前", [["丷", "Bát (sừng)"], ["月", "Nguyệt"], ["刂", "Đao (dao)"]], ["ゼン"], ["まえ"],
    "前（まえ）- Phía trước", "Front / Before",
    "Mũi thuyền rẽ nước tiến về PHÍA TRƯỚC.",
    [["駅[えき]の前[まえ]で会[あ]いましょう。", "Let's meet in front of the station."]]),

  k("後", [["彳", "Xích (bước chân)"], ["幺", "Yêu (sợi nhỏ)"], ["夂", "Truy (đi chậm)"]], ["ゴ", "コウ"], ["あと", "うし(ろ)"],
    "後（あと）- Sau, phía sau", "After / Behind",
    "Bước chân bị sợi dây trói nên tụt lại PHÍA SAU.",
    [["授業[じゅぎょう]の後[あと]でサッカーをします。", "I play soccer after class."]]),

  k("東", [["木", "Mộc (cây)"], ["日", "Nhật (mặt trời)"]], ["トウ"], ["ひがし"],
    "東（ひがし）- Phía đông", "East",
    "MẶT TRỜI (日) mọc sau thân CÂY (木) - hướng ĐÔNG.",
    [["東[ひがし]の空[そら]が明[あか]るいです。", "The eastern sky is bright."]]),

  k("西", [["西", "Tây"]], ["セイ", "サイ"], ["にし"],
    "西（にし）- Phía tây", "West",
    "Con chim về tổ khi mặt trời lặn đằng TÂY.",
    [["太陽[たいよう]は西[にし]に沈[しず]みます。", "The sun sets in the west."]]),

  k("南", [["十", "Thập"], ["冂", "Quynh (khung)"]], ["ナン"], ["みなみ"],
    "南（みなみ）- Phía nam", "South",
    "Căn lều ấm áp quay mặt về hướng NAM đầy nắng.",
    [["南[みなみ]の島[しま]へ行[い]きたいです。", "I want to go to a southern island."]]),

  k("北", [["北", "Bắc"]], ["ホク"], ["きた"],
    "北（きた）- Phía bắc", "North",
    "Hai người ngồi QUAY LƯNG vào nhau tránh gió BẮC lạnh.",
    [["北海道[ほっかいどう]は日本[にほん]の北[きた]にあります。", "Hokkaido is in the north of Japan."]]),

  // ===== Con người & gia đình =====
  k("人", [["人", "Nhân (người)"]], ["ジン", "ニン"], ["ひと"],
    "人（ひと）- Con người", "Person / Human",
    "Hình một NGƯỜI đang bước đi, hai nét là hai chân.",
    [["あの人[ひと]は先生[せんせい]です。", "That person is a teacher."]]),

  k("子", [["子", "Tử (đứa trẻ)"]], ["シ", "ス"], ["こ"],
    "子（こ）- Đứa trẻ, con", "Child",
    "Hình EM BÉ quấn tã, hai tay dang ra.",
    [["子[こ]どもが公園[こうえん]で遊[あそ]んでいます。", "Children are playing in the park."]]),

  k("女", [["女", "Nữ (phụ nữ)"]], ["ジョ"], ["おんな"],
    "女（おんな）- Phụ nữ", "Woman / Female",
    "Hình người PHỤ NỮ ngồi dịu dàng.",
    [["あの女[おんな]の人[ひと]は医者[いしゃ]です。", "That woman is a doctor."]]),

  k("男", [["田", "Điền (ruộng)"], ["力", "Lực (sức mạnh)"]], ["ダン", "ナン"], ["おとこ"],
    "男（おとこ）- Đàn ông", "Man / Male",
    "Người dùng SỨC (力) cày RUỘNG (田) - ĐÀN ÔNG.",
    [["男[おとこ]の子[こ]が三人[さんにん]います。", "There are three boys."]]),

  k("父", [["父", "Phụ (bố)"]], ["フ"], ["ちち"],
    "父（ちち）- Bố, cha", "Father",
    "Hai tay cầm rìu đi làm - hình ảnh người CHA.",
    [["父[ちち]は銀行[ぎんこう]で働[はたら]いています。", "My father works at a bank."]]),

  k("母", [["母", "Mẫu (mẹ)"]], ["ボ"], ["はは"],
    "母（はは）- Mẹ", "Mother",
    "Hình người MẸ đang cho con bú (hai chấm).",
    [["母[はは]は料理[りょうり]が上手[じょうず]です。", "My mother is good at cooking."]]),

  k("友", [["𠂇", "Tả (tay trái)"], ["又", "Hựu (tay phải)"]], ["ユウ"], ["とも"],
    "友（とも）- Bạn bè", "Friend",
    "Hai bàn TAY nắm lấy nhau - tình BẠN.",
    [["友達[ともだち]とサッカーをします。", "I play soccer with my friends."]]),

  k("名", [["夕", "Tịch (buổi tối)"], ["口", "Khẩu (miệng)"]], ["メイ", "ミョウ"], ["な"],
    "名（な）- Tên", "Name",
    "Buổi TỐI (夕) không nhìn rõ mặt, phải mở MIỆNG (口) gọi TÊN.",
    [["お名前[なまえ]は何[なん]ですか。", "What is your name?"]]),

  k("生", [["生", "Sinh (sống)"]], ["セイ", "ショウ"], ["い(きる)", "う(まれる)", "なま"],
    "生（せい）- Sống, sinh ra", "Life / Birth / Raw",
    "MẦM CÂY đang mọc lên từ mặt đất - sự SỐNG.",
    [["私[わたし]は大阪[おおさか]で生[う]まれました。", "I was born in Osaka."]]),

  // ===== Thiên nhiên =====
  k("山", [["山", "Sơn (núi)"]], ["サン"], ["やま"],
    "山（やま）- Núi", "Mountain",
    "Hình ba đỉnh NÚI nhô lên, đỉnh giữa cao nhất.",
    [["富士山[ふじさん]は日本[にほん]で一番[いちばん]高[たか]い山[やま]です。", "Mt. Fuji is the highest mountain in Japan."]]),

  k("川", [["川", "Xuyên (sông)"]], ["セン"], ["かわ"],
    "川（かわ）- Sông", "River",
    "Ba nét dọc là ba dòng nước của con SÔNG đang chảy.",
    [["夏[なつ]に川[かわ]で泳[およ]ぎます。", "I swim in the river in summer."]]),

  k("水", [["水", "Thủy (nước)"]], ["スイ"], ["みず"],
    "水（みず）- Nước", "Water",
    "Dòng NƯỚC chảy tóe ra hai bên.",
    [["水[みず]をたくさん飲[の]みます。", "I drink a lot of water."]]),

  k("火", [["火", "Hỏa (lửa)"]], ["カ"], ["ひ"],
    "火（ひ）- Lửa", "Fire",
    "Ngọn LỬA đang cháy, hai tia lửa bắn ra hai bên.",
    [["火曜日[かようび]にテストがあります。", "There is a test on Tuesday."]]),

  k("木", [["木", "Mộc (cây)"]], ["モク", "ボク"], ["き"],
    "木（き）- Cây, gỗ", "Tree / Wood",
    "Hình một cái CÂY có thân, cành xòe ra hai bên và rễ bên dưới.",
    [["庭[にわ]に大[おお]きい木[き]があります。", "There is a big tree in the garden."]]),

  k("土", [["土", "Thổ (đất)"]], ["ド", "ト"], ["つち"],
    "土（つち）- Đất", "Earth / Soil",
    "Cây thập giá cắm trên mặt ĐẤT.",
    [["土曜日[どようび]に買[か]い物[もの]をします。", "I go shopping on Saturday."]]),

  k("金", [["金", "Kim (vàng)"]], ["キン", "コン"], ["かね"],
    "金（かね）- Vàng, tiền", "Gold / Money",
    "Mái nhà che hai thỏi VÀNG chôn dưới đất.",
    [["お金[かね]がありません。", "I have no money."]]),

  k("天", [["一", "Nhất"], ["大", "Đại (to)"]], ["テン"], ["あま"],
    "天（てん）- Bầu trời, thiên", "Heaven / Sky",
    "Đường kẻ (一) TRÊN đầu người dang tay (大) - BẦU TRỜI.",
    [["天気[てんき]がいいから、散歩[さんぽ]しましょう。", "Since the weather is nice, let's take a walk."]]),

  k("気", [["気", "Khí"]], ["キ", "ケ"], [],
    "気（き）- Khí, tinh thần", "Spirit / Energy / Air",
    "Hơi nước bốc lên từ nồi cơm - KHÍ.",
    [["今日[きょう]は天気[てんき]がいいです。", "The weather is nice today."]]),

  k("雨", [["雨", "Vũ (mưa)"]], ["ウ"], ["あめ"],
    "雨（あめ）- Mưa", "Rain",
    "Bốn giọt MƯA rơi từ đám mây dưới bầu trời.",
    [["明日[あした]は雨[あめ]が降[ふ]るでしょう。", "It will probably rain tomorrow."]]),

  k("白", [["白", "Bạch (trắng)"]], ["ハク"], ["しろ(い)"],
    "白（しろ）- Màu trắng", "White",
    "Tia nắng chiếu vào mặt trời - ánh sáng TRẮNG.",
    [["白[しろ]いシャツを着[き]ています。", "I am wearing a white shirt."]]),

  // ===== Tính chất & kích thước =====
  k("大", [["大", "Đại (to)"]], ["ダイ", "タイ"], ["おお(きい)"],
    "大（おお）きい - To lớn", "Big / Large",
    "Người dang rộng hai tay hai chân - thật TO LỚN.",
    [["大[おお]きい犬[いぬ]がいます。", "There is a big dog."]]),

  k("小", [["小", "Tiểu (nhỏ)"]], ["ショウ"], ["ちい(さい)", "こ"],
    "小（ちい）さい - Nhỏ bé", "Small",
    "Vật bị chia làm ba mảnh NHỎ.",
    [["小[ちい]さい犬[いぬ]がほしいです。", "I want a small dog."]]),

  k("長", [["長", "Trường (dài)"]], ["チョウ"], ["なが(い)"],
    "長（なが）い - Dài; trưởng", "Long / Chief",
    "Cụ già TÓC DÀI chống gậy - người đứng đầu (trưởng).",
    [["彼女[かのじょ]は髪[かみ]が長[なが]いです。", "She has long hair."]]),

  k("高", [["高", "Cao"]], ["コウ"], ["たか(い)"],
    "高（たか）い - Cao, đắt", "Tall / High / Expensive",
    "Tòa tháp nhiều tầng CAO chót vót.",
    [["この店[みせ]は少[すこ]し高[たか]いです。", "This shop is a little expensive."]]),

  // ===== Động từ cơ bản =====
  k("行", [["彳", "Xích (bước trái)"], ["亍", "Xúc (bước phải)"]], ["コウ", "ギョウ"], ["い(く)", "おこな(う)"],
    "行（い）く - Đi", "Go",
    "Ngã tư đường - nơi mọi người ĐI qua lại.",
    [["明日[あした]東京[とうきょう]へ行[い]きます。", "I will go to Tokyo tomorrow."]]),

  k("来", [["来", "Lai (đến)"]], ["ライ"], ["く(る)"],
    "来（く）る - Đến", "Come",
    "Cây lúa mì trĩu hạt - mùa màng ĐANG ĐẾN.",
    [["明日[あした]友達[ともだち]が来[き]ます。", "A friend will come tomorrow."]]),

  k("出", [["山", "Sơn (núi)"]], ["シュツ"], ["で(る)", "だ(す)"],
    "出（で）る - Ra, xuất", "Exit / Go out",
    "NÚI chồng lên NÚI - vượt núi ĐI RA ngoài.",
    [["朝[あさ]七時[しちじ]に家[いえ]を出[で]ます。", "I leave home at seven in the morning."]]),

  k("入", [["入", "Nhập (vào)"]], ["ニュウ"], ["はい(る)", "い(れる)"],
    "入（はい）る - Vào", "Enter",
    "Mũi tên chỉ VÀO trong cửa lều.",
    [["いい大学[だいがく]に入[はい]りたいです。", "I want to enter a good university."]]),

  k("見", [["目", "Mục (mắt)"], ["儿", "Nhân (chân người)"]], ["ケン"], ["み(る)"],
    "見（み）る - Nhìn, xem", "See / Look",
    "Con MẮT (目) to có chân (儿) chạy đi NHÌN khắp nơi.",
    [["昨日[きのう]映画[えいが]を見[み]ました。", "I watched a movie yesterday."]]),

  k("聞", [["門", "Môn (cổng)"], ["耳", "Nhĩ (tai)"]], ["ブン", "モン"], ["き(く)"],
    "聞（き）く - Nghe, hỏi", "Hear / Listen / Ask",
    "Áp TAI (耳) vào CỔNG (門) để NGHE lén.",
    [["音楽[おんがく]を聞[き]くのが好[す]きです。", "I like listening to music."]]),

  k("話", [["言", "Ngôn (lời nói)"], ["舌", "Thiệt (lưỡi)"]], ["ワ"], ["はな(す)", "はなし"],
    "話（はな）す - Nói chuyện", "Speak / Talk / Story",
    "LỜI NÓI (言) từ cái LƯỠI (舌) - NÓI CHUYỆN.",
    [["日本語[にほんご]で話[はな]しましょう。", "Let's talk in Japanese."]]),

  k("読", [["言", "Ngôn (lời nói)"], ["売", "Mại (bán)"]], ["ドク"], ["よ(む)"],
    "読（よ）む - Đọc", "Read",
    "Người BÁN (売) hàng rao bằng LỜI (言) như đang ĐỌC to.",
    [["毎晩[まいばん]本[ほん]を読[よ]みます。", "I read books every night."]]),

  k("書", [["聿", "Duật (cây bút)"], ["日", "Nhật"]], ["ショ"], ["か(く)"],
    "書（か）く - Viết", "Write",
    "Bàn tay cầm BÚT viết lên trang giấy - VIẾT.",
    [["ここに名前[なまえ]を書[か]いてください。", "Please write your name here."]]),

  k("食", [["𠆢", "Nhân (người - biến thể)"], ["良", "Lương (tốt)"]], ["ショク"], ["た(べる)"],
    "食（た）べる - Ăn", "Eat / Food",
    "NGƯỜI (𠆢) ngồi trước món ăn NGON (良) thì phải ĂN thôi!",
    [["朝[あさ]ご飯[はん]を食[た]べました。", "I ate breakfast."]]),

  k("休", [["亻", "Nhân (người)"], ["木", "Mộc (cây)"]], ["キュウ"], ["やす(む)", "やす(み)"],
    "休み（やすみ）- Nghỉ ngơi", "Rest / Day off",
    "Một NGƯỜI (亻) đứng tựa vào CÂY (木) để NGHỈ NGƠI.",
    [["今日[きょう]は学校[がっこう]を休[やす]みます。", "Today I take a day off from school."],
     ["少[すこ]し休[やす]みましょう。", "Let's rest a little."]]),

  // ===== Học tập & xã hội =====
  k("学", [["冖", "Mịch (mái nhà)"], ["子", "Tử (đứa trẻ)"]], ["ガク"], ["まな(ぶ)"],
    "学ぶ（まなぶ）- Học", "Study / Learning",
    "ĐỨA TRẺ (子) ngồi dưới MÁI NHÀ (冖) chăm chỉ HỌC bài.",
    [["大学[だいがく]で日本語[にほんご]を学[まな]びます。", "I study Japanese at university."]]),

  k("校", [["木", "Mộc (cây)"], ["交", "Giao (giao lưu)"]], ["コウ"], [],
    "学校（がっこう）- Trường học", "School",
    "Nơi có nhiều CÂY (木) để mọi người GIAO LƯU (交) - TRƯỜNG HỌC.",
    [["学校[がっこう]は八時[はちじ]に始[はじ]まります。", "School starts at eight o'clock."]]),

  k("先", [["先", "Tiên (trước)"]], ["セン"], ["さき"],
    "先（さき）- Trước, đầu tiên", "Previous / Ahead",
    "Người có đôi chân dài luôn đi TRƯỚC người khác.",
    [["先生[せんせい]に質問[しつもん]しました。", "I asked the teacher a question."]]),

  k("語", [["言", "Ngôn (lời nói)"], ["五", "Ngũ (năm)"], ["口", "Khẩu (miệng)"]], ["ゴ"], ["かた(る)"],
    "語（ご）- Ngôn ngữ, từ", "Language / Word",
    "NĂM (五) cái MIỆNG (口) cùng NÓI (言) - NGÔN NGỮ.",
    [["英語[えいご]と日本語[にほんご]を話[はな]します。", "I speak English and Japanese."]]),

  k("本", [["木", "Mộc (cây)"], ["一", "Nhất (gốc)"]], ["ホン"], ["もと"],
    "本（ほん）- Sách; gốc", "Book / Origin",
    "Nét ngang đánh dấu GỐC cây (木) - nguồn GỐC tri thức là SÁCH.",
    [["面白[おもしろ]い本[ほん]を読[よ]みました。", "I read an interesting book."]]),

  k("国", [["囗", "Vi (biên giới)"], ["玉", "Ngọc"]], ["コク"], ["くに"],
    "国（くに）- Đất nước", "Country",
    "NGỌC quý (玉) được bảo vệ trong BIÊN GIỚI (囗) - ĐẤT NƯỚC.",
    [["日本[にほん]はきれいな国[くに]です。", "Japan is a beautiful country."]]),

  // ===== Đồ vật & khác =====
  k("車", [["車", "Xa (xe)"]], ["シャ"], ["くるま"],
    "車（くるま）- Xe, ô tô", "Car / Vehicle",
    "Hình chiếc XE ngựa nhìn từ trên xuống, nét dọc là trục bánh.",
    [["新[あたら]しい車[くるま]を買[か]いました。", "I bought a new car."]]),

  k("電", [["雨", "Vũ (mưa)"], ["田", "Điền"]], ["デン"], [],
    "電気（でんき）- Điện", "Electricity",
    "Tia SÉT xẹt xuống từ đám MƯA (雨) - dòng ĐIỆN.",
    [["電車[でんしゃ]で会社[かいしゃ]へ行[い]きます。", "I go to the office by train."]]),

  k("何", [["亻", "Nhân (người)"], ["可", "Khả"]], ["カ"], ["なに", "なん"],
    "何（なに）- Cái gì", "What",
    "NGƯỜI (亻) gánh hành lý bị hỏi: đó là CÁI GÌ?",
    [["これは何[なん]ですか。", "What is this?"]]),

  k("右", [["𠂇", "Tay"], ["口", "Khẩu (miệng)"]], ["ウ", "ユウ"], ["みぎ"],
    "右（みぎ）- Bên phải", "Right",
    "Tay PHẢI đưa cơm vào MIỆNG (口).",
    [["次[つぎ]の角[かど]を右[みぎ]に曲[ま]がってください。", "Please turn right at the next corner."]]),

  k("左", [["𠂇", "Tay"], ["工", "Công (dụng cụ)"]], ["サ"], ["ひだり"],
    "左（ひだり）- Bên trái", "Left",
    "Tay TRÁI cầm DỤNG CỤ (工) hỗ trợ tay phải.",
    [["左[ひだり]に郵便局[ゆうびんきょく]があります。", "There is a post office on the left."]])

  ];
})();
