'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, CheckCircle2, ShieldCheck, ChevronDown, ChevronUp, Users } from 'lucide-react';
import Link from 'next/link';
import Sidebar from '../../components/Sidebar';
import styles from './page.module.css';

const election = {
  id: '1',
  title: 'City Council District 4 Representative',
  description:
    'Vote for the upcoming city council representative. Key topics include local infrastructure, community safety programs, and public park maintenance. Your vote is crucial for shaping the future of District 4.',
  endsInDays: 2,
  endsInHours: 14,
  endsInMins: 45,
  candidates: [
    {
      id: 'marcus',
      name: 'Marcus Johnson',
      party: 'Independent',
      bio: 'Focusing on sustainable urban development and increasing funding for local public schools. Marcus brings 10 years of experience in urban planning.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus&backgroundColor=b6e3f4',
    },
    {
      id: 'sarah',
      name: 'Sarah Chen',
      party: 'Community First Party',
      bio: 'Dedicated to improving public transportation access and supporting small local businesses. Sarah has served on the community board for 5 years.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=ffd5dc',
    },
    {
      id: 'david',
      name: 'David Rodriguez',
      party: 'Progressive Coalition',
      bio: 'Advocating for affordable housing initiatives and expanding green spaces in District 4. David is a local business owner and activist.',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David&backgroundColor=c0aede',
    },
    {
      id: 'abstain',
      name: 'Abstain from Voting',
      party: null,
      bio: 'Submit a blank ballot to register your participation without selecting a candidate.',
      avatar: null,
    },
  ],
};

const steps = ['Connect Wallet', 'Select Candidate', 'Sign', 'Confirmation'];

export default function ElectionDetailPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [faqOpen, setFaqOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: election.endsInDays,
    hours: election.endsInHours,
    mins: election.endsInMins,
  });

  // Countdown ticker
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, mins } = prev;
        mins--;
        if (mins < 0) { mins = 59; hours--; }
        if (hours < 0) { hours = 23; days--; }
        if (days < 0) return { days: 0, hours: 0, mins: 0 };
        return { days, hours, mins };
      });
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.appContainer}>
      <Sidebar />

      <div className={styles.mainContent}>
        {/* Top bar */}
        <div className={styles.topBar}>
          <Link href="/" className={styles.backBtn}>
            <ArrowLeft size={18} />
            City Council District 4
          </Link>
          <div className={styles.walletStatus}>
            <div className={styles.statusDot} />
            Connected
            <span className={styles.walletAddress}>0x71C...7E91</span>
          </div>
        </div>

        {/* Step progress */}
        <div className={styles.stepperWrapper}>
          {steps.map((step, i) => {
            const stepNum = i + 1;
            const isDone = stepNum < 2;
            const isActive = stepNum === 2;
            return (
              <div key={step} className={styles.stepGroup}>
                <div className={`${styles.step} ${isDone ? styles.done : ''} ${isActive ? styles.active : ''}`}>
                  {isDone ? (
                    <CheckCircle2 size={18} className={styles.stepCheck} />
                  ) : (
                    <span className={styles.stepNum}>{stepNum}</span>
                  )}
                  <span className={styles.stepLabel}>{step}</span>
                </div>
                {i < steps.length - 1 && <div className={`${styles.stepLine} ${isDone ? styles.lineDone : ''}`} />}
              </div>
            );
          })}
        </div>

        <div className={styles.contentArea}>
          {/* Election info card */}
          <div className={styles.infoCard}>
            <div className={styles.infoLeft}>
              <div className={styles.badgeRow}>
                <span className={styles.ongoingBadge}>● ONGOING ELECTION</span>
                <span className={styles.verifiedBadge}><ShieldCheck size={13} /> Verified Organizer</span>
              </div>
              <h1 className={styles.electionTitle}>{election.title}</h1>
              <p className={styles.electionDesc}>{election.description}</p>
            </div>

            <div className={styles.countdownCard}>
              <div className={styles.countdownLabel}>VOTING CLOSES IN</div>
              <div className={styles.countdownGrid}>
                <div className={styles.countdownItem}>
                  <span className={styles.countdownNum}>{String(timeLeft.days).padStart(2, '0')}</span>
                  <span className={styles.countdownUnit}>DAYS</span>
                </div>
                <span className={styles.countdownSep}>:</span>
                <div className={styles.countdownItem}>
                  <span className={styles.countdownNum}>{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className={styles.countdownUnit}>HOURS</span>
                </div>
                <span className={styles.countdownSep}>:</span>
                <div className={styles.countdownItem}>
                  <span className={styles.countdownNum}>{String(timeLeft.mins).padStart(2, '0')}</span>
                  <span className={styles.countdownUnit}>MINS</span>
                </div>
              </div>
            </div>
          </div>

          {/* Candidate selection */}
          <div className={styles.section}>
            <div className={styles.sectionTitleGroup}>
              <div className={styles.sectionAccent} />
              <h2 className={styles.sectionTitle}>Select Your Candidate</h2>
            </div>
            <p className={styles.sectionSubtitle}>
              Review the candidates below and select one to proceed with your vote. You can only vote for one candidate.
            </p>

            <div className={styles.candidateGrid}>
              {election.candidates.map((c) => (
                <button
                  key={c.id}
                  className={`${styles.candidateCard} ${selected === c.id ? styles.candidateSelected : ''}`}
                  onClick={() => setSelected(c.id)}
                >
                  <div className={styles.radioOuter}>
                    {selected === c.id && <div className={styles.radioInner} />}
                  </div>

                  <div className={styles.candidateBody}>
                    <div className={styles.candidateHeader}>
                      {c.avatar ? (
                        <img src={c.avatar} alt={c.name} className={styles.candidateAvatar} />
                      ) : (
                        <div className={styles.abstainIcon}>
                          <Users size={22} color="#94A3B8" />
                          <div className={styles.xMark}>✕</div>
                        </div>
                      )}
                      <div>
                        <div className={styles.candidateName}>{c.name}</div>
                        {c.party && <div className={styles.candidateParty}>{c.party}</div>}
                      </div>
                    </div>
                    <p className={styles.candidateBio}>{c.bio}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className={styles.ctaRow}>
              <button
                className={`${styles.voteBtn} ${!selected ? styles.voteBtnDisabled : ''}`}
                disabled={!selected}
              >
                {selected ? `Proceed to Sign →` : 'Select a candidate to continue'}
              </button>
            </div>
          </div>

          {/* FAQ accordion */}
          <div className={styles.faqCard}>
            <button className={styles.faqToggle} onClick={() => setFaqOpen(!faqOpen)}>
              <span className={styles.faqQuestion}>❓ How does this voting work?</span>
              {faqOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {faqOpen && (
              <div className={styles.faqContent}>
                <p>Your vote is cryptographically signed by your connected wallet, ensuring it is anonymous
                yet verifiable on-chain. Once you select a candidate and sign the transaction, your vote
                is permanently recorded on the blockchain. No one — not even the organizers — can see
                how you voted. Results are tallied automatically when the election period ends.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
