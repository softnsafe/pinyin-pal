
export type PinyinCategory = 'initial' | 'final';

export interface PinyinChar {
  char: string;
  category: PinyinCategory;
  group: string;
  example?: string;
  exampleChar?: string;
  description?: string;
  imageKeyword?: string; // Kept for backward compatibility if needed, but we'll use emoji
  emoji?: string;
  pronunciation?: string; // The pinyin syllable to play (e.g., 'bo1' for 'b')
}

export const initials: PinyinChar[] = [
  { char: 'b', category: 'initial', group: 'Lips (Labial)', example: 'bà ba', exampleChar: '爸爸', description: 'Like "b" in boy', emoji: '👨', pronunciation: 'bo1' },
  { char: 'p', category: 'initial', group: 'Lips (Labial)', example: 'pó po', exampleChar: '婆婆', description: 'Like "p" in pan', emoji: '👵', pronunciation: 'po1' },
  { char: 'm', category: 'initial', group: 'Lips (Labial)', example: 'mā ma', exampleChar: '妈妈', description: 'Like "m" in man', emoji: '👩', pronunciation: 'mo1' },
  { char: 'f', category: 'initial', group: 'Lips (Labial)', example: 'fó', exampleChar: '佛', description: 'Like "f" in fun', emoji: '🧘', pronunciation: 'fo2' },
  { char: 'd', category: 'initial', group: 'Tongue Tip (Alveolar)', example: 'dì di', exampleChar: '弟弟', description: 'Like "d" in dog', emoji: '👦', pronunciation: 'de1' },
  { char: 't', category: 'initial', group: 'Tongue Tip (Alveolar)', example: 'tù zi', exampleChar: '兔子', description: 'Like "t" in top', emoji: '🐇', pronunciation: 'te4' },
  { char: 'n', category: 'initial', group: 'Tongue Tip (Alveolar)', example: 'nǎi nai', exampleChar: '奶奶', description: 'Like "n" in no', emoji: '👵', pronunciation: 'ne1' },
  { char: 'l', category: 'initial', group: 'Tongue Tip (Alveolar)', example: 'lè', exampleChar: '乐', description: 'Like "l" in love', emoji: '😄', pronunciation: 'le4' },
  { char: 'g', category: 'initial', group: 'Tongue Root (Velar)', example: 'gē ge', exampleChar: '哥哥', description: 'Like "g" in go', emoji: '👱‍♂️', pronunciation: 'ge1' },
  { char: 'k', category: 'initial', group: 'Tongue Root (Velar)', example: 'kè', exampleChar: '课', description: 'Like "k" in kite', emoji: '🏫', pronunciation: 'ke4' },
  { char: 'h', category: 'initial', group: 'Tongue Root (Velar)', example: 'hē', exampleChar: '喝', description: 'Like "h" in hot', emoji: '🥤', pronunciation: 'he1' },
  { char: 'j', category: 'initial', group: 'Flat Tongue (Palatal)', example: 'jī', exampleChar: '鸡', description: 'Like "j" in jeep', emoji: '🐔', pronunciation: 'ji1' },
  { char: 'q', category: 'initial', group: 'Flat Tongue (Palatal)', example: 'qī', exampleChar: '七', description: 'Like "ch" in cheese', emoji: '7️⃣', pronunciation: 'qi1' },
  { char: 'x', category: 'initial', group: 'Flat Tongue (Palatal)', example: 'xī guā', exampleChar: '西瓜', description: 'Like "sh" in she', emoji: '🍉', pronunciation: 'xi1' },
  { char: 'zh', category: 'initial', group: 'Curled Tongue (Retroflex)', example: 'zhī zhū', exampleChar: '蜘蛛', description: 'Like "j" in jerk (tongue curled)', emoji: '🕷️', pronunciation: 'zhi1' },
  { char: 'ch', category: 'initial', group: 'Curled Tongue (Retroflex)', example: 'chī', exampleChar: '吃', description: 'Like "ch" in chirp (tongue curled)', emoji: '🥣', pronunciation: 'chi1' },
  { char: 'sh', category: 'initial', group: 'Curled Tongue (Retroflex)', example: 'shī zi', exampleChar: '狮子', description: 'Like "sh" in shirt (tongue curled)', emoji: '🦁', pronunciation: 'shi1' },
  { char: 'r', category: 'initial', group: 'Curled Tongue (Retroflex)', example: 'rì', exampleChar: '日', description: 'Like "r" in run (tongue curled)', emoji: '☀️', pronunciation: 'ri4' },
  { char: 'z', category: 'initial', group: 'Teeth (Dental)', example: 'zì', exampleChar: '字', description: 'Like "ds" in kids', emoji: '✍️', pronunciation: 'zi4' },
  { char: 'c', category: 'initial', group: 'Teeth (Dental)', example: 'cì wei', exampleChar: '刺猬', description: 'Like "ts" in cats', emoji: '🦔', pronunciation: 'ci4' },
  { char: 's', category: 'initial', group: 'Teeth (Dental)', example: 'sì', exampleChar: '四', description: 'Like "s" in sun', emoji: '4️⃣', pronunciation: 'si4' },
  { char: 'y', category: 'initial', group: 'Zero Initial', example: 'yī', exampleChar: '一', description: 'Like "y" in yes', emoji: '👕', pronunciation: 'yi1' },
  { char: 'w', category: 'initial', group: 'Zero Initial', example: 'wǔ', exampleChar: '五', description: 'Like "w" in we', emoji: '5️⃣', pronunciation: 'wu3' },
];

