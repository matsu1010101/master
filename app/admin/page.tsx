import Link from 'next/link';

export default function AdminDashboard() {
  return (
    <main style={{ 
      backgroundColor: '#f4f4f4', 
      minHeight: '100vh', 
      padding: '40px',
      color: '#333',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#fff', padding: '30px', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
        <h1 style={{ borderBottom: '2px solid #3b82f6', paddingBottom: '10px', marginBottom: '30px' }}>
          店舗管理画面
        </h1>

        <div style={{ display: 'grid', gap: '20px' }}>
          {/* 🌟 ここに「新規メニュー登録」ボタンを配置 */}
          <Link href="/admin/register" style={adminStyles.menuCard}>
            <span style={{ fontSize: '1.5rem' }}>🍜</span>
            <div>
              <div style={{ fontWeight: 'bold' }}>新規メニュー登録</div>
              <div style={{ fontSize: '0.8rem', color: '#666' }}>新しい料理や飲み物を追加します</div>
            </div>
          </Link>

          {/* 今後「売上確認」や「在庫管理」などをここに追加できます */}
          <div style={{ ...adminStyles.menuCard, opacity: 0.5, cursor: 'not-allowed' }}>
            <span style={{ fontSize: '1.5rem' }}>📊</span>
            <div>
              <div style={{ fontWeight: 'bold' }}>売上レポート（準備中）</div>
            </div>
          </div>
        </div>

        <div style={{ marginTop: '40px' }}>
          <Link href="/" style={{ color: '#3b82f6', textDecoration: 'none' }}>
            ← お客様用ページに戻る
          </Link>
        </div>
      </div>
    </main>
  );
}

const adminStyles = {
  menuCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    textDecoration: 'none',
    color: 'inherit',
    transition: 'background-color 0.2s',
    backgroundColor: '#fff',
    cursor: 'pointer',
  }
};