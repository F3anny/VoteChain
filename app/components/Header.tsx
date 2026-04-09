import { Search, ShieldCheck } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.topRow}>
        <div>
          <h1 className={styles.title}>Elections</h1>
          <div className={styles.subtitle}>
            <ShieldCheck size={14} />
            Your vote is signed by your wallet and stays private.
          </div>
        </div>
        
        <div className={styles.walletStatus}>
          <div className={styles.statusDot} />
          Connected
          <span className={styles.walletAddress}>0x71C...7E91</span>
        </div>
      </div>

      <div className={styles.searchBar}>
        <div className={styles.searchInputWrapper}>
          <Search size={18} className={styles.searchIcon} />
          <input 
            type="text" 
            placeholder="Search elections by name or topic..." 
            className={styles.searchInput}
          />
        </div>
        
        <div className={styles.filterGroup}>
          <button className={`${styles.filterBtn} ${styles.active}`}>All</button>
          <button className={styles.filterBtn}>Ongoing</button>
          <button className={styles.filterBtn}>Ended</button>
        </div>
      </div>
    </header>
  );
}
