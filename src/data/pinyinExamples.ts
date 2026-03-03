
// This file maps pinyin combinations (initial + final + tone) to example words and emojis.
// Format: "initial+final+tone": { char: "Chinese", pinyin: "Pinyin", meaning: "English", emoji: "Emoji" }

export interface PinyinExample {
  char: string;
  pinyin: string;
  meaning: string;
  emoji: string;
}

export const pinyinExamples: Record<string, PinyinExample> = {
  // b
  "ba1": { char: "八", pinyin: "bā", meaning: "eight", emoji: "8️⃣" },
  "ba2": { char: "拔", pinyin: "bá", meaning: "pull out", emoji: "🥕" },
  "ba3": { char: "靶", pinyin: "bǎ", meaning: "target", emoji: "🎯" },
  "ba4": { char: "爸", pinyin: "bà", meaning: "dad", emoji: "👨" },
  "bo1": { char: "波", pinyin: "bō", meaning: "wave", emoji: "🌊" },
  "bo2": { char: "伯", pinyin: "bó", meaning: "uncle", emoji: "👴" },
  "bi3": { char: "笔", pinyin: "bǐ", meaning: "pen", emoji: "🖊️" },
  "bi4": { char: "币", pinyin: "bì", meaning: "coin", emoji: "🪙" },
  "bu4": { char: "不", pinyin: "bù", meaning: "no", emoji: "🙅" },
  "bai2": { char: "白", pinyin: "bái", meaning: "white", emoji: "⬜" },
  "bei1": { char: "杯", pinyin: "bēi", meaning: "cup", emoji: "🥃" },
  "bao1": { char: "包", pinyin: "bāo", meaning: "bag", emoji: "👜" },
  "ban1": { char: "班", pinyin: "bān", meaning: "class", emoji: "🏫" },
  "bang1": { char: "帮", pinyin: "bāng", meaning: "help", emoji: "🤝" },

  // p
  "pa1": { char: "趴", pinyin: "pā", meaning: "lie prone", emoji: "🛌" },
  "pa2": { char: "爬", pinyin: "pá", meaning: "climb", emoji: "🧗" },
  "pa4": { char: "怕", pinyin: "pà", meaning: "afraid", emoji: "😨" },
  "po2": { char: "婆", pinyin: "pó", meaning: "grandma", emoji: "👵" },
  "po4": { char: "破", pinyin: "pò", meaning: "broken", emoji: "💔" },
  "pi2": { char: "皮", pinyin: "pí", meaning: "skin/leather", emoji: "👞" },
  "pu3": { char: "谱", pinyin: "pǔ", meaning: "music score", emoji: "🎼" },
  "pao3": { char: "跑", pinyin: "pǎo", meaning: "run", emoji: "🏃" },
  "pan2": { char: "盘", pinyin: "pán", meaning: "plate", emoji: "🍽️" },
  "pang4": { char: "胖", pinyin: "pàng", meaning: "fat", emoji: "🐷" },

  // m
  "ma1": { char: "妈", pinyin: "mā", meaning: "mom", emoji: "👩" },
  "ma3": { char: "马", pinyin: "mǎ", meaning: "horse", emoji: "🐎" },
  "ma4": { char: "骂", pinyin: "mà", meaning: "scold", emoji: "🤬" },
  "moō": { char: "摸", pinyin: "mō", meaning: "touch", emoji: "✋" },
  "mo4": { char: "墨", pinyin: "mò", meaning: "ink", emoji: "✒️" },
  "mi3": { char: "米", pinyin: "mǐ", meaning: "rice", emoji: "🍚" },
  "mu4": { char: "木", pinyin: "mù", meaning: "wood", emoji: "🪵" },
  "mai3": { char: "买", pinyin: "mǎi", meaning: "buy", emoji: "🛒" },
  "mai4": { char: "卖", pinyin: "mài", meaning: "sell", emoji: "💰" },
  "mei3": { char: "美", pinyin: "měi", meaning: "beautiful", emoji: "🌹" },
  "mao1": { char: "猫", pinyin: "māo", meaning: "cat", emoji: "🐱" },
  "mao2": { char: "毛", pinyin: "máo", meaning: "fur", emoji: "🧶" },
  "men2": { char: "门", pinyin: "mén", meaning: "door", emoji: "🚪" },
  "mang2": { char: "忙", pinyin: "máng", meaning: "busy", emoji: "🐝" },

  // f
  "fa1": { char: "发", pinyin: "fā", meaning: "send/hair", emoji: "📤" },
  "fo2": { char: "佛", pinyin: "fó", meaning: "buddha", emoji: "🧘" },
  "fei1": { char: "飞", pinyin: "fēi", meaning: "fly", emoji: "✈️" },
  "feng1": { char: "风", pinyin: "fēng", meaning: "wind", emoji: "🌬️" },
  "fan4": { char: "饭", pinyin: "fàn", meaning: "rice/meal", emoji: "🍚" },

  // d
  "da4": { char: "大", pinyin: "dà", meaning: "big", emoji: "🐘" },
  "de2": { char: "德", pinyin: "dé", meaning: "virtue", emoji: "🇩🇪" },
  "di4": { char: "地", pinyin: "dì", meaning: "ground", emoji: "🌍" },
  "du2": { char: "读", pinyin: "dú", meaning: "read", emoji: "📖" },
  "dai4": { char: "袋", pinyin: "dài", meaning: "bag", emoji: "🛍️" },
  "dao1": { char: "刀", pinyin: "dāo", meaning: "knife", emoji: "🔪" },
  "dou4": { char: "豆", pinyin: "dòu", meaning: "bean", emoji: "🫘" },
  "dan4": { char: "蛋", pinyin: "dàn", meaning: "egg", emoji: "🥚" },
  "deng1": { char: "灯", pinyin: "dēng", meaning: "lamp", emoji: "💡" },
  "dong1": { char: "东", pinyin: "dōng", meaning: "east", emoji: "➡️" },

  // t
  "ta1": { char: "他", pinyin: "tā", meaning: "he", emoji: "👨" },
  "tu4": { char: "兔", pinyin: "tù", meaning: "rabbit", emoji: "🐇" },
  "ti1": { char: "踢", pinyin: "tī", meaning: "kick", emoji: "⚽" },
  "tai4": { char: "太", pinyin: "tài", meaning: "too/very", emoji: "☀️" },
  "tou2": { char: "头", pinyin: "tóu", meaning: "head", emoji: "🗣️" },
  "tian1": { char: "天", pinyin: "tiān", meaning: "sky/day", emoji: "☁️" },
  "tang2": { char: "糖", pinyin: "táng", meaning: "candy", emoji: "🍬" },
  "tong2": { char: "同", pinyin: "tóng", meaning: "same", emoji: "👯" },

  // n
  "na2": { char: "拿", pinyin: "ná", meaning: "hold", emoji: "🤲" },
  "ni3": { char: "你", pinyin: "nǐ", meaning: "you", emoji: "👉" },
  "nu3": { char: "努", pinyin: "nǔ", meaning: "strive", emoji: "💪" },
  "nü3": { char: "女", pinyin: "nǚ", meaning: "female", emoji: "🚺" },
  "nai3": { char: "奶", pinyin: "nǎi", meaning: "milk", emoji: "🥛" },
  "niu2": { char: "牛", pinyin: "niú", meaning: "cow", emoji: "🐄" },
  "nan2": { char: "男", pinyin: "nán", meaning: "male", emoji: "🚹" },
  "neng2": { char: "能", pinyin: "néng", meaning: "can", emoji: "✅" },
  "niao3": { char: "鸟", pinyin: "niǎo", meaning: "bird", emoji: "🐦" },

  // l
  "la1": { char: "拉", pinyin: "lā", meaning: "pull", emoji: "🚪" },
  "le4": { char: "乐", pinyin: "lè", meaning: "happy", emoji: "😄" },
  "li4": { char: "力", pinyin: "lì", meaning: "power", emoji: "💪" },
  "lu4": { char: "路", pinyin: "lù", meaning: "road", emoji: "🛣️" },
  "lü4": { char: "绿", pinyin: "lǜ", meaning: "green", emoji: "🟢" },
  "lai2": { char: "来", pinyin: "lái", meaning: "come", emoji: "👋" },
  "leièi": { char: "累", pinyin: "lèi", meaning: "tired", emoji: "😫" },
  "lao3": { char: "老", pinyin: "lǎo", meaning: "old", emoji: "👴" },
  "lou2": { char: "楼", pinyin: "lóu", meaning: "building", emoji: "🏢" },
  "lan2": { char: "蓝", pinyin: "lán", meaning: "blue", emoji: "🔵" },
  "leng3": { char: "冷", pinyin: "lěng", meaning: "cold", emoji: "🥶" },
  "long2": { char: "龙", pinyin: "lóng", meaning: "dragon", emoji: "🐉" },

  // g
  "ge1": { char: "哥", pinyin: "gē", meaning: "brother", emoji: "👱‍♂️" },
  "gu3": { char: "鼓", pinyin: "gǔ", meaning: "drum", emoji: "🥁" },
  "gai4": { char: "盖", pinyin: "gài", meaning: "cover/lid", emoji: "🥘" },
  "gei3": { char: "给", pinyin: "gěi", meaning: "give", emoji: "🎁" },
  "gao1": { char: "高", pinyin: "gāo", meaning: "tall/high", emoji: "🦒" },
  "gou3": { char: "狗", pinyin: "gǒu", meaning: "dog", emoji: "🐕" },
  "gan1": { char: "干", pinyin: "gān", meaning: "dry", emoji: "🌵" },
  "gen1": { char: "根", pinyin: "gēn", meaning: "root", emoji: "🌱" },
  "gong1": { char: "工", pinyin: "gōng", meaning: "work", emoji: "👷" },

  // k
  "ka3": { char: "卡", pinyin: "kǎ", meaning: "card", emoji: "💳" },
  "ke4": { char: "课", pinyin: "kè", meaning: "class", emoji: "🏫" },
  "ku1": { char: "哭", pinyin: "kū", meaning: "cry", emoji: "😭" },
  "kai1": { char: "开", pinyin: "kāi", meaning: "open", emoji: "📂" },
  "kou3": { char: "口", pinyin: "kǒu", meaning: "mouth", emoji: "👄" },
  "kan4": { char: "看", pinyin: "kàn", meaning: "look", emoji: "👀" },
  "kong1": { char: "空", pinyin: "kōng", meaning: "empty/air", emoji: "🈳" },

  // h
  "he1": { char: "喝", pinyin: "hē", meaning: "drink", emoji: "🥤" },
  "hu3": { char: "虎", pinyin: "hǔ", meaning: "tiger", emoji: "🐅" },
  "hai3": { char: "海", pinyin: "hǎi", meaning: "sea", emoji: "🌊" },
  "hei1": { char: "黑", pinyin: "hēi", meaning: "black", emoji: "⬛" },
  "hou2": { char: "猴", pinyin: "hóu", meaning: "monkey", emoji: "🐒" },
  "han4": { char: "汗", pinyin: "hàn", meaning: "sweat", emoji: "💦" },
  "hong2": { char: "红", pinyin: "hóng", meaning: "red", emoji: "🟥" },
  "hua1": { char: "花", pinyin: "huā", meaning: "flower", emoji: "🌸" },
  "huo3": { char: "火", pinyin: "huǒ", meaning: "fire", emoji: "🔥" },

  // j
  "ji1": { char: "鸡", pinyin: "jī", meaning: "chicken", emoji: "🐔" },
  "ju2": { char: "橘", pinyin: "jú", meaning: "orange", emoji: "🍊" },
  "jia1": { char: "家", pinyin: "jiā", meaning: "home", emoji: "🏠" },
  "jie3": { char: "姐", pinyin: "jiě", meaning: "sister", emoji: "👩" },
  "jiu3": { char: "酒", pinyin: "jiǔ", meaning: "wine", emoji: "🍷" },
  "jin1": { char: "金", pinyin: "jīn", meaning: "gold", emoji: "🥇" },
  "jun1": { char: "军", pinyin: "jūn", meaning: "army", emoji: "💂" },
  "jing1": { char: "京", pinyin: "jīng", meaning: "capital", emoji: "🏙️" },

  // q
  "qi1": { char: "七", pinyin: "qī", meaning: "seven", emoji: "7️⃣" },
  "qu4": { char: "去", pinyin: "qù", meaning: "go", emoji: "🚶" },
  "qia3": { char: "卡", pinyin: "qiǎ", meaning: "stuck", emoji: "🚧" },
  "qie2": { char: "茄", pinyin: "qié", meaning: "eggplant", emoji: "🍆" },
  "qiu2": { char: "球", pinyin: "qiú", meaning: "ball", emoji: "⚽" },
  "qian2": { char: "钱", pinyin: "qián", meaning: "money", emoji: "💰" },
  "qun2": { char: "裙", pinyin: "qún", meaning: "skirt", emoji: "👗" },
  "qing1": { char: "青", pinyin: "qīng", meaning: "green/cyan", emoji: "🟦" },

  // x
  "xi1": { char: "西", pinyin: "xī", meaning: "west", emoji: "⬅️" },
  "xu1": { char: "需", pinyin: "xū", meaning: "need", emoji: "🤲" },
  "xia4": { char: "下", pinyin: "xià", meaning: "down", emoji: "⬇️" },
  "xie2": { char: "鞋", pinyin: "xié", meaning: "shoe", emoji: "👟" },
  "xiu1": { char: "修", pinyin: "xiū", meaning: "repair", emoji: "🔧" },
  "xin1": { char: "心", pinyin: "xīn", meaning: "heart", emoji: "❤️" },
  "xun2": { char: "寻", pinyin: "xún", meaning: "search", emoji: "🔍" },
  "xing1": { char: "星", pinyin: "xīng", meaning: "star", emoji: "⭐" },
  "xiong2": { char: "熊", pinyin: "xióng", meaning: "bear", emoji: "🐻" },

  // zh
  "zha4": { char: "炸", pinyin: "zhà", meaning: "fry/explode", emoji: "💥" },
  "zhe4": { char: "这", pinyin: "zhè", meaning: "this", emoji: "👇" },
  "zhi1": { char: "只", pinyin: "zhī", meaning: "only/measure word", emoji: "1️⃣" },
  "zhu1": { char: "猪", pinyin: "zhū", meaning: "pig", emoji: "🐷" },
  "zhai1": { char: "摘", pinyin: "zhāi", meaning: "pick", emoji: "🤏" },
  "zhao3": { char: "找", pinyin: "zhǎo", meaning: "find", emoji: "🔎" },
  "zhou1": { char: "周", pinyin: "zhōu", meaning: "week", emoji: "📅" },
  "zhen1": { char: "真", pinyin: "zhēn", meaning: "real", emoji: "💯" },
  "zhong1": { char: "中", pinyin: "zhōng", meaning: "middle", emoji: "🎯" },

  // ch
  "cha2": { char: "茶", pinyin: "chá", meaning: "tea", emoji: "🍵" },
  "che1": { char: "车", pinyin: "chē", meaning: "car", emoji: "🚗" },
  "chi1": { char: "吃", pinyin: "chī", meaning: "eat", emoji: "🥣" },
  "chu1": { char: "出", pinyin: "chū", meaning: "out", emoji: "🚪" },
  "chai2": { char: "柴", pinyin: "chái", meaning: "firewood", emoji: "🪵" },
  "chao3": { char: "炒", pinyin: "chǎo", meaning: "stir-fry", emoji: "🍳" },
  "chou3": { char: "丑", pinyin: "chǒu", meaning: "ugly", emoji: "👺" },
  "chan3": { char: "产", pinyin: "chǎn", meaning: "produce", emoji: "🏭" },
  "chong2": { char: "虫", pinyin: "chóng", meaning: "insect", emoji: "🐛" },

  // sh
  "sha1": { char: "沙", pinyin: "shā", meaning: "sand", emoji: "🏖️" },
  "she2": { char: "蛇", pinyin: "shé", meaning: "snake", emoji: "🐍" },
  "shi1": { char: "狮", pinyin: "shī", meaning: "lion", emoji: "🦁" },
  "shu1": { char: "书", pinyin: "shū", meaning: "book", emoji: "📚" },
  "shai4": { char: "晒", pinyin: "shài", meaning: "sunbathe", emoji: "☀️" },
  "shao3": { char: "少", pinyin: "shǎo", meaning: "few", emoji: "🤏" },
  "shou3": { char: "手", pinyin: "shǒu", meaning: "hand", emoji: "✋" },
  "shan1": { char: "山", pinyin: "shān", meaning: "mountain", emoji: "⛰️" },
  "sheng1": { char: "生", pinyin: "shēng", meaning: "birth/raw", emoji: "🎂" },

  // r
  "re4": { char: "热", pinyin: "rè", meaning: "hot", emoji: "🔥" },
  "ri4": { char: "日", pinyin: "rì", meaning: "sun/day", emoji: "☀️" },
  "ru4": { char: "入", pinyin: "rù", meaning: "enter", emoji: "🚪" },
  "rou4": { char: "肉", pinyin: "ròu", meaning: "meat", emoji: "🥩" },
  "ren2": { char: "人", pinyin: "rén", meaning: "person", emoji: "🚶" },
  "rong2": { char: "荣", pinyin: "róng", meaning: "glory", emoji: "🏆" },

  // z
  "za2": { char: "杂", pinyin: "zá", meaning: "mixed", emoji: "🥗" },
  "ze2": { char: "责", pinyin: "zé", meaning: "duty", emoji: "👮" },
  "zi4": { char: "字", pinyin: "zì", meaning: "character", emoji: "✍️" },
  "zu3": { char: "祖", pinyin: "zǔ", meaning: "ancestor", emoji: "👴" },
  "zai4": { char: "在", pinyin: "zài", meaning: "at", emoji: "📍" },
  "zao3": { char: "早", pinyin: "zǎo", meaning: "early", emoji: "🌅" },
  "zou3": { char: "走", pinyin: "zǒu", meaning: "walk", emoji: "🚶" },
  "zan4": { char: "赞", pinyin: "zàn", meaning: "praise", emoji: "👍" },
  "zong3": { char: "总", pinyin: "zǒng", meaning: "total", emoji: "∑" },

  // c
  "ca1": { char: "擦", pinyin: "cā", meaning: "wipe", emoji: "🧽" },
  "ce4": { char: "册", pinyin: "cè", meaning: "booklet", emoji: "📓" },
  "ci4": { char: "刺", pinyin: "cì", meaning: "thorn", emoji: "🌵" },
  "cu4": { char: "醋", pinyin: "cù", meaning: "vinegar", emoji: "🍶" },
  "cai4": { char: "菜", pinyin: "cài", meaning: "vegetable", emoji: "🥬" },
  "cao3": { char: "草", pinyin: "cǎo", meaning: "grass", emoji: "🌿" },
  "can1": { char: "餐", pinyin: "cān", meaning: "meal", emoji: "🍽️" },
  "cong1": { char: "葱", pinyin: "cōng", meaning: "scallion", emoji: "🧅" },

  // s
  "sa3": { char: "洒", pinyin: "sǎ", meaning: "sprinkle", emoji: "🚿" },
  "se4": { char: "色", pinyin: "sè", meaning: "color", emoji: "🎨" },
  "si4": { char: "四", pinyin: "sì", meaning: "four", emoji: "4️⃣" },
  "su4": { char: "速", pinyin: "sù", meaning: "speed", emoji: "🚀" },
  "sai4": { char: "赛", pinyin: "sài", meaning: "race", emoji: "🏎️" },
  "sao3": { char: "扫", pinyin: "sǎo", meaning: "sweep", emoji: "🧹" },
  "sou1": { char: "搜", pinyin: "sōu", meaning: "search", emoji: "🔍" },
  "san1": { char: "三", pinyin: "sān", meaning: "three", emoji: "3️⃣" },
  "song4": { char: "送", pinyin: "sòng", meaning: "send", emoji: "🎁" },

  // y
  "ya1": { char: "鸭", pinyin: "yā", meaning: "duck", emoji: "🦆" },
  "ye2": { char: "爷", pinyin: "yé", meaning: "grandpa", emoji: "👴" },
  "yi1": { char: "一", pinyin: "yī", meaning: "one", emoji: "1️⃣" },
  "yu2": { char: "鱼", pinyin: "yú", meaning: "fish", emoji: "🐟" },
  "yao4": { char: "药", pinyin: "yào", meaning: "medicine", emoji: "💊" },
  "you3": { char: "有", pinyin: "yǒu", meaning: "have", emoji: "🈶" },
  "yue4": { char: "月", pinyin: "yuè", meaning: "moon", emoji: "🌙" },
  "yan3": { char: "眼", pinyin: "yǎn", meaning: "eye", emoji: "👁️" },
  "yong3": { char: "泳", pinyin: "yǒng", meaning: "swim", emoji: "🏊" },

  // w
  "wa1": { char: "蛙", pinyin: "wā", meaning: "frog", emoji: "🐸" },
  "wo3": { char: "我", pinyin: "wǒ", meaning: "me", emoji: "🙋" },
  "wu3": { char: "五", pinyin: "wǔ", meaning: "five", emoji: "5️⃣" },
  "wai4": { char: "外", pinyin: "wài", meaning: "outside", emoji: "🏞️" },
  "wei4": { char: "位", pinyin: "wèi", meaning: "seat", emoji: "💺" },
  "wan2": { char: "玩", pinyin: "wán", meaning: "play", emoji: "🎮" },
  "wen4": { char: "问", pinyin: "wèn", meaning: "ask", emoji: "❓" },
  "wang2": { char: "王", pinyin: "wáng", meaning: "king", emoji: "👑" },
};
