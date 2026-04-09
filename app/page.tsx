import { 
  Building2, 
  Trees, 
  Leaf, 
  Bus, 
  GraduationCap,
  BookOpen,
  UserCheck
} from 'lucide-react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { OngoingElectionCard, UpcomingElectionCard, RecentResultCard } from './components/Cards';
import styles from './page.module.css';

const ongoingElections = [
  {
    title: 'City Council District 4',
    description: 'Vote for the upcoming city council representative. Key topics include local infrastructure and community safety reforms.',
    endsIn: '2 days',
    votedCount: '12.4k',
    icon: <Building2 size={24} color="#4F46E5" />,
    iconBg: '#EEF2FF',
  },
  {
    title: 'Parks & Recreation Budget',
    description: 'Allocate the $5M surplus budget towards new playground equipment or trail maintenance for the coming year.',
    endsIn: '5 hours',
    votedCount: '8.1k',
    icon: <Trees size={24} color="#0891B2" />,
    iconBg: '#E0F2FE',
  },
  {
    title: 'Environmental Initiative 2024',
    description: 'Proposal to mandate 30% renewable energy usage for all new commercial buildings constructed in the district.',
    endsIn: '5 days',
    votedCount: '45.2k',
    icon: <Leaf size={24} color="#059669" />,
    iconBg: '#ECFDF5',
  },
];

const upcomingElections = [
  {
    title: 'Public Transit Expansion Bond',
    description: 'Vote on the $150M bond to extend the light rail system to the northern suburbs.',
    date: 'Oct 15',
    startsIn: '12 days',
    icon: <Bus size={22} />,
  },
  {
    title: 'School Board Representatives',
    description: 'Elect 3 new members for the unified school district board of directors.',
    date: 'Nov 02',
    startsIn: '30 days',
    icon: <GraduationCap size={22} />,
  },
];

const recentResults = [
  {
    title: 'Library Funding Prop',
    outcome: 'Passed with 68% approval',
    date: 'Sept 12, 2024',
    icon: <BookOpen size={18} />,
  },
  {
    title: 'Mayor Primary Election',
    outcome: 'Results finalized',
    date: 'Aug 05, 2024',
    icon: <UserCheck size={18} />,
  },
];

export default function Home() {
  return (
    <div className={styles.appContainer}>
      <Sidebar />
      
      <div className={styles.mainContent}>
        <Header />

        <div className={styles.contentArea}>
          {/* Ongoing Elections */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionTitleGroup}>
                <div className={styles.sectionAccent} />
                <h2 className={styles.sectionTitle}>Ongoing Elections</h2>
              </div>
              <span className={styles.activeBadge}>3 Active</span>
            </div>
            
            <div className={styles.ongoingGrid}>
              {ongoingElections.map((election, i) => (
                <OngoingElectionCard key={i} {...election} />
              ))}
            </div>
          </section>

          {/* Upcoming Elections */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionTitleGroup}>
                <div className={styles.sectionAccent} />
                <h2 className={styles.sectionTitle}>Upcoming Elections</h2>
              </div>
            </div>
            
            <div className={styles.listStack}>
              {upcomingElections.map((election, i) => (
                <UpcomingElectionCard key={i} {...election} />
              ))}
            </div>
          </section>

          {/* Recent Results */}
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.sectionTitleGroup}>
                <div className={styles.sectionAccent} />
                <h2 className={styles.sectionTitle}>Recent Results</h2>
              </div>
              <button className={styles.viewArchive}>View Archive →</button>
            </div>
            
            <div className={styles.recentGrid}>
              {recentResults.map((result, i) => (
                <RecentResultCard key={i} {...result} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
