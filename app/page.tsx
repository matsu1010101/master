"use client";

import { useState, useEffect, Suspense, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import MemberList from './MemberLists';
import { menuData, type Language, type Member } from './data';
import Link from 'next/link';

// --- 型定義 ---
type FilterType = 'all' | 'vegan' | 'ramen' | 'sidedish' | 'drink' | 'topping' | 'allergy-wheat';
type SortType = 'default' | 'popularity' | 'category';

function RamenShopContent() {
  const searchParams = useSearchParams();
  const langParam = searchParams.get('lang');

  const [language, setLanguage] = useState<Language | null>(null);
  const [filter, setFilter] = useState<FilterType>('all');
  const [sort, setSort] = useState<SortType>('default');
  
  // 🌟 データベースから取得した追加メニューを保存する状態
  const [dbMenus, setDbMenus] = useState<Member[]>([]);

  // 1. 初期化処理（言語設定 ＆ DBデータ取得）
  useEffect(() => {
    if  (['ja', 'en', 'zh', 'hi', 'es', 'fr'].includes(langParam as string)) {
      setLanguage(langParam as Language);
    }

    // API経由でデータベースのメニューを取得
    fetch('/api/menus')
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) setDbMenus(data);
      })
      .catch(err => console.error("データ取得エラー:", err));
  }, [langParam]);

  // 2. UI用の多言語テキスト定義
  const texts = {
    ja: {
      filterTitle: '絞り込み', filterAll: 'すべて', filterVegan: 'ヴィーガン', filterRamen: 'ラーメン', filterSideDish: 'サイド', filterDrink: 'ドリンク', filterTopping: 'トッピング', filterNoWheat: '小麦不使用',
      sortTitle: '並び替え', sortDefault: '標準', sortPopularity: '人気順', sortCategory: 'ジャンル別',
    },
    en: {
      filterTitle: 'FILTER', filterAll: 'All', filterVegan: 'Vegan', filterRamen: 'Ramen', filterSideDish: 'Side Dish', filterDrink: 'Drink', filterTopping: 'Topping', filterNoWheat: 'Wheat-Free',
      sortTitle: 'SORT', sortDefault: 'Default', sortPopularity: 'Popularity', sortCategory: 'Category',
    },
    zh: {
      filterTitle: '筛选', filterAll: '全部', filterVegan: '素食', filterRamen: '拉面', filterSideDish: '小吃', filterDrink: '饮料', filterTopping: '配菜', filterNoWheat: '不含小麦',
      sortTitle: '排序', sortDefault: '标准', sortPopularity: '人气', sortCategory: '按种类',
    },
    hi: {
      filterTitle: 'फिल्टर', filterAll: 'सभी', filterVegan: 'शाकाहारी', filterRamen: 'रामेन', filterSideDish: 'साइड डिश', filterDrink: 'पेय', filterTopping: 'टॉपिंग', filterNoWheat: 'गेहूं मुक्त',
      sortTitle: 'क्रमबद्ध', sortDefault: 'डिफ़ॉल्ट', sortPopularity: 'लोकप्रियता', sortCategory: 'श्रेणी',
    },
    es: {
      filterTitle: 'FILTRAR', filterAll: 'Todo', filterVegan: 'Vegano', filterRamen: 'Ramen', filterSideDish: 'Acompañamiento', filterDrink: 'Bebida', filterTopping: 'Ingrediente', filterNoWheat: 'Sin Trigo',
      sortTitle: 'ORDENAR', sortDefault: 'Defecto', sortPopularity: 'Popularidad', sortCategory: 'Categoría',
    },
    fr: {
      filterTitle: 'FILTRER', filterAll: 'Tout', filterVegan: 'Végétalien', filterRamen: 'Ramen', filterSideDish: 'Accompagnement', filterDrink: 'Boisson', filterTopping: 'Garniture', filterNoWheat: 'Sans Blé',
      sortTitle: 'TRIER', sortDefault: 'Défaut', sortPopularity: 'Popularité', sortCategory: 'Catégorie',
    }
  };

  // 3. データ合体・絞り込み・並び替えのロジック
  const filteredAndSortedMembers = useMemo(() => {
    if (!language) return [];

    // 🌟 固定データ (醤油ラーメン等) と データベースのデータを合体
    let currentMembers = [...menuData[language], ...dbMenus];

    // フィルタリング処理
    if (filter === 'vegan') {
      currentMembers = currentMembers.filter(m => m.isVegan);
    } else if (filter === 'ramen') {
      currentMembers = currentMembers.filter(m => m.category === 'Ramen');
    } else if (filter === 'sidedish') {
      currentMembers = currentMembers.filter(m => m.category === 'SideDish');
    } else if (filter === 'drink') {
      currentMembers = currentMembers.filter(m => m.category === 'Drink');
    } else if (filter === 'topping') {
      currentMembers = currentMembers.filter(m => m.category === 'Topping');
    } else if (filter === 'allergy-wheat') {
      currentMembers = currentMembers.filter(m => !m.allergy.includes('wheat'));
    }

    // 並び替え処理
    if (sort === 'popularity') {
      currentMembers.sort((a, b) => b.popularity - a.popularity);
    } else if (sort === 'category') {
      const categoryOrder: Member['category'][] = ['Ramen', 'SideDish', 'Topping', 'Drink'];
      currentMembers.sort((a, b) => categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category));
    }

    return currentMembers;
  }, [language, filter, sort, dbMenus]);


  // 言語未選択時 (変更なし)
  if (!language) {
    return (
      <main style={styles.splashContainer}>
        <div style={styles.decorativeBorder}>
          <h1 style={styles.splashTitle}>Ramen Hikari <span style={styles.splashSubTitle}>中華麺 </span></h1>
          <div style={styles.splashMsg}>Please select your language</div>
          <div style={styles.splashGrid}>
            <button onClick={() => setLanguage('ja')} style={styles.langButton}>日本語</button>
            <button onClick={() => setLanguage('en')} style={styles.langButton}>English</button>
            <button onClick={() => setLanguage('zh')} style={styles.langButton}>中文</button>
            <button onClick={() => setLanguage('hi')} style={styles.langButton}>हिन्दी</button>
            <button onClick={() => setLanguage('es')} style={styles.langButton}>Español</button>
            <button onClick={() => setLanguage('fr')} style={styles.langButton}>Français</button>
          </div>
          <div style={{ marginTop: '80px' }}>
            <Link href="/admin" style={styles.adminLinkTiny}>
            管理者用メニュー / Admin Menu
            </Link>
          </div>
        </div>

       
      </main>
    );  
  }

  const t = texts[language];

  // --- サイドバー用ボタンコンポーネント ---
  // 画像のイメージに合わせて、横幅いっぱいの四角いタブ風デザインにします
  const SidebarButton = ({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) => (
    <button 
      onClick={onClick} 
      style={active ? styles.sidebarButtonActive : styles.sidebarButton}
    >
      {/* 左側の赤いアクセントバー（選択時のみ表示） */}
      {active && <span style={styles.activeBar}></span>}
      {label}
    </button>
  );

  return (
    <main style={styles.mainContainer}>
      {/* ヘッダーエリア (固定) */}
      <div style={styles.headerArea}>
        <button onClick={() => setLanguage(null)} style={styles.backButton}>
          ← Lang
        </button>
        <span style={styles.headerLogo}>Hikari Menu</span>
      </div>

      {/* コンテンツエリア (左右分割) */}
      <div style={styles.contentWrapper}>
        
        {/* 左側：サイドバー (絞り込み・並び替え) */}
        <aside style={styles.sidebar}>
          
          {/* 絞り込みグループ */}
          <div style={styles.sidebarGroup}>
            <h3 style={styles.sidebarTitle}>{t.filterTitle}</h3>
            <SidebarButton label={t.filterAll} active={filter === 'all'} onClick={() => setFilter('all')} />
            <SidebarButton label={t.filterRamen} active={filter === 'ramen'} onClick={() => setFilter('ramen')} />
            <SidebarButton label={t.filterSideDish} active={filter === 'sidedish'} onClick={() => setFilter('sidedish')} />
            <SidebarButton label={t.filterDrink} active={filter === 'drink'} onClick={() => setFilter('drink')} />
            <SidebarButton label={t.filterTopping} active={filter === 'topping'} onClick={() => setFilter('topping')} />
            <div style={styles.separator}></div>
            <SidebarButton label={t.filterVegan} active={filter === 'vegan'} onClick={() => setFilter('vegan')} />
            <SidebarButton label={t.filterNoWheat} active={filter === 'allergy-wheat'} onClick={() => setFilter('allergy-wheat')} />
          </div>

          {/* 並び替えグループ */}
          <div style={styles.sidebarGroup}>
            <h3 style={styles.sidebarTitle}>{t.sortTitle}</h3>
            <SidebarButton label={t.sortDefault} active={sort === 'default'} onClick={() => setSort('default')} />
            <SidebarButton label={t.sortPopularity} active={sort === 'popularity'} onClick={() => setSort('popularity')} />
            <SidebarButton label={t.sortCategory} active={sort === 'category'} onClick={() => setSort('category')} />
          </div>

        </aside>

        {/* 右側：メインリスト */}
        <section style={styles.listArea}>
          <MemberList members={filteredAndSortedMembers} lang={language} />
        </section>

      </div>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div style={{color: '#d4af37', textAlign: 'center', marginTop: '50px'}}>Loading...</div>}>
      <RamenShopContent />
    </Suspense>
  );
}

