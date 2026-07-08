/* =====================================================
   Kanji Master - Data JLPT N4 (167 chữ)

   QUY TẮC DATA (bắt buộc):
   - meaning ja : nghĩa Tiếng Nhật (kèm gloss tiếng Việt)
   - meaning en : nghĩa Tiếng Anh
   - examples   : câu ví dụ PHẢI có Furigana cú pháp 漢字[かんじ]
   ===================================================== */

window.KANJI_N4 = (function () {
  "use strict";

  /** Helper rút gọn: k(kanji, bộ thủ, âm on, âm kun, nghĩa JA, nghĩa EN, mnemonic, ví dụ) */
  function k(kanji, radicals, on, kun, ja, en, mnemonic, examples) {
    return {
      id: kanji,
      kanji: kanji,
      jlpt: "N4",
      radicals: radicals.map(function (r) { return { radical: r[0], meaning: r[1] }; }),
      onyomi: on,
      kunyomi: kun,
      meaning: { ja: ja, en: en },
      mnemonic: mnemonic,
      examples: examples.map(function (e) { return { jp: e[0], en: e[1] }; })
    };
  }

  return [

  // ===== Xã hội & công việc =====
  k("会", [["𠆢", "Nhân (người)"], ["云", "Vân (nói)"]], ["カイ"], ["あ(う)"],
    "会う（あう）- Gặp gỡ", "Meet / Meeting",
    "NGƯỜI (𠆢) tụ lại NÓI chuyện (云) - cuộc GẶP GỠ.",
    [["明日[あした]友達[ともだち]に会[あ]います。", "I will meet my friend tomorrow."]]),

  k("同", [["冂", "Quynh (khung)"], ["口", "Khẩu (miệng)"]], ["ドウ"], ["おな(じ)"],
    "同じ（おなじ）- Giống nhau", "Same",
    "Mọi MIỆNG (口) trong cùng một KHUNG nói GIỐNG nhau.",
    [["私[わたし]たちは同[おな]じクラスです。", "We are in the same class."]]),

  k("事", [["事", "Sự (việc)"]], ["ジ"], ["こと"],
    "事（こと）- Việc, sự việc", "Thing / Matter",
    "Bàn tay cầm bút ghi chép công VIỆC.",
    [["仕事[しごと]がとても忙[いそが]しいです。", "Work is very busy."]]),

  k("自", [["自", "Tự (bản thân)"]], ["ジ", "シ"], ["みずか(ら)"],
    "自分（じぶん）- Bản thân, tự mình", "Self",
    "Hình cái MŨI - người Nhật chỉ vào mũi khi nói về BẢN THÂN.",
    [["自分[じぶん]でケーキを作[つく]りました。", "I made the cake myself."]]),

  k("社", [["礻", "Kỳ (thần)"], ["土", "Thổ (đất)"]], ["シャ"], ["やしろ"],
    "会社（かいしゃ）- Công ty; đền thờ", "Company / Shrine",
    "THẦN (礻) của vùng ĐẤT (土) - nơi mọi người tụ họp: CÔNG TY.",
    [["会社[かいしゃ]まで電車[でんしゃ]で行[い]きます。", "I go to the company by train."]]),

  k("発", [["癶", "Bát (hai chân)"], ["九", "Cửu"]], ["ハツ"], [],
    "出発（しゅっぱつ）- Phát, xuất phát", "Departure / Emit",
    "Hai chân (癶) đạp mạnh PHÓNG đi - XUẤT PHÁT.",
    [["電車[でんしゃ]は九時[くじ]に出発[しゅっぱつ]します。", "The train departs at nine."]]),

  k("者", [["耂", "Lão (già)"], ["日", "Nhật"]], ["シャ"], ["もの"],
    "者（もの）- Người, kẻ", "Person",
    "NGƯỜI GIÀ (耂) ngồi dưới nắng (日) kể chuyện về những NGƯỜI khác.",
    [["将来[しょうらい]医者[いしゃ]になりたいです。", "I want to become a doctor in the future."]]),

  k("地", [["土", "Thổ (đất)"], ["也", "Dã"]], ["チ", "ジ"], [],
    "地図（ちず）- Đất, mặt đất", "Ground / Earth",
    "ĐẤT (土) trải dài khắp nơi (也) - MẶT ĐẤT.",
    [["地図[ちず]を見[み]てください。", "Please look at the map."]]),

  k("業", [["業", "Nghiệp"]], ["ギョウ"], [],
    "授業（じゅぎょう）- Nghề nghiệp, việc", "Business / Occupation",
    "Cái giá treo chuông phức tạp - công VIỆC đòi hỏi kỹ năng.",
    [["授業[じゅぎょう]は九時[くじ]から始[はじ]まります。", "Class starts at nine."]]),

  k("方", [["方", "Phương (hướng)"]], ["ホウ"], ["かた"],
    "方（かた）- Phương hướng; cách", "Direction / Way / Person",
    "Mũi thuyền rẽ về một PHƯƠNG HƯỚNG.",
    [["この漢字[かんじ]の読[よ]み方[かた]を教[おし]えてください。", "Please teach me how to read this kanji."]]),

  k("新", [["立", "Lập"], ["木", "Mộc"], ["斤", "Cân (rìu)"]], ["シン"], ["あたら(しい)"],
    "新しい（あたらしい）- Mới", "New",
    "Đứng (立) cạnh CÂY (木) vừa đốn bằng RÌU (斤) - gỗ MỚI tinh.",
    [["新[あたら]しい靴[くつ]を買[か]いました。", "I bought new shoes."]]),

  k("場", [["土", "Thổ (đất)"], ["昜", "Dương (nắng)"]], ["ジョウ"], ["ば"],
    "場所（ばしょ）- Nơi chốn", "Place",
    "Khoảnh ĐẤT (土) đầy NẮNG (昜) - NƠI mọi người tụ tập.",
    [["駐車場[ちゅうしゃじょう]はどこですか。", "Where is the parking lot?"]]),

  k("員", [["口", "Khẩu"], ["貝", "Bối (vỏ sò/tiền)"]], ["イン"], [],
    "店員（てんいん）- Nhân viên, thành viên", "Member / Staff",
    "MIỆNG (口) trên TIỀN (貝) - người làm việc vì lương: NHÂN VIÊN.",
    [["兄[あに]は銀行員[ぎんこういん]です。", "My older brother is a bank employee."]]),

  k("立", [["立", "Lập (đứng)"]], ["リツ"], ["た(つ)"],
    "立つ（たつ）- Đứng", "Stand",
    "Hình NGƯỜI ĐỨNG thẳng trên mặt đất.",
    [["ここに立[た]って待[ま]ってください。", "Please stand here and wait."]]),

  k("開", [["門", "Môn (cổng)"], ["開", "Khai"]], ["カイ"], ["あ(ける)", "ひら(く)"],
    "開ける（あける）- Mở", "Open",
    "Hai bàn tay đẩy thanh chắn CỔNG (門) - MỞ ra.",
    [["窓[まど]を開[あ]けてもいいですか。", "May I open the window?"]]),

  k("手", [["手", "Thủ (tay)"]], ["シュ"], ["て"],
    "手（て）- Tay", "Hand",
    "Hình bàn TAY xòe năm ngón.",
    [["食事[しょくじ]の前[まえ]に手[て]を洗[あら]ってください。", "Please wash your hands before meals."]]),

  k("力", [["力", "Lực (sức mạnh)"]], ["リョク", "リキ"], ["ちから"],
    "力（ちから）- Sức mạnh", "Power / Strength",
    "Cánh tay gồng lên đầy SỨC MẠNH.",
    [["彼[かれ]は力[ちから]が強[つよ]いです。", "He is strong."]]),

  k("問", [["門", "Môn (cổng)"], ["口", "Khẩu (miệng)"]], ["モン"], ["と(う)"],
    "質問（しつもん）- Hỏi", "Question / Ask",
    "Đứng trước CỔNG (門) mở MIỆNG (口) HỎI thăm.",
    [["質問[しつもん]がある人[ひと]はいますか。", "Does anyone have a question?"]]),

  k("代", [["亻", "Nhân (người)"], ["弋", "Dặc (cọc)"]], ["ダイ"], ["か(わる)"],
    "時代（じだい）- Thay thế; thời đại", "Substitute / Era / Fee",
    "NGƯỜI (亻) này THAY người khác đứng gác cọc (弋) - THAY THẾ.",
    [["二十代[にじゅうだい]の人[ひと]が多[おお]いです。", "There are many people in their twenties."]]),

  k("明", [["日", "Nhật (mặt trời)"], ["月", "Nguyệt (mặt trăng)"]], ["メイ"], ["あか(るい)"],
    "明るい（あかるい）- Sáng", "Bright",
    "MẶT TRỜI (日) + MẶT TRĂNG (月) cùng chiếu - SÁNG rực.",
    [["この部屋[へや]は明[あか]るいですね。", "This room is bright, isn't it?"]]),

  k("動", [["重", "Trọng (nặng)"], ["力", "Lực (sức)"]], ["ドウ"], ["うご(く)"],
    "動く（うごく）- Chuyển động", "Move",
    "Dùng SỨC (力) đẩy vật NẶNG (重) - làm nó CHUYỂN ĐỘNG.",
    [["車[くるま]が急[きゅう]に動[うご]きません。", "The car suddenly won't move."]]),

  k("京", [["亠", "Đầu"], ["口", "Khẩu"], ["小", "Tiểu"]], ["キョウ"], [],
    "東京（とうきょう）- Kinh đô", "Capital",
    "Tòa tháp cao giữa KINH ĐÔ.",
    [["東京[とうきょう]に住[す]んでいます。", "I live in Tokyo."]]),

  k("目", [["目", "Mục (mắt)"]], ["モク"], ["め"],
    "目（め）- Mắt", "Eye",
    "Hình con MẮT dựng đứng với hai mí.",
    [["パソコンの見過[みす]ぎで目[め]が疲[つか]れました。", "My eyes are tired from looking at the computer too much."]]),

  k("通", [["辶", "Sước (đi)"], ["甬", "Dũng"]], ["ツウ"], ["とお(る)", "かよ(う)"],
    "通う（かよう）- Đi qua, đi lại", "Pass through / Commute",
    "ĐI (辶) qua con đường ống (甬) - THÔNG suốt.",
    [["毎日[まいにち]自転車[じてんしゃ]で学校[がっこう]に通[かよ]っています。", "I commute to school by bicycle every day."]]),

  k("言", [["言", "Ngôn (lời nói)"]], ["ゲン", "ゴン"], ["い(う)"],
    "言う（いう）- Nói", "Say / Word",
    "Những đường sóng âm phát ra từ MIỆNG - LỜI NÓI.",
    [["もう一度[いちど]ゆっくり言[い]ってください。", "Please say it again slowly."]]),

  k("理", [["王", "Vương (ngọc)"], ["里", "Lý (làng)"]], ["リ"], [],
    "料理（りょうり）- Lý lẽ, đạo lý", "Reason / Logic",
    "Mài NGỌC (王) theo vân của nó - làm việc có LÝ LẼ.",
    [["母[はは]の料理[りょうり]が大好[だいす]きです。", "I love my mother's cooking."]]),

  k("体", [["亻", "Nhân (người)"], ["本", "Bản (gốc)"]], ["タイ"], ["からだ"],
    "体（からだ）- Cơ thể", "Body",
    "GỐC (本) của con NGƯỜI (亻) - CƠ THỂ.",
    [["体[からだ]に気[き]をつけてください。", "Please take care of your health."]]),

  k("田", [["田", "Điền (ruộng)"]], ["デン"], ["た"],
    "田んぼ（たんぼ）- Ruộng lúa", "Rice field",
    "Hình thửa RUỘNG chia bốn ô vuông.",
    [["田[た]んぼに水[みず]がいっぱいあります。", "The rice field is full of water."]]),

  k("主", [["丶", "Chủ (ngọn lửa)"], ["王", "Vương"]], ["シュ"], ["おも", "ぬし"],
    "主（おも）- Chủ, chính", "Main / Owner",
    "Ngọn đèn (丶) trên bàn VUA (王) - người CHỦ.",
    [["これが主[おも]な問題[もんだい]です。", "This is the main problem."]]),

  k("題", [["是", "Thị"], ["頁", "Hiệt (trang giấy)"]], ["ダイ"], [],
    "宿題（しゅくだい）- Đề bài, chủ đề", "Topic / Title",
    "TRANG GIẤY (頁) ghi ĐỀ BÀI cần làm.",
    [["宿題[しゅくだい]はもう終[お]わりましたか。", "Have you finished your homework?"]]),

  k("意", [["音", "Âm (âm thanh)"], ["心", "Tâm (tim)"]], ["イ"], [],
    "意味（いみ）- Ý nghĩa, ý định", "Meaning / Intention",
    "ÂM THANH (音) phát ra từ TRÁI TIM (心) - Ý NGHĨA thật.",
    [["この言葉[ことば]の意味[いみ]が分[わ]かりません。", "I don't understand the meaning of this word."]]),

  k("不", [["不", "Bất (không)"]], ["フ", "ブ"], [],
    "不便（ふべん）- Không, bất", "Not / Un-",
    "Con chim bay lên trời KHÔNG quay lại.",
    [["この場所[ばしょ]は少[すこ]し不便[ふべん]です。", "This place is a little inconvenient."]]),

  k("作", [["亻", "Nhân (người)"], ["乍", "Sạ"]], ["サク", "サ"], ["つく(る)"],
    "作る（つくる）- Làm, tạo ra", "Make / Create",
    "NGƯỜI (亻) cưa gỗ (乍) TẠO RA đồ vật.",
    [["週末[しゅうまつ]にケーキを作[つく]りました。", "I made a cake on the weekend."]]),

  k("用", [["用", "Dụng (dùng)"]], ["ヨウ"], ["もち(いる)"],
    "用事（ようじ）- Dùng; việc cần", "Use / Errand",
    "Hàng rào gỗ đóng chắc chắn để SỬ DỤNG lâu dài.",
    [["急[きゅう]な用事[ようじ]ができました。", "Something urgent came up."]]),

  k("度", [["广", "Nghiễm (mái)"], ["又", "Hựu (tay)"]], ["ド"], ["たび"],
    "一度（いちど）- Lần; độ", "Time (occurrence) / Degree",
    "Bàn TAY (又) đo dưới MÁI NHÀ (广) - đo từng LẦN, từng ĐỘ.",
    [["もう一度[いちど]お願[ねが]いします。", "One more time, please."]]),

  k("強", [["弓", "Cung"], ["虫", "Trùng (sâu)"]], ["キョウ"], ["つよ(い)"],
    "強い（つよい）- Mạnh", "Strong",
    "CUNG (弓) bắn được cả con SÂU (虫) cứng - thật MẠNH.",
    [["今日[きょう]は風[かぜ]が強[つよ]いです。", "The wind is strong today."]]),

  k("公", [["八", "Bát (chia)"], ["厶", "Tư (riêng)"]], ["コウ"], [],
    "公園（こうえん）- Công cộng", "Public",
    "CHIA (八) cái RIÊNG (厶) cho mọi người - CÔNG CỘNG.",
    [["毎朝[まいあさ]公園[こうえん]を散歩[さんぽ]します。", "I walk in the park every morning."]]),

  k("持", [["扌", "Thủ (tay)"], ["寺", "Tự (chùa)"]], ["ジ"], ["も(つ)"],
    "持つ（もつ）- Cầm, giữ", "Hold / Have",
    "TAY (扌) CẦM đồ lễ đến CHÙA (寺).",
    [["傘[かさ]を持[も]って行[い]ったほうがいいですよ。", "You should take an umbrella."]]),

  k("野", [["里", "Lý (làng)"], ["予", "Dư"]], ["ヤ"], ["の"],
    "野菜（やさい）- Cánh đồng, hoang dã", "Field / Wild",
    "Vùng đất ngoài LÀNG (里) - CÁNH ĐỒNG hoang.",
    [["野菜[やさい]をたくさん食[た]べましょう。", "Let's eat lots of vegetables."]]),

  k("以", [["以", "Dĩ (từ)"]], ["イ"], [],
    "以上（いじょう）- Từ..., trở lên", "From / Since / Than",
    "Người cầm công cụ bắt đầu TỪ đây.",
    [["十八歳[じゅうはっさい]以上[いじょう]の人[ひと]だけ入[はい]れます。", "Only people 18 and older can enter."]]),

  k("思", [["田", "Điền (ruộng)"], ["心", "Tâm (tim)"]], ["シ"], ["おも(う)"],
    "思う（おもう）- Nghĩ, cảm thấy", "Think / Feel",
    "Bộ óc (田) và TRÁI TIM (心) cùng SUY NGHĨ.",
    [["明日[あした]は雨[あめ]が降[ふ]ると思[おも]います。", "I think it will rain tomorrow."]]),

  k("家", [["宀", "Miên (mái nhà)"], ["豕", "Thỉ (con lợn)"]], ["カ", "ケ"], ["いえ", "や"],
    "家（いえ）- Nhà", "House / Home",
    "MÁI NHÀ (宀) che con LỢN (豕) - NHÀ nông ngày xưa nuôi lợn trong nhà.",
    [["週末[しゅうまつ]は家[いえ]でゆっくり休[やす]みました。", "I rested at home on the weekend."]]),

  // ===== Thế giới & tri thức =====
  k("世", [["世", "Thế (đời)"]], ["セイ", "セ"], ["よ"],
    "世界（せかい）- Thế giới, đời", "World / Generation",
    "Ba số mười (十) nối nhau - ba mươi năm là một ĐỜI người.",
    [["いつか世界[せかい]を旅行[りょこう]したいです。", "Someday I want to travel the world."]]),

  k("多", [["夕", "Tịch (tối)"], ["夕", "Tịch (tối)"]], ["タ"], ["おお(い)"],
    "多い（おおい）- Nhiều", "Many / Much",
    "Hai buổi TỐI (夕) chồng lên nhau - NHIỀU đêm.",
    [["この町[まち]は観光客[かんこうきゃく]が多[おお]いです。", "This town has many tourists."]]),

  k("正", [["一", "Nhất"], ["止", "Chỉ (dừng)"]], ["セイ", "ショウ"], ["ただ(しい)"],
    "正しい（ただしい）- Đúng, chính xác", "Correct / Right",
    "DỪNG (止) đúng vạch (一) - làm điều ĐÚNG.",
    [["正[ただ]しい答[こた]えを選[えら]んでください。", "Please choose the correct answer."]]),

  k("安", [["宀", "Miên (mái nhà)"], ["女", "Nữ (phụ nữ)"]], ["アン"], ["やす(い)"],
    "安い（やすい）- Rẻ; yên tâm", "Cheap / Peaceful",
    "PHỤ NỮ (女) ở trong NHÀ (宀) - cảm giác AN toàn; giá cả AN lành = RẺ.",
    [["この店[みせ]は安[やす]くておいしいです。", "This restaurant is cheap and delicious."]]),

  k("院", [["阝", "Phụ (đồi)"], ["完", "Hoàn"]], ["イン"], [],
    "病院（びょういん）- Viện", "Institution",
    "Tòa nhà HOÀN CHỈNH (完) trên đồi (阝) - bệnh VIỆN, học VIỆN.",
    [["風邪[かぜ]で病院[びょういん]へ行[い]きました。", "I went to the hospital because of a cold."]]),

  k("心", [["心", "Tâm (tim)"]], ["シン"], ["こころ"],
    "心（こころ）- Trái tim, tấm lòng", "Heart / Mind",
    "Hình TRÁI TIM với các nhịp đập.",
    [["心[こころ]から感謝[かんしゃ]しています。", "I am grateful from the bottom of my heart."]]),

  k("界", [["田", "Điền (ruộng)"], ["介", "Giới"]], ["カイ"], [],
    "世界（せかい）- Ranh giới, giới", "World / Boundary",
    "Người đứng GIỮA (介) các thửa RUỘNG (田) - RANH GIỚI.",
    [["世界[せかい]で一番[いちばん]高[たか]い山[やま]はエベレストです。", "The highest mountain in the world is Everest."]]),

  k("教", [["孝", "Hiếu"], ["攵", "Phộc (đánh)"]], ["キョウ"], ["おし(える)"],
    "教える（おしえる）- Dạy", "Teach",
    "Thầy nghiêm khắc (攵) DẠY trò về chữ HIẾU (孝).",
    [["田中[たなか]先生[せんせい]は日本語[にほんご]を教[おし]えています。", "Mr. Tanaka teaches Japanese."]]),

  k("文", [["文", "Văn (chữ)"]], ["ブン", "モン"], ["ふみ"],
    "文（ぶん）- Văn, câu chữ", "Sentence / Writing",
    "Hình người xăm mình - hoa VĂN, chữ nghĩa.",
    [["短[みじか]い文[ぶん]を三[みっ]つ書[か]いてください。", "Please write three short sentences."]]),

  k("元", [["二", "Nhị"], ["儿", "Nhân (chân)"]], ["ゲン", "ガン"], ["もと"],
    "元気（げんき）- Gốc, nguồn; khỏe", "Origin / Healthy",
    "Con người với cái đầu to - NGUỒN GỐC của sức khỏe.",
    [["お元気[げんき]ですか。", "How are you?"]]),

  k("重", [["重", "Trọng (nặng)"]], ["ジュウ"], ["おも(い)", "かさ(ねる)"],
    "重い（おもい）- Nặng", "Heavy",
    "Người gánh hành lý chất chồng - thật NẶNG.",
    [["このかばんはとても重[おも]いです。", "This bag is very heavy."]]),

  k("近", [["辶", "Sước (đi)"], ["斤", "Cân (rìu)"]], ["キン"], ["ちか(い)"],
    "近い（ちかい）- Gần", "Near",
    "ĐI (辶) một nhát RÌU (斤) là tới - GẦN lắm.",
    [["駅[えき]は家[いえ]から近[ちか]いです。", "The station is near my house."]]),

  k("考", [["耂", "Lão (già)"], ["丂", "Khảo"]], ["コウ"], ["かんが(える)"],
    "考える（かんがえる）- Suy nghĩ", "Think / Consider",
    "NGƯỜI GIÀ (耂) chống gậy SUY NGHĨ sâu xa.",
    [["よく考[かんが]えてから決[き]めてください。", "Please think carefully before deciding."]]),

  k("画", [["一", "Nhất"], ["田", "Điền"], ["凵", "Khảm"]], ["ガ", "カク"], [],
    "映画（えいが）- Bức vẽ; hoạch định", "Picture / Stroke",
    "Cây bút vẽ RUỘNG (田) trong khung tranh - BỨC VẼ.",
    [["週末[しゅうまつ]に映画[えいが]を見[み]に行[い]きましょう。", "Let's go see a movie on the weekend."]]),

  k("海", [["氵", "Thủy (nước)"], ["毎", "Mỗi"]], ["カイ"], ["うみ"],
    "海（うみ）- Biển", "Sea / Ocean",
    "NƯỚC (氵) có ở MỌI nơi (毎) - BIỂN mênh mông.",
    [["夏休[なつやす]みに海[うみ]で泳[およ]ぎたいです。", "I want to swim in the sea during summer vacation."]]),

  k("売", [["士", "Sĩ"], ["冖", "Mịch"], ["儿", "Nhân"]], ["バイ"], ["う(る)"],
    "売る（うる）- Bán", "Sell",
    "Anh SĨ (士) đội mũ đứng BÁN hàng.",
    [["あの店[みせ]で新鮮[しんせん]な果物[くだもの]を売[う]っています。", "That shop sells fresh fruit."]]),

  k("知", [["矢", "Thỉ (mũi tên)"], ["口", "Khẩu (miệng)"]], ["チ"], ["し(る)"],
    "知る（しる）- Biết", "Know",
    "Lời nói (口) nhanh như MŨI TÊN (矢) - người HIỂU BIẾT trả lời ngay.",
    [["そのニュースを知[し]りませんでした。", "I didn't know that news."]]),

  k("道", [["辶", "Sước (đi)"], ["首", "Thủ (đầu)"]], ["ドウ"], ["みち"],
    "道（みち）- Con đường", "Road / Way",
    "Cái ĐẦU (首) dẫn bước chân ĐI (辶) - CON ĐƯỜNG.",
    [["この道[みち]をまっすぐ行[い]ってください。", "Please go straight along this road."]]),

  k("集", [["隹", "Chuy (chim)"], ["木", "Mộc (cây)"]], ["シュウ"], ["あつ(まる)"],
    "集まる（あつまる）- Tập hợp", "Gather / Collect",
    "Đàn CHIM (隹) đậu trên CÂY (木) - TẬP HỢP lại.",
    [["八時[はちじ]に駅[えき]の前[まえ]に集[あつ]まりましょう。", "Let's gather in front of the station at eight."]]),

  k("別", [["口", "Khẩu"], ["刂", "Đao (dao)"]], ["ベツ"], ["わか(れる)"],
    "別（べつ）- Khác; chia tay", "Separate / Different",
    "Dùng DAO (刂) CHIA xương thịt - TÁCH BIỆT.",
    [["別[べつ]の色[いろ]はありますか。", "Do you have a different color?"]]),

  k("物", [["牛", "Ngưu (bò)"], ["勿", "Vật"]], ["ブツ", "モツ"], ["もの"],
    "物（もの）- Đồ vật", "Thing / Object",
    "Con BÒ (牛) là ĐỒ VẬT quý giá nhất của nhà nông.",
    [["デパートへ買[か]い物[もの]に行[い]きます。", "I'm going shopping at the department store."]]),

  k("使", [["亻", "Nhân (người)"], ["吏", "Lại (quan)"]], ["シ"], ["つか(う)"],
    "使う（つかう）- Sử dụng", "Use",
    "NGƯỜI (亻) sai khiến QUAN LẠI (吏) - SỬ DỤNG người khác.",
    [["このパソコンを使[つか]ってもいいですか。", "May I use this computer?"]]),

  k("品", [["口", "Khẩu"], ["口", "Khẩu"], ["口", "Khẩu"]], ["ヒン"], ["しな"],
    "品物（しなもの）- Hàng hóa, phẩm chất", "Goods / Quality",
    "Ba cái hộp (口) xếp chồng - HÀNG HÓA trong kho.",
    [["この店[みせ]の品物[しなもの]は質[しつ]がいいです。", "The goods in this shop are of good quality."]]),

  k("計", [["言", "Ngôn (lời)"], ["十", "Thập (mười)"]], ["ケイ"], ["はか(る)"],
    "時計（とけい）- Tính toán, đo", "Measure / Plan",
    "NÓI (言) đến MƯỜI (十) - ĐẾM và TÍNH TOÁN.",
    [["時計[とけい]が止[と]まってしまいました。", "My watch has stopped."]]),

  k("死", [["歹", "Ngạt (xương)"], ["匕", "Chủy (người cúi)"]], ["シ"], ["し(ぬ)"],
    "死ぬ（しぬ）- Chết", "Die / Death",
    "Người cúi xuống (匕) bên bộ XƯƠNG (歹) - cái CHẾT.",
    [["ペットの犬[いぬ]が死[し]んで、とても悲[かな]しいです。", "My pet dog died, and I am very sad."]]),

  k("特", [["牛", "Ngưu (bò)"], ["寺", "Tự (chùa)"]], ["トク"], [],
    "特に（とくに）- Đặc biệt", "Special",
    "Con BÒ (牛) của CHÙA (寺) - con vật ĐẶC BIỆT.",
    [["特[とく]に問題[もんだい]はありません。", "There is no particular problem."]]),

  k("私", [["禾", "Hòa (lúa)"], ["厶", "Tư (riêng)"]], ["シ"], ["わたし"],
    "私（わたし）- Tôi; riêng tư", "I / Private",
    "Bó LÚA (禾) của RIÊNG (厶) mình - cái TÔI.",
    [["私[わたし]はベトナム人[じん]です。", "I am Vietnamese."]]),

  k("始", [["女", "Nữ (phụ nữ)"], ["台", "Đài"]], ["シ"], ["はじ(める)"],
    "始まる（はじまる）- Bắt đầu", "Begin / Start",
    "Người MẸ (女) là nơi BẮT ĐẦU của sự sống.",
    [["映画[えいが]がもうすぐ始[はじ]まります。", "The movie will start soon."]]),

  k("朝", [["龺", "Mặt trời mọc"], ["月", "Nguyệt"]], ["チョウ"], ["あさ"],
    "朝（あさ）- Buổi sáng", "Morning",
    "Mặt trời mọc khi MẶT TRĂNG (月) còn chưa lặn - SÁNG SỚM.",
    [["毎朝[まいあさ]六時[ろくじ]に起[お]きます。", "I wake up at six every morning."]]),

  k("運", [["辶", "Sước (đi)"], ["軍", "Quân (quân đội)"]], ["ウン"], ["はこ(ぶ)"],
    "運ぶ（はこぶ）- Vận chuyển; vận may", "Carry / Luck",
    "QUÂN ĐỘI (軍) DI CHUYỂN (辶) - VẬN CHUYỂN hàng hóa.",
    [["この荷物[にもつ]を二階[にかい]に運[はこ]んでください。", "Please carry this luggage to the second floor."]]),

  k("終", [["糸", "Mịch (sợi)"], ["冬", "Đông (mùa đông)"]], ["シュウ"], ["お(わる)"],
    "終わる（おわる）- Kết thúc", "End / Finish",
    "SỢI CHỈ (糸) dệt đến MÙA ĐÔNG (冬) là XONG.",
    [["仕事[しごと]は五時[ごじ]に終[お]わります。", "Work ends at five."]]),

  k("台", [["厶", "Tư"], ["口", "Khẩu"]], ["ダイ", "タイ"], [],
    "台（だい）- Đài, bệ; cái (đếm máy móc)", "Platform / Counter for machines",
    "Cái BỆ vững chắc để đặt đồ vật.",
    [["家[いえ]に車[くるま]が二台[にだい]あります。", "There are two cars at my house."]]),

  k("広", [["广", "Nghiễm (mái)"], ["厶", "Tư"]], ["コウ"], ["ひろ(い)"],
    "広い（ひろい）- Rộng", "Wide / Spacious",
    "MÁI NHÀ (广) che khoảng không RỘNG LỚN.",
    [["この公園[こうえん]はとても広[ひろ]いですね。", "This park is very spacious."]]),

  k("住", [["亻", "Nhân (người)"], ["主", "Chủ"]], ["ジュウ"], ["す(む)"],
    "住む（すむ）- Sống, cư trú", "Live / Reside",
    "NGƯỜI (亻) làm CHỦ (主) một nơi - SINH SỐNG ở đó.",
    [["どこに住[す]んでいますか。", "Where do you live?"]]),

  k("無", [["無", "Vô (không)"]], ["ム", "ブ"], ["な(い)"],
    "無理（むり）- Không có, vô", "Nothing / Without",
    "Đống củi cháy hết - KHÔNG còn gì.",
    [["無理[むり]をしないでください。", "Please don't overdo it."]]),

  k("真", [["十", "Thập"], ["具", "Cụ"]], ["シン"], ["ま"],
    "写真（しゃしん）- Thật, chân thực", "True / Real",
    "Vật được nhìn THẤU từ trên xuống - sự THẬT.",
    [["ここで写真[しゃしん]を撮[と]ってもいいですか。", "May I take a photo here?"]]),

  k("有", [["𠂇", "Tay"], ["月", "Nguyệt (thịt)"]], ["ユウ"], ["あ(る)"],
    "有名（ゆうめい）- Có, sở hữu", "Have / Exist",
    "TAY (𠂇) cầm miếng THỊT (月) - CÓ của cải.",
    [["彼[かれ]は有名[ゆうめい]な歌手[かしゅ]です。", "He is a famous singer."]]),

  k("口", [["口", "Khẩu (miệng)"]], ["コウ"], ["くち"],
    "口（くち）- Miệng", "Mouth",
    "Hình cái MIỆNG mở vuông.",
    [["口[くち]を大[おお]きく開[あ]けてください。", "Please open your mouth wide."]]),

  // ===== Địa điểm & di chuyển =====
  k("少", [["小", "Tiểu (nhỏ)"], ["丿", "Phiệt"]], ["ショウ"], ["すく(ない)", "すこ(し)"],
    "少ない（すくない）- Ít", "Few / Little",
    "Cái NHỎ (小) bị cắt bớt một nét - còn ÍT hơn nữa.",
    [["今月[こんげつ]はお金[かね]が少[すく]ないです。", "I have little money this month."]]),

  k("町", [["田", "Điền (ruộng)"], ["丁", "Đinh"]], ["チョウ"], ["まち"],
    "町（まち）- Thị trấn, phố", "Town",
    "RUỘNG (田) chia thành từng khu (丁) - THỊ TRẤN mọc lên.",
    [["静[しず]かな町[まち]に住[す]みたいです。", "I want to live in a quiet town."]]),

  k("料", [["米", "Mễ (gạo)"], ["斗", "Đấu (cái đấu)"]], ["リョウ"], [],
    "料理（りょうり）- Nguyên liệu; phí", "Ingredients / Fee",
    "Đong GẠO (米) bằng ĐẤU (斗) - NGUYÊN LIỆU nấu ăn.",
    [["日本[にほん]料理[りょうり]を作[つく]るのが好[す]きです。", "I like cooking Japanese food."]]),

  k("工", [["工", "Công (dụng cụ)"]], ["コウ", "ク"], [],
    "工場（こうじょう）- Công, thợ", "Craft / Construction",
    "Hình cái thước thợ - CÔNG việc xây dựng.",
    [["兄[あに]は自動車[じどうしゃ]の工場[こうじょう]で働[はたら]いています。", "My brother works at a car factory."]]),

  k("建", [["聿", "Duật (bút)"], ["廴", "Dẫn (đi dài)"]], ["ケン"], ["た(てる)"],
    "建てる（たてる）- Xây dựng", "Build",
    "Cầm BÚT (聿) vẽ bản thiết kế dài (廴) - XÂY nhà.",
    [["駅[えき]の近[ちか]くに新[あたら]しいビルを建[た]てています。", "They are building a new building near the station."]]),

  k("空", [["穴", "Huyệt (hang)"], ["工", "Công"]], ["クウ"], ["そら", "あ(く)", "から"],
    "空（そら）- Bầu trời; trống rỗng", "Sky / Empty",
    "Cái HANG (穴) được đục (工) - khoảng TRỐNG như BẦU TRỜI.",
    [["今日[きょう]は空[そら]がきれいですね。", "The sky is beautiful today."]]),

  k("急", [["急", "Cấp"], ["心", "Tâm (tim)"]], ["キュウ"], ["いそ(ぐ)"],
    "急ぐ（いそぐ）- Vội, gấp", "Hurry / Urgent",
    "TRÁI TIM (心) đập dồn dập - VỘI VÀNG.",
    [["時間[じかん]がないので、急[いそ]いでください。", "There's no time, so please hurry."]]),

  k("止", [["止", "Chỉ (dừng)"]], ["シ"], ["と(まる)", "と(める)"],
    "止まる（とまる）- Dừng lại", "Stop",
    "Hình bàn chân DỪNG lại.",
    [["赤信号[あかしんごう]では止[と]まらなければなりません。", "You must stop at a red light."]]),

  k("送", [["辶", "Sước (đi)"], ["关", "Quan"]], ["ソウ"], ["おく(る)"],
    "送る（おくる）- Gửi, tiễn", "Send / See off",
    "ĐI (辶) theo món quà - GỬI và TIỄN đưa.",
    [["国[くに]の家族[かぞく]に荷物[にもつ]を送[おく]りたいです。", "I want to send a package to my family back home."]]),

  k("切", [["七", "Thất"], ["刀", "Đao (dao)"]], ["セツ"], ["き(る)"],
    "切る（きる）- Cắt", "Cut",
    "DAO (刀) CẮT làm bảy (七) mảnh.",
    [["野菜[やさい]を小[ちい]さく切[き]ってください。", "Please cut the vegetables into small pieces."]]),

  k("転", [["車", "Xa (xe)"], ["云", "Vân"]], ["テン"], ["ころ(ぶ)"],
    "自転車（じてんしゃ）- Quay, lăn; ngã", "Rotate / Fall",
    "Bánh XE (車) QUAY tròn.",
    [["自転車[じてんしゃ]に乗[の]れますか。", "Can you ride a bicycle?"]]),

  k("研", [["石", "Thạch (đá)"], ["开", "Khai"]], ["ケン"], ["と(ぐ)"],
    "研究（けんきゅう）- Mài giũa, nghiên", "Polish / Research",
    "MÀI ĐÁ (石) cho phẳng - MÀI GIŨA kiến thức.",
    [["大学[だいがく]で日本[にほん]の文化[ぶんか]を研究[けんきゅう]しています。", "I research Japanese culture at university."]]),

  k("足", [["口", "Khẩu"], ["止", "Chỉ (chân)"]], ["ソク"], ["あし", "た(りる)"],
    "足（あし）- Chân; đủ", "Foot / Leg / Enough",
    "Hình đầu gối và bàn CHÂN.",
    [["たくさん歩[ある]いたので、足[あし]が痛[いた]いです。", "My feet hurt because I walked a lot."]]),

  k("究", [["穴", "Huyệt (hang)"], ["九", "Cửu (chín)"]], ["キュウ"], [],
    "研究（けんきゅう）- Nghiên cứu tận cùng", "Research / Investigate",
    "Đào HANG (穴) đến CHÍN (九) tầng - NGHIÊN CỨU tận gốc.",
    [["研究[けんきゅう]の結果[けっか]を発表[はっぴょう]します。", "I will present the research results."]]),

  k("楽", [["白", "Bạch"], ["木", "Mộc"]], ["ガク", "ラク"], ["たの(しい)"],
    "楽しい（たのしい）- Vui; âm nhạc", "Fun / Music / Easy",
    "Cái trống trắng (白) trên giá GỖ (木) - ÂM NHẠC VUI vẻ.",
    [["家族[かぞく]との旅行[りょこう]はとても楽[たの]しかったです。", "The trip with my family was very fun."]]),

  k("起", [["走", "Tẩu (chạy)"], ["己", "Kỷ (mình)"]], ["キ"], ["お(きる)", "お(こす)"],
    "起きる（おきる）- Thức dậy", "Wake up / Occur",
    "Tự MÌNH (己) bật dậy CHẠY (走) - THỨC DẬY.",
    [["毎朝[まいあさ]七時[しちじ]に起[お]きます。", "I wake up at seven every morning."]]),

  k("着", [["羊", "Dương (cừu)"], ["目", "Mục (mắt)"]], ["チャク"], ["き(る)", "つ(く)"],
    "着る（きる）- Mặc; đến nơi", "Wear / Arrive",
    "MẶC áo lông CỪU (羊) ấm áp khi ĐẾN nơi.",
    [["駅[えき]に着[つ]いたら電話[でんわ]してください。", "Please call me when you arrive at the station."]]),

  k("店", [["广", "Nghiễm (mái)"], ["占", "Chiêm"]], ["テン"], ["みせ"],
    "店（みせ）- Cửa hàng", "Shop / Store",
    "MÁI NHÀ (广) chiếm (占) chỗ mặt đường - CỬA HÀNG.",
    [["あの店[みせ]のラーメンは有名[ゆうめい]です。", "That shop's ramen is famous."]]),

  k("病", [["疒", "Nạch (bệnh)"], ["丙", "Bính"]], ["ビョウ"], ["やまい"],
    "病気（びょうき）- Bệnh", "Illness / Sick",
    "Người nằm trên giường (疒) - BỆNH tật.",
    [["病気[びょうき]で三日[みっか]学校[がっこう]を休[やす]みました。", "I was absent from school for three days due to illness."]]),

  k("質", [["斤", "Cân (rìu)"], ["貝", "Bối (tiền)"]], ["シツ"], [],
    "質問（しつもん）- Chất lượng; hỏi", "Quality / Question",
    "Cân (斤) TIỀN (貝) để định giá - CHẤT LƯỢNG.",
    [["先生[せんせい]、質問[しつもん]があります。", "Teacher, I have a question."]]),

  // ===== Học tập & thi cử =====
  k("待", [["彳", "Xích (bước)"], ["寺", "Tự (chùa)"]], ["タイ"], ["ま(つ)"],
    "待つ（まつ）- Đợi", "Wait",
    "Đứng BƯỚC chân (彳) trước CHÙA (寺) CHỜ ĐỢI.",
    [["ここで少[すこ]し待[ま]っていてください。", "Please wait here for a moment."]]),

  k("試", [["言", "Ngôn (lời)"], ["式", "Thức"]], ["シ"], ["ため(す)"],
    "試験（しけん）- Thử, thi", "Test / Try",
    "Dùng LỜI (言) theo đúng CÔNG THỨC (式) - bài THI.",
    [["来週[らいしゅう]日本語[にほんご]の試験[しけん]があります。", "There is a Japanese exam next week."]]),

  k("族", [["方", "Phương"], ["矢", "Thỉ (mũi tên)"]], ["ゾク"], [],
    "家族（かぞく）- Tộc, gia tộc", "Family / Tribe",
    "Cả nhà đứng dưới lá cờ (方) cầm TÊN (矢) - GIA TỘC.",
    [["週末[しゅうまつ]に家族[かぞく]と旅行[りょこう]します。", "I travel with my family on weekends."]]),

  k("銀", [["金", "Kim (vàng)"], ["艮", "Cấn"]], ["ギン"], [],
    "銀行（ぎんこう）- Bạc", "Silver",
    "KIM LOẠI (金) trắng sáng - BẠC.",
    [["銀行[ぎんこう]でお金[かね]を下[お]ろします。", "I withdraw money at the bank."]]),

  k("早", [["日", "Nhật (mặt trời)"], ["十", "Thập"]], ["ソウ"], ["はや(い)"],
    "早い（はやい）- Sớm", "Early",
    "MẶT TRỜI (日) mới lên đến ngọn cây (十) - còn SỚM.",
    [["明日[あした]は早[はや]く起[お]きなければなりません。", "I have to wake up early tomorrow."]]),

  k("映", [["日", "Nhật (mặt trời)"], ["央", "Ương (trung tâm)"]], ["エイ"], ["うつ(る)"],
    "映画（えいが）- Chiếu, phản chiếu", "Reflect / Projection",
    "ÁNH SÁNG (日) chiếu vào TRUNG TÂM (央) màn hình - CHIẾU phim.",
    [["映画館[えいがかん]で映画[えいが]を見[み]ました。", "I watched a movie at the cinema."]]),

  k("親", [["立", "Lập"], ["木", "Mộc"], ["見", "Kiến (nhìn)"]], ["シン"], ["おや", "した(しい)"],
    "親（おや）- Cha mẹ; thân thiết", "Parent / Intimate",
    "ĐỨNG (立) trên CÂY (木) NHÌN (見) con về - CHA MẸ.",
    [["国[くに]の親[おや]に手紙[てがみ]を書[か]きました。", "I wrote a letter to my parents back home."]]),

  k("験", [["馬", "Mã (ngựa)"], ["㑒", "Kiểm"]], ["ケン"], [],
    "経験（けいけん）- Thử nghiệm", "Test / Experience",
    "KIỂM TRA (㑒) con NGỰA (馬) trước khi mua - THỬ NGHIỆM.",
    [["試験[しけん]に合格[ごうかく]しました。", "I passed the exam."]]),

  k("英", [["艹", "Thảo (cỏ)"], ["央", "Ương (trung tâm)"]], ["エイ"], [],
    "英語（えいご）- Anh; tinh hoa", "England / Excellent",
    "Bông hoa (艹) đẹp nhất ở TRUNG TÂM (央) - TINH HOA; nước ANH.",
    [["英語[えいご]と日本語[にほんご]が話[はな]せます。", "I can speak English and Japanese."]]),

  k("医", [["匚", "Phương (hộp)"], ["矢", "Thỉ (mũi tên)"]], ["イ"], [],
    "医者（いしゃ）- Y, chữa bệnh", "Medicine / Doctor",
    "Hộp (匚) đựng MŨI TÊN (矢) y cụ - nghề Y.",
    [["熱[ねつ]があるなら、医者[いしゃ]に行[い]ったほうがいいですよ。", "If you have a fever, you should see a doctor."]]),

  k("仕", [["亻", "Nhân (người)"], ["士", "Sĩ"]], ["シ"], ["つか(える)"],
    "仕事（しごと）- Làm việc, phụng sự", "Work / Serve",
    "NGƯỜI (亻) có học (士) đi LÀM VIỆC.",
    [["仕事[しごと]は何時[なんじ]に終[お]わりますか。", "What time does your work end?"]]),

  k("去", [["土", "Thổ (đất)"], ["厶", "Tư"]], ["キョ", "コ"], ["さ(る)"],
    "去年（きょねん）- Rời đi; đã qua", "Leave / Past",
    "Rời khỏi mảnh ĐẤT (土) của mình - RA ĐI.",
    [["去年[きょねん]の夏[なつ]、日本[にほん]へ行[い]きました。", "Last summer, I went to Japan."]]),

  k("味", [["口", "Khẩu (miệng)"], ["未", "Vị (chưa)"]], ["ミ"], ["あじ"],
    "味（あじ）- Vị, mùi vị", "Taste / Flavor",
    "MIỆNG (口) nếm thử cái CHƯA (未) biết - MÙI VỊ.",
    [["このスープは味[あじ]が薄[うす]いです。", "This soup has a weak flavor."]]),

  k("写", [["冖", "Mịch (nắp)"], ["与", "Dữ"]], ["シャ"], ["うつ(す)"],
    "写真（しゃしん）- Sao chép, chụp", "Copy / Photograph",
    "Đặt giấy dưới NẮP (冖) để SAO CHÉP lại.",
    [["黒板[こくばん]の字[じ]をノートに写[うつ]してください。", "Please copy the writing on the blackboard into your notebook."]]),

  k("字", [["宀", "Miên (mái nhà)"], ["子", "Tử (đứa trẻ)"]], ["ジ"], [],
    "漢字（かんじ）- Chữ viết", "Character / Letter",
    "ĐỨA TRẺ (子) học CHỮ dưới MÁI NHÀ (宀).",
    [["もっと大[おお]きい字[じ]で書[か]いてください。", "Please write in bigger letters."]]),

  k("答", [["竹", "Trúc (tre)"], ["合", "Hợp"]], ["トウ"], ["こた(える)"],
    "答える（こたえる）- Trả lời", "Answer",
    "Thẻ TRE (竹) KHỚP (合) với câu hỏi - CÂU TRẢ LỜI.",
    [["次[つぎ]の質問[しつもん]に答[こた]えてください。", "Please answer the next question."]]),

  k("夜", [["亠", "Đầu"], ["亻", "Nhân"], ["夕", "Tịch (tối)"]], ["ヤ"], ["よる"],
    "夜（よる）- Ban đêm", "Night",
    "NGƯỜI (亻) nghỉ dưới mái nhà lúc TỐI (夕) - BAN ĐÊM.",
    [["昨日[きのう]は夜[よる]遅[おそ]くまで勉強[べんきょう]しました。", "Yesterday I studied until late at night."]]),

  k("音", [["立", "Lập (đứng)"], ["日", "Nhật"]], ["オン"], ["おと"],
    "音楽（おんがく）- Âm thanh", "Sound",
    "Lời nói ĐỨNG (立) lại trong không khí - ÂM THANH.",
    [["隣[となり]の部屋[へや]から変[へん]な音[おと]が聞[き]こえます。", "I hear a strange sound from the next room."]]),

  k("注", [["氵", "Thủy (nước)"], ["主", "Chủ"]], ["チュウ"], ["そそ(ぐ)"],
    "注意（ちゅうい）- Rót; chú ý", "Pour / Attention",
    "CHỦ (主) nhà RÓT NƯỚC (氵) cẩn thận - CHÚ Ý.",
    [["道[みち]を渡[わた]るとき、車[くるま]に注意[ちゅうい]してください。", "Be careful of cars when crossing the street."]]),

  k("帰", [["リ", "Đao"], ["帚", "Trửu (chổi)"]], ["キ"], ["かえ(る)"],
    "帰る（かえる）- Trở về", "Return / Go home",
    "Cầm CHỔI (帚) quét dọn - TRỞ VỀ nhà mình.",
    [["今日[きょう]は何時[なんじ]に家[いえ]へ帰[かえ]りますか。", "What time will you go home today?"]]),

  // ===== Sinh hoạt hàng ngày =====
  k("古", [["十", "Thập (mười)"], ["口", "Khẩu (miệng)"]], ["コ"], ["ふる(い)"],
    "古い（ふるい）- Cũ", "Old",
    "Câu chuyện qua MƯỜI (十) đời MIỆNG (口) kể - chuyện CŨ.",
    [["この寺[てら]はとても古[ふる]いです。", "This temple is very old."]]),

  k("歌", [["可", "Khả"], ["欠", "Khiếm (há miệng)"]], ["カ"], ["うた", "うた(う)"],
    "歌（うた）- Bài hát", "Song / Sing",
    "HÁ MIỆNG (欠) ngân nga - HÁT.",
    [["カラオケで日本[にほん]の歌[うた]を歌[うた]いました。", "I sang Japanese songs at karaoke."]]),

  k("買", [["罒", "Võng (lưới)"], ["貝", "Bối (tiền)"]], ["バイ"], ["か(う)"],
    "買う（かう）- Mua", "Buy",
    "Cầm LƯỚI (罒) đựng TIỀN (貝) đi MUA sắm.",
    [["新[あたら]しい服[ふく]を買[か]いたいです。", "I want to buy new clothes."]]),

  k("悪", [["亜", "Á"], ["心", "Tâm (tim)"]], ["アク"], ["わる(い)"],
    "悪い（わるい）- Xấu, tệ", "Bad",
    "TRÁI TIM (心) méo mó (亜) - điều XẤU.",
    [["今日[きょう]は天気[てんき]が悪[わる]いですね。", "The weather is bad today."]]),

  k("図", [["囗", "Vi (khung)"], ["ツ", "Điểm"]], ["ズ", "ト"], [],
    "地図（ちず）- Bản vẽ, sơ đồ", "Diagram / Map",
    "Các điểm đánh dấu trong KHUNG (囗) - BẢN ĐỒ.",
    [["図書館[としょかん]で本[ほん]を三冊[さんさつ]借[か]りました。", "I borrowed three books from the library."]]),

  k("週", [["辶", "Sước (đi)"], ["周", "Chu (vòng)"]], ["シュウ"], [],
    "週末（しゅうまつ）- Tuần", "Week",
    "ĐI (辶) một VÒNG (周) bảy ngày - một TUẦN.",
    [["来週[らいしゅう]の月曜日[げつようび]にテストがあります。", "There is a test next Monday."]]),

  k("室", [["宀", "Miên (mái nhà)"], ["至", "Chí (đến)"]], ["シツ"], [],
    "教室（きょうしつ）- Phòng", "Room",
    "ĐẾN (至) nơi có MÁI NHÀ (宀) - căn PHÒNG.",
    [["教室[きょうしつ]に誰[だれ]もいません。", "There is no one in the classroom."]]),

  k("歩", [["止", "Chỉ (chân)"], ["少", "Thiểu"]], ["ホ"], ["ある(く)"],
    "歩く（あるく）- Đi bộ", "Walk",
    "Hai bàn CHÂN (止) bước từng bước NHỎ (少) - ĐI BỘ.",
    [["駅[えき]まで歩[ある]いて十分[じゅっぷん]かかります。", "It takes ten minutes to walk to the station."]]),

  k("風", [["几", "Kỷ"], ["虫", "Trùng (sâu)"]], ["フウ"], ["かぜ"],
    "風（かぜ）- Gió", "Wind",
    "GIÓ thổi cánh buồm (几) mang côn TRÙNG (虫) bay xa.",
    [["台風[たいふう]で風[かぜ]がとても強[つよ]いです。", "The wind is very strong because of the typhoon."]]),

  k("紙", [["糸", "Mịch (sợi)"], ["氏", "Thị"]], ["シ"], ["かみ"],
    "紙（かみ）- Giấy", "Paper",
    "SỢI (糸) cây nghiền mỏng - tờ GIẤY.",
    [["この紙[かみ]に名前[なまえ]と住所[じゅうしょ]を書[か]いてください。", "Please write your name and address on this paper."]]),

  // ===== Màu sắc & thiên nhiên =====
  k("黒", [["里", "Lý"], ["灬", "Hỏa (lửa)"]], ["コク"], ["くろ(い)"],
    "黒い（くろい）- Màu đen", "Black",
    "LỬA (灬) hun khói đen bám đầy - màu ĐEN.",
    [["黒[くろ]い猫[ねこ]が屋根[やね]の上[うえ]にいます。", "There is a black cat on the roof."]]),

  k("花", [["艹", "Thảo (cỏ)"], ["化", "Hóa (biến đổi)"]], ["カ"], ["はな"],
    "花（はな）- Hoa", "Flower",
    "CỎ (艹) BIẾN HÓA (化) thành bông HOA.",
    [["春[はる]になると、桜[さくら]の花[はな]が咲[さ]きます。", "When spring comes, cherry blossoms bloom."]]),

  k("春", [["三", "Tam"], ["人", "Nhân"], ["日", "Nhật"]], ["シュン"], ["はる"],
    "春（はる）- Mùa xuân", "Spring",
    "MẶT TRỜI (日) sưởi ấm cây cỏ đâm chồi - MÙA XUÂN.",
    [["春[はる]になると暖[あたた]かくなります。", "It gets warm when spring comes."]]),

  k("赤", [["土", "Thổ (đất)"], ["灬", "Hỏa (lửa)"]], ["セキ"], ["あか(い)"],
    "赤い（あかい）- Màu đỏ", "Red",
    "ĐẤT (土) nung trong LỬA (灬) - màu ĐỎ rực.",
    [["赤[あか]いりんごを三[みっ]つ買[か]いました。", "I bought three red apples."]]),

  k("青", [["龶", "Sinh (mọc)"], ["月", "Nguyệt"]], ["セイ"], ["あお(い)"],
    "青い（あおい）- Màu xanh", "Blue / Green",
    "Cây non mọc (龶) dưới TRĂNG (月) - màu XANH non.",
    [["今日[きょう]は空[そら]が青[あお]くてきれいです。", "The sky is blue and beautiful today."]]),

  k("館", [["食", "Thực (ăn)"], ["官", "Quan"]], ["カン"], [],
    "図書館（としょかん）- Tòa nhà lớn", "Large building / Hall",
    "Nơi QUAN (官) khách được mời ĂN (食) - TÒA NHÀ lớn.",
    [["図書館[としょかん]は九時[くじ]に開[あ]きます。", "The library opens at nine."]]),

  k("屋", [["尸", "Thi (mái)"], ["至", "Chí (đến)"]], ["オク"], ["や"],
    "本屋（ほんや）- Nhà, tiệm", "Shop / House",
    "ĐẾN (至) dưới MÁI (尸) - TIỆM, NHÀ.",
    [["本屋[ほんや]で雑誌[ざっし]を買[か]いました。", "I bought a magazine at the bookstore."]]),

  k("色", [["色", "Sắc (màu)"]], ["ショク"], ["いろ"],
    "色（いろ）- Màu sắc", "Color",
    "Người cúi nhìn tấm vải nhuộm - MÀU SẮC.",
    [["どんな色[いろ]が一番[いちばん]好[す]きですか。", "What color do you like best?"]]),

  k("走", [["土", "Thổ"], ["止", "Chỉ (chân)"]], ["ソウ"], ["はし(る)"],
    "走る（はしる）- Chạy", "Run",
    "CHÂN (止) đạp ĐẤT (土) phóng đi - CHẠY.",
    [["毎朝[まいあさ]公園[こうえん]を三十分[さんじゅっぷん]走[はし]ります。", "I run in the park for thirty minutes every morning."]]),

  k("秋", [["禾", "Hòa (lúa)"], ["火", "Hỏa (lửa)"]], ["シュウ"], ["あき"],
    "秋（あき）- Mùa thu", "Autumn / Fall",
    "LÚA (禾) chín vàng như LỬA (火) - MÙA THU.",
    [["秋[あき]は涼[すず]しくて過[す]ごしやすいです。", "Autumn is cool and comfortable."]]),

  k("夏", [["夏", "Hạ"]], ["カ"], ["なつ"],
    "夏（なつ）- Mùa hè", "Summer",
    "Người đội mũ che nắng bước chậm - MÙA HÈ nóng nực.",
    [["夏休[なつやす]みに家族[かぞく]と海[うみ]へ行[い]きます。", "I go to the sea with my family during summer vacation."]]),

  k("習", [["羽", "Vũ (cánh)"], ["白", "Bạch (trắng)"]], ["シュウ"], ["なら(う)"],
    "習う（ならう）- Học, luyện tập", "Learn / Practice",
    "Chim non vỗ CÁNH (羽) trắng (白) TẬP bay.",
    [["三年前[さんねんまえ]からピアノを習[なら]っています。", "I have been learning piano for three years."]]),

  k("駅", [["馬", "Mã (ngựa)"], ["尺", "Xích (thước)"]], ["エキ"], [],
    "駅（えき）- Nhà ga", "Station",
    "Trạm đổi NGỰA (馬) ngày xưa - nhà GA ngày nay.",
    [["次[つぎ]の駅[えき]で降[お]りましょう。", "Let's get off at the next station."]]),

  k("洋", [["氵", "Thủy (nước)"], ["羊", "Dương (cừu)"]], ["ヨウ"], [],
    "洋服（ようふく）- Đại dương; phương Tây", "Ocean / Western",
    "NƯỚC (氵) mênh mông như đàn CỪU (羊) trắng - ĐẠI DƯƠNG.",
    [["デパートへ洋服[ようふく]を買[か]いに行[い]きます。", "I'm going to the department store to buy clothes."]]),

  k("旅", [["方", "Phương (cờ)"], ["𠂉", "Người"]], ["リョ"], ["たび"],
    "旅行（りょこう）- Du lịch", "Travel / Trip",
    "Đoàn người đi theo lá CỜ (方) - chuyến DU LỊCH.",
    [["旅行[りょこう]の写真[しゃしん]を見[み]せてください。", "Please show me your travel photos."]]),

  k("服", [["月", "Nguyệt (thân)"], ["𠬝", "Phục"]], ["フク"], [],
    "服（ふく）- Quần áo", "Clothes",
    "Vải che THÂN (月) người - QUẦN ÁO.",
    [["今日[きょう]は新[あたら]しい服[ふく]を着[き]ています。", "I am wearing new clothes today."]]),

  k("夕", [["夕", "Tịch (chiều tối)"]], ["セキ"], ["ゆう"],
    "夕方（ゆうがた）- Chiều tối", "Evening",
    "MẶT TRĂNG mới nhô lên một nửa - CHIỀU TỐI.",
    [["夕方[ゆうがた]から雨[あめ]が降[ふ]り始[はじ]めました。", "It started raining in the evening."]]),

  k("借", [["亻", "Nhân (người)"], ["昔", "Tích (xưa)"]], ["シャク"], ["か(りる)"],
    "借りる（かりる）- Mượn", "Borrow",
    "NGƯỜI (亻) quen từ XƯA (昔) mới cho MƯỢN đồ.",
    [["図書館[としょかん]で本[ほん]を借[か]ります。", "I borrow books from the library."]]),

  k("曜", [["日", "Nhật"], ["翟", "Địch (chim trĩ)"]], ["ヨウ"], [],
    "曜日（ようび）- Thứ trong tuần", "Day of the week",
    "MẶT TRỜI (日) và chim trĩ (翟) bay qua từng ngày - THỨ trong tuần.",
    [["今日[きょう]は何曜日[なんようび]ですか。", "What day of the week is it today?"]]),

  // ===== Ăn uống & gia đình =====
  k("飲", [["食", "Thực (ăn)"], ["欠", "Khiếm (há miệng)"]], ["イン"], ["の(む)"],
    "飲む（のむ）- Uống", "Drink",
    "HÁ MIỆNG (欠) bên đồ ĂN (食) - UỐNG nước.",
    [["毎日[まいにち]水[みず]をたくさん飲[の]みます。", "I drink a lot of water every day."]]),

  k("肉", [["肉", "Nhục (thịt)"]], ["ニク"], [],
    "肉（にく）- Thịt", "Meat",
    "Miếng THỊT có vân mỡ bên trong.",
    [["肉[にく]より魚[さかな]のほうが好[す]きです。", "I like fish more than meat."]]),

  k("貸", [["代", "Đại (thay)"], ["貝", "Bối (tiền)"]], ["タイ"], ["か(す)"],
    "貸す（かす）- Cho mượn", "Lend",
    "TIỀN (貝) được THAY (代) chủ tạm thời - CHO MƯỢN.",
    [["すみません、ペンを貸[か]してください。", "Excuse me, please lend me a pen."]]),

  k("堂", [["尚", "Thượng"], ["土", "Thổ (đất)"]], ["ドウ"], [],
    "食堂（しょくどう）- Nhà lớn, sảnh", "Hall",
    "Ngôi nhà cao (尚) trên nền ĐẤT (土) - SẢNH ĐƯỜNG.",
    [["昼[ひる]はいつも学生[がくせい]食堂[しょくどう]で食[た]べます。", "I always eat at the student cafeteria at noon."]]),

  k("鳥", [["鳥", "Điểu (chim)"]], ["チョウ"], ["とり"],
    "鳥（とり）- Con chim", "Bird",
    "Hình con CHIM với mắt, cánh và đuôi.",
    [["鳥[とり]が空[そら]を飛[と]んでいます。", "Birds are flying in the sky."]]),

  k("飯", [["食", "Thực (ăn)"], ["反", "Phản"]], ["ハン"], ["めし"],
    "ご飯（ごはん）- Cơm", "Rice / Meal",
    "Đồ ĂN (食) đảo qua đảo lại (反) trong nồi - CƠM.",
    [["晩[ばん]ご飯[はん]はもう食[た]べましたか。", "Have you already eaten dinner?"]]),

  k("勉", [["免", "Miễn"], ["力", "Lực (sức)"]], ["ベン"], [],
    "勉強（べんきょう）- Cố gắng", "Effort / Study",
    "Dồn hết SỨC (力) để vượt qua - CỐ GẮNG học.",
    [["毎晩[まいばん]二時間[にじかん]日本語[にほんご]を勉強[べんきょう]します。", "I study Japanese for two hours every night."]]),

  k("冬", [["夂", "Truy (đi chậm)"], ["冫", "Băng (đá)"]], ["トウ"], ["ふゆ"],
    "冬（ふゆ）- Mùa đông", "Winter",
    "Bước chân chậm (夂) trên BĂNG (冫) - MÙA ĐÔNG.",
    [["北海道[ほっかいどう]の冬[ふゆ]は雪[ゆき]がたくさん降[ふ]ります。", "It snows a lot in Hokkaido in winter."]]),

  k("昼", [["尺", "Xích"], ["日", "Nhật (mặt trời)"]], ["チュウ"], ["ひる"],
    "昼（ひる）- Buổi trưa", "Noon / Daytime",
    "MẶT TRỜI (日) lên đỉnh đầu - BUỔI TRƯA.",
    [["昼[ひる]ご飯[はん]を一緒[いっしょ]に食[た]べませんか。", "Won't you have lunch with me?"]]),

  k("茶", [["艹", "Thảo (cỏ)"], ["𠆢", "Nhân"], ["木", "Mộc"]], ["チャ", "サ"], [],
    "お茶（おちゃ）- Trà", "Tea",
    "Lá CỎ (艹) hái từ CÂY (木) - lá TRÀ.",
    [["お茶[ちゃ]をどうぞ。", "Please have some tea."]]),

  k("弟", [["弟", "Đệ (em trai)"]], ["ダイ", "テイ"], ["おとうと"],
    "弟（おとうと）- Em trai", "Younger brother",
    "Sợi dây quấn quanh cọc theo THỨ TỰ - EM TRAI đứng sau anh.",
    [["弟[おとうと]は高校生[こうこうせい]です。", "My younger brother is a high school student."]]),

  k("牛", [["牛", "Ngưu (bò)"]], ["ギュウ"], ["うし"],
    "牛（うし）- Con bò", "Cow",
    "Hình đầu con BÒ với hai sừng.",
    [["毎朝[まいあさ]牛乳[ぎゅうにゅう]を飲[の]みます。", "I drink milk every morning."]]),

  k("魚", [["魚", "Ngư (cá)"]], ["ギョ"], ["さかな"],
    "魚（さかな）- Con cá", "Fish",
    "Hình con CÁ với đầu, vảy và đuôi (灬).",
    [["市場[いちば]で新鮮[しんせん]な魚[さかな]を買[か]いました。", "I bought fresh fish at the market."]]),

  k("兄", [["口", "Khẩu (miệng)"], ["儿", "Nhân (chân)"]], ["ケイ", "キョウ"], ["あに"],
    "兄（あに）- Anh trai", "Older brother",
    "Cái MIỆNG (口) to trên đôi chân (儿) - ANH TRAI hay ra lệnh.",
    [["兄[あに]は東京[とうきょう]の会社[かいしゃ]で働[はたら]いています。", "My older brother works at a company in Tokyo."]]),

  k("犬", [["大", "Đại (to)"], ["丶", "Chấm"]], ["ケン"], ["いぬ"],
    "犬（いぬ）- Con chó", "Dog",
    "Con vật TO (大) có thêm cái tai vểnh (丶) - con CHÓ.",
    [["毎日[まいにち]犬[いぬ]と散歩[さんぽ]するのが好[す]きです。", "I like walking with my dog every day."]]),

  k("妹", [["女", "Nữ (phụ nữ)"], ["未", "Vị (chưa)"]], ["マイ"], ["いもうと"],
    "妹（いもうと）- Em gái", "Younger sister",
    "Cô gái (女) CHƯA (未) trưởng thành - EM GÁI.",
    [["妹[いもうと]は歌[うた]がとても上手[じょうず]です。", "My younger sister is very good at singing."]]),

  k("姉", [["女", "Nữ (phụ nữ)"], ["市", "Thị (chợ)"]], ["シ"], ["あね"],
    "姉（あね）- Chị gái", "Older sister",
    "Cô gái (女) đảm đang đi CHỢ (市) - CHỊ GÁI.",
    [["姉[あね]は料理[りょうり]の先生[せんせい]です。", "My older sister is a cooking teacher."]]),

  k("漢", [["氵", "Thủy (nước)"], ["漢", "Hán"]], ["カン"], [],
    "漢字（かんじ）- Hán", "China (Han)",
    "Chữ viết từ bên kia dòng SÔNG (氵) truyền sang - chữ HÁN.",
    [["漢字[かんじ]を書[か]く練習[れんしゅう]を毎日[まいにち]します。", "I practice writing kanji every day."]])

  ];
})();
