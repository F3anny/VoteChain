'use client';

import { 
  LayoutDashboard, 
  Vote, 
  CheckCircle2, 
  BarChart3, 
  Award, 
  HelpCircle, 
  Settings,
  ShieldCheck
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Sidebar.module.css';

const navItems = [
  { icon: LayoutDashboard, label: 'Election Dashboard',    href: '/' },
  { icon: Vote,            label: 'Election Details & Vote', href: '/election/1' },
  { icon: CheckCircle2,    label: 'Vote Confirmation',      href: '/confirmation' },
  { icon: BarChart3,       label: 'Results',                href: '/results' },
  { icon: Award,           label: 'Participation Badge',    href: '/badge' },
];

const supportItems = [
  { icon: HelpCircle, label: 'Help & Support',    href: '/help' },
  { icon: Settings,   label: 'Profile & Settings', href: '/settings' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <Link href="/" className={styles.logo}>
        <div className={styles.logoIcon}>
          <ShieldCheck size={20} color="white" />
        </div>
        <span className={styles.logoText}>VoteChain</span>
      </Link>

      <nav className={styles.nav}>
        {navItems.map((item) => {
          const isActive =
            item.href === '/'
              ? pathname === '/'
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`${styles.navLink} ${isActive ? styles.active : ''}`}
            >
              <item.icon size={20} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className={styles.sectionHeader}>SUPPORT</div>
      <nav className={styles.nav}>
        {supportItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={styles.navLink}
          >
            <item.icon size={20} />
            {item.label}
          </Link>
        ))}
      </nav>

      <div className={styles.profile}>
        <img 
          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" 
          alt="Profile" 
          className={styles.avatar} 
        />
        <div className={styles.profileInfo}>
          <div className={styles.profileName}>Alex Voter</div>
          <div className={styles.profileRole}>Verified Citizen</div>
        </div>
      </div>
    </aside>
  );
}