export const finals: PinyinChar[] = [
  // Simple Finals
  { char: 'a', category: 'final', group: 'Simple', example: 'bā', exampleChar: '八', description: 'Like "a" in father', emoji: '8️⃣', pronunciation: 'a1' },
  { char: 'o', category: 'final', group: 'Simple', example: 'bō', exampleChar: '波', description: 'Like "o" in or', emoji: '🌊', pronunciation: 'o1' },
  { char: 'e', category: 'final', group: 'Simple', example: 'é', exampleChar: '鹅', description: 'Like "u" in up', emoji: '🦢', pronunciation: 'e2' },
  { char: 'i', category: 'final', group: 'Simple', example: 'yī', exampleChar: '衣', description: 'Like "ee" in see', emoji: '👕', pronunciation: 'yi1' },
  { char: 'u', category: 'final', group: 'Simple', example: 'wū', exampleChar: '屋', description: 'Like "oo" in too', emoji: '🏠', pronunciation: 'wu1' },
  { char: 'ü', category: 'final', group: 'Simple', example: 'yú', exampleChar: '鱼', description: 'Like "ee" with rounded lips', emoji: '🐟', pronunciation: 'yu2' },
  // Compound Finals
  { char: 'ai', category: 'final', group: 'Compound', example: 'bái', exampleChar: '白', description: 'Like "eye"', emoji: '⬜', pronunciation: 'ai2' },
  { char: 'ei', category: 'final', group: 'Compound', example: 'fēi', exampleChar: '飞', description: 'Like "ay" in say', emoji: '✈️', pronunciation: 'fei1' },
  { char: 'ui', category: 'final', group: 'Compound', example: 'shuǐ', exampleChar: '水', description: 'Like "way"', emoji: '💧', pronunciation: 'shui3' },
  { char: 'ao', category: 'final', group: 'Compound', example: 'māo', exampleChar: '猫', description: 'Like "ow" in cow', emoji: '🐱', pronunciation: 'ao1' },
  { char: 'ou', category: 'final', group: 'Compound', example: 'gǒu', exampleChar: '狗', description: 'Like "o" in go', emoji: '🐕', pronunciation: 'ou3' },
  { char: 'iu', category: 'final', group: 'Compound', example: 'niú', exampleChar: '牛', description: 'Like "yo" in yo-yo', emoji: '🐄', pronunciation: 'niu2' },
  { char: 'ie', category: 'final', group: 'Compound', example: 'xié', exampleChar: '鞋', description: 'Like "ye" in yes', emoji: '👟', pronunciation: 'xie2' },
  { char: 'üe', category: 'final', group: 'Compound', example: 'yuè', exampleChar: '月', description: 'Like "ü" + "eh"', emoji: '🌙', pronunciation: 'yue4' },
  { char: 'er', category: 'final', group: 'Compound', example: 'ěr', exampleChar: '耳', description: 'Like "ur" in purr', emoji: '👂', pronunciation: 'er3' },
  // Nasal Finals
  { char: 'an', category: 'final', group: 'Nasal', example: 'shān', exampleChar: '山', description: 'Like "an" in can', emoji: '⛰️', pronunciation: 'an1' },
  { char: 'en', category: 'final', group: 'Nasal', example: 'rén', exampleChar: '人', description: 'Like "en" in taken', emoji: '🚶', pronunciation: 'en1' },
  { char: 'in', category: 'final', group: 'Nasal', example: 'jīn', exampleChar: '金', description: 'Like "in" in bin', emoji: '🥇', pronunciation: 'in1' },
  { char: 'un', category: 'final', group: 'Nasal', example: 'yún', exampleChar: '云', description: 'Like "won"', emoji: '☁️', pronunciation: 'yun2' },
  { char: 'ün', category: 'final', group: 'Nasal', example: 'jūn', exampleChar: '军', description: 'Like "ü" + "n"', emoji: '💂', pronunciation: 'jun1' },
  { char: 'ang', category: 'final', group: 'Nasal', example: 'yáng', exampleChar: '羊', description: 'Like "ang" in song', emoji: '🐑', pronunciation: 'ang2' },
  { char: 'eng', category: 'final', group: 'Nasal', example: 'dēng', exampleChar: '灯', description: 'Like "ung" in lung', emoji: '💡', pronunciation: 'eng1' },
  { char: 'ing', category: 'final', group: 'Nasal', example: 'yīng', exampleChar: '鹰', description: 'Like "ing" in sing', emoji: '🦅', pronunciation: 'ying1' },
  { char: 'ong', category: 'final', group: 'Nasal', example: 'lóng', exampleChar: '龙', description: 'Like "ong" in song (rounded)', emoji: '🐉', pronunciation: 'long2' },
];
