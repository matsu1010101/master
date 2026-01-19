import type { FC } from 'react';
import styles from './MemberLists.module.css';
import Link from 'next/link';
import { Member } from './data';

type Props = {
  members: Member[];
  lang: string;
};

const MemberList: FC<Props> = ({ members, lang }) => {
  return (
    <div className={styles.listContainer}>
      <h2 className={styles.mainHeading}>
        {lang === 'ja' ? 'メニュー一覧' : lang === 'zh' ? '菜单列表' : 'Menu List'}
      </h2>

      <ul className={styles.list}>
        {members.map((member) => (
          <li key={member.id} className={styles.card}>
            
            {/* 画像エリア */}
            <div className={styles.imageWrapper}>
              <img 
                src={member.image} 
                alt={member.name} 
                className={styles.itemImage} 
              />
            </div>

            {/* テキストエリア */}
            <div className={styles.itemContent}>
              <div className={styles.itemHeader}>
               <div className={styles.nameGroup}>
                  <span className={styles.itemName}>{member.name}</span>
                  <span className={styles.itemId}>No.{member.id}</span>
                </div>
                {/* 価格表示 */}
                <span className={styles.itemPrice}>
                  ¥{member.price ? member.price.toLocaleString() : '-'}
                </span>
              </div>

              {/* ★エラー対策: <p>ではなく<div>を使用 */}
              <div className={styles.itemDescription}>
                {member.description}
              </div>
            </div>

            {/* ボタンエリア */}
            <div className={styles.buttonContainer}>
              <Link
                href={`/menu/${member.id}?lang=${lang}`}
                className={`${styles.button} ${styles.detailsButton}`}
              >
                {lang === 'ja' ? '詳細を見る' : lang === 'zh' ? '详细信息' : 'Details'}
              </Link>
            </div>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default MemberList;