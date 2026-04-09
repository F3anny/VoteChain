import { Clock, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import styles from './Cards.module.css';

interface ElectionCardProps {
  title: string;
  description: string;
  endsIn: string;
  votedCount: string;
  icon: React.ReactNode;
  iconBg: string;
}

export function OngoingElectionCard({ 
  title, 
  description, 
  endsIn, 
  votedCount, 
  icon,
  iconBg 
}: ElectionCardProps) {
  return (
    <div className={styles.ongoingCard}>
      <div className={styles.cardHeader}>
        <div className={styles.iconWrapper} style={{ backgroundColor: iconBg }}>
          {icon}
        </div>
        <div className="badge badge-ongoing">
          <div className={styles.dot} /> ONGOING
        </div>
      </div>
      
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      
      <div className={styles.cardMeta}>
        <div className={styles.metaItem}>
          <Clock size={14} />
          Ends in {endsIn}
        </div>
        <div className={styles.metaItem}>
          <Users size={14} />
          {votedCount} voted
        </div>
      </div>
      
      <Link href="/election/1" className="btn-primary" style={{ width: '100%', justifyContent: 'center', textDecoration: 'none' }}>
        View & Vote <ArrowRight size={16} />
      </Link>
    </div>
  );
}

interface UpcomingProps {
  title: string;
  description: string;
  startsIn: string;
  date: string;
  icon: React.ReactNode;
}

export function UpcomingElectionCard({ title, description, startsIn, date, icon }: UpcomingProps) {
  return (
    <div className={styles.upcomingCard}>
      <div className={styles.upcomingIcon}>
        {icon}
      </div>
      
      <div className={styles.upcomingContent}>
        <div className={styles.upcomingTop}>
          <h3 className={styles.upcomingTitle}>{title}</h3>
          <span className="badge badge-upcoming">UPCOMING</span>
        </div>
        <p className={styles.upcomingDescription}>{description}</p>
      </div>
      
      <div className={styles.upcomingRight}>
        <div className={styles.upcomingDate}>
          <div className={styles.dateLabel}>Starts {date}</div>
          <div className={styles.dateSub}>in {startsIn}</div>
        </div>
        <button className={styles.detailsBtn}>Details</button>
      </div>
    </div>
  );
}

interface RecentResultProps {
  title: string;
  outcome: string;
  date: string;
  icon: React.ReactNode;
}

export function RecentResultCard({ title, outcome, date, icon }: RecentResultProps) {
  return (
    <div className={styles.recentCard}>
      <div className={styles.recentIcon}>{icon}</div>
      <div className={styles.recentContent}>
        <div className={styles.recentTop}>
          <span className={styles.recentTitle}>{title}</span>
          <span className={styles.endedBadge}>Ended</span>
        </div>
        <div className={styles.recentMeta}>{outcome} • {date}</div>
      </div>
      <div className={styles.recentArrow}>›</div>
    </div>
  );
}
