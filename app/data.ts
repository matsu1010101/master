// src/app/data.ts

// 言語の型定義
export type Language = 'ja' | 'en' | 'zh' | 'hi' | 'es' | 'fr';

// メニュー情報の型
export type Member = {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: 'Ramen' | 'SideDish' | 'Drink' | 'Topping';
  isVegan: boolean;
  popularity: number;
  allergy: ('egg' | 'wheat' | 'soy')[];
  reviews: string[]; // ★レビュー機能用の配列を追加
};

// 全言語の商品データ
export const menuData: Record<Language, Member[]> = {
  ja: [
    { id: '0001', name: '醤油ラーメン', description: '鶏ガラベースのあっさりとした定番の味です。', image: '/images/shoyu.jpg', price: 1200, category: 'Ramen', isVegan: false, popularity: 8, allergy: ['wheat', 'soy'], reviews: ['スープが透き通っていて最高！', '懐かしい味がします。'] },
    { id: '0002', name: '塩ラーメン', description: '透き通ったスープと、魚介の旨味が特徴です。', image: '/images/shio.jpg', price: 1200, category: 'Ramen', isVegan: false, popularity: 9, allergy: ['wheat'], reviews: ['魚介の出汁がしっかり効いています。'] },
    { id: '0003', name: '味噌ラーメン', description: '濃厚な味噌と香味野菜のパンチが効いた一杯。', image: '/images/miso.jpg', price: 1300, category: 'Ramen', isVegan: false, popularity: 10, allergy: ['wheat', 'soy'], reviews: ['寒い日に食べたくなる濃厚な味。'] },
    { id: '0004', name: '餃子', description: 'パリパリの皮とジューシーな肉汁。', image: '/images/gyoza.jpg', price: 600, category: 'SideDish', isVegan: false, popularity: 7, allergy: ['wheat', 'soy'], reviews: ['皮がモチモチで美味しい！'] },
    { id: '0005', name: 'チャーハン', description: '強火で一気に仕上げた、パラパラの本格チャーハン。', image: '/images/friedrice.jpg', price: 1000, category: 'SideDish', isVegan: false, popularity: 8, allergy: ['egg', 'soy'], reviews: ['プロの火力を感じるパラパラ感。'] },
    { id: '0006', name: 'チャーシュー丼', description: '特製ダレで煮込んだ柔らかチャーシューがたっぷり。', image: '/images/don.jpg', price: 900, category: 'SideDish', isVegan: false, popularity: 7, allergy: ['wheat', 'soy'], reviews: ['チャーシューが口の中でとろけます。'] },
    { id: '0007', name: 'コーラ', description: 'キンキンに冷えてます。', image: '/images/cola.jpg', price: 400, category: 'Drink', isVegan: true, popularity: 5, allergy: [], reviews: ['ラーメンのお供に最高！'] },
    { id: '0008', name: 'オレンジジュース', description: '果汁100%です。', image: '/images/orange.jpg', price: 400, category: 'Drink', isVegan: true, popularity: 6, allergy: [], reviews: ['さっぱりした甘さ。'] },
    { id: '0009', name: 'メロンソーダ', description: '懐かしの味。', image: '/images/soda.jpg', price: 400, category: 'Drink', isVegan: true, popularity: 5, allergy: [], reviews: ['子供の頃を思い出します。'] },
    { id: '0010', name: '味玉', description: '特製のタレに一晩漬け込んだ、とろとろの半熟味玉。', image: '/images/egg.jpg', price: 200, category: 'Topping', isVegan: false, popularity: 9, allergy: ['egg', 'soy'], reviews: ['どのラーメンにも合います！'] },
    { id: '0011', name: 'もやしラーメン', description: '鶏・豚不使用。自家製ベジブロスともやしが主役のヘルシーな一杯。', image: '/images/moyashi.jpg', price: 1300, category: 'Ramen', isVegan: true, popularity: 7, allergy: ['wheat'], reviews: ['ヴィーガン対応とは思えない満足感。'] },
    { id: '0012', name: '野菜味噌ラーメン', description: '鶏・豚不使用の野菜だしと、まろやかな豆乳味噌仕立て。', image: '/images/vege_miso.jpg', price: 1300, category: 'Ramen', isVegan: true, popularity: 8, allergy: ['wheat', 'soy'], reviews: ['クリーミーで野菜たっぷり。'] },
    { id: '0013', name: 'ウーロン茶', description: 'さっぱりとした口当たりの定番茶葉。', image: '/images/oolong.jpg', price: 400, category: 'Drink', isVegan: true, popularity: 6, allergy: [], reviews: ['食後をスッキリさせてくれます。'] },
  ],
  en: [
    { id: '0001', name: 'Soy Sauce Ramen', description: 'A classic, light taste based on chicken broth.', image: '/images/shoyu.jpg', price: 1200, category: 'Ramen', isVegan: false, popularity: 8, allergy: ['wheat', 'soy'], reviews: ['Clear broth and great taste!', 'The quintessential Japanese ramen.'] },
    { id: '0002', name: 'Salt Ramen', description: 'Features a clear broth and the rich umami of seafood.', image: '/images/shio.jpg', price: 1200, category: 'Ramen', isVegan: false, popularity: 9, allergy: ['wheat'], reviews: ['Simple but deep seafood flavors.'] },
    { id: '0003', name: 'Miso Ramen', description: 'A bold bowl with rich miso and the punch of aromatic vegetables.', image: '/images/miso.jpg', price: 1300, category: 'Ramen', isVegan: false, popularity: 10, allergy: ['wheat', 'soy'], reviews: ['Rich and creamy miso, loved it!'] },
    { id: '0004', name: 'Gyoza', description: 'Crispy skin and juicy meat filling.', image: '/images/gyoza.jpg', price: 600, category: 'SideDish', isVegan: false, popularity: 7, allergy: ['wheat', 'soy'], reviews: ['Juicy and perfect with beer.'] },
    { id: '0005', name: 'Fried Rice', description: 'Authentic fried rice, quickly finished over high heat.', image: '/images/friedrice.jpg', price: 1000, category: 'SideDish', isVegan: false, popularity: 8, allergy: ['egg', 'soy'], reviews: ['Perfect texture, very professional.'] },
    { id: '0006', name: 'Roasted Pork Bowl', description: 'Topped with plenty of tender pork simmered in special sauce.', image: '/images/don.jpg', price: 900, category: 'SideDish', isVegan: false, popularity: 7, allergy: ['wheat', 'soy'], reviews: ['The pork is so tender it melts.'] },
    { id: '0007', name: 'Cola', description: 'Ice cold.', image: '/images/cola.jpg', price: 400, category: 'Drink', isVegan: true, popularity: 5, allergy: [], reviews: ['Refreshingly cold.'] },
    { id: '0008', name: 'Orange Juice', description: '100% fruit juice.', image: '/images/orange.jpg', price: 400, category: 'Drink', isVegan: true, popularity: 6, allergy: [], reviews: ['Natural sweetness.'] },
    { id: '0009', name: 'Melon Soda', description: 'A nostalgic taste.', image: '/images/soda.jpg', price: 400, category: 'Drink', isVegan: true, popularity: 5, allergy: [], reviews: ['Very sweet and fun.'] },
    { id: '0010', name: 'Seasoned Egg', description: 'Soft-boiled egg marinated overnight in special sauce.', image: '/images/egg.jpg', price: 200, category: 'Topping', isVegan: false, popularity: 9, allergy: ['egg', 'soy'], reviews: ['The perfect ramen topping.'] },
    { id: '0011', name: 'Sprout Ramen', description: 'No chicken/pork. Healthy bowl with homemade vege-broth and sprouts.', image: '/images/moyashi.jpg', price: 1300, category: 'Ramen', isVegan: true, popularity: 7, allergy: ['wheat'], reviews: ['Great vegan option, very filling.'] },
    { id: '0012', name: 'Vege Miso Ramen', description: 'Vegetable broth (no chicken/pork) with mild soy milk miso.', image: '/images/vege_miso.jpg', price: 1300, category: 'Ramen', isVegan: true, popularity: 8, allergy: ['wheat', 'soy'], reviews: ['Creamy and full of vegetables.'] },
    { id: '0013', name: 'Oolong Tea', description: 'Refreshing classic tea.', image: '/images/oolong.jpg', price: 400, category: 'Drink', isVegan: true, popularity: 6, allergy: [], reviews: ['Cleanses the palate after ramen.'] },
  ],
  zh: [
    { id: '0001', name: '酱油拉面', description: '以鸡骨为基础的清淡经典口味。', image: '/images/shoyu.jpg', price: 1200, category: 'Ramen', isVegan: false, popularity: 8, allergy: ['wheat', 'soy'], reviews: ['汤头非常清澈美味。'] },
    { id: '0002', name: '盐味拉面', description: '清澈的汤头，具有海鲜的鲜味。', image: '/images/shio.jpg', price: 1200, category: 'Ramen', isVegan: false, popularity: 9, allergy: ['wheat'], reviews: ['海鲜的鲜味很足。'] },
    { id: '0003', name: '味噌拉面', description: '浓郁的味噌和香料蔬菜的冲击感。', image: '/images/miso.jpg', price: 1300, category: 'Ramen', isVegan: false, popularity: 10, allergy: ['wheat', 'soy'], reviews: ['味道浓郁，冬天吃最好。'] },
    { id: '0004', name: '饺子', description: '外皮酥脆，肉汁丰富。', image: '/images/gyoza.jpg', price: 600, category: 'SideDish', isVegan: false, popularity: 7, allergy: ['wheat', 'soy'], reviews: ['皮薄馅大，非常多汁。'] },
    { id: '0005', name: '炒饭', description: '用大火快速制作的正宗炒饭。', image: '/images/friedrice.jpg', price: 1000, category: 'SideDish', isVegan: false, popularity: 8, allergy: ['egg', 'soy'], reviews: ['米饭粒粒分明，很有锅气。'] },
    { id: '0006', name: '叉烧饭', description: '淋上特制酱汁慢炖的软嫩叉烧。', image: '/images/don.jpg', price: 900, category: 'SideDish', isVegan: false, popularity: 7, allergy: ['wheat', 'soy'], reviews: ['叉烧入口即化。'] },
    { id: '0007', name: '可乐', description: '冰镇。', image: '/images/cola.jpg', price: 400, category: 'Drink', isVegan: true, popularity: 5, allergy: [], reviews: ['解腻必备。'] },
    { id: '0008', name: '橙汁', description: '100%果汁。', image: '/images/orange.jpg', price: 400, category: 'Drink', isVegan: true, popularity: 6, allergy: [], reviews: ['纯天然的甜味。'] },
    { id: '0009', name: '甜瓜苏打', description: '怀旧的味道。', image: '/images/soda.jpg', price: 400, category: 'Drink', isVegan: true, popularity: 5, allergy: [], reviews: ['很特别的甜味。'] },
    { id: '0010', name: '溏心蛋', description: '浸泡在特制酱汁中过夜的半熟鸡蛋。', image: '/images/egg.jpg', price: 200, category: 'Topping', isVegan: false, popularity: 9, allergy: ['egg', 'soy'], reviews: ['半熟的程度刚刚好。'] },
    { id: '0011', name: '豆芽拉面', description: '不含鸡/猪肉。以自家制蔬菜汤和豆芽为主的健康拉面。', image: '/images/moyashi.jpg', price: 1300, category: 'Ramen', isVegan: true, popularity: 7, allergy: ['wheat'], reviews: ['素食者的绝佳选择。'] },
    { id: '0012', name: '蔬菜味噌拉面', description: '采用蔬菜汤底（不含鸡/猪肉）和柔和的豆乳味噌。', image: '/images/vege_miso.jpg', price: 1300, category: 'Ramen', isVegan: true, popularity: 8, allergy: ['wheat', 'soy'], reviews: ['非常浓郁顺滑。'] },
    { id: '0013', name: '乌龙茶', description: '清新可口的经典茶饮。', image: '/images/oolong.jpg', price: 400, category: 'Drink', isVegan: true, popularity: 6, allergy: [], reviews: ['非常清爽。'] },
  ],
  hi: [
    { id: '0001', name: 'सोया सॉस रामेन', description: 'चिकन शोरबा पर आधारित एक क्लासिक और हल्का स्वाद।', image: '/images/shoyu.jpg', price: 1200, category: 'Ramen', isVegan: false, popularity: 8, allergy: ['wheat', 'soy'], reviews: ['शानदार स्वाद!'] },
    { id: '0002', name: 'नमक रामेन', description: 'साफ शोरबा और समुद्री भोजन का समृद्ध स्वाद।', image: '/images/shio.jpg', price: 1200, category: 'Ramen', isVegan: false, popularity: 9, allergy: ['wheat'], reviews: ['सीफूड का गहरा स्वाद।'] },
    { id: '0003', name: 'मिसो रामेन', description: 'समृद्ध मिसो और सुगंधित सब्जियों के साथ एक जोरदार कटोरा।', image: '/images/miso.jpg', price: 1300, category: 'Ramen', isVegan: false, popularity: 10, allergy: ['wheat', 'soy'], reviews: ['बहुत गाढ़ा और स्वादिष्ट।'] },
    { id: '0004', name: 'ग्योज़ा (डंपलिंग)', description: 'कुरकुरी परत और रसदार मांस भरावन।', image: '/images/gyoza.jpg', price: 600, category: 'SideDish', isVegan: false, popularity: 7, allergy: ['wheat', 'soy'], reviews: ['एकदम कुरकुरे और रसदार।'] },
    { id: '0005', name: 'फ्राइड राइस', description: 'तेज आंच पर बना असली फ्राइड राइस।', image: '/images/friedrice.jpg', price: 1000, category: 'SideDish', isVegan: false, popularity: 8, allergy: ['egg', 'soy'], reviews: ['बेहतरीन टेक्सचर।'] },
    { id: '0006', name: 'भुना हुआ पोर्क बाउल', description: 'विशेष सॉस में पकाया हुआ नरम पोर्क।', image: '/images/don.jpg', price: 900, category: 'SideDish', isVegan: false, popularity: 7, allergy: ['wheat', 'soy'], reviews: ['मीट बहुत ही मुलायम है।'] },
    { id: '0007', name: 'कोला', description: 'बिल्कुल ठंडा।', image: '/images/cola.jpg', price: 400, category: 'Drink', isVegan: true, popularity: 5, allergy: [], reviews: ['प्यास बुझाने के लिए बेहतरीन।'] },
    { id: '0008', name: 'संतरे का रस', description: '100% फलों का रस।', image: '/images/orange.jpg', price: 400, category: 'Drink', isVegan: true, popularity: 6, allergy: [] , reviews: ['ताज़ा रस।']},
    { id: '0009', name: 'मेलन सोडा', description: 'एक पुरानी यादों वाला स्वाद।', image: '/images/soda.jpg', price: 400, category: 'Drink', isVegan: true, popularity: 5, allergy: [] , reviews: ['मीठा और मज़ेदार।']},
    { id: '0010', name: 'मसालेदार अंडा', description: 'विशेष सॉस में रात भर मैरीनेट किया हुआ नरम उबला अंडा।', image: '/images/egg.jpg', price: 200, category: 'Topping', isVegan: false, popularity: 9, allergy: ['egg', 'soy'], reviews: ['एकदम सही उबला हुआ अंडा।'] },
    { id: '0011', name: 'अंकुरित रामेन', description: 'चिकन/पोर्क मुक्त। घर के बने वेज-ब्रोथ और अंकुरित अनाज के साथ एक स्वस्थ कटोरा।', image: '/images/moyashi.jpg', price: 1300, category: 'Ramen', isVegan: true, popularity: 7, allergy: ['wheat'], reviews: ['शाकाहारियों के लिए सबसे अच्छा।'] },
    { id: '0012', name: 'सब्जी मिसो रामेन', description: 'हल्के सोया दूध मिसो के साथ सब्जी शोरबा।', image: '/images/vege_miso.jpg', price: 1300, category: 'Ramen', isVegan: true, popularity: 8, allergy: ['wheat', 'soy'], reviews: ['मलाईदार और पौष्टिक।'] },
    { id: '0013', name: 'ऊलोंग चाय', description: 'एक ताज़ा और क्लासिक चाय।', image: '/images/oolong.jpg', price: 400, category: 'Drink', isVegan: true, popularity: 6, allergy: [], reviews: ['खाने के बाद के लिए एकदम सही।'] },
  ],
  es: [
    { id: '0001', name: 'Ramen de Salsa de Soja', description: 'Un sabor clásico y ligero a base de caldo de pollo.', image: '/images/shoyu.jpg', price: 1200, category: 'Ramen', isVegan: false, popularity: 8, allergy: ['wheat', 'soy'], reviews: ['¡Caldo claro y muy sabroso!', 'El ramen japonés clásico.'] },
    { id: '0002', name: 'Ramen de Sal', description: 'Caldo claro con el rico umami de los mariscos.', image: '/images/shio.jpg', price: 1200, category: 'Ramen', isVegan: false, popularity: 9, allergy: ['wheat'], reviews: ['Sabor a mar profundo y delicado.'] },
    { id: '0003', name: 'Ramen de Miso', description: 'Un plato intenso con rico miso y vegetales aromáticos.', image: '/images/miso.jpg', price: 1300, category: 'Ramen', isVegan: false, popularity: 10, allergy: ['wheat', 'soy'], reviews: ['Muy cremoso, perfecto para el frío.'] },
    { id: '0004', name: 'Gyoza', description: 'Piel crujiente y relleno de carne jugosa.', image: '/images/gyoza.jpg', price: 600, category: 'SideDish', isVegan: false, popularity: 7, allergy: ['wheat', 'soy'], reviews: ['Jugosas por dentro y crujientes por fuera.'] },
    { id: '0005', name: 'Arroz Frito', description: 'Arroz frito auténtico, cocinado rápidamente a fuego alto.', image: '/images/friedrice.jpg', price: 1000, category: 'SideDish', isVegan: false, popularity: 8, allergy: ['egg', 'soy'], reviews: ['Textura perfecta, sabor profesional.'] },
    { id: '0006', name: 'Donburi de Cerdo', description: 'Cubierto con abundante cerdo tierno cocido en salsa especial.', image: '/images/don.jpg', price: 900, category: 'SideDish', isVegan: false, popularity: 7, allergy: ['wheat', 'soy'], reviews: ['La carne de cerdo está increíblemente tierna.'] },
    { id: '0007', name: 'Coca-Cola', description: 'Bien fría.', image: '/images/cola.jpg', price: 400, category: 'Drink', isVegan: true, popularity: 5, allergy: [], reviews: ['El mejor acompañante para el ramen.'] },
    { id: '0008', name: 'Jugo de Naranja', description: '100% jugo de fruta.', image: '/images/orange.jpg', price: 400, category: 'Drink', isVegan: true, popularity: 6, allergy: [], reviews: ['Dulzura natural.'] },
    { id: '0009', name: 'Soda de Melón', description: 'Un sabor nostálgico.', image: '/images/soda.jpg', price: 400, category: 'Drink', isVegan: true, popularity: 5, allergy: [], reviews: ['Divertido y refrescante.'] },
    { id: '0010', name: 'Huevo Sazonado', description: 'Huevo semicocido marinado durante la noche en salsa especial.', image: '/images/egg.jpg', price: 200, category: 'Topping', isVegan: false, popularity: 9, allergy: ['egg', 'soy'], reviews: ['Un complemento indispensable.'] },
    { id: '0011', name: 'Ramen de brotes', description: 'Sin pollo/cerdo. Un cuenco saludable con caldo vegetal y brotes de soja.', image: '/images/moyashi.jpg', price: 1300, category: 'Ramen', isVegan: true, popularity: 7, allergy: ['wheat'], reviews: ['La mejor opción vegana.'] },
    { id: '0012', name: 'Ramen de Miso Vegetal', description: 'Caldo de verduras con suave miso de leche de soja.', image: '/images/vege_miso.jpg', price: 1300, category: 'Ramen', isVegan: true, popularity: 8, allergy: ['wheat', 'soy'], reviews: ['Muy cremoso y saciante.'] },
    { id: '0013', name: 'Té Oolong', description: 'Un té clásico y refrescante.', image: '/images/oolong.jpg', price: 400, category: 'Drink', isVegan: true, popularity: 6, allergy: [], reviews: ['Perfecto para después de comer.'] },
  ],
  fr: [
    { id: '0001', name: 'Ramen Sauce Soja', description: 'Un goût classique et léger à base de bouillon de poulet.', image: '/images/shoyu.jpg', price: 1200, category: 'Ramen', isVegan: false, popularity: 8, allergy: ['wheat', 'soy'], reviews: ['Bouillon clair et délicieux !', 'Le goût authentique du Japon.'] },
    { id: '0002', name: 'Ramen au Sel', description: 'Bouillon clair avec la riche saveur umami des fruits de mer.', image: '/images/shio.jpg', price: 1200, category: 'Ramen', isVegan: false, popularity: 9, allergy: ['wheat'], reviews: ['Saveurs marines subtiles et riches.'] },
    { id: '0003', name: 'Ramen Miso', description: 'Un bol puissant avec du miso riche et des légumes aromatiques.', image: '/images/miso.jpg', price: 1300, category: 'Ramen', isVegan: false, popularity: 10, allergy: ['wheat', 'soy'], reviews: ['Très crémeux, parfait quand il fait froid.'] },
    { id: '0004', name: 'Gyoza', description: 'Peau croustillante et farce juteuse à la viande.', image: '/images/gyoza.jpg', price: 600, category: 'SideDish', isVegan: false, popularity: 7, allergy: ['wheat', 'soy'], reviews: ['Juteux à souhait, délicieux !'] },
    { id: '0005', name: 'Riz Sauté', description: 'Authentique riz sauté, cuit rapidement à feu vif.', image: '/images/friedrice.jpg', price: 1000, category: 'SideDish', isVegan: false, popularity: 8, allergy: ['egg', 'soy'], reviews: ['Cuisson parfaite, texture idéale.'] },
    { id: '0006', name: 'Bol de Porc Rôti', description: 'Garni de porc tendre mijoté dans une sauce spéciale.', image: '/images/don.jpg', price: 900, category: 'SideDish', isVegan: false, popularity: 7, allergy: ['wheat', 'soy'], reviews: ['Le porc est fondant, un délice.'] },
    { id: '0007', name: 'Cola', description: 'Bien frais.', image: '/images/cola.jpg', price: 400, category: 'Drink', isVegan: true, popularity: 5, allergy: [], reviews: ['Accompagne parfaitement le ramen.'] },
    { id: '0008', name: 'Jus d\'Orange', description: '100% jus de fruit.', image: '/images/orange.jpg', price: 400, category: 'Drink', isVegan: true, popularity: 6, allergy: [], reviews: ['Douceur naturelle.'] },
    { id: '0009', name: 'Soda au Melon', description: 'Un goût nostalgique.', image: '/images/soda.jpg', price: 400, category: 'Drink', isVegan: true, popularity: 5, allergy: [], reviews: ['Sucré et rafraîchissant.'] },
    { id: '0010', name: 'Œuf Mariné', description: 'Œuf mollet mariné toute la nuit dans une sauce spéciale.', image: '/images/egg.jpg', price: 200, category: 'Topping', isVegan: false, popularity: 9, allergy: ['egg', 'soy'], reviews: ['Un incontournable avec le ramen.'] },
    { id: '0011', name: 'Ramen aux germes', description: 'Sans poulet/porc. Un bol sain avec bouillon de légumes maison et germes.', image: '/images/moyashi.jpg', price: 1300, category: 'Ramen', isVegan: true, popularity: 7, allergy: ['wheat'], reviews: ['Meilleure option végétalienne.'] },
    { id: '0012', name: 'Ramen Miso aux Légumes', description: 'Bouillon de légumes avec un doux miso au lait de soja.', image: '/images/vege_miso.jpg', price: 1300, category: 'Ramen', isVegan: true, popularity: 8, allergy: ['wheat', 'soy'], reviews: ['Très crémeux et savoureux.'] },
    { id: '0013', name: 'Thé Oolong', description: 'Un thé classique et désaltérant.', image: '/images/oolong.jpg', price: 400, category: 'Drink', isVegan: true, popularity: 6, allergy: [], reviews: ['Idéal pour finir le repas.'] },
  ],
};