// --- スタイル定義 ---
const styles = {
  // ... (スプラッシュ画面等は変更なし) ...
  splashContainer: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'radial-gradient(circle, #2b0a0a 0%, #000000 100%)',
    color: '#d4af37',
    fontFamily: 'var(--font-noto-serif)',
  },
  decorativeBorder: {
    padding: '60px',
    border: '4px double #d4af37',
    borderRadius: '4px',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    boxShadow: '0 0 40px rgba(180, 0, 0, 0.3)',
    textAlign: 'center' as const,
  },
  splashTitle: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    textShadow: '2px 2px 4px #000',
    color: '#fff',
  },
  splashSubTitle: {
    display: 'block', fontSize: '1rem', marginTop: '10px', letterSpacing: '0.3em', color: '#d4af37',
  },
  splashMsg: {
    color: '#aaa', marginBottom: '40px', fontStyle: 'italic',
  },
  splashGrid: {
    display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', width: '100%', maxWidth: '500px',
  },
  langButton: {
    padding: '16px', fontSize: '1.1rem', fontWeight: 'bold', backgroundColor: '#3e0000', color: '#d4af37',
    border: '1px solid #d4af37', cursor: 'pointer', transition: 'all 0.3s', boxShadow: '0 4px 6px rgba(0,0,0,0.5)',
  },

  // --- メインレイアウト (変更箇所) ---
  mainContainer: {
    minHeight: '100vh',
    background: '#0f0c0c',
    color: '#e0dcd0',
    display: 'flex',
    flexDirection: 'column' as const,
  },
  headerArea: {
    padding: '15px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #333',
    background: '#000',
    position: 'sticky' as const, // ヘッダーを固定
    top: 0,
    zIndex: 10,
  },
  backButton: {
    background: 'transparent', border: '1px solid #555', color: '#888', padding: '6px 12px',
    borderRadius: '4px', cursor: 'pointer', fontSize: '0.8rem',
  },
  headerLogo: {
    color: '#d4af37', fontWeight: 'bold', letterSpacing: '0.1em', fontFamily: 'var(--font-noto-serif)',
  },
  
  // ★左右分割のラッパー
  contentWrapper: {
    display: 'flex',
    flex: 1, // 残りの高さを埋める
    position: 'relative' as const,
  },


  adminLinkTiny: { color: '#444', fontSize: '0.8rem', textDecoration: 'none' },

  // ★左サイドバー (スシロー画像のイメージ)
  sidebar: {
    width: '130px', // 幅を固定 (スマホ画面の左側っぽく)
    minWidth: '130px',
    background: '#1a1a1a', // 少し明るい黒
    borderRight: '1px solid #333',
    display: 'flex',
    flexDirection: 'column' as const,
    overflowY: 'auto' as const, // メニューが多い場合はスクロール
    height: 'calc(100vh - 60px)', // ヘッダー分を引く
    position: 'sticky' as const,
    top: '60px',
    paddingBottom: '20px',
  },
  sidebarGroup: {
    marginBottom: '20px',
  },
  sidebarTitle: {
    fontSize: '0.75rem',
    color: '#888',
    padding: '10px',
    borderBottom: '1px solid #333',
    margin: 0,
    background: '#000',
    textAlign: 'center' as const,
  },
  separator: {
    height: '1px',
    backgroundColor: '#333',
    margin: '5px 10px',
  },

  // ★サイドバーのボタン (未選択)
  sidebarButton: {
    width: '100%',
    textAlign: 'left' as const,
    padding: '15px 10px',
    background: 'transparent',
    color: '#aaa',
    border: 'none',
    borderBottom: '1px solid #2a2a2a',
    cursor: 'pointer',
    fontSize: '0.9rem',
    transition: 'background 0.2s',
    position: 'relative' as const,
    fontFamily: 'sans-serif',
  },
  // ★サイドバーのボタン (選択中 - スシロー画像の白地に赤文字を、黒地に金文字・赤バーへアレンジ)
  sidebarButtonActive: {
    width: '100%',
    textAlign: 'left' as const,
    padding: '15px 10px',
    background: '#2b0a0a', // 選択中は濃い赤黒背景
    color: '#d4af37', // 金文字
    border: 'none',
    borderBottom: '1px solid #2a2a2a',
    cursor: 'pointer',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    position: 'relative' as const,
    fontFamily: 'sans-serif',
  },
  // 選択時の左側の赤いバー
  activeBar: {
    position: 'absolute' as const,
    left: 0,
    top: 0,
    bottom: 0,
    width: '4px',
    backgroundColor: '#d4af37', // 金のバー
  },

  // ★右側のリストエリア
  listArea: {
    flex: 1, // 残りの幅を全部使う
    padding: '10px',
    // MemberList内のCSSで中央寄せなどが効いているため、ここでは幅確保のみ
  },
};